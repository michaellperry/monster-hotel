import { useEffect, useState } from "react";
import { Alert, AlertsResult } from "./model";
import { useStore } from "../providers/StoreContainer";

async function fetchAlerts(): Promise<Alert[]> {
  const response = await fetch("/api/alerts");
  const result: AlertsResult = await response.json();
  return result.alerts;
}

export const useAlerts = () => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const { store, dispatch } = useStore();

  useEffect(() => {
    if (!store.alertsLoaded) {
      fetchAlerts()
        .then(alerts => {
          dispatch({ type: "ALERTS_LOADED", alerts });
        })
        .catch(error => {
          setError(error);
        });
    }
  }, [store, dispatch, setError]);

  return {
    data: store.alertsLoaded ? Object.values(store.alerts) : undefined,
    error
  };
};

export const useAlert = (alertId: string) => {
  const { store, dispatch } = useStore();

  return {
    alert: store.alerts.hasOwnProperty(alertId) ? store.alerts[alertId] : undefined,
    handleAlert: () => {
      dispatch({ type: "ALERT_HANDLED", alertId });
    }
  }
};