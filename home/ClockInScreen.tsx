import { StackContainerScreenProps } from "@navigation/StackContainerParamList";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

type ClockInScreenProps = StackContainerScreenProps<"ClockIn">;

export const ClockInScreen = ({ navigation }: ClockInScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.button} contentStyle={styles.text} mode="contained" onPress={() => navigation.push("Dashboard")}>
        Clock In
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