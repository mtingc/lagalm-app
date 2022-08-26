import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Pagination = ({ info, pagination, setPagination }) => {
  const { page, total, itemsPage, pages } = info;
  const totalPages = [];
  for (let p = 1; p <= pages; p++) {
    totalPages.push(p);
  }
  const firstElement = 1;
  const lastElement = totalPages[totalPages.length - 1];
  return (
    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          disabled={pagination === firstElement}
          onClick={() => setPagination((prevState) => (prevState === firstElement ? prevState : prevState - 1))}
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:cursor-default disabled:opacity-40"
        >
          Previous
        </button>
        <button
          disabled={pagination === lastElement}
          onClick={() => setPagination((prevState) => (prevState === lastElement ? prevState : prevState + 1))}
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:cursor-default disabled:opacity-40"
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-400">
            Del <span className="font-semibold">{page === 1 ? 1 : itemsPage * page - 14}</span> al{' '}
            <span className="font-semibold">{total < itemsPage * page ? total : page === 1 ? itemsPage : itemsPage * page}</span> de <span className="font-semibold">{total}</span> elementos
          </p>
        </div>
        <div>
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              disabled={pagination === 1}
              onClick={() => setPagination((prevState) => (prevState === firstElement ? prevState : prevState - 1))}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-default disabled:opacity-40"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            {totalPages.map((pag) => (
              <button
                onClick={() => setPagination(pag)}
                key={pag}
                className={'relative inline-flex items-center px-4 py-2 border text-sm font-medium  ' + (pag === page ? 'z-10 text-primary bg-primary/10 border-primary' : null)}
              >
                {pag}
              </button>
            ))}
            <button
              disabled={pagination === lastElement}
              onClick={() => setPagination((prevState) => (prevState === lastElement ? prevState : prevState + 1))}
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-default disabled:opacity-40"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
