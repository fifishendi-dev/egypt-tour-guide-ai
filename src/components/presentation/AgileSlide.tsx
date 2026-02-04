import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const agilePoints = [
  { title: "Iterative Development", desc: "Continuous improvement through repeated cycles" },
  { title: "Customer Collaboration", desc: "Regular feedback from stakeholders" },
  { title: "Responding to Change", desc: "Flexibility to adapt requirements" },
  { title: "Working Software", desc: "Delivering functional increments" },
];

const AgileSlide = () => {
  return (
    <section id="methodology" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-coral/20 text-rafiq-coral px-4 py-2 rounded-full mb-4">
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Agile <span className="text-gradient-gold">Methodology</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Scrum Cycle Visual */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {["Plan", "Design", "Develop", "Test"].map((phase, index) => {
                    const angle = (index * 90 - 45) * (Math.PI / 180);
                    const x = 96 + 60 * Math.cos(angle);
                    const y = 96 + 60 * Math.sin(angle);
                    return (
                      <div
                        key={phase}
                        className="absolute w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-xs font-bold text-primary"
                        style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                      >
                        {phase}
                      </div>
                    );
                  })}
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-rafiq-gold to-rafiq-coral flex items-center justify-center">
                    <RefreshCw className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Agile Scrum Framework</h3>
                <p className="text-muted-foreground mb-6">
                  We follow Agile Scrum methodology with 2-week sprints, enabling iterative development and continuous feedback integration.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {agilePoints.map((point, index) => (
                    <motion.div 
                      key={point.title} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-muted/50 border-l-4 border-primary"
                    >
                      <p className="font-semibold text-foreground">{point.title}</p>
                      <p className="text-sm text-muted-foreground">{point.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgileSlide;
