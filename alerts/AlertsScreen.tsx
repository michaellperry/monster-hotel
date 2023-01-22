import { ErrorScreen } from "@components/ErrorScreen";
import { LoadingScreen } from "@components/LoadingScreen";
import { TabContainerScreenProps } from "@navigation/TabContainerParamList";
import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useStore } from "../providers/StoreContainer";
import { AlertComponent } from "./AlertComponent";

export type AlertsScreenProps = TabContainerScreenProps<"Alerts">;

export const AlertsScreen = ({ navigation }: AlertsScreenProps) => {
  const { alerts, alertsLoaded, loadAlerts } = useStore();
  const [ error, setError ] = useState<Error | null>(null);

  useEffect(() => {
    loadAlerts()
      .catch(error => {
        setError(error);
      });
  }, [ loadAlerts, setError ]);

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!alertsLoaded) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={alerts}
        renderItem={({ item }) => <AlertComponent alert={item} onPress={() => {
          navigation.push("AlertDetail", { alertId: item.id })
        }} />}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.text}>All clear!</Text>}
        contentContainerStyle={[ { flexGrow: 1 } , alerts.length ? null : { justifyContent: 'center'} ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  }
});