import { useState } from 'react';
import Rrhh from '@components/Layout/App/Dashboard/Areas/Rrhh';
import Table from '@components/Table';

import { useQuery } from '@apollo/client';
import { GET_WORKAREAS } from '@gql/workArea';

const AreasTrabajoPage = () => {
  const [pagination, setPagination] = useState(1);
  const { data } = useQuery(GET_WORKAREAS, { variables: { page: pagination, itemsPage: 15 } });

  let dataApi = data?.workAreas?.workAreas.map(({ id, title, description, image, details }) => {
    const status = details.status ? 'Activo' : 'Inactivo';
    return {
      ID: id,
      AreaTrabajo: { title, description, image: image.url },
      Estado: { title: status, color: status === 'Activo' ? 'green' : 'red' },
    };
  });

  const tablePagination = {
    info: data?.workAreas?.info || {},
    pagination,
    setPagination,
  };

  console.log(dataApi);

  return (
    <Rrhh>
      <Table dataApi={dataApi} tablePagination={tablePagination} />
    </Rrhh>
  );
};

export default AreasTrabajoPage;
