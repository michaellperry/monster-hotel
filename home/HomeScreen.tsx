import { StyleSheet, Text, View } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Monster Hotel</Text>
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