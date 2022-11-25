import { createMaterialBottomTabNavigator, MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import { RequestsScreen } from '../requests/RequestsScreen';
import { TasksScreen } from '../tasks/TasksScreen';
import { RoomsScreen } from '../rooms/RoomsScreen';
import { TabContainerParamsList } from './TabContainerParamsList';

const Tab = createMaterialBottomTabNavigator<TabContainerParamsList>();

type TabContainerProps = MaterialBottomTabScreenProps<TabContainerParamsList>;

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