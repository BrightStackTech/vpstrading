import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  category: {
    name: string;
    image: string;
    description: string;
  };
  index?: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  category,
  index = 0,
}) => {
  return (
    <Link to={`/products?category=${encodeURIComponent(category.name)}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.05 }}
        className="group relative h-64 bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        {/* Background Image */}
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        
        {/* Text Content Overlay */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-300 transition-colors">
            {category.name}
          </h3>
          <p className="text-white/90 text-sm">
            {category.description}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};

export default React.memo(CategoryCard);
