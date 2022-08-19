import { useState } from 'react';

import Dashboard from '@components/Layout/App/Dashboard';
import Login from '@components/Layout/App/Login';

const LayoutApp = ({ children }) => {
  const [auth, setAuth] = useState(undefined);
  return <>{!auth ? <Login /> : <Dashboard>{children}</Dashboard>}</>;
};

export default LayoutApp;
