import { SafeAreaView, StyleSheet, Text } from "react-native";
import { StackContainerScreenProps } from "../navigation/StackContainerParamList";

type RoomDetailScreenProps = StackContainerScreenProps<"RoomDetail">;

export const RoomDetailScreen = ({}: RoomDetailScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Room Detail Screen</Text>
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