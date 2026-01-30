import { motion } from "framer-motion";
import { Brain, Mic, Languages, CheckCircle2, Camera, AlertTriangle, ArrowRight, Cpu } from "lucide-react";

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
    name: "XLM-RoBERTa",
    purpose: "Language Proficiency",
    desc: "Evaluates language fluency and proficiency level",
    icon: Languages,
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
    name: "YOLO/MediaPipe",
    purpose: "Harassment Detection",
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
  { step: 5, title: "Language Detection", desc: "Identify spoken language", icon: "🌍" },
  { step: 6, title: "XLM-RoBERTa", desc: "Assess proficiency level", icon: "📊" },
  { step: 7, title: "Answer Validation", desc: "Check factual correctness", icon: "✅" },
  { step: 8, title: "Final Score", desc: "Combined assessment result", icon: "🏆" },
];

const AISlide = () => {
  return (
    <section id="ai-tech" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30">
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
            <Brain className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">AI & Machine Learning</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            AI <span className="text-gradient-gold">Pipeline</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Automated guide assessment using state-of-the-art machine learning models
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* AI Models Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {aiModels.map((model, index) => {
              const Icon = model.icon;
              return (
                <motion.div
                  key={model.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 relative overflow-hidden group"
                >
                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full ${
                    model.status === 'in-progress' 
                      ? 'bg-secondary/20 text-secondary' 
                      : model.status === 'research' 
                        ? 'bg-rafiq-gold/20 text-rafiq-gold' 
                        : 'bg-muted text-muted-foreground'
                  }`}>
                    {model.status === 'in-progress' ? '⏳ In Progress' : model.status === 'research' ? '🔬 Research' : '○ Pending'}
                  </div>
                  
                  <div className={`w-14 h-14 rounded-2xl ${model.color}/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${model.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-1">{model.name}</h4>
                  <p className="text-sm text-secondary font-medium mb-2">{model.purpose}</p>
                  <p className="text-xs text-muted-foreground">{model.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* AI Interview Pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-rafiq-coral/20 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-rafiq-coral" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">Interview Pipeline Flow</h3>
            </div>
            
            {/* Pipeline Steps */}
            <div className="relative">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-rafiq-gold via-secondary to-rafiq-coral" style={{ zIndex: 0 }} />
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                {pipelineSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="relative z-10 flex flex-col items-center"
                  >
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg mb-3">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    
                    {/* Step Info */}
                    <p className="text-xs font-bold text-foreground text-center">{step.title}</p>
                    <p className="text-[10px] text-muted-foreground text-center mt-1">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Pipeline Description */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-secondary/10 border border-secondary/20">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Languages className="w-4 h-4 text-secondary" />
                  Language First Approach
                </h4>
                <p className="text-sm text-muted-foreground">
                  We first detect the language and assess proficiency before validating answer correctness 
                  to avoid wasting resources on invalid responses.
                </p>
              </div>
              
              <div className="p-4 rounded-xl bg-rafiq-coral/10 border border-rafiq-coral/20">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rafiq-coral" />
                  Safety Monitoring
                </h4>
                <p className="text-sm text-muted-foreground">
                  In-vehicle camera uses computer vision (YOLO/MediaPipe) to detect potential 
                  harassment situations during tours in real-time.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 6 Topics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-8 mt-8"
          >
            <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">Interview Topics (6 Categories)</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { topic: "Egyptian History", emoji: "🏛️" },
                { topic: "Landmarks", emoji: "🗿" },
                { topic: "Culture & Traditions", emoji: "🎭" },
                { topic: "Local Cuisine", emoji: "🍽️" },
                { topic: "Tourist Safety", emoji: "🛡️" },
                { topic: "Practical Info", emoji: "ℹ️" },
              ].map((item, index) => (
                <motion.div
                  key={item.topic}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="p-4 rounded-xl bg-muted/50 text-center hover:bg-muted transition-colors"
                >
                  <span className="text-3xl">{item.emoji}</span>
                  <p className="text-xs font-medium text-foreground mt-2">{item.topic}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AISlide;
