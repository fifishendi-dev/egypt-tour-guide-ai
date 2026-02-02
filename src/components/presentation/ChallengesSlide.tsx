import { motion } from "framer-motion";
import { AlertTriangle, Lightbulb, CheckCircle } from "lucide-react";

const challenges = [
  {
    challenge: "Real-time Speech Processing",
    description: "Processing audio in real-time while maintaining accuracy",
    solution: "Whisper-v3-Turbo with optimized inference pipeline",
    status: "solved"
  },
  {
    challenge: "Model Selection",
    description: "Choosing the right LLM for answer evaluation",
    solution: "Phi-3.5-mini for balance of speed and accuracy",
    status: "solved"
  },
  {
    challenge: "Multi-accent Support",
    description: "Handling diverse English accents from different regions",
    solution: "Whisper's robust accent handling capabilities",
    status: "in-progress"
  },
  {
    challenge: "Low Latency Requirements",
    description: "Maintaining responsive UX during interview",
    solution: "Edge deployment with local model inference",
    status: "in-progress"
  },
  {
    challenge: "Answer Validation",
    description: "Ensuring factual correctness of guide responses",
    solution: "Knowledge base integration with LLM verification",
    status: "research"
  },
  {
    challenge: "Harassment Detection",
    description: "Real-time in-vehicle safety monitoring system",
    solution: "Computer vision with live camera feed analysis",
    status: "pending"
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
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {challenges.map((item, index) => (
              <motion.div
                key={item.challenge}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-5"
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rafiq-coral" />
                    <h3 className="font-bold text-foreground text-sm">{item.challenge}</h3>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    item.status === 'solved' ? 'bg-green-100 text-green-700' :
                    item.status === 'in-progress' ? 'bg-secondary/20 text-secondary' :
                    item.status === 'research' ? 'bg-rafiq-gold/20 text-rafiq-gold' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {item.status === 'solved' ? '✓ Solved' :
                     item.status === 'in-progress' ? '⏳ In Progress' :
                     item.status === 'research' ? '🔬 Research' : '○ Pending'}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                
                {/* Solution */}
                <div className="flex items-start gap-2 p-2 rounded-lg bg-secondary/10">
                  <Lightbulb className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground">{item.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSlide;
