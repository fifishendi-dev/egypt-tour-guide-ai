import { motion } from "framer-motion";
import { 
  FileText, 
  Settings, 
  Cpu, 
  TrendingUp, 
  Play, 
  CheckCircle,
  ChevronRight,
  Lightbulb,
  RefreshCw,
  GitBranch,
  Smartphone,
  Monitor,
  Database,
  Brain
} from "lucide-react";

const sections = [
  { 
    id: "project-description", 
    title: "Problem & Solution", 
    icon: FileText,
    items: ["Problem Definition", "Solution", "Similar Apps"]
  },
  { 
    id: "motivation", 
    title: "Motivation", 
    icon: Lightbulb,
    items: ["Tourism Growth", "Analytics", "Market Opportunity"]
  },
  { 
    id: "methodology", 
    title: "Methodology", 
    icon: RefreshCw,
    items: ["Agile Scrum", "Sprints Timeline"]
  },
  { 
    id: "project-pipeline", 
    title: "Project Pipeline", 
    icon: GitBranch,
    items: ["End-to-end workflow"]
  },
  { 
    id: "use-cases", 
    title: "Use Cases", 
    icon: Settings,
    items: ["Tourist", "Guide", "Admin", "System"]
  },
  { 
    id: "functional-requirements", 
    title: "Functional Requirements", 
    icon: Settings,
    items: ["Pipeline", "ERD", "Schema"]
  },
  { 
    id: "mobile-tech", 
    title: "Mobile App", 
    icon: Smartphone,
    items: ["Flutter", "Features", "User Interfaces"]
  },
  { 
    id: "web-tech", 
    title: "Web Platform", 
    icon: Monitor,
    items: ["React", "Admin Dashboard"]
  },
  { 
    id: "backend-tech", 
    title: "Backend & Database", 
    icon: Database,
    items: ["PostgreSQL", "Architecture", "ERD"]
  },
  { 
    id: "ai-tech", 
    title: "AI Pipeline", 
    icon: Brain,
    items: ["Whisper", "XLM-RoBERTa", "Safety"]
  },
  { 
    id: "progress", 
    title: "Progress", 
    icon: TrendingUp,
    items: ["Completed", "In Progress", "Not Started"]
  },
  { 
    id: "demo", 
    title: "Demo", 
    icon: Play,
    items: ["Live Preview"]
  },
  { 
    id: "conclusion", 
    title: "Conclusion", 
    icon: CheckCircle,
    items: ["Summary", "Q&A"]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
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
        <div className="grid lg:grid-cols-3 gap-12 items-start max-w-7xl mx-auto">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="bg-primary rounded-3xl p-10 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 pattern-dots opacity-20" />
              
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground relative z-10">
                Table of
                <br />
                <span className="text-rafiq-gold">Contents</span>
              </h2>
              
              <p className="text-primary-foreground/70 text-sm mt-4 relative z-10">
                {sections.length} sections covering the complete project
              </p>
              
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
            className="lg:col-span-2 grid sm:grid-cols-2 gap-3"
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  variants={item}
                  onClick={() => scrollToSection(section.id)}
                  whileHover={{ x: 4, scale: 1.02 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card hover:bg-muted/50 transition-all group text-left border border-transparent hover:border-secondary/30"
                >
                  {/* Number */}
                  <div className="w-8 h-8 rounded-lg bg-primary/10 group-hover:bg-secondary flex items-center justify-center text-primary group-hover:text-secondary-foreground text-sm font-bold transition-colors flex-shrink-0">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
                  
                  {/* Title */}
                  <span className="flex-1 font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                    {section.title}
                  </span>
                  
                  {/* Arrow */}
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors flex-shrink-0" />
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
