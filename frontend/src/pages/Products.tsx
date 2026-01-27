import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import ProductDetails from '../components/ProductDetails';
import Dialog from '../components/Dialog';
import { products, categories as productCategories } from '../data/products';
import type { Product } from '../data/products';
import SEO from '../components/SEO';

const Products: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [shuffledProducts, setShuffledProducts] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const location = useLocation();
  
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const searchTerm = searchParams.get('search') || '';
  const selectedCategory = searchParams.get('category') || 'All Categories';
  const productsPerPage = 20;

  const setSearchTerm = (value: string) => {
    const params: Record<string, string> = { page: '1' };
    if (value) params.search = value;
    if (selectedCategory !== 'All Categories') params.category = selectedCategory;
    setSearchParams(params);
  };

  const setSelectedCategory = (value: string) => {
    const params: Record<string, string> = { page: '1' };
    if (searchTerm) params.search = searchTerm;
    if (value !== 'All Categories') params.category = value;
    setSearchParams(params);
  };

  const setCurrentPage = (page: number) => {
    const params: Record<string, string> = { page: page.toString() };
    if (searchTerm) params.search = searchTerm;
    if (selectedCategory !== 'All Categories') params.category = selectedCategory;
    setSearchParams(params);
  };

  // Shuffle products when "All Categories" is selected on mount
  React.useEffect(() => {
    const shuffled = [...products].sort(() => Math.random() - 0.5);
    setShuffledProducts(shuffled);
  }, []);

  // Check hash on mount and when it changes
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const product = products.find(p => p.name === decodeURIComponent(hash));
      if (product) {
        setSelectedProduct(product);
        setIsDialogOpen(true);
      }
    } else {
      setIsDialogOpen(false);
      setTimeout(() => setSelectedProduct(null), 200);
    }
  }, [location.hash]);

  const filteredProducts = (selectedCategory === 'All Categories' ? shuffledProducts : products).filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.details.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  // Scroll to top when page changes
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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

  return (
    <div className="min-h-screen pt-28 pb-20 bg-blue-50 dark:bg-slate-900">
      <SEO 
        title="Our Products - VPS General Trading | FMCG Catalogue UAE"
        description="Browse VPS General Trading's extensive range of 5000+ FMCG products from top global brands like Nestle, PepsiCo, Unilever. Find quality food, beverages, and consumer goods with wholesale pricing across UAE."
        keywords="FMCG products UAE, wholesale products Sharjah, consumer goods distributor UAE, food products wholesale, beverage distribution Dubai"
        ogUrl="https://vpstrading.vercel.app/products"
        canonicalUrl="https://vpstrading.vercel.app/products"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Product Catalog</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">
            5000+ Consumer Products
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Browse our extensive range of FMCG products - from daily essentials to premium brands. Wholesale pricing available.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <div className="sticky top-20 lg:top-38 z-30 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-4 md:p-6 shadow-xl border border-white/20 dark:border-white/10"
          >
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96 ">
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
                <button
                  onClick={() => setSelectedCategory('All Categories')}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium text-sm transition-all hover:cursor-pointer ${
                    selectedCategory === 'All Categories'
                      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                      : 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  All Categories
                </button>
                {productCategories.map((category) => (
                    <button
                      key={typeof category === 'string' ? category : category.name}
                      onClick={() => setSelectedCategory(typeof category === 'string' ? category : category.name)}
                      className={`whitespace-nowrap px-4 py-2 rounded-lg font-medium text-sm transition-all hover:cursor-pointer ${
                        selectedCategory === (typeof category === 'string' ? category : category.name)
                          ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg'
                          : 'bg-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {typeof category === 'string' ? category : category.name}
                    </button>
                  ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {paginatedProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              showPrice={true}
              showRating={true}
              showCart={true}
              onViewDetails={() => handleViewDetails(product)}
            />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-4 items-center mt-12"
          >
            {/* Page Info - Mobile */}
            <span className="text-sm text-slate-600 dark:text-slate-400 md:hidden">
              Page {currentPage} of {totalPages}
            </span>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="px-3 md:px-4 py-2 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-md text-sm md:text-base hover:cursor-pointer"
              >
                Prev
              </button>
              
              <div className="flex gap-1 md:gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-9 h-9 md:w-10 md:h-10 rounded-lg font-medium transition-all shadow-md text-sm md:text-base hover:cursor-pointer ${
                        currentPage === pageNum
                          ? 'bg-primary-600 text-white'
                          : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="px-3 md:px-4 py-2 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-100 dark:hover:bg-slate-700 transition-all shadow-md text-sm md:text-base hover:cursor-pointer"
              >
                Next
              </button>
            </div>

            {/* Detailed Info - Desktop Only */}
            <span className="hidden md:block text-sm text-slate-600 dark:text-slate-400">
              Showing {paginatedProducts.length} of {filteredProducts.length} products
            </span>
          </motion.div>
        )}

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
    </div>
  );
};

export default Products;
