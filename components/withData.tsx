import { UseQueryResult } from "@tanstack/react-query";
import React from "react";
import { ErrorScreen } from "./ErrorScreen";
import { LoadingScreen } from "./LoadingScreen";

export type WithDataProps<TData, TProps> = { data: TData } & TProps;

export function withData<TData>(useData: () => UseQueryResult<TData>) {
  return function <TProps>(WrappedComponent: React.ComponentType<{ data: TData } & TProps>) {
    return function (props: TProps) {
      const { error, data } = useData();

      if (error) {
        return <ErrorScreen error={error} />;
      }

      if (!data) {
        return <LoadingScreen />;
      }

      return (
        <WrappedComponent {...props} data={data} />
      );
    }
  }
}