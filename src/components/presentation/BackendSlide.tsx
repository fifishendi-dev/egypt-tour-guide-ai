import { motion } from "framer-motion";
import { Database, Lock, Code } from "lucide-react";

const backendStack = [
  { name: ".NET Framework API", desc: "RESTful Backend", icon: Code, color: "bg-primary" },
  { name: "MySQL", desc: "Relational Database", icon: Database, color: "bg-rafiq-gold" },
  { name: "MongoDB", desc: "NoSQL Database", icon: Database, color: "bg-secondary" },
  { name: "Cloud Storage", desc: "Media Files", icon: Database, color: "bg-rafiq-sky" },
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

        <div className="max-w-5xl mx-auto">
          {/* Tech Stack Cards */}
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

          {/* Database Purpose Explanation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">Database Architecture</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* MySQL */}
              <div className="p-4 rounded-xl bg-rafiq-gold/10 border border-rafiq-gold/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-rafiq-gold/20 flex items-center justify-center">
                    <Database className="w-4 h-4 text-rafiq-gold" />
                  </div>
                  <h4 className="font-bold text-foreground">MySQL (Relational)</h4>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• User accounts & authentication</li>
                  <li>• Booking & transaction records</li>
                  <li>• Guide profiles & ratings</li>
                  <li>• Payment information</li>
                </ul>
              </div>

              {/* MongoDB */}
              <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-secondary/20 flex items-center justify-center">
                    <Database className="w-4 h-4 text-secondary" />
                  </div>
                  <h4 className="font-bold text-foreground">MongoDB (NoSQL)</h4>
                </div>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>• AI interview transcripts</li>
                  <li>• Chat messages & logs</li>
                  <li>• Flexible document storage</li>
                  <li>• Real-time data streams</li>
                </ul>
              </div>
            </div>
            
            {/* Security Note */}
            <div className="mt-4 p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
              <Lock className="w-5 h-5 text-primary" />
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">Security:</strong> JWT Authentication, Encrypted connections, Role-based access control
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BackendSlide;
