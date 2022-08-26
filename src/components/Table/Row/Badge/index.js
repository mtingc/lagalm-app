const Badge = ({ item }) => {
  const blue = 'text-blue-500 bg-blue-100';
  const yellow = 'text-yellow-500 bg-yellow-100';
  const green = 'text-green-500 bg-green-100';
  const red = 'text-red-500 bg-red-100';
  const gray = 'text-gray-500 bg-gray-100';
  return (
    <td className="whitespace-nowrap px-3 py-4 text-sm">
      <span
        className={
          (item.color === 'blue' ? blue : item.color === 'yellow' ? yellow : item.color === 'green' ? green : item.color === 'red' ? red : gray) +
          ' inline-flex rounded-full px-2 text-xs font-semibold leading-5'
        }
      >
        {item.title}
      </span>
    </td>
  );
};

export default Badge;
