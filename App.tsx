import React from 'react';
import { TabContainer } from './navigation/TabContainer';
import { Providers } from "./providers/Providers";

export default function App() {
  return (
    <Providers>
      <TabContainer />
    </Providers>
  );
}