import { useQuery } from "@tanstack/react-query";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import { HelperText } from "react-native-paper";
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
    return (
      <View style={styles.container}>
        <HelperText
          type="error"
          style={styles.text}>
            error.message
        </HelperText>
      </View>
    );
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
  },
  text: {
    textAlign: 'center',
    fontSize: 28,
  }
});