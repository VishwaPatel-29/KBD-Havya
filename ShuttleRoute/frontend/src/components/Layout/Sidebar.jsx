import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Clock, BarChart2, List, LayoutGrid } from 'lucide-react';
import { cn } from '../../utils/helpers';

function Sidebar() {
  const location = useLocation();
  const { role } = useSelector((state) => state.auth);

  const adminLinks = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutGrid },
    { path: '/admin/users', label: 'Users', icon: LayoutGrid },
    { path: '/admin/vehicles', label: 'Vehicles', icon: MapPin },
    { path: '/admin/live-map', label: 'Live Map', icon: Clock },
    { path: '/admin/analytics', label: 'Analytics', icon: BarChart2 },
  ];

  const driverLinks = [
    { path: '/driver/dashboard', label: 'Dashboard', icon: LayoutGrid },
    { path: '/driver/active-ride', label: 'Active Ride', icon: MapPin },
    { path: '/driver/history', label: 'History', icon: List },
  ];

  const employeeLinks = [
    { path: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
    { path: '/book-ride', label: 'Book Ride', icon: MapPin },
    { path: '/track-shuttle', label: 'Track Shuttle', icon: Clock },
    { path: '/ride-history', label: 'History', icon: Calendar },
  ];

  const links = role === 'admin' ? adminLinks : role === 'driver' ? driverLinks : employeeLinks;

  return (
    <motion.aside
      className="fixed left-0 top-16 bottom-0 w-64 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 z-40 overflow-hidden"
    >
      <div className="flex flex-col h-full">
        <nav className="flex-1 px-3 py-6 space-y-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/25"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                <Icon size={20} />
                <span className="whitespace-nowrap overflow-hidden font-medium">
                  {link.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.aside>
  );
}

export default Sidebar;