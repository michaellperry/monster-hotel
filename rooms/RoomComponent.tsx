import { Avatar, List } from "react-native-paper";
import { Room } from "./model";

const defaultImage = require("@assets/default-image.png");

interface RoomProps {
  room: Room;
  onPress?(): void;
}

export const RoomComponent = ({ room, onPress }: RoomProps) => {
  return <List.Item
    title={`Room ${room.roomNumber}`}
    description={room.guest?.name ?? "Vacant"}
    onPress={onPress}
    left={props =>
      <Avatar.Image {...props} source={room.guest?.avatar ?? defaultImage} />
    } />
}
