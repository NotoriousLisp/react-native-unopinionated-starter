import React from 'react';
import GlobalStateProvider from './state/global.state';
import ThemeProvider from './state/theme.state';
import Navigator from './screens/navigation';

export default function App() {
  return (
    <GlobalStateProvider>
      <ThemeProvider>
        <Navigator />
      </ThemeProvider>
    </GlobalStateProvider>
  );
}
