import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Alert, AlertsResult } from "./model";

export function useAlerts() {
  return useQuery<AlertsResult>({
    queryKey: ["alerts"],
    queryFn: () =>
      fetch("/api/alerts")
        .then(res => res.json())
  });
}

export function useAlertEvents() {
  const queryClient = useQueryClient();
  return {
    onAlertReceived: (alert: Alert) => {
      queryClient.setQueryData<AlertsResult>(["alerts"], data => (data ? {
        ...data,
        alerts: [...data.alerts, alert]
      } : {
        alerts: [alert]
      }));
    }
  };
}