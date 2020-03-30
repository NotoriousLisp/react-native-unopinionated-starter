import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import THEMES from 'app/constants/themes';

const ThemeContext = createContext();

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context || {};
};

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.razzle);
  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}
ThemeProvider.propTypes = {
  children: PropTypes.node
};
ThemeProvider.defaultProps = {
  children: null
};
