import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FaShippingFast, FaHeadset, FaCertificate, FaHandshake, FaArrowRight, FaGlobe } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const features = [
    {
      icon: FaShippingFast,
      title: 'Global Logistics',
      description: 'Seamless delivery network covering major trade routes across the Middle East and beyond.',
    },
    {
      icon: FaHeadset,
      title: 'Premium Support',
      description: 'Dedicated account managers available 24/7 to ensure your operations never stop.',
    },
    {
      icon: FaCertificate,
      title: 'Certified Quality',
      description: 'ISO certified sourcing processes guaranteeing top-tier product standards.',
    },
    {
      icon: FaHandshake,
      title: 'Strategic Partnership',
      description: 'We build rigorous, long-term alliances to drive mutual growth and success.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Clients' },
    { number: '10k+', label: 'Products Sourced' },
    { number: '12+', label: 'Years Excellence' },
    { number: '24/7', label: 'Support Coverage' },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-200/20 dark:bg-primary-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[float_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-200/20 dark:bg-secondary-900/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[float_8s_ease-in-out_infinite_reverse]" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left z-10"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 font-medium text-sm mb-6 border border-primary-100 dark:border-primary-800">
                <FaGlobe className="mr-2" /> Global Trading Solutions
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Trading with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 via-secondary-600 to-primary-600 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                  Precision
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Connect your business to the world's finest markets. We bridge the gap between quality manufacturers and businesses that demand excellence.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/products" className="group">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold shadow-lg hover:shadow-primary-500/25 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Discover Catalog</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 rounded-xl font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                  >
                    Partner With Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-0 hidden lg:block"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent mix-blend-overlay z-10" />
                <img
                  src="https://images.unsplash.com/photo-1486406140926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070"
                  alt="Modern City Skyline"
                  className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Glass Cards */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl z-20"
                >
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-sm text-white/80 font-medium mb-1">Total Volume</p>
                      <h3 className="text-3xl font-display font-bold text-white">$2.4B+</h3>
                    </div>
                    <div className="h-10 w-32 bg-gradient-to-t from-primary-500/50 to-transparent rounded-lg backdrop-blur-sm" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white dark:bg-surface-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Why Choose VPS</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Excellence in Every Detail
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group p-8 rounded-2xl bg-surface-50 dark:bg-surface-900 border border-transparent hover:border-primary-100 dark:hover:border-primary-900 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-primary-600 dark:text-primary-400">
                  <feature.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Parallax Feel */}
      <section className="py-24 relative overflow-hidden bg-white dark:bg-slate-900">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 border-t border-slate-800 pt-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.p
                  className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 dark:from-white dark:to-slate-500 mb-2 group-hover:to-primary-400 transition-colors"
                >
                  {stat.number}
                </motion.p>
                <p className="text-slate-600 dark:text-slate-400 font-medium uppercase tracking-widest text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-surface-50 dark:bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-16 md:px-16 md:py-20 text-center shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to elevate your business?
              </h2>
              <p className="text-lg text-primary-50 mb-10 max-w-2xl mx-auto">
                Join hundreds of satisfied partners who trust VPS General Trading for their sourcing and logistics needs.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-primary-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  Start Your Journey
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
