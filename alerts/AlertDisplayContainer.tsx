import { useAlertNotification } from "../providers/EmployeeContainer";
import { PropsWithChildren, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Snackbar } from "react-native-paper";
import { Alert } from "./model";

export const AlertDisplayContainer = ({ children }: PropsWithChildren) => {
  const [ alert, setAlert ] = useState<Alert | null>(null);
  const { subscribe, unsubscribe } = useAlertNotification();

  useEffect(() => {
    const subscription = subscribe(alert => {
      setAlert(alert);
    });

    return () => {
      unsubscribe(subscription);
    };
  }, []);

  return (
    <View style={styles.container}>
      {children}
      <Snackbar
        visible={alert !== null}
        onDismiss={() => setAlert(null)}
        action={{
          label: "Got it"
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