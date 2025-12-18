import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Solutions', href: '#reasons' },
    { label: 'Platform', href: '#showcase' },
    { label: 'Process', href: '#how-it-works' },
    { label: 'Investment', href: '#pricing' },
    { label: 'Support', href: '#faq' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-brand-navy/70 backdrop-blur-xl border-b border-white/5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative z-10"
          >
            <Logo size="sm" />
          </motion.a>

          {/* Desktop Navigation - Pill style */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/10">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <motion.a
              href="#pricing"
              className="px-6 py-2.5 text-sm text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.02 }}
            >
              Sign In
            </motion.a>
            <motion.a
              href="#pricing"
              className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold text-sm rounded-full hover:shadow-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden relative bg-brand-navy/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-white/70 hover:text-white hover:bg-white/5 transition-colors py-3 px-4 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-4 space-y-3">
                <a
                  href="#pricing"
                  className="block w-full text-center px-6 py-3 text-white/80 border border-white/20 rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </a>
                <a
                  href="#pricing"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
