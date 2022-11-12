import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { RoomsResult } from "./model";
import { RoomComponent } from "./RoomComponent";

export const RoomsScreen = () => {
  const [result, setResult] = useState<RoomsResult | undefined>();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    fetch("api/rooms")
      .then(res => res.json())
      .then(json => {
        setResult(json);
        setStatus("success");
      })
      .catch(err => {
        console.error(err.message);
        setStatus("error");
      });
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={result?.rooms}
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