import { ErrorMessage } from 'formik';

const InputSelect = ({ label, field, options = [], col, ...props }) => {
  return (
    <div className={'my-4 space-y-2 col-span-full ' + (col && `sm:col-span-${col}`)}>
      <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={field.name}
        name={field.name}
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        {...field}
        {...props}
      >
        <option selected hidden>
          Elige una opción
        </option>
        {options.map((option) => (
          <option key={option.id ? option.id : option} value={option.id ? option.id : option}>
            {option.value ? option.value : option}
          </option>
        ))}
      </select>
      <ErrorMessage name={field.name}>{(errorMsg) => <div className="text-sm text-red-400">{errorMsg}</div>}</ErrorMessage>
    </div>
  );
};

export default InputSelect;
