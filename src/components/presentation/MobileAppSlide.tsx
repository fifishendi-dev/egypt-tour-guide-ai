import { motion } from "framer-motion";
import { Smartphone, Map, Layers, Zap } from "lucide-react";

const techStack = [
  { name: "Flutter", desc: "Cross-platform framework", icon: Smartphone },
  { name: "Dart", desc: "Programming language", icon: Zap },
  { name: "Flutter Maps", desc: "Maps package", icon: Map },
  { name: "BLoC", desc: "State management", icon: Layers },
];

const MobileAppSlide = () => {
  return (
    <section id="mobile-tech" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-sky/20 text-rafiq-sky px-4 py-2 rounded-full mb-4">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Mobile Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Mobile <span className="text-gradient-gold">App</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Tech Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 mb-8"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-muted/50 text-center hover:bg-rafiq-sky/10 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-rafiq-sky/20 flex items-center justify-center mx-auto mb-3">
                    <tech.icon className="w-6 h-6 text-rafiq-sky" />
                  </div>
                  <h4 className="font-bold text-foreground">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-[480px] bg-gradient-to-b from-primary to-primary/80 rounded-[3rem] p-3 shadow-2xl">
                <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="h-8 bg-primary flex items-center justify-center">
                    <div className="w-20 h-4 bg-foreground/20 rounded-full" />
                  </div>
                  
                  {/* App Content Preview */}
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Welcome back</p>
                        <p className="font-bold text-foreground text-sm">Tourist App</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-rafiq-sky/20" />
                    </div>
                    
                    {/* Search */}
                    <div className="h-10 rounded-xl bg-muted flex items-center px-3 gap-2">
                      <div className="w-4 h-4 rounded bg-muted-foreground/30" />
                      <span className="text-xs text-muted-foreground">Search guides...</span>
                    </div>
                    
                    {/* Featured */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-foreground">Popular Destinations</p>
                      <div className="h-24 rounded-xl bg-gradient-to-br from-rafiq-gold/30 to-rafiq-coral/30" />
                    </div>
                    
                    {/* Categories */}
                    <div className="flex gap-2">
                      {["All", "Ancient", "Modern"].map((cat) => (
                        <div key={cat} className="px-3 py-1.5 rounded-full bg-muted text-xs text-foreground">
                          {cat}
                        </div>
                      ))}
                    </div>
                    
                    {/* Guide Cards */}
                    <div className="space-y-2">
                      {[1, 2].map((i) => (
                        <div key={i} className="p-2 rounded-lg bg-muted/50 flex gap-2">
                          <div className="w-12 h-12 rounded-lg bg-primary/20 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="h-2 w-20 bg-foreground/20 rounded" />
                            <div className="h-2 w-14 bg-muted-foreground/30 rounded mt-1" />
                            <div className="flex gap-1 mt-2">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <div key={s} className="w-2 h-2 rounded-full bg-rafiq-gold" />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSlide;
