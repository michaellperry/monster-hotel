import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RequestsScreen } from '../requests/RequestsScreen';
import { RoomsScreen } from '../rooms/RoomsScreen';
import { TasksScreen } from '../tasks/TasksScreen';
import { StackContainerParamList } from './StackContainerParamList';
import { TabContainerParamList } from './TabContainerParamList';

const Tab = createMaterialBottomTabNavigator<TabContainerParamList>();

type TabContainerProps = NativeStackScreenProps<StackContainerParamList, "Tab">;

export const TabContainer = ({}: TabContainerProps) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Rooms" component={RoomsScreen}
        options={{
          tabBarIcon: "door-closed",
        }} />
      <Tab.Screen name="Requests" component={RequestsScreen}
        options={{
          tabBarIcon: "bell",
        }} />
      <Tab.Screen name="Tasks" component={TasksScreen}
        options={{
          tabBarIcon: "clipboard-list",
        }} />
    </Tab.Navigator>
  );
};