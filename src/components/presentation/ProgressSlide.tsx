import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, Clock, AlertCircle } from "lucide-react";

const milestones = [
  { phase: "Phase 1", title: "Planning & Design", status: "completed", progress: 100 },
  { phase: "Phase 2", title: "UI/UX Development", status: "completed", progress: 100 },
  { phase: "Phase 3", title: "Core App Features", status: "completed", progress: 100 },
  { phase: "Phase 4", title: "AI Model Integration", status: "in-progress", progress: 60 },
  { phase: "Phase 5", title: "Safety Features", status: "pending", progress: 0 },
  { phase: "Phase 6", title: "Testing & Launch", status: "pending", progress: 0 },
];

const completedTasks = [
  "Project requirements documentation",
  "UI/UX wireframes and prototypes",
  "Database schema design (ERD)",
  "Mobile app basic structure",
  "User authentication flow",
  "Admin dashboard layout",
  "Guide registration flow",
  "Tourist booking interface",
];

const inProgressTasks = [
  "Whisper STT integration",
  "XLM-RoBERTa language assessment",
  "Interview recording system",
  "Answer validation model research",
];

const ProgressSlide = () => {
  const overallProgress = Math.round(
    milestones.reduce((acc, m) => acc + m.progress, 0) / milestones.length
  );

  return (
    <section id="progress" className="min-h-screen py-20 bg-background">
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
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">04</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Project <span className="text-gradient-gold">Progress</span>
          </h2>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 mb-8 max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-display font-bold text-foreground">Overall Progress</h3>
            <span className="text-3xl font-bold text-secondary">{overallProgress}%</span>
          </div>
          <div className="h-4 rounded-full bg-muted overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${overallProgress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="h-full rounded-full bg-gradient-to-r from-primary via-secondary to-rafiq-gold"
            />
          </div>
        </motion.div>

        {/* Milestones Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 mb-8 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6">Milestones</h3>
          <div className="grid md:grid-cols-6 gap-4">
            {milestones.map((milestone, index) => {
              const StatusIcon = milestone.status === "completed" 
                ? CheckCircle 
                : milestone.status === "in-progress" 
                  ? Clock 
                  : AlertCircle;
              
              const statusColors = {
                completed: "bg-green-100 text-green-600 border-green-200",
                "in-progress": "bg-secondary/20 text-secondary border-secondary/30",
                pending: "bg-muted text-muted-foreground border-border",
              };

              return (
                <motion.div
                  key={milestone.phase}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={`p-4 rounded-xl border text-center ${statusColors[milestone.status as keyof typeof statusColors]}`}
                >
                  <StatusIcon className="w-6 h-6 mx-auto mb-2" />
                  <p className="font-semibold text-sm">{milestone.phase}</p>
                  <p className="text-xs mt-1 opacity-80">{milestone.title}</p>
                  <p className="text-xs font-bold mt-2">{milestone.progress}%</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Tasks Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Completed Tasks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Completed</h3>
            </div>
            <ul className="space-y-3">
              {completedTasks.map((task, index) => (
                <motion.li
                  key={task}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-green-600" />
                  </span>
                  {task}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* In Progress Tasks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">In Progress</h3>
            </div>
            <ul className="space-y-3">
              {inProgressTasks.map((task, index) => (
                <motion.li
                  key={task}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-3 h-3 text-secondary" />
                  </span>
                  {task}
                </motion.li>
              ))}
            </ul>
            
            {/* Current Focus */}
            <div className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
              <p className="text-sm text-secondary font-medium">
                🎯 Current Focus: AI model integration for guide assessment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSlide;
