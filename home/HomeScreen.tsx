import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Text, View } from "react-native";
import { RootTabParamList } from "../navigation/RootTabParamList";

type HomeScreenProps = MaterialBottomTabScreenProps<RootTabParamList, "Home">;

export const HomeScreen = ( {navigation}: HomeScreenProps ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Monster Hotel</Text>
    </View>
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
  }
});