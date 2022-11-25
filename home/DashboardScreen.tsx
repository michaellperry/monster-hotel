import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackContainerParamsList } from "navigation/StackContainerParamsList";
import { Button } from "react-native-paper";

type DashboardScreenProps = NativeStackScreenProps<StackContainerParamsList, "Dashboard">;

export const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.button} contentStyle={styles.text} mode="contained" onPress={() => {
          navigation.push("Tab", { screen: "Rooms" });
        }}>
        Rooms
      </Button>
      <Button style={styles.button} contentStyle={styles.text} mode="contained" onPress={() => {
          navigation.push("Tab", { screen: "Requests" });
        }}>
        Requests
      </Button>
      <Button style={styles.button} contentStyle={styles.text} mode="contained" onPress={() => {
          navigation.push("Tab", { screen: "Tasks" });
        }}>
        Tasks
      </Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    margin: 10,
  },
  text: {
    paddingVertical: 10,
  },
});