import React, { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import ROUTES from 'app/constants/routes';

const GlobalContext = createContext();

const TEST_USER = {
  firstName: 'JT',
  lastName: 'Seger'
};

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      actions.updateGlobal({ user });
    },
    signout: navigation => {
      actions.updateGlobal({ user: null });
      navigation.popToTop();
    },
    login: async ({ username, password }, navigation) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (username && password === 'password') {
        actions.updateGlobal({ user: TEST_USER });
        navigation.navigate(ROUTES.Auth);
        return null;
      }
      return 'invalid credentials';
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
