import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, Clock, AlertCircle } from "lucide-react";

const sprints = [
  { 
    sprint: "Sprint 1", 
    status: "completed",
    weeks: "Week 1-2",
    deliverables: ["Choosing idea", "Discuss technologies", "Main functions"]
  },
  { 
    sprint: "Sprint 2", 
    status: "completed",
    weeks: "Week 3-4",
    deliverables: ["UI/UX Design", "ERD", "Model research", "Interview Questions", "Rating System", "Login/Signup"]
  },
  { 
    sprint: "Sprint 3", 
    status: "completed",
    weeks: "Week 5-6",
    deliverables: ["ML Model Testing", "UI Editing", "STT/TTS Research", "Driver/Helper/User Login"]
  },
  { 
    sprint: "Sprint 4", 
    status: "in-progress",
    weeks: "Week 7-8",
    deliverables: ["ERD/Use Case/Schema", "Web UI Update", "Interview on App", "Questions in JSON"]
  },
  { 
    sprint: "Sprint 5", 
    status: "pending",
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
          {/* Agile Scrum Overview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-5 mb-6"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Agile Info */}
              <div className="flex-1">
                <h3 className="text-lg font-display font-bold text-foreground mb-2">Agile Scrum Methodology</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  We follow Agile Scrum with 2-week sprints, enabling iterative development and continuous feedback.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {agilePoints.map((point) => (
                    <div key={point.title} className="p-2 rounded-lg bg-muted/50">
                      <p className="font-semibold text-foreground text-xs">{point.title}</p>
                      <p className="text-[10px] text-muted-foreground">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scrum Cycle Visual */}
              <div className="relative w-40 h-40 flex-shrink-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {["Plan", "Design", "Develop", "Test"].map((phase, index) => {
                    const angle = (index * 90 - 45) * (Math.PI / 180);
                    const x = 60 + 45 * Math.cos(angle);
                    const y = 60 + 45 * Math.sin(angle);
                    return (
                      <div
                        key={phase}
                        className="absolute w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-[10px] font-bold text-primary"
                        style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                      >
                        {phase}
                      </div>
                    );
                  })}
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rafiq-gold to-rafiq-coral flex items-center justify-center">
                    <RefreshCw className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sprints Timeline - Horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">Sprint Timeline</h3>
            
            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-rafiq-gold via-secondary to-primary hidden md:block" />
              
              <div className="grid grid-cols-5 gap-2">
                {sprints.map((sprint, index) => {
                  const StatusIcon = sprint.status === "completed" 
                    ? CheckCircle 
                    : sprint.status === "in-progress" 
                      ? Clock 
                      : AlertCircle;
                  
                  const statusColors = {
                    completed: "border-green-400",
                    "in-progress": "border-secondary ring-2 ring-secondary/30",
                    pending: "border-muted-foreground/30",
                  };

                  const iconColors = {
                    completed: "bg-green-500",
                    "in-progress": "bg-secondary",
                    pending: "bg-muted-foreground/50",
                  };

                  return (
                    <motion.div
                      key={sprint.sprint}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center"
                    >
                      {/* Circle Icon */}
                      <div className={`w-16 h-16 rounded-full ${iconColors[sprint.status as keyof typeof iconColors]} flex items-center justify-center z-10 shadow-lg`}>
                        <StatusIcon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Sprint Card */}
                      <div className={`glass-card p-3 mt-4 w-full border-2 ${statusColors[sprint.status as keyof typeof statusColors]}`}>
                        <div className="text-center mb-2">
                          <span className="font-bold text-sm text-foreground">{sprint.sprint}</span>
                          <span className="text-[10px] text-muted-foreground block">{sprint.weeks}</span>
                        </div>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {sprint.deliverables.map((d) => (
                            <span key={d} className="text-[9px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySlide;
