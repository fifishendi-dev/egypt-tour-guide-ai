import { motion } from "framer-motion";
import { Lightbulb, Globe2, Shield, Users, TrendingUp, Plane, DollarSign } from "lucide-react";

const MotivationSlide = () => {
  return (
    <section id="motivation" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-gold/20 text-rafiq-gold px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Why We Build</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Our <span className="text-gradient-gold">Motivation</span>
          </h2>
        </motion.div>

        {/* Motivation Points */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {[
            {
              icon: Globe2,
              title: "Growing Tourism",
              description: "Tourism is growing, and digital tools are widely used",
              gradient: "from-rafiq-gold to-rafiq-coral"
            },
            {
              icon: Shield,
              title: "Safety & Trust",
              description: "Real-time monitoring ensures safety and trust",
              gradient: "from-rafiq-sky to-primary"
            },
            {
              icon: Users,
              title: "Economic Growth",
              description: "Supports youth and economic growth",
              gradient: "from-secondary to-rafiq-gold"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
              <div className="glass-card p-8 text-center relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Analytics Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Tourism <span className="text-gradient-gold">Analytics</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Egypt Tourism Growth Chart */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-rafiq-gold/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-rafiq-gold" />
                </div>
                <h4 className="text-lg font-display font-bold text-foreground">Egypt Tourism Growth</h4>
              </div>
              
              {/* Bar Chart */}
              <div className="space-y-4">
                {[
                  { year: "2019", visitors: 13, percentage: 65 },
                  { year: "2020", visitors: 3.5, percentage: 18 },
                  { year: "2021", visitors: 8, percentage: 40 },
                  { year: "2022", visitors: 11.7, percentage: 58 },
                  { year: "2023", visitors: 14.9, percentage: 75 },
                  { year: "2024", visitors: 18, percentage: 90, highlight: true },
                ].map((data, index) => (
                  <div key={data.year} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className={`font-medium ${data.highlight ? 'text-rafiq-gold' : 'text-muted-foreground'}`}>
                        {data.year}
                      </span>
                      <span className={`font-bold ${data.highlight ? 'text-rafiq-gold' : 'text-foreground'}`}>
                        {data.visitors}M visitors
                      </span>
                    </div>
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${data.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                        className={`h-full rounded-full ${data.highlight ? 'bg-gradient-to-r from-rafiq-gold to-rafiq-coral' : 'bg-primary/60'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-3 rounded-xl bg-rafiq-gold/10 border border-rafiq-gold/20">
                <p className="text-sm text-rafiq-gold font-medium text-center">
                  📈 +21% growth expected in 2024
                </p>
              </div>
            </motion.div>

            {/* Tourism Revenue & Market Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-secondary" />
                </div>
                <h4 className="text-lg font-display font-bold text-foreground">Market Opportunity</h4>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { value: "$13.6B", label: "Tourism Revenue 2023", icon: DollarSign },
                  { value: "18M+", label: "Expected Tourists 2024", icon: Plane },
                  { value: "12%", label: "GDP Contribution", icon: TrendingUp },
                  { value: "2M+", label: "Tourism Jobs", icon: Users },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="p-4 rounded-xl bg-muted/50 text-center"
                  >
                    <p className="text-2xl font-bold text-gradient-gold">{stat.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              {/* Digital Adoption Pie Chart Representation */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                <h5 className="text-sm font-semibold text-foreground mb-3">Digital Booking Adoption</h5>
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-muted"
                      />
                      <motion.circle
                        cx="18"
                        cy="18"
                        r="15.9"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        strokeDasharray="100"
                        initial={{ strokeDashoffset: 100 }}
                        whileInView={{ strokeDashoffset: 28 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id="gradient">
                          <stop offset="0%" stopColor="hsl(var(--secondary))" />
                          <stop offset="100%" stopColor="hsl(var(--rafiq-gold))" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-foreground">
                      72%
                    </span>
                  </div>
                  <div className="flex-1 text-sm text-muted-foreground">
                    <p>72% of tourists now prefer <strong className="text-foreground">digital booking</strong> for travel services</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MotivationSlide;
