import { useRouter } from 'next/router';

import Head from 'next/head';
import LayoutApp from './App';
import LayoutWeb from './Web';

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Lagalm</title>
        <meta name="description" content="Lagalm, soluciones integrales en inyección de plástico." />
        <link rel="shortcut icon" href="https://res.cloudinary.com/lagalm/image/upload/v1660168772/logo_nvfgba.png" type="image/svg" />
      </Head>
      <div className="h-screen">
        {router.pathname !== '/app/login' && router.pathname.includes('/app') ? <LayoutApp /> : router.pathname === '/app/login' ? children : <LayoutWeb> {children} </LayoutWeb>}
      </div>
    </>
  );
};

export default Layout;
