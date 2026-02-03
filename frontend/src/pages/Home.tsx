import React, { useState, useEffect } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import { FaShippingFast, FaHeadset, FaCertificate, FaHandshake, FaArrowRight, FaGlobe, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import Dialog from '../components/Dialog';
import ProductDetails from '../components/ProductDetails';
import { featuredProducts, categories } from '../data/products';
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
    { number: '800+', label: 'Global Partners' },
    { number: '5000+', label: 'Product SKUs' },
    { number: '10+', label: 'Years Experience' },
    { number: '24/7', label: 'Import & Export' },
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
        title="VPS General Trading - Leading FMCG Distributor, Importer & Exporter in UAE"
        description="Trusted FMCG company in Sharjah, UAE with 10+ years of experience. Specializing in wholesale distribution, importing, and exporting of 5000+ international products including food, confectionery, beverages, personal care, coffee, snacks from top brands like REDBULL, MONSTER, Ferrero Rocher, Nutella, Mondelez, and UNILEVER."
        keywords="FMCG distributor UAE, FMCG importer UAE, FMCG exporter Sharjah, wholesale FMCG, VPS General Trading, REDBULL distributor, MONSTER energy distributor, Ferrero Rocher UAE, Nutella distributor, Mondelez UAE, UNILEVER distributor, food distribution Sharjah, beverage distributor UAE"
        ogUrl="https://vpstrading.vercel.app/"
        canonicalUrl="https://vpstrading.vercel.app/"
      />
      {/* Hero Section */}
      <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden">
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
          {/* <div className="absolute inset-0 z-20">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 dark:bg-primary-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[float_10s_ease-in-out_infinite]" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/10 dark:bg-secondary-900/20 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-[float_8s_ease-in-out_infinite_reverse]" />
          </div> */}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/30 transition-all shadow-xl group hover:cursor-pointer"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-lg md:text-xl group-hover:-translate-x-1 transition-transform" />
        </button>

        
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-14 md:h-14 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-black/30 transition-all shadow-xl group hover:cursor-pointer"
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

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-10 md:py-20 z-20">
          <div className="grid lg:grid-cols-1 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center z-10 md:mt-20"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center px-4 py-2 rounded-full bg-black/20 backdrop-blur-md text-white font-medium text-sm mb-6 border border-white/20">
                <FaGlobe className="mr-2" /> Your Trusted FMCG Partner Since 10+ Years
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-5xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Wholesale Distribution,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-secondary-300 to-primary-300 bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                  Import & Export
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Leading FMCG company in Sharjah, UAE specializing in 5000+ international products from top brands like REDBULL, MONSTER, Ferrero Rocher, Nutella, Mondelez, and UNILEVER.
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
                    className="w-full sm:w-auto px-8 py-4 bg-black/20 backdrop-blur-md text-white border border-white/30 rounded-xl font-semibold hover:bg-black/30 transition-all shadow-lg hover:cursor-pointer"
                  >
                    Contact Us
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">About VPS General Trading</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-8">
              Your Trusted FMCG Distribution, Import & Export Partner
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                VPS General Trading is a proud and trusted FMCG company based in Sharjah, UAE. With over 10 years of industry experience, we have established ourselves as one of the leading FMCG companies specializing in wholesale distribution, importing, and exporting of a wide range of top-quality international products.
              </p>
              <p>
                We offer a comprehensive range of 5000+ product SKUs including food, confectionery, beverages, personal care, coffee, snacks, and household essentials. Our commitment to excellence drives us to maintain strong partnerships with globally recognized brands such as REDBULL, MONSTER, CODE RED, Mondelez, UNILEVER, Ferrero Rocher, Nutella, and many others.
              </p>
              <p>
                Our mission is to be your preferred FMCG partner by ensuring consistent supply of quality consumer goods, competitive pricing, and reliable delivery across the globe. Our consistent achievement is powered by our industry expertise, commitment to innovative solutions, and global network of trusted suppliers and manufacturers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Best Sellers Section */}
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
              Our Best Sellers
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              Discover our diverse specialities ranging from confectionery to personal care - bringing you quality products that keep your business thriving
            </p>
          </motion.div>

          {/* Static Grid for All Devices */}
          <div className="flex flex-wrap justify-center gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <ProductCard
                  product={product}
                  index={index}
                  onViewDetails={() => handleViewDetails(product)}
                />
              </motion.div>
            ))}
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

      {/* Our Categories Section */}
      <section className="py-24 bg-green-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Product Range</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Our Categories
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
              Discover our diverse specialities ranging from confectionery to personal care - bringing you quality products that keep your business thriving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.name}
                category={category}
                index={index}
              />
            ))}
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
