import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { HomeScreen } from './home/HomeScreen';
import { RootTabParamList } from './navigation/RootTabParamList';
import { RoomsScreen } from './rooms/RoomsScreen';

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}
            options={{
              tabBarIcon: "home",
            }} />
          <Tab.Screen name="Rooms" component={RoomsScreen}
            options={{
              tabBarIcon: "door-closed",
            }} />
        </Tab.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </PaperProvider>
  );
}