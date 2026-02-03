import { motion } from "framer-motion";
import { Sparkles, CheckCircle, XCircle, Trophy, Target } from "lucide-react";

const modelComparison = [
  {
    model: "Phi-3.5-mini-instruct",
    provider: "Microsoft",
    params: "3.8B",
    context: "128K",
    speed: "Fast",
    accuracy: "High",
    memory: "~4GB",
    passRate: "75.0%",
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
    accuracy: "Medium",
    memory: "~8GB",
    passRate: "50.0%",
    selected: false,
    pros: ["Better knowledge", "Multilingual", "Larger model"],
    cons: ["Higher VRAM", "Slower", "Lower pass rate"]
  },
  {
    model: "Mistral-Nemo-2407",
    provider: "Mistral AI",
    params: "12B",
    context: "128K",
    speed: "Slower",
    accuracy: "Lower",
    memory: "~12GB",
    passRate: "25.0%",
    selected: false,
    pros: ["Large model size"],
    cons: ["High VRAM", "Slowest", "Lowest pass rate"]
  },
];

const languageResults = [
  { language: "German", passed: 2, total: 2, percentage: 100 },
  { language: "English", passed: 2, total: 2, percentage: 100 },
  { language: "Spanish", passed: 1, total: 2, percentage: 50 },
  { language: "French", passed: 1, total: 2, percentage: 50 },
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
          className="text-center mb-8"
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
          {/* Best Model Recommendation Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-4 mb-6 bg-gradient-to-r from-rafiq-gold/20 to-secondary/20 border-2 border-rafiq-gold/50"
          >
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <Trophy className="w-8 h-8 text-rafiq-gold" />
              <div className="text-center">
                <h3 className="font-display font-bold text-foreground text-lg">Best Model Recommendation</h3>
                <p className="text-2xl font-bold text-secondary">microsoft/Phi-3.5-mini-instruct</p>
                <p className="text-sm text-muted-foreground">Overall Pass Rate: <span className="text-rafiq-gold font-bold">75.0%</span></p>
              </div>
              <Trophy className="w-8 h-8 text-rafiq-gold" />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Model Ranking */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-5"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-secondary" />
                Model Ranking
              </h3>
              
              <div className="space-y-3">
                {modelComparison.map((m, index) => (
                  <motion.div
                    key={m.model}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className={`p-3 rounded-xl ${m.selected ? 'bg-secondary/10 border-2 border-secondary' : 'bg-muted/30'}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                          index === 0 ? 'bg-rafiq-gold' : index === 1 ? 'bg-gray-400' : 'bg-amber-700'
                        }`}>
                          {index + 1}
                        </div>
                        <div>
                          <p className={`font-bold text-sm ${m.selected ? 'text-secondary' : 'text-foreground'}`}>
                            {m.model.split('/').pop()}
                          </p>
                          <p className="text-[10px] text-muted-foreground">{m.provider} • {m.params} params</p>
                        </div>
                      </div>
                      <div className={`text-lg font-bold ${
                        parseFloat(m.passRate) >= 70 ? 'text-green-500' :
                        parseFloat(m.passRate) >= 50 ? 'text-rafiq-gold' : 'text-red-500'
                      }`}>
                        {m.passRate}
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          index === 0 ? 'bg-green-500' : index === 1 ? 'bg-rafiq-gold' : 'bg-red-400'
                        }`}
                        initial={{ width: 0 }}
                        whileInView={{ width: m.passRate }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Language Performance */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-5"
            >
              <h3 className="text-lg font-display font-bold text-foreground mb-4">
                Language Performance (Phi-3.5)
              </h3>
              
              <div className="space-y-3">
                {languageResults.map((lang, index) => (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-3 rounded-xl bg-muted/30"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-foreground">{lang.language}</span>
                      <span className={`text-sm font-bold ${lang.percentage === 100 ? 'text-green-500' : 'text-rafiq-gold'}`}>
                        {lang.passed}/{lang.total} ({lang.percentage}%)
                      </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${lang.percentage === 100 ? 'bg-green-500' : 'bg-rafiq-gold'}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Why Phi */}
              <div className="mt-4 p-3 rounded-xl bg-secondary/10 border border-secondary/30">
                <h4 className="font-bold text-foreground text-sm mb-2">Why Phi-3.5-mini?</h4>
                <div className="grid grid-cols-2 gap-1">
                  {whyPhi.slice(0, 4).map((reason) => (
                    <div key={reason} className="flex items-center gap-1">
                      <CheckCircle className="w-3 h-3 text-secondary flex-shrink-0" />
                      <span className="text-[10px] text-muted-foreground">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-5 mt-6"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">Detailed Comparison</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-3 font-bold text-foreground">Model</th>
                    <th className="text-center py-2 px-3 font-bold text-foreground">Params</th>
                    <th className="text-center py-2 px-3 font-bold text-foreground">Speed</th>
                    <th className="text-center py-2 px-3 font-bold text-foreground">Memory</th>
                    <th className="text-center py-2 px-3 font-bold text-foreground">Pass Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparison.map((m, index) => (
                    <tr
                      key={m.model}
                      className={`border-b border-border/50 ${m.selected ? 'bg-secondary/10' : ''}`}
                    >
                      <td className={`py-2 px-3 ${m.selected ? 'font-bold text-secondary' : 'text-foreground'}`}>
                        {m.model.split('/').pop()?.replace('-Instruct', '')}
                        {m.selected && <span className="ml-2 text-xs text-rafiq-gold">★</span>}
                      </td>
                      <td className="text-center py-2 px-3 text-muted-foreground">{m.params}</td>
                      <td className="text-center py-2 px-3">
                        <span className={`px-2 py-0.5 rounded-full text-xs ${
                          m.speed === 'Fast' ? 'bg-green-100 text-green-700' :
                          m.speed === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {m.speed}
                        </span>
                      </td>
                      <td className="text-center py-2 px-3 text-muted-foreground">{m.memory}</td>
                      <td className="text-center py-2 px-3">
                        <span className={`font-bold ${
                          parseFloat(m.passRate) >= 70 ? 'text-green-500' :
                          parseFloat(m.passRate) >= 50 ? 'text-rafiq-gold' : 'text-red-500'
                        }`}>
                          {m.passRate}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhiModelSlide;
