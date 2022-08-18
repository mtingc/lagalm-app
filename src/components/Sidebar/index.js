import Image from 'next/image';
import { CogIcon, HomeIcon, ShieldCheckIcon } from '@heroicons/react/outline';

const navigation = [{ name: 'Dashboard', href: 'app/', icon: HomeIcon, current: true }];
const secondaryNavigation = [
  { name: 'Configuración', href: '#', icon: CogIcon },
  { name: 'Privacidad', href: '#', icon: ShieldCheckIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = () => {
  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Image height={50} width={50} src="/logo.png" alt="Easywire logo" />
        </div>
        <nav className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
          <div className="px-2 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                  'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true" />
                {item.name}
              </a>
            ))}
          </div>
          <div className="mt-6 pt-6">
            <div className="px-2 space-y-1">
              {secondaryNavigation.map((item) => (
                <a key={item.name} href={item.href} className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600">
                  <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
