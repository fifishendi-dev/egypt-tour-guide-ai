import { motion } from "framer-motion";
import { 
  FileText, 
  Settings, 
  TrendingUp, 
  CheckCircle,
  ChevronRight,
  ChevronDown,
  Cpu
} from "lucide-react";
import { useState } from "react";

const sections = [
  { 
    id: "project-description", 
    title: "Project Description", 
    icon: FileText,
    items: [
      { id: "project-description", label: "Problem Definition" },
      { id: "motivation", label: "Motivation" },
      { id: "solution", label: "Solution" },
      { id: "similar-apps", label: "Similar Applications" },
    ]
  },
  { 
    id: "functional-requirements", 
    title: "Functional Requirements", 
    icon: Settings,
    items: [
      { id: "methodology", label: "Agile Methodology" },
      { id: "sprints", label: "Sprint Timeline" },
      { id: "project-pipeline", label: "Project Pipeline" },
      { id: "use-cases", label: "Use Cases" },
      { id: "erd-schema", label: "ERD & Schema" },
      { id: "backend-tech", label: "Backend & Database" },
    ]
  },
  { 
    id: "technologies", 
    title: "Technologies", 
    icon: Cpu,
    items: [
      { id: "mobile-tech", label: "Mobile App" },
      { id: "mobile-ui", label: "Mobile UI Screens" },
      { id: "web-tech", label: "Web Platform" },
      { id: "ai-tech", label: "AI Pipeline" },
      { id: "whisper", label: "Whisper STT" },
      { id: "interview-topics", label: "Interview Topics" },
      { id: "phi-model", label: "Phi-3.5 Model" },
    ]
  },
  { 
    id: "progress", 
    title: "Progress", 
    icon: TrendingUp,
    items: [
      { id: "progress", label: "Current Status" },
    ]
  },
  { 
    id: "conclusion", 
    title: "Conclusion", 
    icon: CheckCircle,
    items: [
      { id: "challenges", label: "Challenges & Solutions" },
      { id: "conclusion", label: "Summary & Q&A" },
      { id: "thank-you", label: "Thank You" },
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

const TableOfContents = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <section id="contents" className="min-h-screen flex items-center bg-background py-16">
      <div className="container mx-auto px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Side - Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="bg-primary rounded-2xl p-8 relative overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 pattern-dots opacity-20" />
              
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground relative z-10">
                Table of
                <br />
                <span className="text-rafiq-gold">Contents</span>
              </h2>
              
              <p className="text-primary-foreground/70 text-sm mt-3 relative z-10">
                {sections.length} main sections
              </p>
              
              {/* Decorative Element */}
              <motion.div 
                className="absolute -bottom-8 -right-8 w-32 h-32 bg-rafiq-gold/20 rounded-full"
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
            className="lg:col-span-2 space-y-3"
          >
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isExpanded = expandedSection === section.id;
              
              return (
                <motion.div
                  key={section.id}
                  variants={item}
                  className="glass-card overflow-hidden"
                >
                  {/* Main Section Button */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center gap-3 p-4 hover:bg-muted/50 transition-all group text-left"
                  >
                    {/* Number */}
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold transition-colors flex-shrink-0">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <Icon className="w-5 h-5 text-secondary flex-shrink-0" />
                    
                    {/* Title */}
                    <span className="flex-1 font-bold text-foreground text-lg">
                      {section.title}
                    </span>
                    
                    {/* Items count */}
                    <span className="text-xs text-muted-foreground mr-2">
                      {section.items.length} items
                    </span>
                    
                    {/* Arrow */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </button>
                  
                  {/* Sub-items */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 space-y-2">
                      {section.items.map((subItem, subIndex) => (
                        <button
                          key={subItem.id}
                          onClick={() => scrollToSection(subItem.id)}
                          className="w-full flex items-center gap-3 p-3 rounded-xl bg-muted/30 hover:bg-secondary/20 transition-all group text-left ml-4"
                        >
                          <span className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center text-xs font-medium">
                            {subIndex + 1}
                          </span>
                          <span className="flex-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            {subItem.label}
                          </span>
                          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-secondary transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
