import Tabs from '@components/Layout/App/Dashboard/Tabs';

const tabs = [{ name: 'Empleados', href: 'rrhh/empleados', current: true }];

const Rrhh = ({ children }) => {
  return (
    <div>
      <Tabs tabs={tabs} />
      {children}
    </div>
  );
};

export default Rrhh;
