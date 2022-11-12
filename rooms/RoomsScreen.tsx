import { useQuery } from "@tanstack/react-query";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { ErrorScreen } from "../components/ErrorScreen";
import { LoadingScreen } from "../components/LoadingScreen";
import { RoomsResult } from "./model";
import { RoomComponent } from "./RoomComponent";

export const RoomsScreen = () => {
  const { isLoading, error, data } = useQuery<RoomsResult>({
    queryKey: ["rooms"],
    queryFn: () =>
      fetch("api/rooms")
        .then(res => res.json())
  })

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorScreen error={error} />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data?.rooms}
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