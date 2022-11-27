import { createServer, Server } from "miragejs";
import { useEffect, useState } from "react";
import { RequestsResult } from "./requests/model";
import { RoomsResult } from "./rooms/model";

const mindFlayer = require("@assets/mind-flayer.png");
const wraith = require("@assets/wraith.png");

export function useMockServer() {
  const [server, setServer] = useState<Server | undefined>();
  useEffect(() => {
    server?.shutdown();

    setServer(createServer({
      routes() {
        this.get<RoomsResult>("/api/rooms", () => {
          return {
            rooms: [
              { roomNumber: "101", guest: { name: "Melinda Flair", avatar: mindFlayer, serviceRequests: [] } },
              { roomNumber: "102" },
              { roomNumber: "103", guest: { name: "Walter Raithe", avatar: wraith, serviceRequests: ["Fresh towels"] } },
              { roomNumber: "201" },
              { roomNumber: "202" },
              { roomNumber: "203" },
              { roomNumber: "301" },
              { roomNumber: "302" },
              { roomNumber: "303" }
            ]
          };
        });
        this.get<RequestsResult>("/api/requests", () => {
          return {
            requests: [
              { id: "103-1", roomNumber: "103", guestName: "Walter Raithe", guestAvatar: wraith, description: "Fresh towels" }
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