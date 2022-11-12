import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { HomeScreen } from './home/HomeScreen';
import { useMockServer } from './mock-server';
import { RootTabParamList } from './navigation/RootTabParamList';
import { RoomsScreen } from './rooms/RoomsScreen';

const combinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...PaperDefaultTheme.colors,
    ...NavigationDefaultTheme.colors,
  },
};
const combinedDarkTheme = {
  ...PaperDarkTheme,
  ...NavigationDarkTheme,
  colors: {
    ...PaperDarkTheme.colors,
    ...NavigationDarkTheme.colors,
  },
};

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

const queryClient = new QueryClient();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? combinedDarkTheme : combinedDefaultTheme;

  useMockServer();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
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
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});