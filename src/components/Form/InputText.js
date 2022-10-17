import { ErrorMessage } from 'formik';

const InputText = ({ label, field, leading: Leading, trailing, col, ...props }) => {
  return (
    <div className={'my-4 space-y-2 col-span-full ' + (col && `sm:col-span-${col}`)}>
      <label className="block text-sm font-medium text-gray-700" htmlFor={field.name}>
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {Leading ? (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
            <Leading className="h-5 w-5 text-gray-300" aria-hidden="true" />
          </div>
        ) : null}

        <input
          id={field.name}
          type="text"
          className={'mt-1 shadow-sm focus:ring-primary focus:border-primary block w-full sm:text-sm border-primary/20 rounded-md ' + (Leading ? 'pl-8' : null + trailing ? 'pr-10' : null)}
          {...field}
          {...props}
        />

        {trailing ? (
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span className="text-gray-500 sm:text-sm" id="price-currency">
              {trailing}
            </span>
          </div>
        ) : null}
      </div>
      <ErrorMessage name={field.name}>{(errorMsg) => <div className="text-sm text-red-400">{errorMsg}</div>}</ErrorMessage>
    </div>
  );
};

export default InputText;
