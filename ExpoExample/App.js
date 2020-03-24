import React from 'react';
import GlobalStateProvider from './state/global.state';
import Navigator from './screens/navigation';
// todo
export default function App() {
  return (
    <GlobalStateProvider>
      <Navigator />
    </GlobalStateProvider>
  );
}
