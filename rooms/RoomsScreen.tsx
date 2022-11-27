import { ErrorScreen } from "@components/ErrorScreen";
import { LoadingScreen } from "@components/LoadingScreen";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { TabContainerScreenProps } from "../navigation/TabContainerParamList";
import { useRooms } from "./queries";
import { RoomComponent } from "./RoomComponent";

export type RoomsScreenProps = TabContainerScreenProps<"Rooms">;

export const RoomsScreen = ({ navigation }: RoomsScreenProps) => {
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
        renderItem={({ item }) => <RoomComponent room={item} onPress={() => {
          navigation.push("RoomDetail", {
            roomNumber: item.roomNumber
          })
        }} />}
        keyExtractor={(item) => item.roomNumber}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});