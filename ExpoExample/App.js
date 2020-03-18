import React from 'react';
import GlobalStateProvider from './state/global.state';
import Navigator from './components/navigation';

export default function App() {
  return (
    <GlobalStateProvider>
      <Navigator />
    </GlobalStateProvider>
  );
}
