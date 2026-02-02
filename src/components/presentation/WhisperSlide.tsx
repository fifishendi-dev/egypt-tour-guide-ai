import { motion } from "framer-motion";
import { Mic, Zap, Globe, Clock, Shield, Cpu, CheckCircle } from "lucide-react";

const whisperFeatures = [
  { icon: Zap, title: "Real-Time Performance", desc: "No delay between interview questions" },
  { icon: CheckCircle, title: "High Accuracy", desc: "Handles advanced English vocabulary reliably" },
  { icon: Globe, title: "Accent Robustness", desc: "Works well across diverse speaker accents" },
  { icon: Clock, title: "Fluency Metrics", desc: "Word-level timestamps enable WPM & hesitation analysis" },
  { icon: Shield, title: "Privacy First", desc: "Audio processed entirely on local machine" },
  { icon: Cpu, title: "Hardware Efficient", desc: "Runs on standard laptops (~6GB VRAM)" },
];

const whisperVersions = [
  { 
    version: "Whisper Small", 
    params: "244M", 
    speed: "Fast", 
    accuracy: "Good",
    vram: "~2GB",
    useCase: "Quick transcription"
  },
  { 
    version: "Whisper Medium", 
    params: "769M", 
    speed: "Medium", 
    accuracy: "Better",
    vram: "~5GB",
    useCase: "Balanced option"
  },
  { 
    version: "Whisper Large-v3-Turbo", 
    params: "809M", 
    speed: "Optimized", 
    accuracy: "Best",
    vram: "~6GB",
    useCase: "Our choice ✓",
    selected: true
  },
];

const WhisperSlide = () => {
  return (
    <section id="whisper" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-sky/20 text-rafiq-sky px-4 py-2 rounded-full mb-4">
            <Mic className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Speech-to-Text</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Why We Chose <span className="text-gradient-gold">Whisper-v3-Turbo</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-4 mb-8"
          >
            {whisperFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-4 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-rafiq-sky/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-rafiq-sky" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Version Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">Version Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-bold text-foreground">Version</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Parameters</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Speed</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Accuracy</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">VRAM</th>
                    <th className="text-center py-3 px-4 font-bold text-foreground">Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  {whisperVersions.map((v, index) => (
                    <motion.tr
                      key={v.version}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`border-b border-border/50 ${v.selected ? 'bg-secondary/10' : ''}`}
                    >
                      <td className={`py-3 px-4 ${v.selected ? 'font-bold text-secondary' : 'text-foreground'}`}>
                        {v.version}
                      </td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{v.params}</td>
                      <td className="text-center py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          v.speed === 'Fast' ? 'bg-green-100 text-green-700' :
                          v.speed === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-secondary/20 text-secondary'
                        }`}>
                          {v.speed}
                        </span>
                      </td>
                      <td className="text-center py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          v.accuracy === 'Good' ? 'bg-blue-100 text-blue-700' :
                          v.accuracy === 'Better' ? 'bg-indigo-100 text-indigo-700' :
                          'bg-primary/20 text-primary'
                        }`}>
                          {v.accuracy}
                        </span>
                      </td>
                      <td className="text-center py-3 px-4 text-muted-foreground">{v.vram}</td>
                      <td className={`text-center py-3 px-4 ${v.selected ? 'font-bold text-secondary' : 'text-muted-foreground'}`}>
                        {v.useCase}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 rounded-xl bg-secondary/10 border border-secondary/20 text-center">
              <p className="text-sm text-foreground">
                <strong>Selected:</strong> Whisper Large-v3-Turbo - Best balance of speed and accuracy for interview assessment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhisperSlide;
