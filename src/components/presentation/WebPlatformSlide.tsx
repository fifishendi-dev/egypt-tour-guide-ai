import { motion } from "framer-motion";
import { Monitor, Code, Layout, BarChart3, Globe, Check } from "lucide-react";
import webDashboard from "@/assets/web-dashboard.png";
import webAnalytics from "@/assets/web-analytics.png";

const techStack = [
  { category: "Framework", tool: "React", icon: Code },
  { category: "Styling", tool: "Tailwind CSS", icon: Layout },
  { category: "Data Visualization", tool: "Recharts", icon: BarChart3 },
  { category: "API Communication", tool: "Axios", icon: Globe },
  { category: "State Management", tool: "React Hooks", icon: Code },
  { category: "Routing", tool: "React Router", icon: Globe },
  { category: "Validation", tool: "Yup", icon: Check },
  { category: "Build Tool", tool: "Vite", icon: Code },
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
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <Monitor className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Web Development</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Web <span className="text-gradient-gold">Platform</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Tech Stack Grid */}
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
                  key={tech.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="p-3 rounded-xl bg-muted/50 text-center"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mx-auto mb-2">
                    <tech.icon className="w-4 h-4 text-primary" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm">{tech.tool}</h4>
                  <p className="text-[10px] text-muted-foreground">{tech.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dashboard Screenshots */}
          <div className="grid md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-3"
            >
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2 text-sm">
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
              <h4 className="font-bold text-foreground mb-2 flex items-center gap-2 text-sm">
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
        </div>
      </div>
    </section>
  );
};

export default WebPlatformSlide;
