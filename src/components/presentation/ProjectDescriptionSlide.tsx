import { motion } from "framer-motion";
import { 
  AlertCircle, 
  Lightbulb, 
  Globe2, 
  RefreshCw,
  Calendar,
  CheckCircle2,
  Shield,
  Users,
  DollarSign,
  Briefcase
} from "lucide-react";
import rafiqLogo from "@/assets/rafiq-logo.png";

const ProjectDescriptionSlide = () => {
  return (
    <>
      {/* Problem Definition Section */}
      <section id="project-description" className="min-h-screen py-20 bg-gradient-to-b from-muted/30 to-background flex items-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">The Challenge</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Problem <span className="text-gradient-gold">Definition</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Shield,
                title: "Safety Concerns",
                description: "Fear of scams and safety issues prevents many tourists from visiting Egypt",
                color: "destructive"
              },
              {
                icon: Users,
                title: "No Verification System",
                description: "There is no clear way to check tour guides' language skills and behavior",
                color: "destructive"
              },
              {
                icon: Briefcase,
                title: "Unfair Job Market",
                description: "Qualified language graduates are not getting fair job opportunities",
                color: "destructive"
              }
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card p-8 text-center group hover:border-destructive/30 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-8 h-8 text-destructive" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section id="motivation" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30 flex items-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-rafiq-gold/20 text-rafiq-gold px-4 py-2 rounded-full mb-6">
              <Lightbulb className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Why We Build</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
              Our <span className="text-gradient-gold">Motivation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Globe2,
                title: "Growing Tourism",
                description: "Tourism is growing, and digital tools are widely used",
                gradient: "from-rafiq-gold to-rafiq-coral"
              },
              {
                icon: Shield,
                title: "Safety & Trust",
                description: "Real-time monitoring ensures safety and trust",
                gradient: "from-rafiq-sky to-primary"
              },
              {
                icon: Users,
                title: "Economic Growth",
                description: "Supports youth and economic growth",
                gradient: "from-secondary to-rafiq-gold"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                <div className="glass-card p-8 text-center relative">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="min-h-screen py-20 bg-hero-gradient relative overflow-hidden flex items-center">
        {/* Decorative Background */}
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-rafiq-gold/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-48 h-48 bg-rafiq-gold/15 rounded-full blur-3xl"
          animate={{ y: [0, 20, 0], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left - Logo Creative Display */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              {/* Glowing rings */}
              <motion.div 
                className="absolute w-80 h-80 rounded-full border-2 border-rafiq-gold/30"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div 
                className="absolute w-96 h-96 rounded-full border border-rafiq-gold/20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              />
              
              {/* Logo Container */}
              <motion.div
                className="relative z-10 bg-gradient-to-br from-primary/90 to-primary rounded-3xl p-8 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={rafiqLogo} 
                  alt="RAFIQ Logo" 
                  className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                ✨ AI-Powered
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4 bg-rafiq-gold text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                🔒 Safe & Trusted
              </motion.div>
            </motion.div>

            {/* Right - Solution Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">The Answer</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-8">
                Our <span className="text-rafiq-gold">Solution</span>
              </h2>

              <div className="space-y-6">
                {[
                  { icon: Users, text: "Connects tourists with verified guides anytime" },
                  { icon: Shield, text: "Ensures safety, trust, and quality" },
                  { icon: DollarSign, text: "Transparent pricing" },
                  { icon: Briefcase, text: "Provides jobs for graduates" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                  >
                    <div className="w-12 h-12 rounded-xl bg-rafiq-gold/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-rafiq-gold" />
                    </div>
                    <p className="text-primary-foreground font-medium">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Applications & Methodology Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-8">
          {/* Similar Applications */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 mb-8 max-w-5xl mx-auto"
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
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
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
              transition={{ duration: 0.6, delay: 0.2 }}
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
    </>
  );
};

export default ProjectDescriptionSlide;
