import { motion } from "framer-motion";
import { CheckCircle, Calendar } from "lucide-react";

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

const SprintsSlide = () => {
  return (
    <section id="sprints" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Development Timeline</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Sprint <span className="text-gradient-gold">Timeline</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6"
          >
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rafiq-gold via-secondary to-primary" />
              
              <div className="space-y-4">
                {sprints.map((sprint, index) => (
                  <motion.div
                    key={sprint.sprint}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Circle with checkmark */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Sprint Content */}
                    <div className="flex-1 p-4 rounded-xl bg-muted/50 border-l-4 border-green-400">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg text-foreground">{sprint.sprint}</span>
                        <span className="text-xs text-green-600 font-semibold px-3 py-1 bg-green-100 rounded-full">
                          ✓ Completed
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{sprint.weeks}</span>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {sprint.deliverables.map((d) => (
                          <span key={d} className="text-xs px-2 py-1 rounded-lg bg-primary/10 text-primary font-medium">
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
    </section>
  );
};

export default SprintsSlide;
