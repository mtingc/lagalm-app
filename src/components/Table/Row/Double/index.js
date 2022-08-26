const Double = ({ item }) => {
  return (
    <>
      {item.image ? (
        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
          <div className="flex items-center">
            <div className="h-10 w-10 flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src={item.image} alt={`Imagen de ${item.title}`} />
            </div>
            <div className="ml-4">
              <div className="font-medium text-gray-900">{item.title}</div>
              <div className="text-gray-500">{item.description}</div>
            </div>
          </div>
        </td>
      ) : (
        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
          <div className="text-gray-900">{item.title}</div>
          <div className="text-gray-500">{item.description}</div>
        </td>
      )}
    </>
  );
};

export default Double;
