import { SafeAreaView, StyleSheet, Text } from "react-native";

export const AlertDetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Alert Detail Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  }
});