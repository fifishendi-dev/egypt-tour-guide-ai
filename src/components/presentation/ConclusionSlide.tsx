import { motion } from "framer-motion";
import { CheckCircle, HelpCircle } from "lucide-react";
import rafiqLogo from "@/assets/rafiq-logo.png";

const summaryPoints = [
  "Problem: Tourist safety & guide verification challenges in Egypt",
  "Solution: RAFIQ - AI-powered tour guide platform",
  "Mobile App: Flutter with BLoC for tourists & guides",
  "Web Platform: React admin dashboard with analytics",
  "Backend: .NET API with MySQL/MongoDB",
  "AI Pipeline: Whisper STT + Phi-3.5-mini evaluation",
  "Interview System: 6 topics covering Egyptian tourism knowledge",
  "Safety Feature: In-vehicle harassment detection (planned)",
];

const ConclusionSlide = () => {
  return (
    <section id="conclusion" className="min-h-screen py-16 bg-hero-gradient relative overflow-hidden flex items-center">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Summary</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground">
            Conclusion
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-6 mb-8 bg-white/90"
          >
            <h3 className="text-lg font-display font-bold text-foreground mb-4 text-center">What We Covered</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {summaryPoints.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Q&A Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <div className="glass-card p-8 bg-white/90 inline-block">
              <div className="w-14 h-14 rounded-2xl bg-rafiq-gold/20 flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-7 h-7 text-rafiq-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-3">Questions?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                We'd love to hear your thoughts about RAFIQ
              </p>
              
              {/* Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <img 
                  src={rafiqLogo} 
                  alt="RAFIQ" 
                  className="w-24 h-24 mx-auto object-contain"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSlide;
