import { motion } from "framer-motion";
import { Play } from "lucide-react";

const DemoSlide = () => {
  return (
    <section id="demo" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
      <div className="container mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Live Demo</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Application <span className="text-gradient-gold">Demo</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Watch RAFIQ in action
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-4 rounded-2xl">
            <video
              controls
              className="w-full rounded-xl"
              preload="metadata"
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSlide;
