import { SafeAreaView, StyleSheet, Text } from "react-native";

export const RequestsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Requests Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  }
});