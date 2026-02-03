import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, CheckCircle, Brain, Globe, Smartphone, BarChart3 } from "lucide-react";

const challenges = [
  {
    category: "AI",
    icon: Brain,
    color: "rafiq-coral",
    challenge: "Real-time Speech Processing",
    description: "Processing audio in real-time while maintaining accuracy for interview evaluation",
    solution: "Implemented Whisper-v3-Turbo with optimized inference pipeline for low-latency transcription"
  },
  {
    category: "Web",
    icon: Globe,
    color: "rafiq-sky",
    challenge: "Admin Dashboard Performance",
    description: "Handling large datasets and real-time updates in the admin interface",
    solution: "Used React Query for efficient caching and pagination with Recharts for data visualization"
  },
  {
    category: "Analysis",
    icon: BarChart3,
    color: "rafiq-gold",
    challenge: "Model Selection & Evaluation",
    description: "Choosing the right LLM for accurate answer evaluation across multiple languages",
    solution: "Benchmarked 3 models and selected Phi-3.5-mini for best balance of speed and 75% accuracy"
  },
  {
    category: "Mobile",
    icon: Smartphone,
    color: "secondary",
    challenge: "Cross-platform State Management",
    description: "Maintaining consistent state across different screens and user flows in Flutter",
    solution: "Implemented BLoC pattern for predictable state management and clean architecture"
  },
];

const ChallengesSlide = () => {
  return (
    <section id="challenges" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
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
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Project Challenges</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Challenges & <span className="text-gradient-gold">Solutions</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
            Key technical challenges we solved during development
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.challenge}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-5 relative overflow-hidden"
                >
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-${item.color}/20`}>
                      <Icon className={`w-4 h-4 text-${item.color}`} />
                      <span className={`text-xs font-bold text-${item.color}`}>{item.category}</span>
                    </div>
                    <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-100">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                      <span className="text-[10px] font-bold text-green-700">Solved</span>
                    </div>
                  </div>

                  {/* Challenge */}
                  <div className="flex items-start gap-2 mb-3">
                    <AlertTriangle className="w-4 h-4 text-rafiq-coral flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-foreground text-sm">{item.challenge}</h3>
                      <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Solution */}
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                    <Lightbulb className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-secondary">Solution:</span>
                      <p className="text-xs text-foreground mt-0.5">{item.solution}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8 p-4 rounded-xl bg-gradient-to-r from-secondary/10 to-rafiq-gold/10 border border-secondary/30 text-center"
          >
            <p className="font-bold text-foreground">
              💡 All challenges were successfully addressed through research, testing, and iterative development
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSlide;
