import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ClockInScreen } from '../home/ClockInScreen';
import { DashboardScreen } from '../home/DashboardScreen';
import { RequestDetailScreen } from '../requests/RequestDetailScreen';
import { RoomDetailScreen } from '../rooms/RoomDetailScreen';
import { TaskDetailScreen } from '../tasks/TaskDetailScreen';
import { StackContainerParamsList } from './StackContainerParamsList';
import { TabContainer } from './TabContainer';

const Stack = createNativeStackNavigator<StackContainerParamsList>();

export const StackContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ClockIn" component={ClockInScreen}
        options={{
          title: "Clock In",
        }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen}
        options={{
          title: "Dashboard",
        }} />
      <Stack.Screen name="Tab" component={TabContainer}
        options={{
          title: "Tab",
        }} />
      <Stack.Screen name="RoomDetail" component={RoomDetailScreen}
        options={{
          title: "Room Detail",
        }} />
      <Stack.Screen name="RequestDetail" component={RequestDetailScreen}
        options={{
          title: "Request Detail",
        }} />
      <Stack.Screen name="TaskDetail" component={TaskDetailScreen}
        options={{
          title: "Task Detail",
        }} />
    </Stack.Navigator>
  );
};