const Button = ({ type, children, disabled }) => {
  return (
    <button
      type="submit"
      className={
        'inline-flex items-center rounded-md border px-3 py-2 mx-2 text-sm font-medium leading-4 disabled:opacity-50 ' +
        (type === 'secondary'
          ? 'border-transparent bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
          : type === 'white'
          ? 'border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50'
          : 'border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700')
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
