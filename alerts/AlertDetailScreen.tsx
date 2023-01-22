import { ErrorScreen } from "@components/ErrorScreen";
import { StackContainerScreenProps } from "@navigation/StackContainerParamList";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { useAlert } from "./hooks";

const fighter = require("@assets/fighter.png");

type AlertDetailsScreenProps = StackContainerScreenProps<"AlertDetail">;

export const AlertDetailScreen = ({ route }: AlertDetailsScreenProps) => {
  const alertId = route.params.alertId;
  const alert = useAlert(alertId);

  if (!alert) {
    return <ErrorScreen error="Alert not found" />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Image
        source={fighter}
        size={200}
        style={styles.avatar}
      />
      <Text style={styles.label}>Alert</Text>
      <Text style={styles.text}>{alert.title}</Text>
      <Text style={styles.label}>Description</Text>
      <Text style={styles.text}>{alert.description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 20
  },
  avatar: {
    alignSelf: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '200',
  },
  text: {
    fontSize: 25,
  },
});