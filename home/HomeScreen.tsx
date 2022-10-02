import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { RootStackParamList } from "../navigation/RootStackParamList";

export const HomeScreen = ( {navigation}: NativeStackScreenProps<RootStackParamList, "Home"> ) => {
  const navigateToRooms = () => {
    navigation.push("Rooms");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Monster Hotel</Text>
      <Button onPress={() => { navigateToRooms(); }} mode="contained">
        Rooms
      </Button>
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