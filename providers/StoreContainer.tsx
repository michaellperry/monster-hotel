import { Alert, AlertsResult } from "../alerts/model";
import { createContext, Dispatch, useContext, useReducer } from "react";

interface StoreData {
  alerts: { [id: string]: Alert };
  alertsLoaded: boolean;
}

const initialState: StoreData = {
  alerts: {},
  alertsLoaded: false,
};

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

type StoreAction = AlertsLoadedAction | NewAlertAction | AlertHandledAction;

const updateStore = (store: StoreData, action: StoreAction) => {
  switch (action.type) {
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
      return {
        ...store,
        alerts: {
          ...store.alerts,
          [action.alert.id]: action.alert,
        },
      };
    case "ALERT_HANDLED":
      const { [action.alertId]: _, ...rest } = store.alerts;
      return {
        ...store,
        alerts: rest,
      };
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