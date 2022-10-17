import { useState } from 'react';
import Rrhh from '@components/Layout/App/Dashboard/Areas/Rrhh';
import Table from '@components/Table';

import { useQuery } from '@apollo/client';
import { GET_USERS } from '@gql/user';

import WomanAvatar from '@public/avatar/woman.jpg';
import ManAvatar from '@public/avatar/man.jpg';
import DefaultAvatar from '@public/avatar/other.jpg';

const EmpleadosPage = () => {
  const [pagination, setPagination] = useState(1);
  const { data, loading } = useQuery(GET_USERS, { variables: { page: pagination, itemsPage: 15 } });

  if (loading) return <p>Cargando...</p>;

  let dataApi = data?.users.users.map(({ id, name, email, avatar, job, gender, details }) => {
    const image = avatar ? avatar.url : gender === 'MUJER' ? WomanAvatar.src : gender === 'HOMBRE' ? ManAvatar.src : DefaultAvatar.src;
    const { description: descriptionJob, workAreaId } = job;
    const { title: titleJob } = workAreaId;
    const status = details.status ? 'Activo' : 'Inactivo';
    return {
      ID: id,
      Empleado: { title: name, description: email, image },
      Trabajo: { title: titleJob, description: descriptionJob },
      Estado: { title: status, color: status === 'Activo' ? 'green' : 'red' },
    };
  });

  const tablePagination = {
    info: data?.users.info || {},
    pagination,
    setPagination,
  };

  return (
    <Rrhh>
      <Table dataApi={dataApi} tablePagination={tablePagination} />
    </Rrhh>
  );
};

export default EmpleadosPage;
