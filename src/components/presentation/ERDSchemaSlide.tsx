import { motion } from "framer-motion";
import { Database, Table } from "lucide-react";
import erdDiagram from "@/assets/erd-diagram.png";
import schemaDiagram from "@/assets/schema-diagram.png";

const ERDSchemaSlide = () => {
  return (
    <section id="erd-schema" className="min-h-screen py-16 bg-background flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <Database className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Database Design</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            ERD & <span className="text-gradient-gold">Schema</span>
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {/* ERD Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Entity Relationship Diagram</h3>
            </div>
            <div className="rounded-xl overflow-hidden bg-white">
              <img 
                src={erdDiagram} 
                alt="Entity Relationship Diagram" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Schema Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rafiq-gold/20 flex items-center justify-center">
                <Table className="w-5 h-5 text-rafiq-gold" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Database Schema</h3>
            </div>
            <div className="rounded-xl overflow-hidden bg-white">
              <img 
                src={schemaDiagram} 
                alt="Database Schema" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ERDSchemaSlide;
