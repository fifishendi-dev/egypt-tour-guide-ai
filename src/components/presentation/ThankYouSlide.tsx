import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

// Confetti particle component
const Confetti = ({ delay, x, color }: { delay: number; x: number; color: string }) => (
  <motion.div
    className="absolute w-3 h-3 rounded-sm"
    style={{ 
      backgroundColor: color,
      left: `${x}%`,
      top: '-5%'
    }}
    initial={{ y: -20, rotate: 0, opacity: 0 }}
    animate={{ 
      y: ['0vh', '100vh'],
      rotate: [0, 360, 720],
      opacity: [0, 1, 1, 0]
    }}
    transition={{
      duration: 4,
      delay: delay,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 2
    }}
  />
);

// Firework particle
const Firework = ({ x, y, delay }: { x: number; y: number; delay: number }) => {
  const colors = ['#FFD93D', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'];
  
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, delay: delay, repeat: Infinity, repeatDelay: 3 }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: colors[i % colors.length] }}
          initial={{ x: 0, y: 0 }}
          animate={{ 
            x: Math.cos((i * 45) * Math.PI / 180) * 60,
            y: Math.sin((i * 45) * Math.PI / 180) * 60,
            opacity: [1, 0]
          }}
          transition={{ duration: 0.8, delay: delay + 0.3, repeat: Infinity, repeatDelay: 3.2 }}
        />
      ))}
    </motion.div>
  );
};

// Sparkle component
const Sparkle = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [0, 1, 0],
      opacity: [0, 1, 0]
    }}
    transition={{
      duration: 1,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 1.5
    }}
  />
);

const ThankYouSlide = () => {
  const [showEffects, setShowEffects] = useState(false);
  
  const confettiColors = ['#FFD93D', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];
  
  useEffect(() => {
    const timer = setTimeout(() => setShowEffects(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="thank-you" className="min-h-screen py-16 bg-gradient-to-br from-primary via-secondary to-rafiq-coral relative overflow-hidden flex items-center justify-center">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/80 via-secondary/80 to-rafiq-coral/80"
        animate={{
          background: [
            'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, #FF7F50 100%)',
            'linear-gradient(135deg, #FF7F50 0%, hsl(var(--primary)) 50%, hsl(var(--secondary)) 100%)',
            'linear-gradient(135deg, hsl(var(--secondary)) 0%, #FF7F50 50%, hsl(var(--primary)) 100%)',
            'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, #FF7F50 100%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Confetti */}
      {showEffects && [...Array(30)].map((_, i) => (
        <Confetti 
          key={i} 
          delay={i * 0.2} 
          x={Math.random() * 100} 
          color={confettiColors[i % confettiColors.length]} 
        />
      ))}
      
      {/* Fireworks */}
      {showEffects && (
        <>
          <Firework x={20} y={30} delay={0} />
          <Firework x={80} y={25} delay={1} />
          <Firework x={50} y={20} delay={2} />
          <Firework x={15} y={60} delay={1.5} />
          <Firework x={85} y={55} delay={0.5} />
        </>
      )}
      
      {/* Sparkles */}
      {showEffects && [...Array(20)].map((_, i) => (
        <Sparkle 
          key={i} 
          x={Math.random() * 100} 
          y={Math.random() * 100} 
          delay={i * 0.3} 
        />
      ))}
      
      {/* Main content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.3
          }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-8"
            style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Thank You!
          </motion.h1>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 text-white/90"
        >
          <span className="text-lg">Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <Heart className="w-6 h-6 text-white fill-white" />
          </motion.div>
          <span className="text-lg">by Team RAFIQ</span>
        </motion.div>
        
        {/* Decorative rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border-2 border-white/10"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border-2 border-white/10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.05, 0.2] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border-2 border-white/10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.02, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default ThankYouSlide;
