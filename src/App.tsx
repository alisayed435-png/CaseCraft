import { motion } from 'framer-motion';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Process from './components/Process';
import HowItWorks from './components/HowItWorks';
import Reasons from './components/Reasons';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-brand-navy"
    >
      <Navbar />
      <main>
        <Hero />
        <Reasons />
        <ProductShowcase />
        <Process />
        <HowItWorks />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </motion.div>
  );
}

export default App;
