import { ErrorMessage } from 'formik';

const InputCheckBox = ({ label, field, ...props }) => {
  return (
    <div className="relative flex items-start sm:col-span-6">
      <div className="flex h-5 items-center">
        <input
          id={field.name}
          aria-describedby="comments-description"
          name={field.name}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          {...field}
          {...props}
        />
      </div>
      <div className="ml-3 text-sm">
        <label htmlFor={field.name} className="font-medium text-gray-700">
          {typeof label === 'object' ? label[0] : label}
        </label>
        {typeof label === 'object' && (
          <p id="comments-description" className="text-gray-500">
            {label[1]}
          </p>
        )}
        <ErrorMessage name={field.name}>{(errorMsg) => <div className="text-sm text-red-400">{errorMsg}</div>}</ErrorMessage>
      </div>
    </div>
  );
};

export default InputCheckBox;
