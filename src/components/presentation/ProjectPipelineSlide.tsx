import { motion } from "framer-motion";
import { 
  GitBranch, 
  LogIn, 
  Users, 
  MapPin,
  Star,
  Calendar,
  Mic,
  FileCheck,
  ArrowRight,
  ArrowDown
} from "lucide-react";

const ProjectPipelineSlide = () => {
  return (
    <section id="project-pipeline" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
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
            <GitBranch className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Project Overview</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Project <span className="text-gradient-gold">Pipeline</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Step 1: Authentication */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <LogIn className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">1. User Authentication</h3>
                <p className="text-sm text-muted-foreground">Login / Register</p>
              </div>
            </div>
          </motion.div>

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>

          {/* Step 2: Role Selection */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <div className="glass-card p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rafiq-gold to-rafiq-coral flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">2. Role Selection</h3>
                <p className="text-sm text-muted-foreground">System directs users based on their role</p>
              </div>
            </div>
          </motion.div>

          {/* Arrow Down */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>

          {/* Two Branches */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tourist Flow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-5 border-2 border-rafiq-sky/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-rafiq-sky/20 flex items-center justify-center">
                  <span className="text-lg">🧳</span>
                </div>
                <h3 className="font-display font-bold text-foreground">A) Tourist Flow</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <MapPin className="w-5 h-5 text-rafiq-sky" />
                  <span className="text-sm text-foreground">Browse available tour guides</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Star className="w-5 h-5 text-rafiq-gold" />
                  <span className="text-sm text-foreground">View guide profiles and ratings</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Calendar className="w-5 h-5 text-secondary" />
                  <span className="text-sm text-foreground">Book a guide</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">Track booking status</span>
                </div>
              </div>
            </motion.div>

            {/* Tour Guide Flow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-5 border-2 border-rafiq-coral/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-rafiq-coral/20 flex items-center justify-center">
                  <span className="text-lg">🎯</span>
                </div>
                <h3 className="font-display font-bold text-foreground">B) Tour Guide Flow</h3>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground italic mb-2">If new guide, must go through:</p>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-rafiq-coral/10 border border-rafiq-coral/20">
                  <Mic className="w-5 h-5 text-rafiq-coral" />
                  <div>
                    <span className="text-sm font-semibold text-foreground">Step 3: AI Voice Interview</span>
                    <p className="text-xs text-muted-foreground">Automated assessment</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/10 border border-secondary/20">
                  <FileCheck className="w-5 h-5 text-secondary" />
                  <div>
                    <span className="text-sm font-semibold text-foreground">Step 4: Document Upload</span>
                    <p className="text-xs text-muted-foreground">Driving licence & drug test</p>
                  </div>
                </div>
                
                <div className="mt-4 p-3 rounded-lg bg-green-100 border border-green-200">
                  <p className="text-sm text-green-700 font-semibold text-center">
                    ✓ Can accept rides and offers
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPipelineSlide;
