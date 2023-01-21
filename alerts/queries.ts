import { useQuery } from "@tanstack/react-query";
import { AlertsResult } from "./model";

export function useAlerts() {
  return useQuery<AlertsResult>({
    queryKey: ["alerts"],
    queryFn: () =>
      fetch("/api/alerts")
        .then(res => res.json())
  });
}