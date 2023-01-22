import { StackContainerScreenProps } from "@navigation/StackContainerParamList";
import { useStore } from "providers/StoreContainer";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { useEmployee } from "../providers/EmployeeContainer";
import { DashboardItem } from "./DashboardItem";

type DashboardScreenProps = StackContainerScreenProps<"Dashboard">;

export const DashboardScreen = ({ navigation }: DashboardScreenProps) => {
  const { clockOut } = useEmployee();
  const { summary } = useStore();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: "row"}}>
        <DashboardItem title="Rooms" icon="door-closed" value={summary.occupiedRooms} onPress={() =>
          navigation.push("Tab", { screen: "Rooms" })
        } />
        <DashboardItem title="Requests" icon="bell" value={summary.pendingRequests} onPress={() =>
          navigation.push("Tab", { screen: "Requests" })
        } />
      </View>
      <View style={{flexDirection: "row"}}>
        <DashboardItem title="Tasks" icon="clipboard-list" value={summary.pendingTasks} onPress={() =>
          navigation.push("Tab", { screen: "Tasks" })
        } />
        <DashboardItem title="Alerts" icon="alert" value={summary.pendingAlerts} onPress={() =>
          navigation.push("Tab", { screen: "Alerts" })
        } />
      </View>
      <Button style={styles.button} contentStyle={styles.text} mode="contained" onPress={() => {
          clockOut();
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
    alignItems: 'center',
  },
  button: {
    margin: 10,
    width: 320,
  },
  text: {
    paddingVertical: 10,
  },
});