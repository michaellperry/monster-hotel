import { SummaryResult } from "./model";
import { useEffect, useState } from "react";
import { useStore } from "../providers/StoreContainer";

export async function fetchSummary() {
  const response = await fetch("/api/summary");
  const summary: SummaryResult = await response.json();
  return summary;
}

export const useSummary = () => {
  const [error, setError] = useState<Error | undefined>(undefined);
  const value = useStore();

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
};
