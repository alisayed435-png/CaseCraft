import { motion } from 'framer-motion';
import { Check, ArrowRight, Crown, Zap, Building2 } from 'lucide-react';

const plans = [
  {
    name: 'Foundation',
    description: 'For solo practitioners launching their modern practice.',
    price: '$5,900',
    priceNote: 'one-time investment',
    popular: false,
    icon: Zap,
    gradient: 'from-brand-slate/20 to-brand-teal/10',
    features: [
      'Core CRM platform',
      'Up to 750 client records',
      'Essential case management',
      'Email & calendar sync',
      '3 team members',
      '45-day implementation support',
    ],
  },
  {
    name: 'Professional',
    description: 'For growing firms ready to scale operations.',
    price: '$12,500',
    priceNote: 'one-time investment',
    popular: true,
    icon: Crown,
    gradient: 'from-primary-500/20 to-brand-teal/20',
    features: [
      'Everything in Foundation',
      'Unlimited client records',
      'Advanced workflow automation',
      'Custom analytics dashboard',
      'Document assembly',
      'Deadline intelligence',
      '15 team members',
      '90-day dedicated support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For established firms demanding complete customization.',
    price: '$24,000',
    priceNote: 'one-time investment',
    popular: false,
    icon: Building2,
    gradient: 'from-brand-teal/20 to-brand-navy/20',
    features: [
      'Everything in Professional',
      'Unlimited team members',
      'Custom integrations suite',
      'Advanced billing & invoicing',
      'White-label client portal',
      'Priority 24/7 support',
      'Dedicated success manager',
      '12-month evolution program',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-navy" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/5 via-transparent to-brand-slate/5" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary-500/3 rounded-full blur-[200px]" />

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
            <span className="text-primary-400 text-sm font-medium">Simple Investment</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            One Investment.
            <span className="text-primary-400"> Infinite Value.</span>
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">
            No subscriptions, no hidden fees. Invest once in your practice transformation 
            and own the solution forever.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative ${plan.popular ? 'lg:-mt-6 lg:mb-6' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary-400 to-primary-500 text-white text-sm font-semibold rounded-full shadow-glow"
                  >
                    <Crown className="w-4 h-4" />
                    Most Chosen
                  </motion.div>
                </div>
              )}

              {/* Card */}
              <motion.div
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`h-full rounded-3xl border p-8 lg:p-10 transition-all duration-500 bg-gradient-to-br ${plan.gradient} ${
                  plan.popular
                    ? 'border-primary-400/50 shadow-glow'
                    : 'border-white/10 hover:border-primary-400/30'
                }`}
              >
                {/* Plan Icon & Header */}
                <div className="flex items-start justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-white/40 text-sm">{plan.description}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${plan.popular ? 'bg-primary-500/30' : 'bg-white/10'}`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-primary-400' : 'text-white/60'}`} />
                  </div>
                </div>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="text-white/30 text-sm mt-2">{plan.priceNote}</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.popular ? 'bg-primary-500/30' : 'bg-white/10'}`}>
                        <Check className={`w-3 h-3 ${plan.popular ? 'text-primary-400' : 'text-white/60'}`} />
                      </div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-400 to-primary-500 text-white shadow-glow hover:shadow-glow-lg'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/10'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Trust Elements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-400" />
              <span>30-day satisfaction guarantee</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-400" />
              <span>Flexible milestone payments</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-primary-400" />
              <span>SOC 2 Type II certified</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
