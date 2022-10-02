import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

interface RoomProps {
  roomNumber: string;
}

export const RoomComponent = ({ roomNumber }: RoomProps) => {
  return <Card style={styles.card}>
    <Card.Title title={roomNumber} />
  </Card>
}

const styles = StyleSheet.create({
  card: {
    margin: 4,
  }
});