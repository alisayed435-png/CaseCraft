import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: 'What is the typical implementation timeline?',
    answer: 'Foundation and Professional packages typically launch in 2-4 weeks. Enterprise implementations with custom integrations may take 4-6 weeks. Timeline depends on the complexity of your workflows and how quickly we can align on requirements during discovery.',
  },
  {
    question: 'What does the support period include?',
    answer: 'Your support period includes bug fixes, configuration adjustments, comprehensive team training sessions, and priority email/video support. We ensure your team is fully confident and productive with the platform before the support period concludes.',
  },
  {
    question: 'Can we evolve the platform after initial launch?',
    answer: 'Absolutely. CaseCraft is built on flexible technology that allows for continuous evolution. Your team can make routine updates, and we offer ongoing enhancement packages for firms that want continued development support.',
  },
  {
    question: 'What technology powers CaseCraft?',
    answer: 'We leverage modern, proven technologies including React, TypeScript, and secure cloud infrastructure. The platform is designed for flexibility—your team can handle simple updates without coding, while complex integrations are built on robust APIs.',
  },
  {
    question: 'Are payment plans available?',
    answer: 'Yes, we offer flexible milestone-based payments for all packages. A typical structure: 40% at project kickoff, 30% at design approval, and 30% at launch. Custom arrangements can be discussed during your consultation.',
  },
  {
    question: 'How do you handle data migration?',
    answer: 'Data migration is included in every package. We carefully export and transform data from your existing systems—client records, case files, documents, billing history—ensuring a seamless transition with zero data loss.',
  },
  {
    question: 'What security standards do you maintain?',
    answer: 'Security is foundational. CaseCraft is SOC 2 Type II certified with 256-bit AES encryption, role-based access controls, and regular third-party security audits. Your client data is protected by the same standards used by major financial institutions.',
  },
  {
    question: 'What if the platform doesn\'t meet our expectations?',
    answer: 'We stand behind our work with a 30-day satisfaction guarantee. If the delivered platform doesn\'t meet the agreed specifications, we\'ll either make it right or provide a full refund—no complicated processes or conditions.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-teal/5 to-brand-navy" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary-500/3 rounded-full blur-[200px]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <MessageCircle className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">Common Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Everything You Need
            <span className="text-primary-400"> to Know</span>
          </h2>
          <p className="text-lg text-white/50">
            Clarity before commitment. Here are answers to what firms typically ask.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div
                className={`bg-gradient-to-br from-white/5 to-transparent border rounded-2xl overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'border-primary-400/30' : 'border-white/10 hover:border-white/20'
                }`}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-navy rounded-2xl"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-white font-medium pr-6 text-lg">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${openIndex === index ? 'bg-primary-500/20' : 'bg-white/5'}`}
                  >
                    <ChevronDown className={`w-5 h-5 ${openIndex === index ? 'text-primary-400' : 'text-white/40'}`} />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-primary-400/30 via-primary-400/10 to-transparent mb-4" />
                        <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-br from-brand-teal/20 to-brand-navy rounded-3xl border border-white/10 p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Have a Specific Question?</h3>
            <p className="text-white/50 mb-8 max-w-md mx-auto">
              Every practice is unique. Let's discuss your specific needs and how CaseCraft can address them.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300"
            >
              Schedule a Conversation
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
