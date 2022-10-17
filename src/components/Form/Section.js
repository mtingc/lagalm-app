const Section = ({ title, sub, children }) => {
  return (
    <div className="border-b border-gray-200 py-4 my-4">
      <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
      {sub ? <p className="mt-1 text-sm text-gray-500">{sub}</p> : null}
      <div className="mt-4 grid grid-cols-6 gap-4">{children}</div>
    </div>
  );
};

export default Section;
