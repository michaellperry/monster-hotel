import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

interface RoomProps {
  roomNumber: string;
  onPress?(): void;
}

export const RoomComponent = ({ roomNumber, onPress }: RoomProps) => {
  return <Card style={styles.card} onPress={onPress}>
    <Card.Title title={roomNumber} />
  </Card>
}

const styles = StyleSheet.create({
  card: {
    margin: 4,
  }
});