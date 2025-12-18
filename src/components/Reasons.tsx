import { motion } from 'framer-motion';
import { 
  Scale, 
  Zap, 
  Lock, 
  Gem, 
  TrendingUp, 
  Users2 
} from 'lucide-react';

const reasons = [
  {
    icon: Scale,
    title: 'Legal-First Architecture',
    description: 'Built from the ground up for legal workflows. We understand privilege, conflicts, and compliance—because we designed for them.',
    accent: 'from-brand-slate to-brand-teal',
  },
  {
    icon: Zap,
    title: 'Swift Deployment',
    description: 'Live in 2-4 weeks, not quarters. Our streamlined implementation ensures minimal disruption to your active matters.',
    accent: 'from-brand-teal to-primary-500',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified with bank-grade encryption. Your client data protected by the same standards as Fortune 500 companies.',
    accent: 'from-primary-500 to-brand-slate',
  },
  {
    icon: Gem,
    title: 'Refined Experience',
    description: 'Every interaction designed for efficiency. An interface your team will embrace—not endure.',
    accent: 'from-brand-slate to-brand-navy',
  },
  {
    icon: TrendingUp,
    title: 'Actionable Intelligence',
    description: 'Real-time dashboards that reveal client acquisition costs, matter profitability, and practice growth trajectories.',
    accent: 'from-brand-navy to-brand-teal',
  },
  {
    icon: Users2,
    title: 'Dedicated Partnership',
    description: 'Direct access to your success manager. No chatbots, no queues—just responsive humans who speak legal.',
    accent: 'from-brand-teal to-primary-500',
  },
];

const Reasons = () => {
  return (
    <section id="reasons" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-teal/5 to-brand-navy" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-slate/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-teal/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Asymmetric */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-primary-400 to-transparent" />
              <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
                Why CaseCraft
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Six Pillars of
              <br />
              <span className="text-primary-400">Practice Excellence</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-end"
          >
            <p className="text-lg text-white/50 leading-relaxed">
              We're not another generic CRM. We're specialists who've built the definitive 
              platform for modern legal practice management.
            </p>
          </motion.div>
        </div>

        {/* Reasons Grid - Hexagonal feel with varied sizes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10 p-8 hover:border-primary-400/30 transition-all duration-500">
                {/* Icon with gradient background */}
                <div className="relative mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${reason.accent} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <reason.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 w-16 h-16 bg-primary-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                <p className="text-white/50 leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row - New Design */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-brand-teal/20 via-primary-500/10 to-brand-slate/20 rounded-3xl border border-white/10 p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[
                { value: '500+', label: 'Legal Practices', sublabel: 'Transformed' },
                { value: '99.2%', label: 'Client Retention', sublabel: 'Rate' },
                { value: '14', label: 'Days Average', sublabel: 'Deployment' },
                { value: '4.9', label: 'Star Rating', sublabel: 'Client Score' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                >
                  <p className="text-4xl lg:text-5xl font-bold text-white mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-400 font-medium">{stat.label}</p>
                  <p className="text-white/30 text-sm">{stat.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Reasons;
