import { createMaterialBottomTabNavigator, MaterialBottomTabScreenProps } from '@react-navigation/material-bottom-tabs';
import { RequestsScreen } from '../requests/RequestsScreen';
import { RoomsScreen } from '../rooms/RoomsScreen';
import { TasksScreen } from '../tasks/TasksScreen';
import { StackContainerParamsList } from './StackContainerParamsList';
import { TabContainerParamsList } from './TabContainerParamsList';

const Tab = createMaterialBottomTabNavigator<TabContainerParamsList>();

type TabContainerProps = MaterialBottomTabScreenProps<StackContainerParamsList, "Tab">;

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