import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import useCaseDiagram from "@/assets/use-case-diagram-full.png";

const UseCaseSlide = () => {
  return (
    <section id="use-cases" className="min-h-screen py-6 bg-gradient-to-b from-background to-muted/30 flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full mb-2">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">System Interactions</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
            Use Case <span className="text-gradient-gold">Diagram</span>
          </h2>
        </motion.div>

        {/* Use Case Diagram Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="glass-card p-2 rounded-2xl overflow-hidden">
            <img 
              src={useCaseDiagram} 
              alt="Use Case Diagram showing actors and their interactions with the platform"
              className="w-full h-auto rounded-xl max-h-[75vh] object-contain"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSlide;
