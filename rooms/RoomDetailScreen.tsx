import { SafeAreaView, StyleSheet, Text } from "react-native";
import { StackContainerScreenProps } from "../navigation/StackContainerParamList";

type RoomDetailScreenProps = StackContainerScreenProps<"RoomDetail">;

export const RoomDetailScreen = ({ navigation, route }: RoomDetailScreenProps) => {
  const roomNumber = route.params.roomNumber;
  navigation.setOptions({
    title: `Room ${roomNumber}`
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Room {roomNumber}</Text>
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