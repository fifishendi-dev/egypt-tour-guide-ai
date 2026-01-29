import { motion } from "framer-motion";
import { 
  Settings, 
  Database, 
  GitBranch,
  Users,
  Mic,
  Brain,
  Camera,
  ArrowRight
} from "lucide-react";

const FunctionalRequirementsSlide = () => {
  return (
    <section id="functional-requirements" className="min-h-screen py-20 bg-background">
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
            <Settings className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">02</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Functional <span className="text-gradient-gold">Requirements</span>
          </h2>
        </motion.div>

        {/* AI Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 mb-8"
        >
          <h3 className="text-2xl font-display font-bold text-foreground mb-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
              <GitBranch className="w-5 h-5 text-primary" />
            </div>
            AI Assessment Pipeline
          </h3>
          
          {/* Pipeline Visualization */}
          <div className="grid md:grid-cols-5 gap-4 items-center">
            {[
              { icon: Mic, label: "Audio Recording", desc: "60s per topic", color: "bg-rafiq-coral/20", iconColor: "text-rafiq-coral" },
              { icon: Brain, label: "Whisper STT", desc: "Speech to Text", color: "bg-primary/20", iconColor: "text-primary" },
              { icon: Database, label: "Language Check", desc: "Detect Language", color: "bg-rafiq-gold/20", iconColor: "text-rafiq-gold" },
              { icon: Brain, label: "XLM-RoBERTa", desc: "Proficiency Level", color: "bg-rafiq-sky/20", iconColor: "text-rafiq-sky" },
              { icon: Users, label: "Answer Validation", desc: "Accuracy Check", color: "bg-green-100", iconColor: "text-green-600" },
            ].map((step, index) => (
              <div key={step.label} className="flex items-center gap-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-4 rounded-xl ${step.color} text-center flex-1`}
                >
                  <step.icon className={`w-8 h-8 ${step.iconColor} mx-auto mb-2`} />
                  <p className="font-semibold text-foreground text-sm">{step.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{step.desc}</p>
                </motion.div>
                {index < 4 && (
                  <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 hidden md:block" />
                )}
              </div>
            ))}
          </div>

          {/* Interview Process Detail */}
          <div className="mt-8 p-6 rounded-xl bg-muted/50 border border-border">
            <h4 className="font-semibold text-foreground mb-3">Guide Interview Process</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <span>6 topics with random questions from each category</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <span>60-second thinking time before recording</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0">3</span>
                <span>AI evaluates language + content accuracy</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ERD & Schema */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Entity Relationship Diagram</h3>
            </div>
            
            {/* Simplified ERD Visual */}
            <div className="space-y-3">
              {[
                { entity: "Users", attrs: "id, name, email, role, language" },
                { entity: "Guides", attrs: "id, user_id, rating, languages[], verified" },
                { entity: "Tourists", attrs: "id, user_id, preferences, nationality" },
                { entity: "Bookings", attrs: "id, tourist_id, guide_id, date, status" },
                { entity: "Interviews", attrs: "id, guide_id, score, responses[]" },
                { entity: "Trips", attrs: "id, booking_id, locations[], safety_status" },
              ].map((item) => (
                <div key={item.entity} className="p-3 rounded-lg bg-muted/50 border-l-4 border-primary">
                  <span className="font-semibold text-foreground">{item.entity}</span>
                  <p className="text-xs text-muted-foreground mt-1">{item.attrs}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rafiq-gold/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-rafiq-gold" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Use Cases</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { actor: "Tourist", actions: ["Browse guides", "Book by language", "Rate experience", "Report issues"] },
                { actor: "Guide", actions: ["Complete AI interview", "Accept bookings", "Navigate tours", "View earnings"] },
                { actor: "Admin", actions: ["Review interviews", "Manage users", "Handle disputes", "View analytics"] },
              ].map((useCase) => (
                <div key={useCase.actor} className="p-4 rounded-xl bg-muted/50">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    {useCase.actor}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {useCase.actions.map((action) => (
                      <span key={action} className="px-2 py-1 rounded-full bg-background text-xs text-muted-foreground border border-border">
                        {action}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Safety Feature */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 border-l-4 border-rafiq-coral"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-rafiq-coral/20 flex items-center justify-center flex-shrink-0">
              <Camera className="w-6 h-6 text-rafiq-coral" />
            </div>
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                Safety Feature: In-Vehicle Harassment Detection
              </h3>
              <p className="text-muted-foreground">
                Real-time camera monitoring using computer vision to detect potential harassment during trips. 
                Alerts are sent to both admin dashboard and emergency contacts if suspicious behavior is detected.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["Computer Vision", "Real-time Alerts", "Emergency Response", "Privacy-Focused"].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-rafiq-coral/10 text-sm text-rafiq-coral font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FunctionalRequirementsSlide;
