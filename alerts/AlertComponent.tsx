import { List } from "react-native-paper";
import { Alert } from "./model";

interface AlertProps {
  alert: Alert;
  onPress?(): void;
}

export const AlertComponent = ({ alert, onPress }: AlertProps) => {
  return <List.Item
    title={alert.description}
    onPress={onPress}
  />
}