import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs"
import { RootTabParamList } from "../navigation/RootTabParamList";

export const HomeScreen = ( {navigation}: MaterialBottomTabScreenProps<RootTabParamList, "Home"> ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Monster Hotel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alightItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  }
});