import { motion } from "framer-motion";
import { 
  Settings, 
  GitBranch,
  Mic,
  Brain,
  Camera,
  ArrowRight,
  Zap,
  CheckCircle
} from "lucide-react";

const FunctionalRequirementsSlide = () => {
  return (
    <section id="functional-requirements" className="min-h-screen py-16 bg-background flex items-center">
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
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">02</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Functional <span className="text-gradient-gold">Requirements</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* AI Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <GitBranch className="w-5 h-5 text-primary" />
              </div>
              AI Assessment Pipeline
            </h3>
            
            {/* Pipeline Visualization */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 items-center">
              {[
                { icon: Mic, label: "Recording", desc: "60s/topic", color: "bg-rafiq-coral/20", iconColor: "text-rafiq-coral" },
                { icon: Brain, label: "Whisper", desc: "Speech→Text", color: "bg-primary/20", iconColor: "text-primary" },
                { icon: Zap, label: "Language", desc: "Detection", color: "bg-rafiq-gold/20", iconColor: "text-rafiq-gold" },
                { icon: Brain, label: "XLM-RoBERTa", desc: "Level Check", color: "bg-rafiq-sky/20", iconColor: "text-rafiq-sky" },
                { icon: CheckCircle, label: "Validation", desc: "Final Score", color: "bg-green-100", iconColor: "text-green-600" },
              ].map((step, index) => (
                <div key={step.label} className="flex items-center gap-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-3 rounded-xl ${step.color} text-center flex-1`}
                  >
                    <step.icon className={`w-6 h-6 ${step.iconColor} mx-auto mb-1`} />
                    <p className="font-semibold text-foreground text-xs">{step.label}</p>
                    <p className="text-[10px] text-muted-foreground">{step.desc}</p>
                  </motion.div>
                  {index < 4 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0 hidden md:block" />
                  )}
                </div>
              ))}
            </div>

            {/* Interview Process */}
            <div className="mt-4 p-4 rounded-xl bg-muted/50 border border-border">
              <h4 className="font-semibold text-foreground text-sm mb-2">Interview Process</h4>
              <div className="grid md:grid-cols-3 gap-3 text-xs text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-[10px] font-bold">1</span>
                  <span>6 topics with random questions</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-[10px] font-bold">2</span>
                  <span>60-second thinking time</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-[10px] font-bold">3</span>
                  <span>AI evaluates language + accuracy</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Safety Feature */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6 border-l-4 border-rafiq-coral"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-rafiq-coral/20 flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-rafiq-coral" />
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  Safety: In-Vehicle Harassment Detection
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Real-time camera monitoring using computer vision to detect potential harassment during trips.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Computer Vision", "Real-time Alerts", "Emergency Response", "Privacy-Focused"].map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-full bg-rafiq-coral/10 text-xs text-rafiq-coral font-medium">
                      {tag}
                    </span>
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

export default FunctionalRequirementsSlide;
