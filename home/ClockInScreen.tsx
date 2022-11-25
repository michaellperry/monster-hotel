import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackContainerParamList } from "navigation/StackContainerParamList";
import { SafeAreaView, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

type ClockInScreenProps = NativeStackScreenProps<StackContainerParamList, "ClockIn">;

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