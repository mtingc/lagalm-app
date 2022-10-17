import Tabs from '@components/Layout/App/Dashboard/Tabs';

const tabs = [
  { name: 'Empleados', href: 'rrhh/empleado', current: true },
  { name: 'Aread de trabajo', href: 'rrhh/areas-trabajo', current: false },
];

const Rrhh = ({ children }) => {
  return (
    <div>
      <Tabs tabs={tabs} />
      {children}
    </div>
  );
};

export default Rrhh;
