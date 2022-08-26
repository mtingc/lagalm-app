const TableColumn = ({ columns }) => {
  return (
    <thead className="bg-gray-50">
      <tr>
        {columns?.map((column, i) => (
          <th key={i} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableColumn;
