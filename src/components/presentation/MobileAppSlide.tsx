import { motion } from "framer-motion";
import { Smartphone, MapPin, Star, Calendar, MessageSquare, Camera } from "lucide-react";

const mobileFeatures = [
  { icon: MapPin, title: "Guide Discovery", desc: "Find nearby verified guides" },
  { icon: Calendar, title: "Easy Booking", desc: "Schedule tours instantly" },
  { icon: Star, title: "Ratings & Reviews", desc: "Transparent feedback system" },
  { icon: MessageSquare, title: "In-App Chat", desc: "Direct communication" },
  { icon: Camera, title: "AI Interview", desc: "Automated guide assessment" },
];

const techStack = [
  { name: "Flutter", desc: "Cross-platform framework", color: "bg-rafiq-sky" },
  { name: "Dart", desc: "Programming language", color: "bg-primary" },
  { name: "Provider/Riverpod", desc: "State management", color: "bg-secondary" },
  { name: "Google Maps API", desc: "Navigation & routing", color: "bg-rafiq-gold" },
];

const MobileAppSlide = () => {
  return (
    <section id="mobile-tech" className="min-h-screen py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-sky/20 text-rafiq-sky px-4 py-2 rounded-full mb-6">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Mobile <span className="text-gradient-gold">Application</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Built with Flutter for seamless cross-platform experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glowing Background */}
              <motion.div 
                className="absolute -inset-8 bg-gradient-to-r from-rafiq-sky/20 to-primary/20 rounded-full blur-3xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Phone Frame */}
              <div className="relative w-64 h-[520px] rounded-[3rem] bg-gradient-to-b from-gray-800 to-gray-900 p-3 shadow-2xl">
                {/* Screen */}
                <div className="w-full h-full rounded-[2.5rem] bg-background overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-8 bg-primary flex items-center justify-center">
                    <div className="w-20 h-5 rounded-full bg-gray-800" />
                  </div>
                  
                  {/* App Content */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Welcome to</p>
                        <p className="text-lg font-bold text-foreground">RAFIQ</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-rafiq-gold/20 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-rafiq-gold" />
                      </div>
                    </div>
                    
                    {/* Search */}
                    <div className="h-10 rounded-xl bg-muted flex items-center px-3 gap-2">
                      <div className="w-4 h-4 rounded bg-muted-foreground/30" />
                      <div className="h-3 w-24 rounded bg-muted-foreground/30" />
                    </div>
                    
                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { color: "bg-rafiq-sky/20", icon: "📍" },
                        { color: "bg-rafiq-gold/20", icon: "📅" },
                        { color: "bg-secondary/20", icon: "⭐" },
                        { color: "bg-rafiq-coral/20", icon: "💬" },
                      ].map((card, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                          className={`${card.color} rounded-xl p-3 text-center`}
                        >
                          <span className="text-2xl">{card.icon}</span>
                          <div className="h-2 w-12 rounded bg-foreground/20 mx-auto mt-2" />
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Guide Preview */}
                    <div className="bg-muted/50 rounded-xl p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary/20" />
                        <div className="flex-1">
                          <div className="h-3 w-20 rounded bg-foreground/30 mb-1" />
                          <div className="h-2 w-16 rounded bg-muted-foreground/30" />
                        </div>
                        <div className="flex gap-0.5">
                          {[1,2,3,4,5].map(i => (
                            <div key={i} className="w-2 h-2 rounded-full bg-rafiq-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Side Features */}
              {mobileFeatures.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.15 }}
                  className="absolute right-[-180px] glass-card p-3 w-40 hidden xl:block"
                  style={{ top: 80 + index * 90 }}
                >
                  <div className="flex items-center gap-2">
                    <feature.icon className="w-4 h-4 text-rafiq-sky" />
                    <span className="text-xs font-semibold text-foreground">{feature.title}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1">{feature.desc}</p>
                </motion.div>
              ))}
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

            {/* User Types */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">User Interfaces</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
                  <p className="text-3xl mb-2">🧳</p>
                  <p className="font-bold text-foreground">Tourist App</p>
                  <p className="text-xs text-muted-foreground">Book & manage tours</p>
                </div>
                <div className="p-4 rounded-xl bg-rafiq-gold/10 border border-rafiq-gold/20 text-center">
                  <p className="text-3xl mb-2">🎭</p>
                  <p className="font-bold text-foreground">Guide App</p>
                  <p className="text-xs text-muted-foreground">Manage bookings</p>
                </div>
              </div>
            </div>

            {/* Features List */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-display font-bold text-foreground mb-4">Key Features</h3>
              <div className="space-y-3">
                {mobileFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <feature.icon className="w-5 h-5 text-rafiq-sky" />
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

export default MobileAppSlide;
