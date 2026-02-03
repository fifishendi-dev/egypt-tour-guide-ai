import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Heart, Sparkles, Star, PartyPopper } from "lucide-react";

// Confetti particle component with more variety
const Confetti = ({ delay, x, color, size }: { delay: number; x: number; color: string; size: number }) => (
  <motion.div
    className="absolute rounded-sm"
    style={{ 
      backgroundColor: color,
      width: size,
      height: size,
      left: `${x}%`,
      top: '-5%'
    }}
    initial={{ y: -20, rotate: 0, opacity: 0 }}
    animate={{ 
      y: ['0vh', '110vh'],
      rotate: [0, 360, 720, 1080],
      opacity: [0, 1, 1, 0.8, 0]
    }}
    transition={{
      duration: 5 + Math.random() * 2,
      delay: delay,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: 1
    }}
  />
);

// Firework particle with more burst effect
const Firework = ({ x, y, delay }: { x: number; y: number; delay: number }) => {
  const colors = ['#FFD93D', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#FF69B4'];
  
  return (
    <motion.div
      className="absolute"
      style={{ left: `${x}%`, top: `${y}%` }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: [0, 1.2, 0], opacity: [0, 1, 0] }}
      transition={{ duration: 1.8, delay: delay, repeat: Infinity, repeatDelay: 2.5 }}
    >
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: colors[i % colors.length] }}
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{ 
            x: Math.cos((i * 30) * Math.PI / 180) * 80,
            y: Math.sin((i * 30) * Math.PI / 180) * 80,
            scale: [1, 1.5, 0],
            opacity: [1, 0.8, 0]
          }}
          transition={{ duration: 1, delay: delay + 0.2, repeat: Infinity, repeatDelay: 2.7 }}
        />
      ))}
    </motion.div>
  );
};

// Sparkle component
const Sparkle = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
  <motion.div
    className="absolute"
    style={{ left: `${x}%`, top: `${y}%` }}
    initial={{ scale: 0, opacity: 0, rotate: 0 }}
    animate={{ 
      scale: [0, 1.5, 0],
      opacity: [0, 1, 0],
      rotate: [0, 180, 360]
    }}
    transition={{
      duration: 1.5,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 2
    }}
  >
    <Star className="w-3 h-3 text-yellow-300 fill-yellow-300" />
  </motion.div>
);

// Floating emoji
const FloatingEmoji = ({ emoji, x, delay }: { emoji: string; x: number; delay: number }) => (
  <motion.div
    className="absolute text-3xl"
    style={{ left: `${x}%`, bottom: '0%' }}
    initial={{ y: 0, opacity: 0 }}
    animate={{ 
      y: [0, -400, -600],
      opacity: [0, 1, 1, 0],
      scale: [0.5, 1.2, 1]
    }}
    transition={{
      duration: 4,
      delay: delay,
      repeat: Infinity,
      repeatDelay: 3
    }}
  >
    {emoji}
  </motion.div>
);

