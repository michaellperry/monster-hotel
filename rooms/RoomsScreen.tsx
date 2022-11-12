import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ErrorScreen } from "@components/ErrorScreen";
import { LoadingScreen } from "@components/LoadingScreen";
import { useRooms } from "./queries";
import { RoomComponent } from "./RoomComponent";

export const RoomsScreen = () => {
  const { error, data } = useRooms();

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.rooms}
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
  }
});