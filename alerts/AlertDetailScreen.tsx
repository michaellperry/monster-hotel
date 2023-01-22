import { ErrorScreen } from "@components/ErrorScreen";
import { LoadingScreen } from "@components/LoadingScreen";
import { StackContainerScreenProps } from "@navigation/StackContainerParamList";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useAlert } from "./queries";

const fighter = require("@assets/fighter.png");

type AlertDetailsScreenProps = StackContainerScreenProps<"AlertDetail">;

export const AlertDetailScreen = ({ route, navigation }: AlertDetailsScreenProps) => {
  const alertId = route.params.alertId;
  const { data, error } = useAlert(alertId);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Avatar.Image
        source={fighter}
        size={200}
        style={styles.avatar}
      />
      <Text style={styles.label}>Alert</Text>
      <Text style={styles.text}>{data.title}</Text>
      <Text style={styles.label}>Description</Text>
      <Text style={styles.text}>{data.description}</Text>
      <Button style={styles.button} contentStyle={styles.buttonText} mode="contained" onPress={() => {
        navigation.goBack();
      }}>
        Handle alert
      </Button>
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
  button: {
    margin: 10,
    width: 320,
  },
  buttonText: {
    paddingVertical: 10,
  },
});