import { createContext, Dispatch, useContext, useEffect, useReducer, useState } from "react";
import { Alert, AlertsResult } from "../alerts/model";
import { SummaryResult } from "../home/model";

interface StoreData {
  summary: SummaryResult;
  summaryLoaded: boolean;
  alerts: { [id: string]: Alert };
  alertsLoaded: boolean;
}

const initialState: StoreData = {
  summary: {
    occupiedRooms: 0,
    pendingRequests: 0,
    pendingTasks: 0,
    pendingAlerts: 0,
  },
  summaryLoaded: false,
  alerts: {},
  alertsLoaded: false,
};

interface SummaryLoadedAction {
  type: "SUMMARY_LOADED";
  summary: SummaryResult;
}

interface AlertsLoadedAction {
  type: "ALERTS_LOADED";
  alerts: Alert[];
}

interface NewAlertAction {
  type: "NEW_ALERT";
  alert: Alert;
}

interface AlertHandledAction {
  type: "ALERT_HANDLED";
  alertId: string;
}

type StoreAction = SummaryLoadedAction | AlertsLoadedAction | NewAlertAction | AlertHandledAction;

const updateStore = (store: StoreData, action: StoreAction) => {
  switch (action.type) {
    case "SUMMARY_LOADED":
      return {
        ...store,
        summary: action.summary,
        summaryLoaded: true,
      };
    case "ALERTS_LOADED":
      return {
        ...store,
        alerts: action.alerts.reduce((acc, alert) => {
          acc[alert.id] = alert;
          return acc;
        }, {} as { [id: string]: Alert }),
        alertsLoaded: true,
      };
    case "NEW_ALERT":
      const newAlerts = {
        ...store.alerts,
        [action.alert.id]: action.alert,
      };
      return {
        ...store,
        alerts: newAlerts,
        summary: {
          ...store.summary,
          pendingAlerts: Object.keys(newAlerts).length,
        },
      };
    case "ALERT_HANDLED":
      const { [action.alertId]: _, ...remainingAlerts } = store.alerts;
      return {
        ...store,
        alerts: remainingAlerts,
        summary: {
          ...store.summary,
          pendingAlerts: Object.keys(remainingAlerts).length,
        },
      };
    default:
      const _exhaustiveCheck: never = action;
      return store;
  }
};

interface StoreContextValue {
  store: StoreData;
  dispatch: Dispatch<StoreAction>;
}

const StoreContext = createContext<StoreContextValue | undefined>(undefined);

export const StoreContainer = ({ children }: { children: React.ReactNode }) => {
  const [store, dispatch] = useReducer(updateStore, initialState);

  return (
    <StoreContext.Provider value={{
      store,
      dispatch,
    }}>
      {children}
    </StoreContext.Provider>
  );
};

async function fetchSummary() {
  const response = await fetch("/api/summary");
  const summary: SummaryResult = await response.json();
  return summary;
}

async function fetchAlerts(): Promise<Alert[]> {
  const response = await fetch("/api/alerts");
  const result: AlertsResult = await response.json();
  return result.alerts;
}

export const useStore = () => {
  const value = useContext(StoreContext);
  if (!value) {
    throw new Error("useStore must be used within a StoreContainer");
  }
  return {
    summary: value.store.summary,
    summaryLoaded: value.store.summaryLoaded,
    loadSummary: async () => {
      if (!value.store.summaryLoaded) {
        const summary: SummaryResult = await fetchSummary();
        value.dispatch({ type: "SUMMARY_LOADED", summary });
      }
    },
    alerts: Object.values(value.store.alerts),
    alertsLoaded: value.store.alertsLoaded,
    loadAlerts: async () => {
      if (!value.store.alertsLoaded) {
        const alerts = await fetchAlerts();
        value.dispatch({ type: "ALERTS_LOADED", alerts });
      }
    },
    getAlert: (id: string) => value.store.alerts[id],
    dispatch: value.dispatch,
  };
}

export const useSummary = () => {
  const [ error, setError ] = useState<Error | undefined>(undefined);
  const value = useContext(StoreContext);
  if (!value) {
    throw new Error("useSummary must be used within a StoreContainer");
  }

  useEffect(() => {
    if (!value.store.summaryLoaded) {
      fetchSummary()
        .then(summary => {
          value.dispatch({ type: "SUMMARY_LOADED", summary });
        })
        .catch(error => {
          setError(error);
        });
    }
  }, [value, setError]);

  return {
    data: value.store.summaryLoaded ? value.store.summary : undefined,
    error
  };
}