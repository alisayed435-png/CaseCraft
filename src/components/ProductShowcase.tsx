import { motion } from 'framer-motion';
import { Briefcase, Users, FileText, DollarSign, ArrowUpRight } from 'lucide-react';

const screens = [
  {
    title: 'Command Center',
    description: 'Your unified dashboard for complete practice oversight and real-time insights',
    icon: Briefcase,
    image: 'dashboard',
    gradient: 'from-brand-slate/20 to-brand-teal/20',
  },
  {
    title: 'Client Intelligence',
    description: 'Deep client profiles with relationship history and predictive engagement',
    icon: Users,
    image: 'clients',
    gradient: 'from-brand-teal/20 to-primary-500/20',
  },
  {
    title: 'Case Orchestration',
    description: 'Streamlined case workflows with automated milestones and deadline tracking',
    icon: FileText,
    image: 'cases',
    gradient: 'from-primary-500/20 to-brand-slate/20',
  },
  {
    title: 'Revenue Engine',
    description: 'Intelligent time capture, automated invoicing, and payment analytics',
    icon: DollarSign,
    image: 'billing',
    gradient: 'from-brand-navy/40 to-brand-teal/20',
  },
];

const ProductShowcase = () => {
  return (
    <section id="showcase" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-teal/5 to-brand-navy" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-slate/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-teal/10 rounded-full blur-[150px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Left aligned with accent line */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-primary-400 to-transparent" />
              <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase">
                Platform Showcase
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Designed for
              <br />
              <span className="text-primary-400">Modern Practice</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:pt-12"
          >
            <p className="text-lg text-white/60 leading-relaxed">
              Every screen, every interaction, every workflow—crafted for the way modern attorneys work. 
              Experience a platform that anticipates your needs and amplifies your capabilities.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          {screens.map((screen, index) => (
            <motion.div
              key={screen.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group ${index === 0 ? 'md:col-span-2' : ''}`}
            >
              <div className={`relative h-full bg-gradient-to-br ${screen.gradient} rounded-3xl border border-white/10 overflow-hidden hover:border-primary-400/30 transition-all duration-500`}>
                {/* Content */}
                <div className={`p-8 ${index === 0 ? 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center' : ''}`}>
                  <div className={`${index === 0 ? '' : 'mb-8'}`}>
                    {/* Icon Badge */}
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 3 }}
                      className="inline-flex items-center justify-center w-14 h-14 bg-primary-500/20 rounded-2xl mb-6 border border-primary-500/20"
                    >
                      <screen.icon className="w-7 h-7 text-primary-400" />
                    </motion.div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{screen.title}</h3>
                    <p className="text-white/50 text-lg mb-6">{screen.description}</p>
                    
                    <motion.a
                      href="#pricing"
                      className="inline-flex items-center gap-2 text-primary-400 font-medium group/link"
                      whileHover={{ x: 4 }}
                    >
                      Learn more
                      <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  </div>
                  
                  {/* Screen Preview */}
                  <div className={`relative ${index === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'} bg-brand-navy/60 rounded-2xl overflow-hidden border border-white/5`}>
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-2 px-4 py-2.5 bg-brand-navy/80 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                      </div>
                    </div>

                    {/* Screen Content */}
                    <div className="p-4 h-full">
                      {screen.image === 'dashboard' && <DashboardMock />}
                      {screen.image === 'clients' && <ClientsMock />}
                      {screen.image === 'cases' && <CasesMock />}
                      {screen.image === 'billing' && <BillingMock />}
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Redesigned Mock Components
const DashboardMock = () => (
  <div className="space-y-3 h-full">
    <div className="grid grid-cols-4 gap-2">
      {[
        { label: 'Cases', value: '47' },
        { label: 'Revenue', value: '$128K' },
        { label: 'Clients', value: '189' },
        { label: 'Hours', value: '892' },
      ].map((stat) => (
        <div key={stat.label} className="bg-white/5 rounded-xl p-3 border border-white/5">
          <p className="text-[10px] text-white/40">{stat.label}</p>
          <p className="text-sm font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
    <div className="bg-white/5 rounded-xl p-4 flex-1 border border-white/5">
      <div className="flex items-end gap-1 h-20">
        {[30, 45, 35, 55, 40, 60, 50, 65, 55, 70, 60, 75].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-primary-500/30 to-primary-400/60 rounded-lg"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  </div>
);

const ClientsMock = () => (
  <div className="space-y-2">
    <div className="bg-white/5 rounded-xl px-3 py-2 border border-white/5">
      <span className="text-xs text-white/30">Search clients...</span>
    </div>
    {[
      { name: 'Apex Holdings', cases: 5, status: 'Active' },
      { name: 'Meridian Group', cases: 3, status: 'Active' },
      { name: 'Sterling Trust', cases: 2, status: 'Pending' },
    ].map((client) => (
      <div key={client.name} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
        <div className="w-8 h-8 bg-primary-500/20 rounded-lg flex items-center justify-center">
          <span className="text-xs text-primary-400 font-bold">{client.name[0]}</span>
        </div>
        <div className="flex-1">
          <p className="text-xs text-white font-medium">{client.name}</p>
          <p className="text-[10px] text-white/40">{client.cases} active cases</p>
        </div>
        <span className={`text-[10px] px-2 py-1 rounded-full ${client.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'}`}>
          {client.status}
        </span>
      </div>
    ))}
  </div>
);

const CasesMock = () => (
  <div className="space-y-2">
    <div className="flex gap-2 mb-3">
      {['All', 'Active', 'Pending', 'Closed'].map((tab, i) => (
        <div key={tab} className={`px-3 py-1.5 rounded-full text-[10px] ${i === 0 ? 'bg-primary-500/20 text-primary-400' : 'bg-white/5 text-white/40'}`}>
          {tab}
        </div>
      ))}
    </div>
    {[
      { case: 'Martinez v. Corp', type: 'Litigation', priority: 'High' },
      { case: 'Apex IP Filing', type: 'IP', priority: 'Medium' },
      { case: 'Sterling Estate', type: 'Estate', priority: 'Low' },
    ].map((item) => (
      <div key={item.case} className="flex items-center gap-3 bg-white/5 rounded-xl p-3 border border-white/5">
        <div className={`w-1.5 h-10 rounded-full ${item.priority === 'High' ? 'bg-rose-500' : item.priority === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
        <div className="flex-1">
          <p className="text-xs text-white font-medium">{item.case}</p>
          <p className="text-[10px] text-white/40">{item.type}</p>
        </div>
      </div>
    ))}
  </div>
);

const BillingMock = () => (
  <div className="space-y-3">
    <div className="grid grid-cols-2 gap-2">
      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
        <p className="text-[10px] text-white/40">This Month</p>
        <p className="text-lg font-bold text-white">$34,580</p>
        <p className="text-[10px] text-emerald-400">+18%</p>
      </div>
      <div className="bg-white/5 rounded-xl p-3 border border-white/5">
        <p className="text-[10px] text-white/40">Outstanding</p>
        <p className="text-lg font-bold text-white">$12,420</p>
        <p className="text-[10px] text-amber-400">4 invoices</p>
      </div>
    </div>
    <div className="bg-white/5 rounded-xl p-3 border border-white/5">
      <p className="text-[10px] text-white/40 mb-2">Recent</p>
      {[
        { client: 'Apex Holdings', amount: '$4,500', status: 'Paid' },
        { client: 'Meridian', amount: '$2,800', status: 'Pending' },
      ].map((inv) => (
        <div key={inv.client} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
          <span className="text-[10px] text-white">{inv.client}</span>
          <span className="text-[10px] text-white/50">{inv.amount}</span>
          <span className={`text-[10px] ${inv.status === 'Paid' ? 'text-emerald-400' : 'text-amber-400'}`}>{inv.status}</span>
        </div>
      ))}
    </div>
  </div>
);

export default ProductShowcase;
