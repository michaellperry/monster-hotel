import { ErrorScreen } from "@components/ErrorScreen";
import { LoadingScreen } from "@components/LoadingScreen";
import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackContainerParamList } from "../navigation/StackContainerParamList";
import { TabContainerParamList } from "../navigation/TabContainerParamList";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { useRooms } from "./queries";
import { RoomComponent } from "./RoomComponent";

export type RoomsScreenProps = CompositeScreenProps<
  MaterialBottomTabScreenProps<TabContainerParamList, "Rooms">,
  NativeStackScreenProps<StackContainerParamList>
>;

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
        renderItem={({ item }) => <RoomComponent roomNumber={item.roomNumber} onPress={() => {
          navigation.push("RoomDetail")
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