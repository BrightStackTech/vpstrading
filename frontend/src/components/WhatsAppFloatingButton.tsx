import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { contactDetails } from '../data/contactdetails';

const WhatsAppFloatingButton: React.FC = () => {
  const phoneNumber = contactDetails.whatsapp.number;
  const message = contactDetails.whatsapp.message;
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[10000] w-18 h-18 md:w-18 md:h-18 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center group animate-bounce hover:animate-bounce-slow hover:cursor-pointer hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-3xl group-hover:scale-110 transition-transform" />
      
      {/* Pulse ring effect */}
      <span className="absolute inline-flex h-[70%] w-[70%] rounded-full bg-green-400 opacity-75 animate-ping"></span>
    </button>
  );
};

export default WhatsAppFloatingButton;