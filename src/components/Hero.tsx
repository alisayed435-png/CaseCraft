import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, BarChart3, Clock, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: 'easeOut' },
  };

  const stats = [
    { value: '98%', label: 'Client Retention' },
    { value: '3x', label: 'Faster Workflows' },
    { value: '500+', label: 'Active Firms' },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Architectural background with new palette */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-teal/20 to-brand-navy" />
        
        {/* Geometric patterns - subtle grid */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" />
          </svg>
        </div>
        
        {/* Radial glow elements */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-slate/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-teal/15 rounded-full blur-[100px]" />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-brand-navy/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* New Split Layout - Text Centered, Dashboard Below */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          {/* Badge */}
          <motion.div
            {...fadeInUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-white/80">Trusted by leading law practices worldwide</span>
          </motion.div>

          {/* Main Headline - Much larger, bolder */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8"
          >
            <span className="text-white">Elevate Your</span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-brand-slate bg-clip-text text-transparent">
              Legal Practice
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/60 max-w-2xl mb-10 leading-relaxed"
          >
            CaseCraft delivers intelligent case management, seamless client relationships, and actionable insights—all in one elegant platform.
          </motion.p>

          {/* CTA Cluster - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          >
            <motion.a
              href="#pricing"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-400 to-primary-500 text-white font-semibold rounded-full shadow-glow hover:shadow-glow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Transformation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#showcase"
              className="flex items-center justify-center gap-2 px-8 py-4 text-white/80 border border-white/20 rounded-full hover:bg-white/5 hover:border-white/30 transition-all"
              whileHover={{ scale: 1.02 }}
            >
              <span>Explore Platform</span>
            </motion.a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm"
          >
            {[
              { icon: CheckCircle2, text: 'SOC 2 Compliant' },
              { icon: Clock, text: 'Setup in 2 Weeks' },
              { icon: Award, text: '24/7 Priority Support' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-white/50">
                <item.icon className="w-4 h-4 text-primary-400" />
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dashboard Preview - Redesigned Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Main Card with glass effect */}
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/10 overflow-hidden backdrop-blur-sm shadow-2xl">
            {/* Browser Chrome - Simplified */}
            <div className="flex items-center justify-between px-6 py-4 bg-brand-navy/50 border-b border-white/5">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                  <div className="w-3 h-3 rounded-full bg-white/20" />
                </div>
                <div className="hidden sm:flex items-center gap-2 ml-4 px-4 py-1.5 bg-white/5 rounded-lg">
                  <div className="w-3 h-3 rounded-full bg-primary-400/50" />
                  <span className="text-xs text-white/40">app.casecraft.io/dashboard</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-white/5" />
                <div className="w-6 h-6 rounded bg-white/5" />
              </div>
            </div>

            {/* Dashboard Content - Bento Grid Style */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-12 gap-4">
                {/* Sidebar */}
                <div className="col-span-3 hidden lg:block space-y-3">
                  <div className="flex items-center gap-3 px-4 py-3 bg-primary-500/20 rounded-xl border border-primary-500/30">
                    <BarChart3 className="w-5 h-5 text-primary-400" />
                    <span className="text-sm text-white font-medium">Overview</span>
                  </div>
                  {['Cases', 'Clients', 'Calendar', 'Billing', 'Reports'].map((item) => (
                    <div key={item} className="flex items-center gap-3 px-4 py-3 text-white/40 hover:bg-white/5 rounded-xl transition-colors">
                      <div className="w-5 h-5 rounded bg-white/10" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="col-span-12 lg:col-span-9 space-y-4">
                  {/* Stats Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Active Cases', value: '47', change: '+12%', color: 'text-emerald-400' },
                      { label: 'Revenue MTD', value: '$128K', change: '+24%', color: 'text-emerald-400' },
                      { label: 'Billable Hours', value: '892', change: '+8%', color: 'text-emerald-400' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-white/5 rounded-2xl p-4 border border-white/5">
                        <p className="text-xs text-white/40 mb-1">{stat.label}</p>
                        <div className="flex items-baseline gap-2">
                          <p className="text-2xl font-bold text-white">{stat.value}</p>
                          <span className={`text-xs ${stat.color}`}>{stat.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white/5 rounded-2xl p-5 border border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-sm text-white/60">Revenue Trend</p>
                      <div className="flex gap-2">
                        {['1W', '1M', '3M', '1Y'].map((period, i) => (
                          <span key={period} className={`text-xs px-3 py-1 rounded-lg ${i === 2 ? 'bg-primary-500/30 text-primary-400' : 'text-white/30'}`}>
                            {period}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="h-32 flex items-end gap-2">
                      {[35, 45, 40, 55, 48, 62, 58, 70, 65, 78, 72, 85].map((h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.6, delay: 0.6 + i * 0.04 }}
                          className="flex-1 bg-gradient-to-t from-primary-500/30 via-primary-400/50 to-primary-400/80 rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Stat Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -left-8 top-1/3 hidden xl:block"
          >
            <div className="bg-brand-teal/90 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Case Won</p>
                  <p className="text-white/60 text-sm">Martinez v. Corp</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="absolute -right-8 top-1/4 hidden xl:block"
          >
            <div className="bg-brand-slate/90 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold">Deadline Alert</p>
                  <p className="text-white/60 text-sm">Filing due in 2 days</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center gap-12 lg:gap-20 mt-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.p
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-3xl lg:text-4xl font-bold text-primary-400 mb-1"
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-white/40">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
