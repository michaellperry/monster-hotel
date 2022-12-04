import { ErrorScreen } from "@components/ErrorScreen";
import { LoadingScreen } from "@components/LoadingScreen";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { StackContainerScreenProps } from "../navigation/StackContainerParamList";
import { useRoom } from "./queries";

type RoomDetailScreenProps = StackContainerScreenProps<"RoomDetail">;

export const RoomDetailScreen = ({ route, navigation }: RoomDetailScreenProps) => {
  const roomNumber = route.params.roomNumber;
  const { data, error } = useRoom(roomNumber);

  navigation.setOptions({
    title: `Room ${roomNumber}`
  })

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Room {data.roomNumber}</Text>
      <Text style={styles.text}>Guest {data.guest?.name ?? "Unknown"}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alightItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  }
});