import { Text } from "react-native";
import { List } from "react-native-paper";

interface RoomProps {
  roomNumber: string;
}

export const RoomComponent = ({ roomNumber }: RoomProps) => {
  return <List.Item
    title={roomNumber}
    description={roomNumber}
 />;
}