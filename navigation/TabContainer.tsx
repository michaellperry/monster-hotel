import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import React from 'react';
import { HomeScreen } from '../home/HomeScreen';
import { TabContainerParamsList } from './TabContainerParamList';
import { RoomsScreen } from '../rooms/RoomsScreen';

const Tab = createMaterialBottomTabNavigator<TabContainerParamsList>();

export const TabContainer = () => {
  return (
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
  );
};