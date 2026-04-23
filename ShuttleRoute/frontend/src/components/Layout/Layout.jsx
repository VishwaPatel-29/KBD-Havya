import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { cn } from '../../utils/helpers';

function Layout() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className={cn(
          "flex-1 min-h-[calc(100vh-64px)] transition-all duration-300 mt-16 p-4 md:p-6 ml-64"
        )}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;