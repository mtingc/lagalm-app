import { useState } from 'react';
import Rrhh from '@components/Layout/App/Dashboard/Areas/Rrhh';
import PaginationTable from '@components/Layout/App/Table/Pagination';

import { useQuery } from '@apollo/client';
import { GET_USERS } from '@gql/user';

import WomanAvatar from '@public/avatar/WOMAN.jpg';
import ManAvatar from '@public/avatar/MAN.jpg';
import DefaultAvatar from '@public/avatar/WOMAN.jpg';

const EmpleadosPage = () => {
  const [pagination, setPagination] = useState(1);
  const { data } = useQuery(GET_USERS, { variables: { page: pagination, itemsPage: 15 } });
  const users = data?.users.users;
  const usersData = users?.map(({ id, name, email, avatar, gender, details }) => {
    const status = details.status ? 'Activo' : 'Inactivo';
    const image = avatar ? avatar : gender === 'female' ? WomanAvatar.src : gender === 'male' ? ManAvatar.src : DefaultAvatar.src;
    return {
      id,
      name,
      email,
      image,
      status,
    };
  });

  return (
    <Rrhh>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      Empleado
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Puesto
                    </th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Estado
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {usersData?.map(({ id, name, email, image, status, title = '', department = '' }) => (
                    <tr key={id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                        <div className="flex items-center">
                          <div className="h-10 w-10 flex-shrink-0">
                            <img className="h-10 w-10 rounded-full" src={image} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">{name}</div>
                            <div className="text-gray-500">{email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="text-gray-900">{title}</div>
                        <div className="text-gray-500">{department}</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <span className={(status === 'Activo' ? 'text-green-500 bg-green-100' : 'text-red-500 bg-red-100') + ' inline-flex rounded-full px-2 text-xs font-semibold leading-5'}>
                          {status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <PaginationTable pagesData={data?.users.info || {}} pagination={pagination} setPagination={setPagination} />
            </div>
          </div>
        </div>
      </div>
    </Rrhh>
  );
};

export default EmpleadosPage;
