import { motion } from "framer-motion";
import rafiqLogo from "@/assets/rafiq-logo.png";

const TitleSlide = () => {
  return (
    <section className="slide-section bg-hero-gradient relative">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pattern-dots opacity-30" />
      
      {/* Floating Pyramids Background */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-rafiq-gold/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-32 left-20 w-48 h-48 bg-rafiq-gold/15 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Logo with Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <img 
              src={rafiqLogo} 
              alt="RAFIQ Logo" 
              className="w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl"
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-primary-foreground/80 font-light mb-6 tracking-wide"
          >
            AI-Powered Tour Guide Platform for Egypt
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-32 h-1 bg-gradient-to-r from-transparent via-rafiq-gold to-transparent mb-8"
          />

          {/* Semester Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col gap-2"
          >
            <p className="text-lg text-primary-foreground/90 font-medium">
              Graduation Project - Semester 1
            </p>
            <p className="text-primary-foreground/60 text-sm">
              Computer Science Department
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ 
              opacity: { delay: 1.2, duration: 0.5 },
              y: { delay: 1.2, duration: 1.5, repeat: Infinity }
            }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2 text-primary-foreground/60">
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TitleSlide;
