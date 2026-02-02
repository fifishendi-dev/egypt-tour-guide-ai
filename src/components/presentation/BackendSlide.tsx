import { motion } from "framer-motion";
import { Database, Server, Cloud, Lock, HardDrive, Code } from "lucide-react";

const backendStack = [
  { name: ".NET Framework API", desc: "RESTful Backend", icon: Code, color: "bg-primary" },
  { name: "MySQL", desc: "Relational Database", icon: Database, color: "bg-rafiq-gold" },
  { name: "MongoDB", desc: "NoSQL Database", icon: Database, color: "bg-secondary" },
  { name: "Cloud Storage", desc: "Media Files", icon: HardDrive, color: "bg-rafiq-sky" },
];

const BackendSlide = () => {
  return (
    <section id="backend-tech" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-gold/20 text-rafiq-gold px-4 py-2 rounded-full mb-4">
            <Database className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Backend & <span className="text-gradient-gold">Database</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-4 mb-8"
          >
            {backendStack.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 text-center group hover:shadow-lg transition-shadow"
                >
                  <div className={`w-12 h-12 rounded-2xl ${tech.color}/20 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${tech.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h4 className="font-display font-bold text-foreground text-sm">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{tech.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Server className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">System Architecture</h3>
            </div>
            
            {/* Architecture Diagram */}
            <div className="space-y-4">
              {/* Client Layer */}
              <div className="flex justify-center gap-6">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="px-6 py-3 rounded-xl bg-rafiq-sky/20 border border-rafiq-sky/30 text-center"
                >
                  <p className="text-sm font-bold text-foreground">📱 Mobile App</p>
                  <p className="text-xs text-muted-foreground">Flutter</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="px-6 py-3 rounded-xl bg-primary/20 border border-primary/30 text-center"
                >
                  <p className="text-sm font-bold text-foreground">💻 Web Admin</p>
                  <p className="text-xs text-muted-foreground">React</p>
                </motion.div>
              </div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="w-0.5 h-6 bg-gradient-to-b from-muted-foreground/50 to-transparent"
                />
              </div>
              
              {/* API Layer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex justify-center"
              >
                <div className="px-8 py-4 rounded-xl bg-secondary/20 border border-secondary/30 text-center">
                  <p className="text-sm font-bold text-foreground">⚡ API Gateway</p>
                  <p className="text-xs text-muted-foreground">.NET Framework API / REST</p>
                </div>
              </motion.div>
              
              {/* Arrow */}
              <div className="flex justify-center">
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="w-0.5 h-6 bg-gradient-to-b from-muted-foreground/50 to-transparent"
                />
              </div>
              
              {/* Backend Services */}
              <div className="flex justify-center gap-4 flex-wrap">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="px-5 py-3 rounded-lg bg-rafiq-gold/20 border border-rafiq-gold/30 text-center"
                >
                  <p className="text-xs font-bold text-foreground">🗄️ MySQL</p>
                  <p className="text-[10px] text-muted-foreground">Relational Data</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75 }}
                  className="px-5 py-3 rounded-lg bg-secondary/20 border border-secondary/30 text-center"
                >
                  <p className="text-xs font-bold text-foreground">🍃 MongoDB</p>
                  <p className="text-[10px] text-muted-foreground">NoSQL Data</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="px-5 py-3 rounded-lg bg-rafiq-coral/20 border border-rafiq-coral/30 text-center"
                >
                  <p className="text-xs font-bold text-foreground">🧠 AI Services</p>
                  <p className="text-[10px] text-muted-foreground">ML Models</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.85 }}
                  className="px-5 py-3 rounded-lg bg-green-100 border border-green-200 text-center"
                >
                  <p className="text-xs font-bold text-foreground">📁 Cloud Storage</p>
                  <p className="text-[10px] text-muted-foreground">Media Files</p>
                </motion.div>
              </div>
            </div>
            
            {/* Security Note */}
            <div className="mt-6 p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
              <Lock className="w-5 h-5 text-primary" />
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Security:</strong> JWT Authentication, Encrypted connections, Role-based access
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackendSlide;
