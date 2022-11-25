import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackContainerParamList } from "navigation/StackContainerParamList";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

type DashboardScreenProps = NativeStackScreenProps<StackContainerParamList, "Dashboard">;

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
      <Button style={styles.button} contentStyle={styles.text} mode="contained" onPress={() => {
          navigation.pop();
        }}>
        Clock Out
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