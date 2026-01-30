import { motion } from "framer-motion";
import { RefreshCw, Calendar, CheckCircle, Clock, AlertCircle, ArrowRight } from "lucide-react";

const sprints = [
  { 
    sprint: "Sprint 1", 
    task: "Requirements & Design", 
    status: "completed",
    weeks: "Week 1-2",
    deliverables: ["Requirements Doc", "UI/UX Design", "ERD"]
  },
  { 
    sprint: "Sprint 2", 
    task: "Core App Development", 
    status: "completed",
    weeks: "Week 3-4",
    deliverables: ["Auth System", "Basic UI", "Navigation"]
  },
  { 
    sprint: "Sprint 3", 
    task: "AI Integration", 
    status: "in-progress",
    weeks: "Week 5-6",
    deliverables: ["Whisper STT", "XLM-RoBERTa", "Interview Flow"]
  },
  { 
    sprint: "Sprint 4", 
    task: "Testing & Deployment", 
    status: "pending",
    weeks: "Week 7-8",
    deliverables: ["Testing", "Bug Fixes", "Deployment"]
  },
];

const MethodologySlide = () => {
  return (
    <section id="methodology" className="min-h-screen py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-coral/20 text-rafiq-coral px-4 py-2 rounded-full mb-6">
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">How We Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
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
            className="glass-card p-8 mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Agile Diagram */}
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-foreground mb-4">Agile Scrum</h3>
                <p className="text-muted-foreground mb-6">
                  We follow the Agile Scrum methodology with 2-week sprints, enabling iterative development 
                  and continuous feedback integration.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Scrum Framework", "2-Week Sprints", "Daily Standups", "Sprint Reviews", "Retrospectives"].map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Scrum Cycle Visual */}
              <div className="relative w-64 h-64">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {["Plan", "Design", "Develop", "Test"].map((phase, index) => {
                    const angle = (index * 90 - 45) * (Math.PI / 180);
                    const x = 90 + 70 * Math.cos(angle);
                    const y = 90 + 70 * Math.sin(angle);
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
            </div>
          </motion.div>

          {/* Sprints Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-8 text-center">Sprint Timeline</h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-muted hidden md:block" />
              
              <div className="space-y-8">
                {sprints.map((sprint, index) => {
                  const StatusIcon = sprint.status === "completed" 
                    ? CheckCircle 
                    : sprint.status === "in-progress" 
                      ? Clock 
                      : AlertCircle;
                  
                  const statusColors = {
                    completed: "bg-green-100 text-green-600 border-green-200",
                    "in-progress": "bg-secondary/20 text-secondary border-secondary/30",
                    pending: "bg-muted text-muted-foreground border-border",
                  };

                  return (
                    <motion.div
                      key={sprint.sprint}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                      <div className="flex-1">
                        <div className={`glass-card p-6 border-2 ${statusColors[sprint.status as keyof typeof statusColors]}`}>
                          <div className="flex items-center gap-3 mb-3">
                            <StatusIcon className="w-5 h-5" />
                            <span className="font-bold text-lg">{sprint.sprint}</span>
                            <span className="text-xs px-2 py-1 rounded-full bg-muted">{sprint.weeks}</span>
                          </div>
                          <h4 className="text-xl font-display font-bold text-foreground mb-3">{sprint.task}</h4>
                          <div className="flex flex-wrap gap-2">
                            {sprint.deliverables.map((d) => (
                              <span key={d} className="text-xs px-2 py-1 rounded bg-background text-muted-foreground">
                                {d}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      {/* Timeline Node */}
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-background border-4 border-primary items-center justify-center z-10">
                        <span className="text-sm font-bold text-primary">{index + 1}</span>
                      </div>
                      
                      <div className="flex-1 hidden md:block" />
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
