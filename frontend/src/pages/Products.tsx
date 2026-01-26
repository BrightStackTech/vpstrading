import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaStar } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  rating: number;
}

const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Building Materials', 'Industrial', 'Office Supplies'];

  const products: Product[] = [
    {
      id: 1,
      name: 'Professional Laptop',
      category: 'Electronics',
      price: 'AED 3,500',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=800',
      description: 'High-performance laptop for business needs',
      rating: 5,
    },
    {
      id: 2,
      name: 'Office Desk',
      category: 'Office Supplies',
      price: 'AED 1,200',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=800',
      description: 'Ergonomic office desk with storage',
      rating: 4,
    },
    {
      id: 3,
      name: 'Steel Rods',
      category: 'Building Materials',
      price: 'AED 500/ton',
      image: 'https://images.unsplash.com/photo-1535050516515-ad97d022d4c0?auto=format&fit=crop&q=80&w=800',
      description: 'High-quality construction steel rods',
      rating: 5,
    },
    {
      id: 4,
      name: 'Industrial Pump',
      category: 'Industrial',
      price: 'AED 2,800',
      image: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&q=80&w=800',
      description: 'Heavy-duty industrial water pump',
      rating: 4,
    },
    {
      id: 5,
      name: 'LED Lighting System',
      category: 'Electronics',
      price: 'AED 450',
      image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
      description: 'Energy-efficient LED lighting solution',
      rating: 5,
    },
    {
      id: 6,
      name: 'Conference Table',
      category: 'Office Supplies',
      price: 'AED 2,500',
      image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80&w=800',
      description: 'Large conference table for meetings',
      rating: 4,
    },
    {
      id: 7,
      name: 'Cement Bags',
      category: 'Building Materials',
      price: 'AED 25/bag',
      image: 'https://images.unsplash.com/photo-1587582423116-432d6fe34265?auto=format&fit=crop&q=80&w=800',
      description: 'Premium quality construction cement',
      rating: 5,
    },
    {
      id: 8,
      name: 'Power Generator',
      category: 'Industrial',
      price: 'AED 8,500',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      description: 'Reliable backup power generator',
      rating: 5,
    },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Catalog</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            Curated For Excellence
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Explore our wide range of premium products sourced from top global manufacturers.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="sticky top-24 z-30 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-4 md:p-6 shadow-xl border border-white/20 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto no-scrollbar">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                        : 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white dark:bg-surface-900 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                    <FaStar className="text-yellow-400 text-xs" />
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {product.rating}.0
                    </span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      View Details
                    </button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                        {product.category}
                      </span>
                      <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white mt-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-xl font-bold text-slate-900 dark:text-white">
                      {product.price}
                    </span>
                    <button
                      className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-colors"
                    >
                      <FaShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400">
              <FaSearch size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No products found</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Products;
