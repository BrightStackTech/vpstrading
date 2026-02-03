import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaEye, FaHeart, FaUsers, FaAward, FaGlobe } from 'react-icons/fa';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const values = [
    {
      icon: FaHeart,
      title: 'Customer First',
      description: 'Your success is our priority - reliable supply, competitive prices, on-time delivery.',
    },
    {
      icon: FaAward,
      title: 'Quality Products',
      description: 'Only authentic brands and certified goods that meet UAE standards.',
    },
    {
      icon: FaUsers,
      title: 'Trusted Partner',
      description: 'Building long-term relationships based on transparency and reliability.',
    },
    {
      icon: FaGlobe,
      title: 'Wide Network',
      description: 'Serving 800+ retailers across UAE with expanding GCC distribution.',
    },
  ];

  const milestones = [
    { year: '2014', title: 'Foundation', description: 'VPS General Trading LLC launched in Dubai with 50 product SKUs.' },
    { year: '2016', title: 'Warehouse Expansion', description: 'Opened 10,000 sq ft warehouse facility in Dubai Industrial Area.' },
    { year: '2019', title: '500+ Retail Partners', description: 'Supplying to supermarkets, groceries, and retail chains across UAE.' },
    { year: '2022', title: '5000+ Products', description: 'Expanded catalog to include all major FMCG categories and brands.' },
    { year: '2026', title: '800+ Partners', description: 'Leading FMCG distributor with GCC-wide distribution network.' },
  ];

  const team = [
    {
      name: 'Ahmed Al Maktoum',
      position: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Sarah Khan',
      position: 'Operations Director',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    },
    {
      name: 'Mohammed Hassan',
      position: 'Sales Manager',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden pt-20">
      <SEO 
        title="About Us - VPS General Trading | Leading FMCG Distributor, Importer & Exporter in UAE"
        description="VPS General Trading is a trusted FMCG company in Sharjah, UAE with 10+ years of experience. We specialize in wholesale distribution, importing, and exporting of 5000+ international products from top brands like REDBULL, MONSTER, Ferrero Rocher, Nutella, Mondelez, and UNILEVER."
        keywords="About VPS General Trading, FMCG company Sharjah, FMCG importer UAE, FMCG exporter UAE, wholesale distributor UAE, VPS General Trading LLC"
        ogUrl="https://vpstrading.vercel.app/about"
        canonicalUrl="https://vpstrading.vercel.app/about"
      />
      {/* Hero Section */}
      <section className="relative py-24 bg-blue-100 dark:bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.1)_0%,transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Over 10 Years of Excellence</span>
            <h1 className="mt-4 text-4xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white mb-8">
              Your Trusted <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                FMCG Partner
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed opacity-90">
              VPS General Trading specializes in wholesale distribution, importing, and exporting of 5000+ international products from top brands like REDBULL, MONSTER, Ferrero Rocher, Nutella, Mondelez, and UNILEVER.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative p-10 rounded-3xl overflow-hidden bg-white dark:bg-surface-900 border border-slate-100 dark:border-slate-800 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaRocket className="text-9xl text-primary-600" />
              </div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400">
                  <FaRocket className="text-2xl" />
                </div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">
                  Our Mission
                </h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To be the preferred FMCG distributor by ensuring consistent supply of quality consumer goods,
                  competitive pricing, and reliable delivery to help our partners grow their businesses.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative p-10 rounded-3xl overflow-hidden bg-slate-900 dark:bg-surface-800 border border-slate-800 shadow-xl"
            >
              <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <FaEye className="text-9xl text-white" />
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <FaEye className="text-2xl" />
                </div>
                <h2 className="text-3xl font-display font-bold text-white mb-4">
                  Our Vision
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  To be the leading FMCG distributor in the GCC, known for our extensive product range,
                  efficient distribution network, and unwavering commitment to customer satisfaction.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-green-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              The principles that guide our every decision
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-surface-50 dark:bg-surface-900 text-center hover:bg-white dark:hover:bg-surface-800 transition-colors shadow-sm hover:shadow-lg"
              >
                <div className="w-16 h-16 bg-white dark:bg-black rounded-full shadow-md flex items-center justify-center mx-auto mb-6 text-primary-600 dark:text-primary-400">
                  <value.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-blue-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              A timeline of growth and excellence
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-800" />

            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col gap-12 relative`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right pl-12 md:pl-0 md:pr-12' : 'pl-12 md:pl-12'} text-left`}>
                    <div className="relative group">
                      <span className="block text-4xl font-display font-bold text-slate-900 dark:text-white opacity-20 mb-2 group-hover:opacity-100 transition-opacity duration-300">
                        {milestone.year}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-black z-10" />

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-green-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Leadership
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Visionaries driving our success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="relative h-96 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary-300 font-medium text-sm border-l-2 border-primary-500 pl-3">
                      {member.position}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