const ThankYouSlide = () => {
  const [showEffects, setShowEffects] = useState(false);
  
  const confettiColors = ['#FFD93D', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#FF69B4', '#87CEEB'];
  const emojis = ['🎉', '✨', '🌟', '🎊', '💫', '🏆', '👏', '🎈'];
  
  useEffect(() => {
    const timer = setTimeout(() => setShowEffects(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="thank-you" className="min-h-screen py-16 relative overflow-hidden flex items-center justify-center">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 30%, #3d7ab5 60%, #ff7f50 100%)',
            'linear-gradient(135deg, #ff7f50 0%, #1e3a5f 30%, #2d5a87 60%, #3d7ab5 100%)',
            'linear-gradient(135deg, #3d7ab5 0%, #ff7f50 30%, #1e3a5f 60%, #2d5a87 100%)',
            'linear-gradient(135deg, #2d5a87 0%, #3d7ab5 30%, #ff7f50 60%, #1e3a5f 100%)',
            'linear-gradient(135deg, #1e3a5f 0%, #2d5a87 30%, #3d7ab5 60%, #ff7f50 100%)',
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Extra overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/30" />
      
      {/* Confetti - more particles */}
      {showEffects && [...Array(50)].map((_, i) => (
        <Confetti 
          key={i} 
          delay={i * 0.15} 
          x={Math.random() * 100} 
          color={confettiColors[i % confettiColors.length]}
          size={Math.random() * 8 + 4}
        />
      ))}
      
      {/* Fireworks - more spread out */}
      {showEffects && (
        <>
          <Firework x={15} y={25} delay={0} />
          <Firework x={85} y={20} delay={0.8} />
          <Firework x={50} y={15} delay={1.6} />
          <Firework x={25} y={60} delay={1.2} />
          <Firework x={75} y={55} delay={0.4} />
          <Firework x={10} y={45} delay={2} />
          <Firework x={90} y={40} delay={2.4} />
        </>
      )}
      
      {/* Sparkles */}
      {showEffects && [...Array(25)].map((_, i) => (
        <Sparkle 
          key={i} 
          x={Math.random() * 100} 
          y={Math.random() * 100} 
          delay={i * 0.25} 
        />
      ))}

      {/* Floating Emojis */}
      {showEffects && emojis.map((emoji, i) => (
        <FloatingEmoji
          key={i}
          emoji={emoji}
          x={10 + (i * 12)}
          delay={i * 0.5}
        />
      ))}
      
      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Party poppers */}
        <motion.div
          className="absolute -left-20 top-1/2 -translate-y-1/2"
          animate={{ rotate: [-15, -10, -15], scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <PartyPopper className="w-16 h-16 text-yellow-300" />
        </motion.div>
        <motion.div
          className="absolute -right-20 top-1/2 -translate-y-1/2"
          animate={{ rotate: [15, 10, 15], scale: [1, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <PartyPopper className="w-16 h-16 text-yellow-300 scale-x-[-1]" />
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0, rotateY: -180 }}
          animate={{ scale: 1, opacity: 1, rotateY: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 150,
            damping: 12,
            delay: 0.2
          }}
        >
          {/* Sparkle icons around text */}
          <motion.div
            className="flex justify-center gap-4 mb-4"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Sparkles className="w-8 h-8 text-yellow-300" />
            <Star className="w-8 h-8 text-yellow-300 fill-yellow-300" />
            <Sparkles className="w-8 h-8 text-yellow-300" />
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6"
            style={{ 
              textShadow: '0 4px 30px rgba(0,0,0,0.4), 0 0 60px rgba(255,215,0,0.3)',
            }}
            animate={{ 
              scale: [1, 1.03, 1],
              textShadow: [
                '0 4px 30px rgba(0,0,0,0.4), 0 0 60px rgba(255,215,0,0.3)',
                '0 4px 30px rgba(0,0,0,0.4), 0 0 80px rgba(255,215,0,0.5)',
                '0 4px 30px rgba(0,0,0,0.4), 0 0 60px rgba(255,215,0,0.3)',
              ]
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
          className="flex items-center justify-center gap-3 text-white/95"
        >
          <span className="text-xl font-medium">Made with</span>
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <Heart className="w-8 h-8 text-red-400 fill-red-400 drop-shadow-lg" />
          </motion.div>
          <span className="text-xl font-medium">by Team RAFIQ</span>
        </motion.div>

        {/* Questions text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-8"
        >
          <motion.p
            className="text-2xl text-white/80 font-medium"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Any Questions? 🙋‍♂️
          </motion.p>
        </motion.div>
        
        {/* Decorative rings */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full border-2 border-white/20"
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border-2 border-white/15"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.05, 0.2], rotate: [360, 180, 0] }}
          transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border-2 border-white/10"
          animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.02, 0.1], rotate: [0, -180, -360] }}
          transition={{ duration: 12, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default ThankYouSlide;
