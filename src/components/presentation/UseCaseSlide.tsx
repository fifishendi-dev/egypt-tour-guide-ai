import { motion } from "framer-motion";
import { FileText, User, UserCheck, Shield, ArrowRight } from "lucide-react";

const useCases = [
  {
    id: "UC-01",
    actor: "Tourist",
    title: "Search & Book Guide",
    steps: ["Browse available guides", "Filter by language/rating", "View guide profile", "Book a tour", "Make payment"],
    color: "bg-rafiq-sky"
  },
  {
    id: "UC-02",
    actor: "Tourist",
    title: "Rate & Review",
    steps: ["Complete tour", "Submit rating (1-5)", "Write review", "Upload photos"],
    color: "bg-rafiq-gold"
  },
  {
    id: "UC-03",
    actor: "Guide",
    title: "Complete AI Interview",
    steps: ["Register account", "Receive question", "Record voice answer", "Get AI assessment", "Receive verification"],
    color: "bg-secondary"
  },
  {
    id: "UC-04",
    actor: "Guide",
    title: "Manage Bookings",
    steps: ["View booking requests", "Accept/reject", "View schedule", "Start tour", "Complete tour"],
    color: "bg-primary"
  },
  {
    id: "UC-05",
    actor: "Admin",
    title: "Verify Guides",
    steps: ["Review applications", "Check AI scores", "Verify documents", "Approve/reject guide"],
    color: "bg-rafiq-coral"
  },
  {
    id: "UC-06",
    actor: "System",
    title: "Monitor Safety",
    steps: ["Analyze camera feed", "Detect harassment", "Send alert", "Notify admin", "Log incident"],
    color: "bg-destructive"
  },
];

const UseCaseSlide = () => {
  return (
    <section id="use-cases" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-6">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Functional Requirements</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Use <span className="text-gradient-gold">Cases</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Key interactions between users and the RAFIQ system
          </p>
        </motion.div>

        {/* Actors Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: User, label: "Tourist", color: "bg-rafiq-sky" },
            { icon: UserCheck, label: "Guide", color: "bg-secondary" },
            { icon: Shield, label: "Admin", color: "bg-rafiq-coral" },
          ].map((actor) => (
            <div key={actor.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted">
              <div className={`w-6 h-6 rounded-full ${actor.color}/20 flex items-center justify-center`}>
                <actor.icon className={`w-3 h-3 ${actor.color.replace('bg-', 'text-')}`} />
              </div>
              <span className="text-sm font-medium text-foreground">{actor.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:shadow-lg transition-shadow"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded ${useCase.color}/20 ${useCase.color.replace('bg-', 'text-')}`}>
                  {useCase.id}
                </span>
                <span className="text-xs text-muted-foreground px-2 py-1 rounded-full bg-muted">
                  {useCase.actor}
                </span>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-display font-bold text-foreground mb-4">{useCase.title}</h3>
              
              {/* Steps */}
              <div className="space-y-2">
                {useCase.steps.map((step, stepIndex) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + stepIndex * 0.05 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className={`w-5 h-5 rounded-full ${useCase.color}/10 flex items-center justify-center text-xs font-bold ${useCase.color.replace('bg-', 'text-')}`}>
                      {stepIndex + 1}
                    </span>
                    {step}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Case Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 mt-12 max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-display font-bold text-foreground mb-6 text-center">Use Case Diagram Overview</h3>
          
          {/* Simplified Use Case Diagram */}
          <div className="relative bg-muted/30 rounded-xl p-6 min-h-[300px]">
            <div className="flex justify-around items-center h-full">
              {/* Tourist Actor */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-rafiq-sky/20 border-2 border-rafiq-sky flex items-center justify-center mx-auto mb-2">
                  <User className="w-8 h-8 text-rafiq-sky" />
                </div>
                <p className="text-sm font-bold text-foreground">Tourist</p>
              </div>
              
              {/* System Box */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="border-2 border-dashed border-primary/30 rounded-2xl p-6 max-w-md"
              >
                <p className="text-xs text-center text-muted-foreground mb-4">RAFIQ System</p>
                <div className="grid grid-cols-2 gap-3">
                  {["Search Guide", "Book Tour", "Rate & Review", "AI Interview", "Manage Bookings", "Safety Monitor"].map((uc, i) => (
                    <div key={uc} className="px-3 py-2 rounded-full bg-background border border-border text-xs text-center text-foreground">
                      {uc}
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Guide/Admin Actors */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 border-2 border-secondary flex items-center justify-center mx-auto mb-2">
                    <UserCheck className="w-8 h-8 text-secondary" />
                  </div>
                  <p className="text-sm font-bold text-foreground">Guide</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-rafiq-coral/20 border-2 border-rafiq-coral flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-8 h-8 text-rafiq-coral" />
                  </div>
                  <p className="text-sm font-bold text-foreground">Admin</p>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4 text-center italic">
            * Full UML Use Case diagram available in documentation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSlide;
