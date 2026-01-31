import { motion } from "framer-motion";
import { RefreshCw, CheckCircle, Clock, AlertCircle } from "lucide-react";

const sprints = [
  { 
    sprint: "Sprint 1", 
    task: "Ideation & Planning", 
    status: "completed",
    weeks: "Week 1-2",
    deliverables: ["Choosing idea", "Discuss technologies", "Define main functions"]
  },
  { 
    sprint: "Sprint 2", 
    task: "Design & Research", 
    status: "completed",
    weeks: "Week 3-4",
    deliverables: ["UI/UX Design", "ERD", "Model research", "Interview Questions", "Rating System", "Login/Signup"]
  },
  { 
    sprint: "Sprint 3", 
    task: "ML & Core Features", 
    status: "completed",
    weeks: "Week 5-6",
    deliverables: ["ML Model Testing", "UI Editing", "STT/TTS Research", "Driver/Helper/User Login"]
  },
  { 
    sprint: "Sprint 4", 
    task: "Integration & Web", 
    status: "in-progress",
    weeks: "Week 7-8",
    deliverables: ["ERD Update", "Use Case", "Schema", "Web UI Update", "Interview on App", "Questions in JSON"]
  },
  { 
    sprint: "Sprint 5", 
    task: "Documentation", 
    status: "pending",
    weeks: "Week 9-10",
    deliverables: ["Start Documentation", "Final Testing", "Deployment Prep"]
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
          className="text-center mb-10"
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
            className="glass-card p-6 mb-8"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6">
              {/* Agile Info */}
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold text-foreground mb-3">Agile Scrum Methodology</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  We follow Agile Scrum with 2-week sprints, enabling iterative development and continuous feedback.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {agilePoints.map((point) => (
                    <div key={point.title} className="p-3 rounded-lg bg-muted/50">
                      <p className="font-semibold text-foreground text-sm">{point.title}</p>
                      <p className="text-xs text-muted-foreground">{point.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scrum Cycle Visual */}
              <div className="relative w-48 h-48 flex-shrink-0">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {["Plan", "Design", "Develop", "Test"].map((phase, index) => {
                    const angle = (index * 90 - 45) * (Math.PI / 180);
                    const x = 70 + 50 * Math.cos(angle);
                    const y = 70 + 50 * Math.sin(angle);
                    return (
                      <div
                        key={phase}
                        className="absolute w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-xs font-bold text-primary"
                        style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
                      >
                        {phase}
                      </div>
                    );
                  })}
                </motion.div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rafiq-gold to-rafiq-coral flex items-center justify-center">
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sprints Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">Sprint Timeline</h3>
            
            <div className="grid md:grid-cols-5 gap-3">
              {sprints.map((sprint, index) => {
                const StatusIcon = sprint.status === "completed" 
                  ? CheckCircle 
                  : sprint.status === "in-progress" 
                    ? Clock 
                    : AlertCircle;
                
                const statusColors = {
                  completed: "bg-green-100 border-green-300 text-green-700",
                  "in-progress": "bg-secondary/20 border-secondary text-secondary",
                  pending: "bg-muted border-border text-muted-foreground",
                };

                return (
                  <motion.div
                    key={sprint.sprint}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`glass-card p-4 border-2 ${statusColors[sprint.status as keyof typeof statusColors]}`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <StatusIcon className="w-4 h-4" />
                      <span className="font-bold text-sm">{sprint.sprint}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {sprint.weeks}
                    </span>
                    <h4 className="font-display font-bold text-foreground text-sm mt-2 mb-2">{sprint.task}</h4>
                    <div className="flex flex-wrap gap-1">
                      {sprint.deliverables.map((d) => (
                        <span key={d} className="text-xs px-1.5 py-0.5 rounded bg-background text-muted-foreground">
                          {d}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodologySlide;
