import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, Clock, AlertCircle } from "lucide-react";

const progressItems = [
  { 
    feature: "Project Analysis", 
    progress: 100, 
    status: "completed",
    details: "Use cases, requirements, and diagrams completed"
  },
  { 
    feature: "UI/UX Design", 
    progress: 90, 
    status: "completed",
    details: "Mobile & web designs finalized"
  },
  { 
    feature: "Mobile App Development", 
    progress: 50, 
    status: "in-progress",
    details: "Core features in development"
  },
  { 
    feature: "Web Platform", 
    progress: 50, 
    status: "in-progress",
    details: "Admin dashboard in development"
  },
  { 
    feature: "AI Model Integration", 
    progress: 40, 
    status: "in-progress",
    details: "Whisper & Phi-3.5 integration"
  },
  { 
    feature: "Database Implementation", 
    progress: 35, 
    status: "in-progress",
    details: "Schema design, implementing tables"
  },
  { 
    feature: "Harassment Detection Camera", 
    progress: 0, 
    status: "pending",
    details: "Planned for next phase"
  },
];

const ProgressSlide = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-secondary" />;
      default:
        return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress === 100) return 'bg-green-500';
    if (progress >= 50) return 'bg-secondary';
    if (progress > 0) return 'bg-rafiq-gold';
    return 'bg-muted';
  };

  return (
    <section id="progress" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
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
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Current Status</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Project <span className="text-gradient-gold">Progress</span>
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
            <div className="space-y-4">
              {progressItems.map((item, index) => (
                <motion.div
                  key={item.feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-muted/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(item.status)}
                      <span className="font-bold text-foreground text-sm">{item.feature}</span>
                    </div>
                    <span className={`text-sm font-bold ${
                      item.progress === 100 ? 'text-green-500' :
                      item.progress > 0 ? 'text-secondary' : 'text-muted-foreground'
                    }`}>
                      {item.progress}%
                    </span>
                  </div>
                  
                  <div className="relative h-2 bg-muted rounded-full overflow-hidden mb-2">
                    <motion.div
                      className={`absolute top-0 left-0 h-full rounded-full ${getProgressColor(item.progress)}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                  
                  <p className="text-xs text-muted-foreground">{item.details}</p>
                </motion.div>
              ))}
            </div>

            {/* Overall Progress */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground">Overall Project Progress</span>
                <span className="text-xl font-bold text-secondary">~52%</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSlide;
