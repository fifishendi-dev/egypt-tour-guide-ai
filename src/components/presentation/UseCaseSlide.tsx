import { motion } from "framer-motion";
import { FileText, Users, Map, Shield, UserCheck, MessageSquare, Car } from "lucide-react";

const actors = [
  { name: "Tourist", icon: Users, color: "bg-rafiq-sky" },
  { name: "Tour Guide", icon: Map, color: "bg-secondary" },
  { name: "Admin", icon: Shield, color: "bg-primary" },
  { name: "System", icon: UserCheck, color: "bg-rafiq-gold" },
];

const useCases = [
  {
    actor: "Tourist",
    cases: [
      "Browse available guides",
      "View guide profiles & ratings",
      "Book a tour guide",
      "Track booking status",
      "Rate & review guide",
      "Chat with guide"
    ]
  },
  {
    actor: "Tour Guide",
    cases: [
      "Complete AI Interview",
      "Upload documents",
      "Accept/reject bookings",
      "Update availability",
      "View earnings",
      "Communicate with tourists"
    ]
  },
  {
    actor: "Admin",
    cases: [
      "Verify guide documents",
      "Review AI interview results",
      "Manage user accounts",
      "Handle disputes",
      "View analytics",
      "System configuration"
    ]
  },
  {
    actor: "System",
    cases: [
      "Process AI interviews",
      "Generate recommendations",
      "Send notifications",
      "Calculate ratings",
      "Real-time tracking",
      "Safety monitoring"
    ]
  }
];

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
            RAFIQ Ride-Sharing Platform - Complete overview of all user interactions
          </p>
        </motion.div>

        {/* Use Case Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Actor Legend */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {actors.map((actor, index) => {
              const Icon = actor.icon;
              return (
                <motion.div
                  key={actor.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50"
                >
                  <div className={`w-6 h-6 rounded-full ${actor.color} flex items-center justify-center`}>
                    <Icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs font-medium text-foreground">{actor.name}</span>
                </motion.div>
              );
            })}
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {useCases.map((group, groupIndex) => {
              const actor = actors.find(a => a.name === group.actor);
              const Icon = actor?.icon || Users;
              
              return (
                <motion.div
                  key={group.actor}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.15 }}
                  className="glass-card p-4"
                >
                  {/* Actor Header */}
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-border">
                    <div className={`w-8 h-8 rounded-full ${actor?.color} flex items-center justify-center`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-sm">{group.actor}</h3>
                  </div>
                  
                  {/* Use Cases */}
                  <div className="space-y-1.5">
                    {group.cases.map((useCase, index) => (
                      <motion.div
                        key={useCase}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: groupIndex * 0.1 + index * 0.05 }}
                        className="flex items-center gap-2 p-1.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-[11px] text-foreground">{useCase}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Central System Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-rafiq-gold/10 border border-secondary/30 text-center"
          >
            <div className="flex items-center justify-center gap-3">
              <Car className="w-5 h-5 text-secondary" />
              <span className="font-display font-bold text-foreground">RAFIQ Platform</span>
              <MessageSquare className="w-5 h-5 text-primary" />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Connecting tourists with verified guides through AI-powered interviews
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseSlide;
