import { useState, useEffect, useMemo } from 'react';

import Dashboard from '@components/Layout/App/Dashboard';
import Login from '@components/Layout/App/Login';
import Toast from '@components/Toast';

import AuthContext from '@context/AuthContext';
import { getToken, decodeToken } from '@utils/token';

const LayoutApp = ({ children }) => {
  const [auth, setAuth] = useState(undefined);

  const [{ status, message }, setRes] = useState({});
  const [showToast, setShowToast] = useState(false);

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

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      {!auth ? <Login setRes={setRes} setShowToast={setShowToast} /> : <Dashboard>{children}</Dashboard>}
      <Toast
        icon={!status ? (message === 'Contraseña y correo no correctos, sesión no iniciada' ? '' : 'err') : 'done'}
        title={
          status
            ? auth.user.gender === 'female'
              ? `Bienvenida ${auth.user.name} ${auth.user.lastname}`
              : auth.user.gender === 'male'
              ? `Bienvenido ${auth.user.name} ${auth.user.lastname}`
              : `Bienvenidx ${auth.user.name} ${auth.user.lastname}`
            : null
        }
        description={message}
        show={showToast}
        setShow={setShowToast}
      />
    </AuthContext.Provider>
  );
};

export default LayoutApp;
