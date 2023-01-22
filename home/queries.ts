import { useQuery, useQueryClient } from "@tanstack/react-query";
import { SummaryResult } from "./model";

export function useSummary() {
  return useQuery<SummaryResult>({
    queryKey: ["summary"],
    queryFn: () =>
      fetch("api/summary")
        .then(res => res.json())
  });
}

export function useSummaryUpdate() {
  const queryClient = useQueryClient();
  return {
    updateSummary: (modifier: (summary: SummaryResult) => SummaryResult) => {
      queryClient.setQueryData<SummaryResult>(["summary"], prior => {
        const updated = prior ? modifier(prior) : undefined;
        return updated;
      });
    }
  }
}