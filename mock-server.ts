import { createServer, Server } from "miragejs";
import { useEffect, useState } from "react";
import { RoomsResult } from "./rooms/model";

export function useMockServer() {
  const [server, setServer] = useState<Server | undefined>();
  useEffect(() => {
    server?.shutdown();

    setServer(createServer({
      routes() {
        this.get<RoomsResult>("/api/rooms", () => {
          return {
            rooms: [
              { roomNumber: "101" },
              { roomNumber: "102" },
              { roomNumber: "103" },
              { roomNumber: "201" },
              { roomNumber: "202" },
              { roomNumber: "203" },
              { roomNumber: "301" },
              { roomNumber: "302" },
              { roomNumber: "303" }
            ]
          };
        });
      },
    }));

    return () => {
      server?.shutdown();
      setServer(undefined);
    }
  }, []);
}