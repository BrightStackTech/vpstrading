import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStar } from 'react-icons/fa';

interface ProductCardProps {
  product: {
    id?: number;
    name: string;
    brand?: string;
    category?: string;
    price?: string;
    images: string[];
    details?: string;
    rating?: number;
  };
  index?: number;
  showPrice?: boolean;
  showRating?: boolean;
  showCart?: boolean;
  onViewDetails?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  index = 0,
  showPrice = false,
  showRating = false,
  showCart = false,
  onViewDetails,
}) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
      className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
    >
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Rating Badge */}
        {showRating && product.rating && (
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
            <FaStar className="text-yellow-400 text-xs" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">
              {product.rating}.0
            </span>
          </div>
        )}
        
        {/* Overlay with View Details Button */}
        {showPrice && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <button
              onClick={onViewDetails}
              className="px-6 py-2 bg-white text-slate-900 rounded-full font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              View Details
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Category or Brand */}
        {/* {(product.category || product.brand) && (
          <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
            {product.category || product.brand}
          </span>
        )} */}

        {/* Product Name */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white  group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {product.name}
        </h3>
        
        {(product.brand) && (
          <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 mt-1">
            {product.brand} . {product.category}
          </span>
        )}
        

        
        {/* Details */}
        {product.details && (
          <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">
            {product.details}
          </p>
        )}
        
        {/* Price and Cart Button */}
        {showPrice && product.price ? (
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              {product.price}
            </span>
            {showCart && (
              <button className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 transition-colors">
                <FaShoppingCart size={16} />
              </button>
            )}
          </div>
        ) : (
          /* View Details Button for Home Page */
          <button
            onClick={onViewDetails}
            className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform hover:cursor-pointer"
          >
            View Details
          </button>
        )}
      </div>
    </motion.div>
  );
};

export default React.memo(ProductCard);