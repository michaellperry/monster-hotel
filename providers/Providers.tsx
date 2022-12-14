import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer
} from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import React, { PropsWithChildren } from 'react';
import { useColorScheme } from 'react-native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { useMockServer } from '../mock-server';

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

const queryClient = new QueryClient();

export const Providers = ({ children }: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? combinedDarkTheme : combinedDefaultTheme;

  useMockServer();

  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          {children}
          <StatusBar style="auto" />
        </NavigationContainer>
      </PaperProvider>
    </QueryClientProvider>
  );
};