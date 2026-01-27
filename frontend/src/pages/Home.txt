import React, { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { FaShippingFast, FaHeadset, FaCertificate, FaHandshake, FaArrowRight, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Globe from '../components/Globe';
import ProductCard from '../components/ProductCard';
import Dialog from '../components/Dialog';
import ProductDetails from '../components/ProductDetails';
import { featuredProducts } from '../data/products';
import type { Product } from '../data/products';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();

  // Check hash on mount and when it changes
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const product = featuredProducts.find(p => p.name === decodeURIComponent(hash));
      if (product) {
        setSelectedProduct(product);
        setIsDialogOpen(true);
      }
    } else {
      setIsDialogOpen(false);
      setTimeout(() => setSelectedProduct(null), 200);
    }
  }, [location.hash]);

  const heroImages = [
    {
      url: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=2070',
      alt: 'Retail Store Shelves'
    },
    {
      url: 'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=2070',
      alt: 'Warehouse Distribution'
    },
    {
      url: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=2070',
      alt: 'Product Shelves'
    },
    {
      url: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?auto=format&fit=crop&q=80&w=2070',
      alt: 'Shopping Cart'
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
    window.location.hash = encodeURIComponent(product.name);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedProduct(null), 200);
    history.pushState(null, '', ' ');
  };
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Features data
  const features = [
    {
      icon: FaShippingFast,
      title: 'Fast Distribution',
      description: 'Efficient supply chain delivering FMCG products across UAE and GCC markets within 24-48 hours.',
    },
    {
      icon: FaHeadset,
      title: 'Dedicated Support',
      description: 'Expert team handling orders, inventory, and logistics for seamless retail operations.',
    },
    {
      icon: FaCertificate,
      title: 'Quality Assurance',
      description: 'All products comply with UAE food safety standards and international quality certifications.',
    },
    {
      icon: FaHandshake,
      title: 'Reliable Partner',
      description: 'Consistent supply of consumer goods ensuring your shelves are always stocked.',
    },
  ];

  const stats = [
    { number: '800+', label: 'Retail Partners' },
    { number: '5000+', label: 'Product SKUs' },
    { number: '12+', label: 'Years in Trading' },
    { number: '24-48h', label: 'Delivery Time' },
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
      <SEO 
        title="VPS General Trading LLC LLC - FMCG Distributor in UAE"
        description="Leading distributor of Fast-Moving Consumer Goods (FMCG) in UAE. Quality food, beverages, and consumer products from global brands with reliable distribution services across UAE and GCC."
        keywords="FMCG distributor UAE, food distribution Sharjah, beverage distribution UAE, wholesale FMCG, VPS General Trading, VPS General Trading LLC, consumer goods UAE, FMCG Sharjah"
        ogUrl="https://vpstrading.vercel.app/"
        canonicalUrl="https://vpstrading.vercel.app/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Image Carousel Background */}
        <div className="absolute inset-0 overflow-hidden">
          <AnimatePresence initial={false} custom={currentSlide}>
            <motion.div
              key={currentSlide}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                type: 'tween',
                ease: 'easeInOut',
                duration: 0.6
              }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10" />
              <img
                src={heroImages[currentSlide].url}
                alt={heroImages[currentSlide].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Abstract Overlay */}
          <div className="absolute inset-0 z-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[float_10s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/10 dark:bg-secondary-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[float_8s_ease-in-out_infinite_reverse]" />
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 dark:hover:bg-black/30 transition-all shadow-xl group hover:cursor-pointer"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-lg md:text-xl group-hover:-translate-x-1 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 dark:hover:bg-black/30 transition-all shadow-xl group hover:cursor-pointer"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-lg md:text-xl group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Dot Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all hover:cursor-pointer ${
                currentSlide === index
                  ? 'w-12 h-3 bg-white rounded-full'
                  : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20 z-20">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center z-10"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md text-white font-medium text-sm mb-6 border border-white/20">
                <FaGlobe className="mr-2" /> Your FMCG Trading Partner
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Quality Products, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                  Delivered Daily
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Connecting retailers, supermarkets, and businesses with premium consumer goods. From food & beverages to household essentials - we supply it all.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/products" className="group">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all flex items-center justify-center space-x-2 hover:cursor-pointer"
                  >
                    <span>Discover Products</span>
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all shadow-lg hover:cursor-pointer"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Who We Are Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">About VPS General Trading LLC</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Who are we & What we do?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Leading <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">FMCG Distributor</span> in Global Markets
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
                At VPS General Trading LLC, we pride ourselves on being a premier distributor of Fast-Moving Consumer Goods (FMCG) across global markets. With years of industry expertise and a commitment to excellence, we connect quality products with consumers worldwide.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                Our extensive network and strategic partnerships enable us to offer a diverse range of products while maintaining the highest standards of quality and service. We understand the dynamic nature of the FMCG sector and continuously adapt to meet evolving market demands.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-md p-8 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-slate-800 dark:to-slate-800 rounded-3xl border-2 border-primary-200 dark:border-primary-700 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-3xl" />
                <img
                  src="https://res.cloudinary.com/domckasfk/image/upload/v1769429221/vps_logo_pqff1u.png"
                  alt="VPS General Trading LLC Logo"
                  className="relative w-full h-auto rounded-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-24 bg-blue-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Our Products</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Featured Products
            </h2>
          </motion.div>

          {/* Mobile View - Static Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:hidden">
            {featuredProducts.map((product, index) => (
              <ProductCard
                key={index}
                product={product}
                index={index}
                onViewDetails={() => handleViewDetails(product)}
              />
            ))}
          </div>

          {/* Desktop View - Carousel */}
          <div className="relative overflow-x-hidden overflow-y-visible py-8 hidden lg:block">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-blue-50 dark:from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-blue-50 dark:from-slate-900 to-transparent z-10" />
            
            {/* Seamless scrolling products */}
            <div className="flex animate-[scroll_10s_linear_infinite] gap-8">
              {[...featuredProducts, ...featuredProducts].map((product, index) => (
                <div key={index} className="flex-shrink-0 w-72">
                  <ProductCard
                    product={product}
                    index={index % featuredProducts.length}
                    onViewDetails={() => handleViewDetails(product)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          className='max-w-xs mx-auto px-6 sm:px-6 lg:px-8 mt-16'>
          <Link to="/products">
              <button  className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform hover:cursor-pointer animate-bounce">
                  View All Products
              </button>   
          </Link>
        </motion.div>
      </section>

      {/* Global Exporter Section */}
      <section className="py-24 bg-green-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Worldwide Reach</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Global Exporter
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center order-1 lg:order-1"
            >
              <div className="relative w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-500/10 dark:to-secondary-500/10 rounded-full blur-3xl" />
                <Globe className="relative w-full" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-2"
            >
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Connecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">Global Markets</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
                At VPS General Trading LLC, we pride ourselves on being a premier distributor of Fast-Moving Consumer Goods (FMCG) across global markets. With years of industry expertise and a commitment to excellence, we connect quality products with consumers worldwide.
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-lg mb-12 leading-relaxed">
                Our extensive network and strategic partnerships enable us to offer a diverse range of products while maintaining the highest standards of quality and service. We understand the dynamic nature of the FMCG sector and continuously adapt to meet evolving market demands.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg"
                >
                  <h4 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-2">1000+</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Products Available</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg"
                >
                  <h4 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-2">50+</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Countries Served</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg"
                >
                  <h4 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-2">24/7</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Customer Support</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-lg"
                >
                  <h4 className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 mb-2">12+</h4>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">Years Experience</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-blue-50 dark:bg-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
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
                className="group p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 shadow-lg hover:shadow-xl transition-all"
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
      <section className="py-24 relative overflow-hidden bg-green-50 dark:bg-slate-900">
        <div className="absolute inset-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-repeat" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
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

      {/* Global Partners Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Trusted Partnerships</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Our Global Partners
            </h2>
          </motion.div>

          {/* Mobile View - Grid */}
          <div className="grid grid-cols-2 gap-6 md:hidden">
            {[
              { name: 'Nestle', logo: 'https://res.cloudinary.com/dvb5mesnd/image/upload/v1754946636/nestle-logo_asw5uf.png' },
              { name: 'PepsiCo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/1200px-PepsiCo_logo.svg.png?20210115205614' },
              { name: 'Unilever', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Unilever.svg/800px-Unilever.svg.png' },
              { name: "Kellogg's", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kellogg%27s-Logo.svg/1200px-Kellogg%27s-Logo.svg.png' },
              { name: 'Cadbury', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Cadbury_%282020%29.svg/640px-Cadbury_%282020%29.svg.png' },
              { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' }
            ].map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 h-32 opacity-60 grayscale bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700"
              >
                <img 
                  src={brand.logo} 
                  alt={`${brand.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>

          {/* Desktop View - Scrolling Carousel */}
          <div className="relative overflow-hidden py-8 hidden md:block">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white dark:from-slate-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white dark:from-slate-900 to-transparent z-10" />
            <div className="flex animate-[scroll_20s_linear_infinite] gap-8 items-center">
              {[
                { name: 'Nestle', logo: 'https://res.cloudinary.com/dvb5mesnd/image/upload/v1754946636/nestle-logo_asw5uf.png' },
                { name: 'PepsiCo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/1200px-PepsiCo_logo.svg.png?20210115205614' },
                { name: 'Unilever', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Unilever.svg/800px-Unilever.svg.png' },
                { name: "Kellogg's", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kellogg%27s-Logo.svg/1200px-Kellogg%27s-Logo.svg.png' },
                { name: 'Cadbury', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Cadbury_%282020%29.svg/640px-Cadbury_%282020%29.svg.png' },
                { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
                { name: 'Nestle', logo: 'https://res.cloudinary.com/dvb5mesnd/image/upload/v1754946636/nestle-logo_asw5uf.png' },
                { name: 'PepsiCo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/1200px-PepsiCo_logo.svg.png?20210115205614' },
                { name: 'Unilever', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Unilever.svg/800px-Unilever.svg.png' },
                { name: "Kellogg's", logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kellogg%27s-Logo.svg/1200px-Kellogg%27s-Logo.svg.png' },
                { name: 'Cadbury', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Cadbury_%282020%29.svg/640px-Cadbury_%282020%29.svg.png' },
                { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' }
              ].map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-60 h-32 flex items-center justify-center p-4 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-pointer hover:scale-105 transform bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700"
                >
                  <img 
                    src={brand.logo} 
                    alt={`${brand.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-100 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 px-6 py-16 md:px-16 md:py-20 text-center shadow-2xl">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to stock your shelves?
              </h2>
              <p className="text-lg text-primary-50 mb-10 max-w-2xl mx-auto">
                Join 800+ retailers and businesses who trust VPS General Trading LLC for consistent supply of quality consumer goods.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-primary-600 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:cursor-pointer"
                >
                  Contact Us Today
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Dialog */}
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        maxWidth="4xl"
      >
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onClose={handleCloseDialog}
          />
        )}
      </Dialog>
    </div>
  );
};

export default Home;
