import { motion } from "framer-motion";
import { 
  AlertCircle, 
  Target, 
  Lightbulb, 
  Globe2, 
  RefreshCw,
  Calendar
} from "lucide-react";

const ProjectDescriptionSlide = () => {
  return (
    <section id="project-description" className="min-h-screen py-20 bg-gradient-to-b from-muted/30 to-background">
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
            <span className="text-sm font-medium uppercase tracking-wider">01</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Project <span className="text-gradient-gold">Description</span>
          </h2>
        </motion.div>

        {/* Problem Description */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card p-8 mb-8"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-destructive" />
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Problem Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tourists visiting Egypt face significant challenges in finding reliable, multilingual tour guides who can provide personalized experiences. 
                The current market lacks a unified platform that verifies guide qualifications, matches tourists with guides based on language preferences, 
                and ensures safety during tours. Additionally, there's no standardized system to assess guide expertise and language proficiency.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Motivation & Objectives Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rafiq-gold/20 flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-rafiq-gold" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Motivation</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                Boost Egypt's tourism industry through technology
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                Create job opportunities for qualified guides
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                Enhance tourist safety and experience
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                Apply AI/ML skills to real-world problems
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Objectives</h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Develop an Uber-like platform for tour guides
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Implement AI-powered guide assessment system
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Enable multilingual matching (99+ languages)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                Integrate real-time safety monitoring
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Similar Applications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-rafiq-sky/20 flex items-center justify-center">
              <Globe2 className="w-5 h-5 text-rafiq-sky" />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground">Similar Applications</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "GetYourGuide", desc: "Book tours & attractions", limitation: "No AI verification" },
              { name: "Viator", desc: "Travel experiences platform", limitation: "No language matching" },
              { name: "ToursByLocals", desc: "Private local guides", limitation: "No safety monitoring" },
            ].map((app) => (
              <div key={app.name} className="p-4 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-semibold text-foreground mb-1">{app.name}</h4>
                <p className="text-sm text-muted-foreground mb-2">{app.desc}</p>
                <span className="text-xs text-destructive/80">❌ {app.limitation}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-secondary/10 border border-secondary/20">
            <p className="text-center text-secondary font-medium">
              ✨ RAFIQ combines all features with AI-powered verification & real-time safety
            </p>
          </div>
        </motion.div>

        {/* Lifecycle & Methodology */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-rafiq-coral/20 flex items-center justify-center">
                <RefreshCw className="w-5 h-5 text-rafiq-coral" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Methodology</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              We follow the <strong className="text-foreground">Agile Scrum</strong> methodology with 2-week sprints, 
              enabling iterative development and continuous feedback integration.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Scrum", "2-Week Sprints", "Daily Standups", "Sprint Reviews"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground">Sprints Overview</h3>
            </div>
            <div className="space-y-3">
              {[
                { sprint: "Sprint 1", task: "Requirements & Design", status: "✅" },
                { sprint: "Sprint 2", task: "Core App Development", status: "✅" },
                { sprint: "Sprint 3", task: "AI Integration", status: "🔄" },
                { sprint: "Sprint 4", task: "Testing & Deployment", status: "⏳" },
              ].map((s) => (
                <div key={s.sprint} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <span className="font-medium text-foreground">{s.sprint}</span>
                  <span className="text-sm text-muted-foreground">{s.task}</span>
                  <span>{s.status}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDescriptionSlide;
