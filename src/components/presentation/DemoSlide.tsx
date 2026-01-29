import { motion } from "framer-motion";
import { Play, Smartphone, Globe, Monitor } from "lucide-react";

const DemoSlide = () => {
  return (
    <section id="demo" className="min-h-screen py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">05</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Live <span className="text-gradient-gold">Demo</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            See RAFIQ in action across all platforms
          </p>
        </motion.div>

        {/* Demo Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Mobile App Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card p-8 text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-20 h-20 rounded-2xl bg-rafiq-sky/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Smartphone className="w-10 h-10 text-rafiq-sky" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">Mobile App</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Tourist & Guide interfaces with booking, navigation, and rating features
            </p>
            
            {/* Mockup Phone Frame */}
            <div className="relative mx-auto w-48 h-80 rounded-3xl bg-gradient-to-b from-primary to-primary/80 p-2 shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                <div className="text-center p-4">
                  <Play className="w-12 h-12 text-secondary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">Demo Ready</p>
                </div>
              </div>
              {/* Notch */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-primary" />
            </div>
          </motion.div>

          {/* Web Admin Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Monitor className="w-10 h-10 text-primary" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">Admin Dashboard</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Guide verification, analytics, and system management
            </p>
            
            {/* Mockup Browser Frame */}
            <div className="relative mx-auto w-full h-48 rounded-xl bg-gradient-to-b from-primary to-primary/80 p-1 shadow-2xl">
              {/* Browser Chrome */}
              <div className="bg-muted rounded-t-lg p-2 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-destructive/60" />
                  <div className="w-2 h-2 rounded-full bg-secondary/60" />
                  <div className="w-2 h-2 rounded-full bg-green-400/60" />
                </div>
                <div className="flex-1 h-4 rounded bg-background/50 mx-2" />
              </div>
              {/* Content */}
              <div className="bg-background rounded-b-lg h-36 flex items-center justify-center">
                <div className="text-center">
                  <Play className="w-10 h-10 text-secondary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Demo Ready</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AI Interview Demo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8 text-center group hover:shadow-lg transition-shadow"
          >
            <div className="w-20 h-20 rounded-2xl bg-rafiq-gold/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Globe className="w-10 h-10 text-rafiq-gold" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">AI Interview</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Automated guide assessment with speech recognition and language evaluation
            </p>
            
            {/* AI Visualization */}
            <div className="relative mx-auto w-48 h-48 flex items-center justify-center">
              {/* Animated Rings */}
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute w-full h-full rounded-full border-2 border-secondary/30"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute w-32 h-32 rounded-full border-2 border-rafiq-gold/30"
              />
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-rafiq-gold flex items-center justify-center shadow-lg">
                <Play className="w-8 h-8 text-secondary-foreground" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Demo Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground italic">
            * Live demonstration will be conducted during the presentation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSlide;
