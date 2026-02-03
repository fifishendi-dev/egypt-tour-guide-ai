import { motion } from "framer-motion";
import { RefreshCw, CheckCircle } from "lucide-react";

const sprints = [
  { 
    sprint: "Sprint 1", 
    weeks: "Week 1-2",
    deliverables: ["Choosing idea", "Discuss technologies", "Main functions"]
  },
  { 
    sprint: "Sprint 2", 
    weeks: "Week 3-4",
    deliverables: ["UI/UX Design", "ERD", "Model research", "Interview Questions", "Rating System", "Login/Signup"]
  },
  { 
    sprint: "Sprint 3", 
    weeks: "Week 5-6",
    deliverables: ["ML Model Testing", "UI Editing", "STT/TTS Research", "Driver/Helper/User Login"]
  },
  { 
    sprint: "Sprint 4", 
    weeks: "Week 7-8",
    deliverables: ["ERD/Use Case/Schema", "Web UI Update", "Interview on App", "Questions in JSON"]
  },
  { 
    sprint: "Sprint 5", 
    weeks: "Week 9-10",
    deliverables: ["Start Documentation"]
  },
];

const agilePoints = [
  { title: "Iterative Development", desc: "Continuous improvement through repeated cycles" },
  { title: "Customer Collaboration", desc: "Regular feedback from stakeholders" },
  { title: "Responding to Change", desc: "Flexibility to adapt requirements" },
  { title: "Working Software", desc: "Delivering functional increments" },
];

const MethodologySlide = () => {
  return (
    <section id="methodology" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-coral/20 text-rafiq-coral px-4 py-2 rounded-full mb-4">
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">How We Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Methodology & <span className="text-gradient-gold">Sprints</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left - Agile Overview */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Scrum Cycle Visual */}
                <div className="relative w-24 h-24 flex-shrink-0">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    {["Plan", "Design", "Dev", "Test"].map((phase, index) => {
                      const angle = (index * 90 - 45) * (Math.PI / 180);
                      const x = 48 + 30 * Math.cos(angle);
                      const y = 48 + 30 * Math.sin(angle);
                      return (
                        <div
                          key={phase}
                          className="absolute w-8 h-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-[8px] font-bold text-primary"
                          style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                        >
                          {phase}
                        </div>
                      );
                    })}
                  </motion.div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rafiq-gold to-rafiq-coral flex items-center justify-center">
                      <RefreshCw className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-1">Agile Scrum</h3>
                  <p className="text-muted-foreground text-xs">
                    2-week sprints with iterative development and continuous feedback
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {agilePoints.map((point) => (
                  <div key={point.title} className="p-2 rounded-lg bg-muted/50">
                    <p className="font-semibold text-foreground text-xs">{point.title}</p>
                    <p className="text-[10px] text-muted-foreground">{point.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Vertical Sprint Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-5"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">Sprint Timeline</h3>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rafiq-gold via-secondary to-primary" />
                
                <div className="space-y-3">
                  {sprints.map((sprint, index) => (
                    <motion.div
                      key={sprint.sprint}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      {/* Circle with checkmark */}
                      <div className="relative z-10 w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      
                      {/* Sprint Content */}
                      <div className="flex-1 p-3 rounded-xl bg-muted/50 border-l-2 border-green-400">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-sm text-foreground">{sprint.sprint}</span>
                          <span className="text-[10px] text-green-600 font-semibold px-2 py-0.5 bg-green-100 rounded-full">
                            ✓ Completed
                          </span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">{sprint.weeks}</span>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {sprint.deliverables.map((d) => (
                            <span key={d} className="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySlide;
