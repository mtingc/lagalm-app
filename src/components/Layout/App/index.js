import { useState, useEffect, useMemo } from 'react';

import Dashboard from '@components/Layout/App/Dashboard';
import Login from '@components/Layout/App/Login';

import AuthContext from '@context/AuthContext';
import { getToken, decodeToken } from '@utils/token';

const LayoutApp = ({ children }) => {
  const [auth, setAuth] = useState(undefined);

  useEffect(() => {
    const token = getToken();
    !token ? setAuth(null) : setAuth(decodeToken(token));
  }, []);

  const logout = () => {
    console.log('adios');
  };

  const setUser = (user) => {
    setAuth(user);
  };

  const authData = useMemo(
    () => ({
      auth,
      logout,
      setUser,
    }),
    [auth]
  );

  return <AuthContext.Provider value={authData}>{!auth ? <Login /> : <Dashboard>{children}</Dashboard>}</AuthContext.Provider>;
};

export default LayoutApp;
