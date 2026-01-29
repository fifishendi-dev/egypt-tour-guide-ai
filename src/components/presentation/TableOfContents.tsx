import { motion } from "framer-motion";
import { 
  FileText, 
  Settings, 
  Cpu, 
  TrendingUp, 
  Play, 
  CheckCircle,
  ChevronRight
} from "lucide-react";

const sections = [
  { 
    id: "project-description", 
    title: "Project Description", 
    icon: FileText,
    items: ["Problem Description", "Motivation", "Objectives", "Similar Applications", "Lifecycle & Methodology", "Sprints"]
  },
  { 
    id: "functional-requirements", 
    title: "Functional Requirements", 
    icon: Settings,
    items: ["Pipeline", "ERD", "Schema", "Use Cases"]
  },
  { 
    id: "technologies", 
    title: "Technologies", 
    icon: Cpu,
    items: ["Flutter", "Web", "Database", "AI Models"]
  },
  { 
    id: "progress", 
    title: "Progress", 
    icon: TrendingUp,
    items: ["Current Status", "Milestones", "Timeline"]
  },
  { 
    id: "demo", 
    title: "Demo", 
    icon: Play,
    items: ["Live Application Preview"]
  },
  { 
    id: "conclusion", 
    title: "Conclusion", 
    icon: CheckCircle,
    items: ["Summary", "Future Work", "Q&A"]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

const TableOfContents = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contents" className="slide-section bg-background py-20">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-primary rounded-3xl p-12 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 pattern-dots opacity-20" />
              
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground relative z-10">
                Table of
                <br />
                <span className="text-rafiq-gold">Contents</span>
              </h2>
              
              {/* Decorative Element */}
              <motion.div 
                className="absolute -bottom-10 -right-10 w-40 h-40 bg-rafiq-gold/20 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Right Side - Contents List */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  variants={item}
                  onClick={() => scrollToSection(section.id)}
                  whileHover={{ x: 8 }}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-card hover:bg-muted/50 transition-all group text-left border border-transparent hover:border-secondary/30"
                >
                  {/* Number */}
                  <div className="w-10 h-10 rounded-xl bg-primary/10 group-hover:bg-secondary flex items-center justify-center text-primary group-hover:text-secondary-foreground font-bold transition-colors">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                  
                  {/* Title */}
                  <span className="flex-1 font-semibold text-foreground group-hover:text-primary transition-colors">
                    {section.title}
                  </span>
                  
                  {/* Arrow */}
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
