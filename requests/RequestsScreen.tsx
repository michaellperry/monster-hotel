import { ErrorScreen } from "@components/ErrorScreen";
import { LoadingScreen } from "@components/LoadingScreen";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { TabContainerScreenProps } from "../navigation/TabContainerParamList";
import { useRequests } from "./queries";
import { RequestComponent } from "./RequestComponent";

export type RequestsScreenProps = TabContainerScreenProps<"Requests">;

export const RequestsScreen = ({ navigation }: RequestsScreenProps) => {
  const { error, data } = useRequests();

  if (error) {
    return <ErrorScreen error={error} />;
  }

  if (!data) {
    return <LoadingScreen />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.requests}
        renderItem={({ item }) => <RequestComponent request={item} onPress={() => {
          navigation.push("RequestDetail")
        }} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});