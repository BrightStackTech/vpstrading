import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane, FaWhatsapp } from 'react-icons/fa';import { contactDetails } from '../data/contactdetails';
import SEO from '../components/SEO';
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct email body with form details
    const emailSubject = formData.subject ? `${formData.subject} - Contact Form` : 'Contact Form Submission';
    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Subject: ${formData.subject || 'General Inquiry'}

Message:
${formData.message}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:${contactDetails.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Headquarters',
      details: ['VPS General Trading LLC LLC', contactDetails.address],
      action: 'Get Directions',
      link: contactDetails.maps.link
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      details: [contactDetails.phoneDisplay],
      action: 'Call Now',
      link: `tel:${contactDetails.phone}`
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: [contactDetails.email],
      action: 'Send Email',
      link: `mailto:${contactDetails.email}`
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 1:00 PM'],
      action: 'View Calendar',
      link: `https://calendar.google.com/calendar/`
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <SEO 
        title="Contact Us - VPS General Trading | Get in Touch"
        description="Contact VPS General Trading LLC for FMCG inquiries, wholesale partnerships, or support. Reach us via phone, email, or visit our Sharjah office in UAE."
        keywords="Contact VPS General Trading, FMCG inquiries Sharjah, business contact UAE, wholesale FMCG distributor"
        ogUrl="https://vpstrading.vercel.app/contact"
        canonicalUrl="https://vpstrading.vercel.app/contact"
      />
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-100 dark:bg-blue-950 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/30 to-secondary-600/30 dark:from-primary-900/40 dark:to-secondary-900/40" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-slate-900 dark:text-white"
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Let's Talk Business
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-light">
              Stock your store with quality products. Get wholesale pricing today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 relative  z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-surface-900 p-8 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 text-center group"
              >
                <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
                  <info.icon className="text-2xl" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-6">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-slate-600 dark:text-slate-400 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all hover:scale-105 transform hover:cursor-pointer" onClick={() => {
                  if (info.link) {
                    window.open(info.link, '_blank');
                  } else {
                    window.location.href = info.action;
                  }
                }}>
                  {info.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Split */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white dark:bg-surface-900 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">
                    Request Quote
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Bulk orders, wholesale pricing, and business partnerships - we respond within 4 hours.
                  </p>
                </div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-center gap-3 text-green-700 dark:text-green-400"
                  >
                     <div className="w-2 h-2 rounded-full bg-green-500" />
                     Message sent successfully! We'll be in touch soon.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                     <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 transition-all"
                        placeholder="+971..."
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 transition-all appearance-none"
                      >
                        <option value="">Select a topic</option>
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="support">Customer Support</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black border-none text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                      placeholder="How can we help you today?"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-primary-500/30 transition-shadow flex items-center justify-center space-x-2 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Social */}
            <div className="flex flex-col gap-8">
              {/* Map Container */}
              <div className="flex-grow bg-white dark:bg-surface-900 p-4 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-800 h-[500px]">
                <div className="w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe
                    src={contactDetails.maps.embedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  />
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#25D366] p-8 rounded-3xl shadow-lg flex items-center justify-between text-white overflow-hidden relative">
                <div className="relative z-10">
                   <h3 className="text-2xl font-bold mb-1">Chat on WhatsApp</h3>
                   <p className="opacity-90 mb-4">Quick responses for urgent inquiries</p>
                   <a 
                     href={contactDetails.whatsapp.url}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block px-6 py-2 bg-white text-[#25D366] rounded-full font-bold text-sm hover:shadow-lg transition-shadow"
                   >
                     Start Chat
                   </a>
                </div>
                <FaWhatsapp className="text-[120px] absolute -right-6 -bottom-8 opacity-20 rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
