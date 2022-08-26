import TableRow from './Row';
import TableColumn from './Column';
import Pagination from './Pagination';

const Table = ({ dataApi, tablePagination }) => {
  const keys = Object.keys(dataApi[0]);
  const values = dataApi?.map((i) => Object.values(i));
  const { info, pagination, setPagination } = tablePagination;
  return (
    <div className="mt-8 flex flex-col">
      <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <TableColumn columns={keys} />
              <TableRow rows={values} />
            </table>
            <Pagination info={info} pagination={pagination} setPagination={setPagination} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
