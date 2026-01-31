import { motion } from "framer-motion";
import { Monitor, Code, Database, Layout } from "lucide-react";
import webDashboard from "@/assets/web-dashboard.png";
import webAnalytics from "@/assets/web-analytics.png";
import erdDiagram from "@/assets/erd-diagram.png";

const techStack = [
  { name: "React", desc: "UI Framework", icon: Code },
  { name: "TypeScript", desc: "Type Safety", icon: Code },
  { name: "Tailwind CSS", desc: "Styling", icon: Layout },
  { name: "PostgreSQL", desc: "Database", icon: Database },
];

const WebPlatformSlide = () => {
  return (
    <section id="web-tech" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <Monitor className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Web Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Web <span className="text-gradient-gold">Platform</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-4"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-3 rounded-xl bg-muted/50 text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <tech.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">{tech.name}</h4>
                  <p className="text-xs text-muted-foreground">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard Screenshots */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-3"
            >
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Layout className="w-4 h-4 text-primary" />
                Admin Dashboard
              </h4>
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src={webDashboard} 
                  alt="Admin Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-3"
            >
              <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Monitor className="w-4 h-4 text-secondary" />
                Analytics View
              </h4>
              <div className="rounded-lg overflow-hidden border border-border">
                <img 
                  src={webAnalytics} 
                  alt="Analytics Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* ERD in Web Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-3"
          >
            <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <Database className="w-4 h-4 text-rafiq-gold" />
              Database ERD
            </h4>
            <div className="rounded-lg overflow-hidden bg-white">
              <img 
                src={erdDiagram} 
                alt="Entity Relationship Diagram" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WebPlatformSlide;
