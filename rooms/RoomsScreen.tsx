import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { RoomComponent } from "./RoomComponent";

interface Room {
  roomNumber: string;
}

const rooms: Room[] = [
  { roomNumber: "101" },
  { roomNumber: "102" },
  { roomNumber: "103" },
  { roomNumber: "201" },
  { roomNumber: "202" },
  { roomNumber: "203" },
  { roomNumber: "301" },
  { roomNumber: "302" },
  { roomNumber: "303" },
];

export const RoomsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={rooms}
        renderItem={({ item }) => <RoomComponent roomNumber={item.roomNumber} />}
        keyExtractor={(item) => item.roomNumber}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alightItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  }
});