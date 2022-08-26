import Single from './Single';
import Double from './Double';
import Badge from './Badge';

const TableRow = ({ rows }) => {
  return (
    <tbody className="divide-y divide-gray-200 bg-white">
      {rows?.map((row, i) => (
        <tr key={i}>{row.map((item, i) => (item.description ? <Double key={i} item={item} /> : item.color ? <Badge key={i} item={item} /> : <Single key={i} item={item} />))}</tr>
      ))}
    </tbody>
  );
};

export default TableRow;
