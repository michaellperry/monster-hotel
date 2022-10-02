import { StyleSheet, Text, View } from "react-native";

export const RoomsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rooms</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alightItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  }
});