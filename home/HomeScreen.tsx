import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { TabContainerParamsList } from "../navigation/TabContainerParamList";

type HomeScreenProps = MaterialBottomTabScreenProps<TabContainerParamsList, "Home">;

export const HomeScreen = ( {navigation}: HomeScreenProps ) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Monster Hotel</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alightItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 40,
  }
});