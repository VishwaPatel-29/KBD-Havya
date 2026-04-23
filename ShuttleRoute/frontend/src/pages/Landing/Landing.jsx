import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MapPin, Clock, Users, Shield, Zap, ArrowRight, Check, Phone } from 'lucide-react';

const features = [
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Track your shuttle live on the map with accurate ETA updates.',
  },
  {
    icon: Clock,
    title: 'On-Demand Booking',
    description: 'Book your ride when you need it. No fixed schedules required.',
  },
  {
    icon: Users,
    title: 'Van Pooling',
    description: 'Share rides with colleagues. Save money and reduce carbon footprint.',
  },
  {
    icon: Shield,
    title: 'Verified Drivers',
    description: 'All drivers are verified employees with background checks.',
  },
  {
    icon: Zap,
    title: 'AI Optimization',
    description: 'Smart routing algorithm finds the fastest route for everyone.',
  },
  {
    icon: Phone,
    title: '24/7 Support',
    description: 'Get help anytime via in-app chat or WhatsApp.',
  },
];

const stats = [
  { value: '10K+', label: 'Daily Commuters' },
  { value: '500+', label: 'Vehicles' },
  { value: '99%', label: 'On-Time Rate' },
  { value: '50+', label: 'Corporate Parks' },
];

function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated, role } = useSelector((state) => state.auth);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    if (isAuthenticated) {
      navigate(role === 'admin' ? '/admin/dashboard' : role === 'driver' ? '/driver/dashboard' : '/dashboard');
    } else {
      navigate('/register');
    }
  };

  return (
    <>
      <Helmet>
        <title>KBD-Havya — Smart on-demand corporate shuttle platform</title>
        <meta name="description" content="On-demand van pooling for corporate employees. Dynamic routing, real-time tracking, and AI-optimized scheduling." />
      </Helmet>
      
      <div className="min-h-screen bg-white dark:bg-slate-900">
        <header 
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrollY > 50 ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                  </svg>
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">KBD-Havya</span>
              </Link>
              <div className="hidden md:flex items-center space-x-4">
                <Link
                  to="/login"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  Login
                </Link>
                <button
                  onClick={handleGetStarted}
                  className="px-5 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </header>

        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-200/30 dark:bg-primary-900/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/30 dark:bg-accent-900/20 rounded-full blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium mb-6">
                  <Zap className="w-4 h-4 mr-2" />
                  AI-Powered Commuting
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                The Smarter Way to{' '}
                <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                  Commute
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                On-demand van pooling that dynamically routes vehicles based on real-time passenger requests. 
                No more waiting for scheduled shuttles.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
              >
                <button
                  onClick={handleGetStarted}
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold rounded-2xl transition-all shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40"
                >
                  Start Your Ride
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <Link
                  to="/login"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl hover:border-primary-500 hover:text-primary-600 transition-all"
                >
                  Sign In
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-20 relative"
            >
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-4 md:p-8 shadow-2xl">
                <div className="aspect-video bg-white dark:bg-slate-800 rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-80 h-80 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
                      <div className="w-40 h-40 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-20 h-20 text-white" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10zm3.5 1c-.83 0-1.5-.67-1.5-1.5S6.67 14 7.5 14s1.5.67 1.5 1.5S8.33 17 7.5 17zm9 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm1.5-6H6V6h12v5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl px-4 py-2 flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-medium text-gray-900 dark:text-white">Campus Main Gate</span>
                    </div>
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-xl px-4 py-2">
                      <span className="text-sm font-medium text-primary-500">5 min away</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400">{stat.value}</div>
                  <div className="mt-2 text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Why Choose KBD-Havya?</h2>
              <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">Everything you need for a better commute experience</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 bg-gray-50 dark:bg-slate-800 rounded-2xl hover:shadow-xl transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-r from-primary-600 to-primary-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white">Ready to Transform Your Commute?</h2>
            <p className="mt-4 text-xl text-primary-100">Join thousands of employees already using KBD-Havya</p>
            <button
              onClick={handleGetStarted}
              className="mt-8 inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-2xl hover:bg-gray-100 transition-colors"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>

        <footer className="py-12 bg-gray-900 text-gray-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 16c0 .88.39 1.67 1 2.22V20c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h8v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1.78c.61-.55 1-1.34 1-2.22V6c0-3.5-3.58-4-8-4s-8 .5-8 4v10z"/>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">KBD-Havya</span>
              </div>
              <p>&copy; 2026 KBD-Havya. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Landing;