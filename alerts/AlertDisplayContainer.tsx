import { PropsWithChildren, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Snackbar } from "react-native-paper";
import { useSummaryUpdate } from "../home/queries";
import { useAlertNotification } from "../providers/EmployeeContainer";
import { useStore } from "../providers/StoreContainer";
import { Alert } from "./model";

export const AlertDisplayContainer = ({ children }: PropsWithChildren) => {
  const [ alert, setAlert ] = useState<Alert | null>(null);
  const { subscribe, unsubscribe } = useAlertNotification();
  const { dispatch } = useStore();
  const { updateSummary } = useSummaryUpdate();

  useEffect(() => {
    const subscription = subscribe(alert => {
      setAlert(alert);
      dispatch({ type: "NEW_ALERT", alert });
      updateSummary(summary => ({
        ...summary,
        pendingAlerts: summary.pendingAlerts + 1
      }));
    });
    return () => {
      unsubscribe(subscription);
    }
  }, []);

  return (
    <View style={styles.container}>
      {children}
      <Snackbar
        visible={!!alert}
        onDismiss={() => setAlert(null)}
        action={{
          label: "Got it",
          onPress: () => {
          }
        }}>
        {alert?.title}
      </Snackbar>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});