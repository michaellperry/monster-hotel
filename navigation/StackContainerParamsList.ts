import { NavigatorScreenParams } from "@react-navigation/native";
import { TabContainerParamsList } from "./TabContainerParamsList";

export type StackContainerParamsList = {
  ClockIn: undefined;
  Dashboard: undefined;
  Tab: NavigatorScreenParams<TabContainerParamsList>;
  RoomDetail: undefined;
  RequestDetail: undefined;
  TaskDetail: undefined;
};
