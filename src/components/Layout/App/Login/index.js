import Link from 'next/link';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '@gql/user';
import { setToken, delToken, decodeToken } from '@utils/token';
import { useAuth } from '@hooks/useAuth';

import logoLagalm from '@public/logo.png';

const Login = ({ setRes, setShowToast }) => {
  const [login] = useMutation(LOGIN_USER);

  const { setUser } = useAuth();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (formData) => {
      try {
        const { email, password } = formData;

        const result = await login({
          variables: {
            email,
            password,
          },
        });
        const { status, token } = result.data.login;
        setRes(result.data.login);
        setShowToast(true);
        status ? setToken(token) : delToken();
        setUser(decodeToken(token));
      } catch (e) {
        console.log(e);
      }
    },
  });
  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-gray-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Image height={60} width={60} src={logoLagalm} alt="Lagalm Industrial" />
        </div>
        <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">Inicia sesión con tu cuenta</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo
              </label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name="email"
                type="email"
                className={
                  'appearance-none block w-full mt-1 px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm ' +
                  (formik.touched.email && formik.errors.email ? 'border-red-300' : 'border-gray-300')
                }
              />
              {formik.touched.email && formik.errors.email ? <p className="text-sm mt-2 text-red-400">{formik.errors.email}</p> : null}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.errors.password}
                name="password"
                type="password"
                className={
                  'appearance-none block w-full mt-1 px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-accent focus:border-accent sm:text-sm ' +
                  (formik.touched.password && formik.errors.password ? 'border-red-300' : 'border-gray-300')
                }
              />
              {formik.touched.password && formik.errors.password ? <p className="text-sm mt-2 text-red-400">{formik.errors.password}</p> : null}
            </div>

            <div className="flex items-center justify-end">
              <Link href="/app/forgot">
                <span className="text-sm text-accent hover:text-accent-hover transition-all duration-300">Olvidaste tu contraseña?</span>
              </Link>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-accent hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent disabled:bg-light disabled:cursor-default transition-all duration-300"
              disabled={formik.errors.email || formik.errors.password || !formik.dirty}
            >
              {formik.errors.email || formik.errors.password || !formik.dirty ? 'Introduzca sus credenciales' : 'Iniciar sesión'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const initialValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object({
  email: Yup.string().email('El correo no es válido').required('El correo es obligatorio.'),
  password: Yup.string().required('La contraseña es obligatoria.'),
});

export default Login;
