import { motion } from 'framer-motion';
import { Compass, Palette, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We conduct a thorough analysis of your practice, understanding your unique workflows, pain points, and growth objectives.',
    icon: Compass,
    color: 'from-brand-slate to-brand-teal',
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'Our team architects a tailored solution that reflects your practice\'s identity and streamlines every client interaction.',
    icon: Palette,
    color: 'from-brand-teal to-primary-500',
  },
  {
    number: '03',
    title: 'Launch & Evolve',
    description: 'We deploy your platform, train your team, and provide continuous optimization to ensure lasting success.',
    icon: Rocket,
    color: 'from-primary-500 to-brand-slate',
  },
];

const Process = () => {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/10 via-brand-navy to-brand-navy" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-slate/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-400" />
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
              Our Methodology
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary-400" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            A Process Built on
            <span className="text-primary-400"> Precision</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            Every engagement follows our proven framework—designed to minimize disruption 
            and maximize the impact on your practice.
          </p>
        </motion.div>

        {/* Steps - Horizontal Timeline on Desktop */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
          
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 p-8 hover:border-primary-400/30 transition-all duration-500">
                  {/* Step Number Badge */}
                  <div className="absolute -top-5 left-8">
                    <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center shadow-lg`}>
                      <span className="text-white font-bold text-sm">{step.number}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-end mb-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10"
                    >
                      <step.icon className="w-8 h-8 text-primary-400" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/50 leading-relaxed">{step.description}</p>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary-400/50" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative bg-gradient-to-br from-brand-teal/20 to-brand-navy rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  See Our Process in Action
                </h3>
                <p className="text-white/50 mb-6">
                  Watch how we transform legal practices with our systematic approach to CRM implementation.
                </p>
                <motion.a
                  href="#pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white font-semibold rounded-full hover:shadow-glow transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule a Walkthrough
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
              
              <div className="relative aspect-video bg-brand-navy/60 rounded-2xl border border-white/10 flex items-center justify-center group cursor-pointer overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern id="processGrid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#processGrid)" />
                  </svg>
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-glow z-10"
                >
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" 
                       style={{ borderLeftWidth: '14px' }} />
                </motion.div>
                
                <div className="absolute bottom-4 left-4 bg-brand-navy/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
                  <span className="text-xs text-white/60">2:45 min</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
