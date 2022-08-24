const Header = ({ pageName, pageDesc }) => {
  return (
    <header className="pb-2">
      <h1 className="text-3xl tracking-tight font-bold leading-tight text-gray-900">{pageName}</h1>
      <p className="mt-1 text-md text-gray-400 tracking-wider">{pageDesc}</p>
    </header>
  );
};

export default Header;
