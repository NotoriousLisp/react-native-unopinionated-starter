import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const GlobalContext = createContext();

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  return context || {};
};

export default function GlobalProvider({ children }) {
  const [state, setState] = useState({
    user: null
  });
  const actions = {
    updateGlobal: changes => setState({ ...state, ...changes }),
    signup: async user => {
      user._id = new Date().toISOString(); // just testing
      await new Promise(resolve => setTimeout(resolve, 2000));
      actions.updateGlobal({ user });
    }
  };
  return <GlobalContext.Provider value={[state, actions]}>{children}</GlobalContext.Provider>;
}
GlobalProvider.propTypes = {
  children: PropTypes.node
};
GlobalProvider.defaultProps = {
  children: null
};
