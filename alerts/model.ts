export interface Alert {
  id: string;
  description: string;
}

export interface AlertsResult {
  alerts: Alert[];
}