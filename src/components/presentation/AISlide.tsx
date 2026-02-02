import { motion } from "framer-motion";
import { Brain, Mic, CheckCircle2, Camera, Cpu, Sparkles } from "lucide-react";

const aiModels = [
  {
    name: "OpenAI Whisper",
    purpose: "Speech-to-Text (STT)",
    desc: "Converts guide's voice responses to text for analysis",
    icon: Mic,
    color: "bg-rafiq-sky",
    status: "in-progress"
  },
  {
    name: "Phi-3.5-mini-instruct",
    purpose: "Answer Evaluation",
    desc: "Evaluates answer quality and correctness",
    icon: Sparkles,
    color: "bg-primary",
    status: "in-progress"
  },
  {
    name: "Answer Validation",
    purpose: "Correctness Check",
    desc: "Validates if answers are factually correct",
    icon: CheckCircle2,
    color: "bg-secondary",
    status: "research"
  },
  {
    name: "Harassment Detection",
    purpose: "Safety Monitoring",
    desc: "Real-time in-vehicle safety monitoring",
    icon: Camera,
    color: "bg-rafiq-coral",
    status: "pending"
  },
];

const pipelineSteps = [
  { step: 1, title: "Question Display", desc: "Random question from 6 topics shown", icon: "❓" },
  { step: 2, title: "60s Thinking", desc: "Guide has 60 seconds to prepare", icon: "⏱️" },
  { step: 3, title: "Voice Recording", desc: "Guide records voice answer", icon: "🎤" },
  { step: 4, title: "Whisper STT", desc: "Audio converted to text", icon: "📝" },
  { step: 5, title: "Phi-3.5-mini", desc: "Evaluate answer quality", icon: "🧠" },
  { step: 6, title: "Answer Validation", desc: "Check factual correctness", icon: "✅" },
  { step: 7, title: "Final Score", desc: "Calculate overall assessment", icon: "📊" },
  { step: 8, title: "Report Generation", desc: "Generate detailed report", icon: "📋" },
];

const AISlide = () => {
  return (
    <section id="ai-tech" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
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
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">AI & Machine Learning</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            AI <span className="text-gradient-gold">Pipeline</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* AI Interview Pipeline - First */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rafiq-coral/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-rafiq-coral" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Interview Pipeline Flow</h3>
            </div>
            
            {/* Pipeline Steps */}
            <div className="relative">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-rafiq-gold via-secondary to-rafiq-coral" style={{ zIndex: 0 }} />
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
                {pipelineSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    {/* Step Number */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-2">
                      <span className="text-xl">{step.icon}</span>
                    </div>
                    
                    {/* Step Info */}
                    <p className="text-[10px] font-bold text-foreground text-center">{step.title}</p>
                    <p className="text-[8px] text-muted-foreground text-center mt-0.5">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* AI Models Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {aiModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass-card p-5 relative overflow-hidden group"
                >
                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 text-[10px] px-2 py-0.5 rounded-full ${
                    model.status === 'in-progress' 
                      ? 'bg-secondary/20 text-secondary' 
                      : model.status === 'research' 
                        ? 'bg-rafiq-gold/20 text-rafiq-gold' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {model.status === 'in-progress' ? '⏳ Active' : model.status === 'research' ? '🔬 Research' : '○ Pending'}
                  </div>
                  
                  <div className={`w-12 h-12 rounded-2xl ${model.color}/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${model.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h4 className="font-display font-bold text-foreground text-sm mb-1">{model.name}</h4>
                  <p className="text-xs text-secondary font-medium mb-1">{model.purpose}</p>
                  <p className="text-[10px] text-muted-foreground">{model.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISlide;
