import Header from '@components/Layout/App/Header';

import { useAuth } from '@hooks/useAuth';

const ProfilePage = () => {
  const { auth } = useAuth();
  const { name, lastname, birthday, gender, maritalStatus, curp, address, email, phone, rfc, schooling, nss, infonavitCredit, job } = auth.user;
  const { street, number, colony, municipality, state, country, zipCode, streets } = address;
  const { exterior, interior } = number;
  const { a, b } = streets;
  const { description, schedule } = job;
  const { from, to } = schedule;
  return (
    <>
      <Header pageName="Mi Perfil" pageDesc="Visualiza los datos de tu perfil" />
      <div>
        <p className="my-4 max-w-2xl font-bold text-gray-500">Informacion personal</p>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500"> Nombre completo</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{name + ' ' + lastname}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Fecha de nacimiento</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{birthday}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Genero</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{gender}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Estado civil</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{maritalStatus}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">CURP</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{curp}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Dirección</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{`${street} #${exterior}${interior}, ${colony} ${municipality}, ${state}, ${country}, ${zipCode} (Entre ${a} y ${b})`}</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div>
        <p className="my-4 max-w-2xl font-bold text-gray-500">Cuenta</p>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Correo</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{email}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Telefono</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{phone}</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div>
        <p className="my-4 max-w-2xl font-bold text-gray-500">Informacion laboral</p>
        <div className="mt-5 border-t border-gray-200">
          <dl className="divide-y divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">RFC</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{rfc}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Escolaridad</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{schooling}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">NSS</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{nss}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Credito infonavit</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{infonavitCredit ? 'Si' : 'No'}</span>
              </dd>
            </div>
            <div className="py-4 sm:grid sm:py-5 sm:grid-cols-3 sm:gap-4">
              <dt className="text-sm font-medium text-gray-500">Puesto de trabajo</dt>
              <dd className="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                <span className="flex-grow">{description}</span>
                <span className="flex-grow">{`De ${from} a ${to}`}</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
