import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import useCaseDiagram from "@/assets/use-case-diagram-full.png";

const UseCaseSlide = () => {
  return (
    <section id="use-cases" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
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
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">System Interactions</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Use Case <span className="text-gradient-gold">Diagram</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto text-sm">
            RAFIQ Platform - Complete overview of all user interactions
          </p>
        </motion.div>

        {/* Use Case Diagram Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-4 rounded-2xl overflow-hidden">
            <img 
              src={useCaseDiagram} 
              alt="RAFIQ Use Case Diagram showing actors (Tourist, Tour Guide, Admin, System) and their interactions with the platform"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSlide;
