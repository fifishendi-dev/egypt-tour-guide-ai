import { motion } from "framer-motion";
import { CheckCircle, Rocket, HelpCircle, Heart } from "lucide-react";
import rafiqLogo from "@/assets/rafiq-logo.png";

const ConclusionSlide = () => {
  return (
    <section id="conclusion" className="min-h-screen py-20 bg-hero-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-rafiq-gold/10 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 text-primary-foreground px-4 py-2 rounded-full mb-6">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">06</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">
            Conclusion
          </h2>
        </motion.div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 mb-8 max-w-4xl mx-auto bg-white/90"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">What We've Built</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Uber-like platform for tour guides in Egypt",
              "AI-powered guide assessment with Whisper & XLM-RoBERTa",
              "Multilingual matching (99+ languages supported)",
              "Real-time safety monitoring system",
              "Admin dashboard for guide verification",
              "Scalable architecture ready for production",
            ].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Work */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 mb-8 max-w-4xl mx-auto bg-white/90"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-secondary" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">Future Work (Semester 2)</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Payment Integration", desc: "Secure payment gateway" },
              { title: "Advanced Analytics", desc: "Business intelligence dashboard" },
              { title: "Chat System", desc: "Real-time messaging" },
              { title: "Reviews & Ratings", desc: "Comprehensive feedback system" },
              { title: "Trip History", desc: "Past tours & memories" },
              { title: "Multi-country", desc: "Expand beyond Egypt" },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-muted/50 text-center">
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Q&A Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="glass-card p-12 bg-white/90">
            <div className="w-16 h-16 rounded-2xl bg-rafiq-gold/20 flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-8 h-8 text-rafiq-gold" />
            </div>
            <h3 className="text-3xl font-display font-bold text-foreground mb-4">Questions?</h3>
            <p className="text-muted-foreground mb-8">
              We'd love to hear your thoughts and answer any questions about RAFIQ
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
                className="w-32 h-32 mx-auto object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Thank You */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-primary-foreground/80 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-rafiq-coral fill-rafiq-coral" /> by Team RAFIQ
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ConclusionSlide;
