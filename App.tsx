import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { HomeScreen } from './home/HomeScreen';
import { RootTabParamList } from './navigation/RootTabParamList';
import { Providers } from "./providers/Providers";
import { RoomsScreen } from './rooms/RoomsScreen';

const Tab = createMaterialBottomTabNavigator<RootTabParamList>();

export default function App() {
  return (
    <Providers>
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
    </Providers>
  );
}