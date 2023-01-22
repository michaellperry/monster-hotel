import { useStore } from "../providers/StoreContainer";

export const useAlert = (alertId: string) => {
  const { store, dispatch } = useStore();

  return {
    alert: store.alerts.hasOwnProperty(alertId) ? store.alerts[alertId] : undefined,
    handleAlert: () => {
      dispatch({ type: "ALERT_HANDLED", alertId });
    }
  }
};