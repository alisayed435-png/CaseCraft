import { motion } from 'framer-motion';
import { Phone, Lightbulb, Cog, Sparkles, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Initial Consultation',
    description: 'A focused 20-minute session to understand your practice, current challenges, and what success looks like for your firm.',
    icon: Phone,
    gradient: 'from-brand-slate/30 to-brand-teal/30',
    iconBg: 'bg-brand-slate/30',
  },
  {
    number: 2,
    title: 'Strategic Blueprint',
    description: 'We analyze your workflows and present a customized roadmap showing exactly how CaseCraft will transform your operations.',
    icon: Lightbulb,
    gradient: 'from-brand-teal/30 to-primary-500/30',
    iconBg: 'bg-brand-teal/30',
  },
  {
    number: 3,
    title: 'Tailored Implementation',
    description: 'Our team builds and refines your solution with your feedback at every stage—no surprises, just precision.',
    icon: Cog,
    gradient: 'from-primary-500/30 to-brand-slate/30',
    iconBg: 'bg-primary-500/30',
  },
  {
    number: 4,
    title: 'Launch & Scale',
    description: 'Go live with confidence. We provide hands-on training and continuous optimization to fuel your growth.',
    icon: Sparkles,
    gradient: 'from-brand-slate/30 to-brand-navy/30',
    iconBg: 'bg-emerald-500/30',
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-navy" />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 via-transparent to-brand-slate/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/3 rounded-full blur-[200px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-6">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">Simple Onboarding</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Your Path to
            <span className="text-primary-400"> Transformation</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            From first conversation to full deployment—a clear, efficient journey 
            with no complexity or hidden steps.
          </p>
        </motion.div>

        {/* Steps - New Card Layout */}
        <div className="relative">
          {/* Central Vertical Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="h-full bg-gradient-to-b from-primary-400/50 via-primary-400/30 to-transparent" />
          </div>
          
          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${index % 2 === 0 ? '' : 'lg:direction-rtl'}`}
              >
                {/* Card - Alternating sides on desktop */}
                <div className={`${index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className={`relative bg-gradient-to-br ${step.gradient} rounded-3xl border border-white/10 p-8 hover:border-primary-400/30 transition-all`}
                  >
                    {/* Step Badge - Centered on mobile, positioned on desktop */}
                    <div className={`lg:absolute lg:top-8 ${index % 2 === 0 ? 'lg:-right-24' : 'lg:-left-24'} mb-6 lg:mb-0`}>
                      <div className="inline-flex lg:flex items-center justify-center w-12 h-12 bg-primary-500 rounded-2xl shadow-glow">
                        <span className="text-white font-bold">{step.number}</span>
                      </div>
                    </div>

                    <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Icon */}
                      <div className={`w-14 h-14 ${step.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/10`}>
                        <step.icon className="w-7 h-7 text-primary-400" />
                      </div>

                      {/* Content */}
                      <div className={index % 2 === 0 ? 'lg:text-right' : ''}>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-white/50 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Empty column for alternating layout */}
                {index % 2 === 0 ? <div className="hidden lg:block" /> : null}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-white/40 mb-8 text-lg">Ready to elevate your practice?</p>
          <motion.a
            href="#pricing"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold text-lg rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Begin Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
