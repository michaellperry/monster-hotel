import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Snackbar } from "react-native-paper";
import { Alert } from "../alerts/model";

interface EmployeeEvents {
  clockIn: () => void;
  clockOut: () => void;
}

const EmployeeContext = createContext<EmployeeEvents | undefined>(undefined);

export const EmployeeContainer = ({ children }: PropsWithChildren) => {
  const [ clockedIn, setClockedIn ] = useState<boolean>(false);
  const [ alert, setAlert ] = useState<Alert | null>(null);

  useEffect(() => {
    const timeout = clockedIn ? setTimeout(() => {
      setAlert({
        id: "1",
        title: "Adventurer spotted!",
        description: "A fighter has been spotted in the lobby."
      });
    }, 5000) : undefined;

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [ clockedIn ]);

  return (
    <View style={styles.container}>
      <EmployeeContext.Provider value={{
        clockIn: () => {
          setClockedIn(true);
        },
        clockOut: () => {
          setClockedIn(false);
        }
      }}>
        {children}
      </EmployeeContext.Provider>
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
};

export const useEmployeeEvents = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error("useAlertNotification must be used within a AlertNotificationContainer");
  }
  return context;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});