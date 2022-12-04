import { createServer, Response, Server } from "miragejs";
import { useEffect, useState } from "react";
import { Request, RequestsResult } from "./requests/model";
import { Room, RoomsResult } from "./rooms/model";

const skeleton = require("@assets/skeleton.png");
const bugbear = require("@assets/bugbear.png");
const dragonborn = require("@assets/dragonborn.png");
const grell = require("@assets/grell.png");
const beholder = require("@assets/beholder.png");

const rooms: Room[] = [
  { roomNumber: "101", guest: { name: "Tony Jones", avatar: skeleton, serviceRequests: ["Fresh towels"] } },
  { roomNumber: "102" },
  { roomNumber: "103", guest: { name: "Emily Boudilere", avatar: bugbear, serviceRequests: [] } },
  { roomNumber: "201" },
  { roomNumber: "202", guest: { name: "Gilda Drake", avatar: dragonborn, serviceRequests: ["Laundry"] } },
  { roomNumber: "203", guest: { name: "Penelope Grell", avatar: grell, serviceRequests: ["Bell service", "Extra blanket"] } },
  { roomNumber: "301" },
  { roomNumber: "302", guest: { name: "Blanch Holder", avatar: beholder, serviceRequests: [] } },
  { roomNumber: "303" }
];

const requests: Request[] = [
  { id: "101-1", roomNumber: "101", guestName: "Tony Jones", guestAvatar: skeleton, description: "Fresh towels" },
  { id: "202-1", roomNumber: "202", guestName: "Gilda Drake", guestAvatar: dragonborn, description: "Laundry" },
  { id: "203-1", roomNumber: "203", guestName: "Penelope Grell", guestAvatar: grell, description: "Bell service" },
  { id: "203-2", roomNumber: "203", guestName: "Penelope Grell", guestAvatar: grell, description: "Extra blanket" }
];

export function useMockServer() {
  const [server, setServer] = useState<Server | undefined>();
  useEffect(() => {
    server?.shutdown();
    
    setServer(createServer({
      routes() {
        this.get<RoomsResult>("/api/rooms", () => {
          return { rooms };
        });
        this.get("/api/rooms/:roomNumber", (schema, request) => {
          const roomNumber = request.params.roomNumber;
          const room = rooms.find(room => room.roomNumber === roomNumber);
          if (!room) {
            return new Response(404, {}, { error: "Room not found" });
          }
          return room;
        });
        this.get<RequestsResult>("/api/requests", () => {
          return { requests };
        });
      },
    }));

    return () => {
      server?.shutdown();
      setServer(undefined);
    }
  }, []);
}