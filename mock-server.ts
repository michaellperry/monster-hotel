import { createServer, Server } from "miragejs";
import { useEffect, useState } from "react";
import { RequestsResult } from "./requests/model";
import { RoomsResult } from "./rooms/model";

const skeleton = require("@assets/skeleton.png");
const bugbear = require("@assets/bugbear.png");
const dragonborn = require("@assets/dragonborn.png");
const grell = require("@assets/grell.png");
const beholder = require("@assets/beholder.png");

export function useMockServer() {
  const [server, setServer] = useState<Server | undefined>();
  useEffect(() => {
    server?.shutdown();

    setServer(createServer({
      routes() {
        this.get<RoomsResult>("/api/rooms", () => {
          return {
            rooms: [
              { roomNumber: "101", guest: { name: "Tony Jones", avatar: skeleton, serviceRequests: ["Fresh towels"] } },
              { roomNumber: "102" },
              { roomNumber: "103", guest: { name: "Emily Boudilere", avatar: bugbear, serviceRequests: [] } },
              { roomNumber: "201" },
              { roomNumber: "202", guest: { name: "Gilda Drake", avatar: dragonborn, serviceRequests: ["Laundry"] } },
              { roomNumber: "203", guest: { name: "Penelope Grell", avatar: grell, serviceRequests: ["Bell service", "Extra blanket"] } },
              { roomNumber: "301" },
              { roomNumber: "302", guest: { name: "Blanch Holder", avatar: beholder, serviceRequests: [] } },
              { roomNumber: "303" }
            ]
          };
        });
        this.get<RequestsResult>("/api/requests", () => {
          return {
            requests: [
              { id: "101-1", roomNumber: "101", guestName: "Tony Jones", guestAvatar: skeleton, description: "Fresh towels" },
              { id: "202-1", roomNumber: "202", guestName: "Gilda Drake", guestAvatar: dragonborn, description: "Laundry" },
              { id: "203-1", roomNumber: "203", guestName: "Penelope Grell", guestAvatar: grell, description: "Bell service" },
              { id: "203-2", roomNumber: "203", guestName: "Penelope Grell", guestAvatar: grell, description: "Extra blanket" }
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