import { motion } from "framer-motion";
import { Monitor, Users, BarChart3, Shield, Settings, FileCheck } from "lucide-react";

const adminFeatures = [
  { icon: Users, title: "User Management", desc: "Manage tourists & guides" },
  { icon: FileCheck, title: "Guide Verification", desc: "Review & approve guides" },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Real-time statistics" },
  { icon: Shield, title: "Safety Monitoring", desc: "Harassment alerts" },
  { icon: Settings, title: "System Settings", desc: "Configure platform" },
];

const techStack = [
  { name: "React.js", desc: "UI Framework", color: "bg-rafiq-sky" },
  { name: "TypeScript", desc: "Type-safe code", color: "bg-primary" },
  { name: "Tailwind CSS", desc: "Styling", color: "bg-secondary" },
  { name: "Vite", desc: "Build tool", color: "bg-rafiq-gold" },
];

const WebPlatformSlide = () => {
  return (
    <section id="web-tech" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <Monitor className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Web <span className="text-gradient-gold">Platform</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Modern admin dashboard built with React and TypeScript
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing Background */}
            <motion.div 
              className="absolute -inset-8 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            {/* Browser Frame */}
            <div className="relative rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 p-1 shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-gray-700 rounded-t-lg p-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 h-6 rounded bg-gray-600 mx-4 flex items-center px-3">
                  <span className="text-xs text-gray-400">admin.rafiq.app</span>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="bg-background rounded-b-lg p-4 min-h-[400px]">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-lg font-bold text-foreground">Admin Dashboard</p>
                    <p className="text-xs text-muted-foreground">RAFIQ Management</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-muted" />
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                  </div>
                </div>
                
                {/* Stats Row */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[
                    { value: "1,234", label: "Tourists", color: "bg-rafiq-sky/20" },
                    { value: "89", label: "Guides", color: "bg-rafiq-gold/20" },
                    { value: "156", label: "Bookings", color: "bg-secondary/20" },
                    { value: "4.8", label: "Rating", color: "bg-green-100" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className={`${stat.color} rounded-lg p-2 text-center`}
                    >
                      <p className="text-sm font-bold text-foreground">{stat.value}</p>
                      <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Main Content */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Chart Area */}
                  <div className="col-span-2 bg-muted/50 rounded-lg p-3">
                    <p className="text-xs font-semibold text-foreground mb-2">Bookings Overview</p>
                    <div className="flex items-end justify-between h-24 gap-1">
                      {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                          className="flex-1 bg-gradient-to-t from-primary to-secondary rounded-t"
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Side Panel */}
                  <div className="space-y-2">
                    <div className="bg-muted/50 rounded-lg p-2">
                      <p className="text-[10px] font-semibold text-foreground">Pending</p>
                      <p className="text-lg font-bold text-secondary">12</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-2">
                      <p className="text-[10px] font-semibold text-foreground">Alerts</p>
                      <p className="text-lg font-bold text-destructive">3</p>
                    </div>
                  </div>
                </div>
                
                {/* Table Preview */}
                <div className="mt-3 bg-muted/30 rounded-lg p-2">
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground border-b border-border pb-1 mb-1">
                    <span className="w-20">Guide</span>
                    <span className="w-16">Status</span>
                    <span className="w-12">Rating</span>
                  </div>
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex justify-between items-center py-1">
                      <div className="w-20 h-2 rounded bg-muted" />
                      <div className="w-10 h-2 rounded bg-green-200" />
                      <div className="w-8 h-2 rounded bg-rafiq-gold/30" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tech Stack & Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tech Stack */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">Tech Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50"
                  >
                    <div className={`w-3 h-3 rounded-full ${tech.color}`} />
                    <div>
                      <p className="font-semibold text-foreground text-sm">{tech.name}</p>
                      <p className="text-xs text-muted-foreground">{tech.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Admin Features */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">Admin Features</h3>
              <div className="space-y-3">
                {adminFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-foreground">{feature.title}</span>
                    <span className="text-sm text-muted-foreground">— {feature.desc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebPlatformSlide;
