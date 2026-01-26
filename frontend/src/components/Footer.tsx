import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-slate-900 text-slate-300 overflow-hidden">
      {/* Decorative gradient top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-500" />
      
      {/* Background glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-primary-900/20 blur-[100px] rounded-full pointing-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg shadow-primary-900/50">
                <span className="text-white font-display font-bold text-xl">V</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold text-white leading-none">
                  VPS <span className="text-primary-400">Trading</span>
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Your trusted partner in quality trading solutions. We provide excellence in every product and service with a commitment to integrity.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 hover:border-primary-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center group text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-primary-500 mr-3 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {['Quality Products', 'Fast Delivery', '24/7 Support', 'Wholesale Trading'].map((item) => (
                <li key={item} className="flex items-center group cursor-pointer hover:text-white transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-secondary-500 mr-3 transition-colors" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-4 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-primary-400">
                  <FaMapMarkerAlt size={14} />
                </div>
                <span className="mt-1">Dubai, United Arab Emirates</span>
              </li>
              <li className="flex items-center space-x-4 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-primary-400">
                  <FaPhone size={14} />
                </div>
                <span>+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-center space-x-4 text-sm text-slate-400">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 text-primary-400">
                  <FaEnvelope size={14} />
                </div>
                <a href="mailto:info@vpstrading.com" className="hover:text-white transition-colors">
                  info@vpstrading.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>
            © {currentYear} VPS General Trading LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
