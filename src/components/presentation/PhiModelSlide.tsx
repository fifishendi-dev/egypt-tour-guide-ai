import { motion } from "framer-motion";
import { Sparkles, CheckCircle, XCircle, Minus } from "lucide-react";

const modelComparison = [
  {
    model: "Phi-3.5-mini-instruct",
    provider: "Microsoft",
    params: "3.8B",
    context: "128K",
    speed: "Fast",
    accuracy: "High",
    memory: "~4GB",
    selected: true,
    pros: ["Lightweight", "Fast inference", "Low VRAM", "Good reasoning"],
    cons: ["Smaller knowledge base"]
  },
  {
    model: "Qwen2.5-7B-Instruct",
    provider: "Alibaba",
    params: "7B",
    context: "128K",
    speed: "Medium",
    accuracy: "Higher",
    memory: "~8GB",
    selected: false,
    pros: ["Better knowledge", "Multilingual", "Larger model"],
    cons: ["Higher VRAM", "Slower"]
  },
  {
    model: "Mistral-Nemo-2407",
    provider: "Mistral AI",
    params: "12B",
    context: "128K",
    speed: "Slower",
    accuracy: "Highest",
    memory: "~12GB",
    selected: false,
    pros: ["Best accuracy", "Strong reasoning"],
    cons: ["High VRAM", "Slowest", "Heavy"]
  },
];

const whyPhi = [
  "Optimized for edge deployment on standard hardware",
  "3.8B parameters with 128K context window",
  "Excellent instruction-following capabilities",
  "Low latency for real-time interview assessment",
  "Efficient memory footprint (~4GB VRAM)",
  "Strong performance on reasoning tasks"
];

const PhiModelSlide = () => {
  return (
    <section id="phi-model" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Language Model</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            <span className="text-gradient-gold">Phi-3.5-mini-instruct</span>
          </h2>
          <p className="text-muted-foreground mt-3">Answer Evaluation & Validation Model</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Model Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 mb-8"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">Model Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-3 font-bold text-foreground">Model</th>
                    <th className="text-center py-3 px-3 font-bold text-foreground">Provider</th>
                    <th className="text-center py-3 px-3 font-bold text-foreground">Params</th>
                    <th className="text-center py-3 px-3 font-bold text-foreground">Context</th>
                    <th className="text-center py-3 px-3 font-bold text-foreground">Speed</th>
                    <th className="text-center py-3 px-3 font-bold text-foreground">Memory</th>
                    <th className="text-center py-3 px-3 font-bold text-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map((m, index) => (
                    <motion.tr
                      key={m.model}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className={`border-b border-border/50 ${m.selected ? 'bg-secondary/10' : ''}`}
                    >
                      <td className={`py-3 px-3 ${m.selected ? 'font-bold text-secondary' : 'text-foreground'}`}>
                        {m.model}
                      </td>
                      <td className="text-center py-3 px-3 text-muted-foreground">{m.provider}</td>
                      <td className="text-center py-3 px-3 text-muted-foreground">{m.params}</td>
                      <td className="text-center py-3 px-3 text-muted-foreground">{m.context}</td>
                      <td className="text-center py-3 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          m.speed === 'Fast' ? 'bg-green-100 text-green-700' :
                          m.speed === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {m.speed}
                        </span>
                      </td>
                      <td className="text-center py-3 px-3 text-muted-foreground">{m.memory}</td>
                      <td className="text-center py-3 px-3">
                        {m.selected ? (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-secondary/20 text-secondary font-bold">
                            ✓ Selected
                          </span>
                        ) : (
                          <span className="px-2 py-0.5 rounded-full text-xs bg-muted text-muted-foreground">
                            Alternative
                          </span>
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Pros/Cons Comparison */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {modelComparison.map((m, index) => (
              <motion.div
                key={m.model}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`glass-card p-4 ${m.selected ? 'ring-2 ring-secondary' : ''}`}
              >
                <h4 className={`font-bold text-sm mb-3 ${m.selected ? 'text-secondary' : 'text-foreground'}`}>
                  {m.model.split('-')[0]}
                  {m.selected && <span className="ml-2 text-xs">✓</span>}
                </h4>
                
                <div className="space-y-2 mb-3">
                  {m.pros.map((pro) => (
                    <div key={pro} className="flex items-center gap-2 text-xs">
                      <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                      <span className="text-foreground">{pro}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-2">
                  {m.cons.map((con) => (
                    <div key={con} className="flex items-center gap-2 text-xs">
                      <XCircle className="w-3 h-3 text-red-400 flex-shrink-0" />
                      <span className="text-muted-foreground">{con}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Phi */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">Why Phi-3.5-mini-instruct?</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {whyPhi.map((reason, index) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                  <span className="text-sm text-foreground">{reason}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhiModelSlide;
