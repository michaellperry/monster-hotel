import { NavigatorScreenParams } from "@react-navigation/native";
import { TabContainerParamList } from "./TabContainerParamList";

export type StackContainerParamList = {
  ClockIn: undefined;
  Dashboard: undefined;
  Tab: NavigatorScreenParams<TabContainerParamList>;
  RoomDetail: undefined;
  RequestDetail: undefined;
  TaskDetail: undefined;
};
