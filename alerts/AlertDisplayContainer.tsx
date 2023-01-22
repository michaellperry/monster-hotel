import { PropsWithChildren, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Snackbar } from "react-native-paper";
import { useAlertNotification } from "../providers/EmployeeContainer";
import { Alert } from "./model";

export const AlertDisplayContainer = ({ children }: PropsWithChildren) => {
  const [ alert, setAlert ] = useState<Alert | null>(null);
  const { subscribe, unsubscribe } = useAlertNotification();

  useEffect(() => {
    const subscription = subscribe(setAlert);
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