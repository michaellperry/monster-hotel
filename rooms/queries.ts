import { useQuery } from "@tanstack/react-query";
import { RoomsResult } from "./model";

export function useRooms() {
  return useQuery<RoomsResult>({
    queryKey: ["rooms"],
    queryFn: () =>
      fetch("api/rooms")
        .then(res => res.json())
  });
}