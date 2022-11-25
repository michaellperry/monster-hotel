import { SafeAreaView, StyleSheet, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StackContainerParamsList } from "navigation/StackContainerParamsList";
import { Button } from "react-native-paper";

type ClockInScreenProps = NativeStackScreenProps<StackContainerParamsList, "ClockIn">;

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