import { useQuery } from "@tanstack/react-query";
import { Alert, AlertsResult } from "./model";

export function useAlerts() {
  return useQuery<AlertsResult>({
    queryKey: ["alerts"],
    queryFn: () =>
      fetch("/api/alerts")
        .then(res => res.json())
  });
}

export function useAlert(alertId: string) {
  return useQuery<Alert>({
    queryKey: ["alert", alertId],
    queryFn: () =>
      fetch(`/api/alerts/${alertId}`)
        .then(res => res.json())
  });
}