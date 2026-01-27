import React, { useState, useEffect } from 'react';
import {  FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import {  FiChevronLeft, FiChevronRight, FiShare, FiStar } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { contactDetails } from '../data/contactdetails';
import ShareDialog from './ShareDialog';

interface ProductDetailsProps {
  product: {
    id: number;
    images: string[];
    name: string;
    brand: string;
    category: string;
    details: string;
    price?: string;
    rating?: number;
  };
  onClose: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);

  // Auto-play carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [product.images.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swiped left
      handleNextImage();
    }

    if (touchStart - touchEnd < -50) {
      // Swiped right
      handlePrevImage();
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Image Carousel Section */}
      <div className="relative h-80 md:h-[85vh]">
        {product.rating && product.rating >= 4 && (
          <div className="absolute top-4 right-4 z-10">
            <div className="bg-yellow-400 text-gray-900 text-xs px-4 py-2 rounded-full font-bold flex items-center shadow-lg">
              <FiStar className="w-4 h-4 mr-1" />
              Top Rated
            </div>
          </div>
        )}
        
        {/* Main Image */}
        <div 
          className="relative w-full h-full overflow-hidden rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} - ${currentImageIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />

          {/* Navigation Buttons */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={handlePrevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Previous image"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
                aria-label="Next image"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Dots Navigation */}
          {product.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-white w-8'
                      : 'bg-white/50 w-2 hover:bg-white/70'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Details Section */}
      <div className="flex flex-col md:h-[85vh] p-6 md:p-8 md:pl-4 border-l border-gray-200 dark:border-gray-700">
        <div className="flex-1 flex flex-col">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold mb-3 capitalize">
              <a href={`/products?category=${product.category}`}>{product.category}</a>
            </span>
            <div className="flex items-start justify-between gap-4 mb-2">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {product.name}
              </h2>
              <button
                onClick={() => setIsShareOpen(true)}
                className="p-2 rounded-lg hover:bg-primary-600 dark:hover:bg-primary-400 text-primary-600 dark:text-primary-400 hover:text-white hover:dark:text-white transition-colors border-2 border-primary-600 dark:border-primary-400 hover:cursor-pointer"
                aria-label="Share product"
              >
                <FiShare className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                Brand:
              </span>
              <span className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                <a href={`/products?search=${product.brand}`}>{product.brand}</a>
              </span>
            </div>

            {product.rating && (
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating!
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {product.rating}.0 Rating
                </span>
              </div>
            )}

            {product.price && (
              <div className="flex items-end space-x-3 mb-4">
                <span className="text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {product.price}
                </span>
              </div>
            )}
          </div>

          <div className="mb-3">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              Product Details:
            </h3>
          </div>
          
          <div 
            className="h-[250px] overflow-y-auto pr-2"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#3b82f6 transparent'
            }}
          >
            <style>{`
              .h-\\[250px\\].overflow-y-auto::-webkit-scrollbar {
                width: 4px;
              }
              .h-\\[250px\\].overflow-y-auto::-webkit-scrollbar-track {
                background: transparent;
              }
              .h-\\[250px\\].overflow-y-auto::-webkit-scrollbar-thumb {
                background-color: #3b82f6;
                border-radius: 2px;
              }
              .h-\\[250px\\].overflow-y-auto::-webkit-scrollbar-thumb:hover {
                background-color: #2563eb;
              }
            `}</style>
            
            <div className="mb-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {product.details}
              </p>
            </div>

            {/* <div className="space-y-3">
              <div className="flex items-start">
                <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">100% Authentic Product</span>
              </div>
              <div className="flex items-start">
                <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Wholesale Pricing Available</span>
              </div>
              <div className="flex items-start">
                <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Fast & Reliable Delivery</span>
              </div>
              <div className="flex items-start">
                <FiCheck className="w-5 h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">Quality Guaranteed</span>
              </div>
            </div> */}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 pb-2 border-t border-gray-200 dark:border-gray-700 mt-4">
            <div className="flex flex-col md:flex-row gap-3 ">
                <a href={`tel:${contactDetails.phone}`} className="flex-1">
                    <button 
                      style={{ background: '#2E3192', backgroundImage: 'none' }}
                      className="w-full px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform flex items-center justify-center gap-2 hover:brightness-90 hover:cursor-pointer  "
                    >
                      <FaPhoneAlt className="w-5 h-5" />
                      Call
                    </button>
                </a>
                <a 
                  href={`https://wa.me/${contactDetails.whatsapp.number}?text=${encodeURIComponent(`Hello, I'm interested in ${product.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                    <button 
                      style={{ background: '#22c55e', backgroundImage: 'none' }}
                      className="w-full px-6 py-3 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform flex items-center justify-center gap-2 hover:brightness-90 hover:cursor-pointer"
                    >
                      <FaWhatsapp className="w-5 h-5" />
                      WhatsApp
                    </button>
                </a> 
            </div>
            <Link to="/contact" className="flex-1" onClick={onClose}>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform flex items-center justify-center gap-2 hover:cursor-pointer">
                    <MdEmail className="w-5 h-5" />
                    Contact Now
                </button>
            </Link>
          <button 
            onClick={onClose} 
            className="flex-1 w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all block md:hidden"
          >
            Cancel
          </button>
        </div>
      </div>
      
      <ShareDialog
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Share this product"
        url={`${window.location.origin}/products#${encodeURIComponent(product.name)}`}
      />
    </div>
  );
};

export default ProductDetails;
