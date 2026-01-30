import { motion } from "framer-motion";
import { Database, Server, Cloud, Lock, Zap, HardDrive } from "lucide-react";

const backendStack = [
  { name: "Firebase/Supabase", desc: "Backend as a Service", icon: Cloud, color: "bg-rafiq-gold" },
  { name: "PostgreSQL", desc: "Relational Database", icon: Database, color: "bg-primary" },
  { name: "Cloud Functions", desc: "Serverless Logic", icon: Zap, color: "bg-secondary" },
  { name: "Cloud Storage", desc: "Media Files", icon: HardDrive, color: "bg-rafiq-sky" },
];

const databaseTables = [
  { name: "users", fields: ["id", "name", "email", "role", "created_at"] },
  { name: "guides", fields: ["id", "user_id", "languages", "rating", "verified"] },
  { name: "tourists", fields: ["id", "user_id", "preferences", "nationality"] },
  { name: "bookings", fields: ["id", "tourist_id", "guide_id", "date", "status"] },
  { name: "reviews", fields: ["id", "booking_id", "rating", "comment"] },
  { name: "interviews", fields: ["id", "guide_id", "score", "passed"] },
];

const BackendSlide = () => {
  return (
    <section id="backend-tech" className="min-h-screen py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-gold/20 text-rafiq-gold px-4 py-2 rounded-full mb-6">
            <Database className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Backend & <span className="text-gradient-gold">Database</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Scalable cloud infrastructure with PostgreSQL database
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-4 gap-6 mb-12"
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
                  className="glass-card p-6 text-center group hover:shadow-lg transition-shadow"
                >
                  <div className={`w-14 h-14 rounded-2xl ${tech.color}/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${tech.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h4 className="font-display font-bold text-foreground">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{tech.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* ERD Diagram */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">ERD Schema</h3>
              </div>
              
              {/* Simplified ERD Visualization */}
              <div className="relative bg-muted/30 rounded-xl p-4 min-h-[300px]">
                <div className="grid grid-cols-2 gap-4">
                  {databaseTables.map((table, index) => (
                    <motion.div
                      key={table.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="bg-background rounded-lg border border-border overflow-hidden"
                    >
                      <div className="bg-primary px-3 py-1.5">
                        <p className="text-xs font-bold text-primary-foreground">{table.name}</p>
                      </div>
                      <div className="p-2 space-y-1">
                        {table.fields.slice(0, 3).map((field) => (
                          <p key={field} className="text-[10px] text-muted-foreground font-mono">
                            {field === 'id' ? '🔑' : '•'} {field}
                          </p>
                        ))}
                        {table.fields.length > 3 && (
                          <p className="text-[10px] text-muted-foreground">+ {table.fields.length - 3} more</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Connection Lines Overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 10 }}>
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="hsl(var(--muted-foreground))" opacity="0.3" />
                    </marker>
                  </defs>
                </svg>
              </div>
              
              <p className="text-xs text-muted-foreground mt-4 text-center italic">
                * Full ERD diagram available in documentation
              </p>
            </motion.div>

            {/* Architecture */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Server className="w-5 h-5 text-secondary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">Architecture</h3>
              </div>
              
              {/* Architecture Diagram */}
              <div className="space-y-4">
                {/* Client Layer */}
                <div className="flex justify-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="px-4 py-2 rounded-lg bg-rafiq-sky/20 border border-rafiq-sky/30 text-center"
                  >
                    <p className="text-xs font-bold text-foreground">📱 Mobile App</p>
                    <p className="text-[10px] text-muted-foreground">Flutter</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="px-4 py-2 rounded-lg bg-primary/20 border border-primary/30 text-center"
                  >
                    <p className="text-xs font-bold text-foreground">💻 Web Admin</p>
                    <p className="text-[10px] text-muted-foreground">React</p>
                  </motion.div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="w-0.5 h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent"
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
                  <div className="px-6 py-3 rounded-xl bg-secondary/20 border border-secondary/30 text-center">
                    <p className="text-sm font-bold text-foreground">⚡ API Gateway</p>
                    <p className="text-xs text-muted-foreground">Cloud Functions / REST API</p>
                  </div>
                </motion.div>
                
                {/* Arrow */}
                <div className="flex justify-center">
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="w-0.5 h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent"
                  />
                </div>
                
                {/* Backend Services */}
                <div className="flex justify-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    className="px-4 py-2 rounded-lg bg-rafiq-gold/20 border border-rafiq-gold/30 text-center"
                  >
                    <p className="text-xs font-bold text-foreground">🗄️ Database</p>
                    <p className="text-[10px] text-muted-foreground">PostgreSQL</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="px-4 py-2 rounded-lg bg-rafiq-coral/20 border border-rafiq-coral/30 text-center"
                  >
                    <p className="text-xs font-bold text-foreground">🧠 AI Services</p>
                    <p className="text-[10px] text-muted-foreground">ML Models</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    className="px-4 py-2 rounded-lg bg-green-100 border border-green-200 text-center"
                  >
                    <p className="text-xs font-bold text-foreground">📁 Storage</p>
                    <p className="text-[10px] text-muted-foreground">Cloud</p>
                  </motion.div>
                </div>
              </div>
              
              {/* Security Note */}
              <div className="mt-6 p-3 rounded-xl bg-primary/5 border border-primary/20 flex items-center gap-3">
                <Lock className="w-5 h-5 text-primary" />
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Security:</strong> Row Level Security (RLS), JWT Authentication, Encrypted connections
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackendSlide;
