import { motion } from "framer-motion";
import { Cpu, Smartphone, Globe, Database, Brain } from "lucide-react";

const technologies = {
  mobile: {
    title: "Mobile App",
    icon: Smartphone,
    color: "bg-rafiq-sky/20",
    iconColor: "text-rafiq-sky",
    items: [
      { name: "Flutter", desc: "Cross-platform framework" },
      { name: "Dart", desc: "Programming language" },
      { name: "Provider/Riverpod", desc: "State management" },
      { name: "Google Maps API", desc: "Navigation & routing" },
    ]
  },
  web: {
    title: "Web Platform",
    icon: Globe,
    color: "bg-primary/20",
    iconColor: "text-primary",
    items: [
      { name: "React.js", desc: "Admin dashboard" },
      { name: "TypeScript", desc: "Type-safe development" },
      { name: "Tailwind CSS", desc: "Styling framework" },
      { name: "Vite", desc: "Build tool" },
    ]
  },
  backend: {
    title: "Backend & Database",
    icon: Database,
    color: "bg-rafiq-gold/20",
    iconColor: "text-rafiq-gold",
    items: [
      { name: "Firebase/Supabase", desc: "Backend as a Service" },
      { name: "PostgreSQL", desc: "Relational database" },
      { name: "Cloud Functions", desc: "Serverless logic" },
      { name: "Cloud Storage", desc: "Media files" },
    ]
  },
  ai: {
    title: "AI & ML Models",
    icon: Brain,
    color: "bg-rafiq-coral/20",
    iconColor: "text-rafiq-coral",
    items: [
      { name: "OpenAI Whisper", desc: "Speech-to-Text (STT)" },
      { name: "XLM-RoBERTa", desc: "Language proficiency assessment" },
      { name: "TBD Model", desc: "Answer validation" },
      { name: "YOLO/MediaPipe", desc: "Harassment detection" },
    ]
  },
};

const TechnologiesSlide = () => {
  return (
    <section id="technologies" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
            <Cpu className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">03</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Tech <span className="text-gradient-gold">Stack</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Cutting-edge technologies powering the RAFIQ ecosystem
          </p>
        </motion.div>

        {/* Tech Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {Object.entries(technologies).map(([key, tech], index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${tech.color} flex items-center justify-center`}>
                    <Icon className={`w-7 h-7 ${tech.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground">{tech.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {tech.items.map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 glass-card p-8 max-w-5xl mx-auto"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">System Architecture</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            {[
              { label: "Mobile App", sub: "(Flutter)" },
              { label: "→", sub: "" },
              { label: "API Gateway", sub: "(Cloud Functions)" },
              { label: "→", sub: "" },
              { label: "Database", sub: "(PostgreSQL)" },
              { label: "↔", sub: "" },
              { label: "AI Services", sub: "(ML Models)" },
            ].map((item, index) => (
              <div key={index} className={`text-center ${item.sub === "" ? "text-2xl text-muted-foreground" : ""}`}>
                <div className={`${item.sub ? "px-6 py-4 rounded-xl bg-primary/10 border border-primary/20" : ""}`}>
                  <span className="font-semibold text-foreground">{item.label}</span>
                  {item.sub && <p className="text-xs text-muted-foreground mt-1">{item.sub}</p>}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnologiesSlide;
