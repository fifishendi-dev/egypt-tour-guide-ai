import { motion } from "framer-motion";
import { 
  AlertCircle, 
  CheckCircle2,
  Shield,
  Users,
  DollarSign,
  Briefcase,
  TrendingUp,
  Globe2,
  Check,
  X,
  AlertTriangle
} from "lucide-react";
import rafiqLogo from "@/assets/rafiq-logo.png";
import comparisonTable from "@/assets/comparison-table.png";

const ProjectDescriptionSlide = () => {
  return (
    <>
      {/* Problem Definition Section */}
      <section id="project-description" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-4">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">The Challenge</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Problem <span className="text-gradient-gold">Definition</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
                className="glass-card p-6 text-center group hover:border-destructive/30 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{problem.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section id="motivation" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center gap-2 bg-rafiq-gold/20 text-rafiq-gold px-4 py-2 rounded-full mb-4">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Why Now</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Our <span className="text-gradient-gold">Motivation</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: "Growing Tourism",
                description: "Tourism is growing, and digital tools are widely used",
                color: "rafiq-gold"
              },
              {
                icon: Shield,
                title: "Safety & Trust",
                description: "Real-time monitoring ensures safety and trust",
                color: "secondary"
              },
              {
                icon: Users,
                title: "Youth & Economy",
                description: "Supports youth employment and economic growth",
                color: "primary"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="glass-card p-6 text-center"
              >
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}/20 flex items-center justify-center mx-auto mb-4`}>
                  <item.icon className={`w-7 h-7 text-${item.color}`} />
                </div>
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="min-h-screen py-16 bg-hero-gradient relative overflow-hidden flex items-center">
        {/* Decorative Background */}
        <div className="absolute inset-0 pattern-dots opacity-20" />
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 bg-rafiq-gold/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />

        <div className="container mx-auto px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
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
                className="absolute w-64 h-64 rounded-full border-2 border-rafiq-gold/30"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              
              {/* Logo Container */}
              <motion.div
                className="relative z-10 bg-gradient-to-br from-primary/90 to-primary rounded-2xl p-6 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={rafiqLogo} 
                  alt="RAFIQ Logo" 
                  className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-bold shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                ✨ AI-Powered
              </motion.div>
              <motion.div
                className="absolute -bottom-2 -left-2 bg-rafiq-gold text-primary px-3 py-1.5 rounded-full text-sm font-bold shadow-lg"
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
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">The Answer</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
                Our <span className="text-rafiq-gold">Solution</span>
              </h2>

              <div className="space-y-4">
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
                    className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20"
                  >
                    <div className="w-10 h-10 rounded-xl bg-rafiq-gold/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-rafiq-gold" />
                    </div>
                    <p className="text-primary-foreground font-medium text-sm">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Similar Applications with Comparison Table */}
      <section id="similar-apps" className="min-h-screen py-16 bg-gradient-to-b from-muted/30 to-background flex items-center">
        <div className="container mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 bg-rafiq-sky/20 text-rafiq-sky px-4 py-2 rounded-full mb-4">
              <Globe2 className="w-4 h-4" />
              <span className="text-sm font-medium uppercase tracking-wider">Market Analysis</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Similar <span className="text-gradient-gold">Applications</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 max-w-5xl mx-auto"
          >
            {/* Comparison Table Image */}
            <div className="rounded-xl overflow-hidden mb-6">
              <img 
                src={comparisonTable} 
                alt="Feature Comparison Table" 
                className="w-full h-auto"
              />
            </div>

            {/* RAFIQ Advantage */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-secondary/20 to-rafiq-gold/20 border border-secondary/30">
              <p className="text-center font-bold text-foreground">
                ✨ RAFIQ is the only platform offering <span className="text-secondary">all features combined</span> with AI-powered verification & real-time safety monitoring
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ProjectDescriptionSlide;
