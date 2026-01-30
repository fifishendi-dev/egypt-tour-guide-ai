import { motion } from "framer-motion";
import { 
  GitBranch, 
  FileText, 
  Palette, 
  Code, 
  Database, 
  Brain, 
  TestTube, 
  Rocket,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const pipelineStages = [
  {
    icon: FileText,
    title: "Requirements",
    description: "Gather & document project requirements",
    status: "completed",
    color: "from-rafiq-gold to-rafiq-coral"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Design wireframes & prototypes",
    status: "completed",
    color: "from-rafiq-coral to-rafiq-sky"
  },
  {
    icon: Database,
    title: "Database Design",
    description: "Create ERD & schema design",
    status: "completed",
    color: "from-rafiq-sky to-primary"
  },
  {
    icon: Code,
    title: "Development",
    description: "Build mobile app & web platform",
    status: "in-progress",
    color: "from-primary to-secondary"
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Integrate Whisper, XLM-RoBERTa & ML models",
    status: "in-progress",
    color: "from-secondary to-rafiq-gold"
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Unit, integration & user testing",
    status: "pending",
    color: "from-rafiq-gold to-rafiq-coral"
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launch to production",
    status: "pending",
    color: "from-rafiq-coral to-primary"
  }
];

const ProjectPipelineSlide = () => {
  return (
    <section id="project-pipeline" className="min-h-screen py-20 bg-gradient-to-b from-background to-muted/30">
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
            <GitBranch className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Project Overview</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Project <span className="text-gradient-gold">Pipeline</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            End-to-end development workflow from concept to deployment
          </p>
        </motion.div>

        {/* Pipeline Visualization */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop View - Horizontal */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-rafiq-gold via-secondary to-primary" />
              
              <div className="flex justify-between">
                {pipelineStages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <motion.div
                      key={stage.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col items-center w-32"
                    >
                      {/* Icon Circle */}
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg z-10 ${stage.status === 'in-progress' ? 'ring-4 ring-secondary/30 animate-pulse' : ''}`}>
                        <Icon className="w-7 h-7 text-white" />
                        {stage.status === 'completed' && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h4 className="mt-4 font-display font-bold text-foreground text-center text-sm">
                        {stage.title}
                      </h4>
                      
                      {/* Description */}
                      <p className="mt-2 text-xs text-muted-foreground text-center">
                        {stage.description}
                      </p>
                      
                      {/* Status Badge */}
                      <span className={`mt-2 text-xs px-2 py-1 rounded-full ${
                        stage.status === 'completed' 
                          ? 'bg-green-100 text-green-600' 
                          : stage.status === 'in-progress' 
                            ? 'bg-secondary/20 text-secondary' 
                            : 'bg-muted text-muted-foreground'
                      }`}>
                        {stage.status === 'completed' ? '✓ Done' : stage.status === 'in-progress' ? '⏳ Active' : '○ Pending'}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile/Tablet View - Vertical */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-rafiq-gold via-secondary to-primary" />
              
              <div className="space-y-6">
                {pipelineStages.map((stage, index) => {
                  const Icon = stage.icon;
                  return (
                    <motion.div
                      key={stage.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-6"
                    >
                      {/* Icon Circle */}
                      <div className={`relative w-16 h-16 rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center shadow-lg z-10 flex-shrink-0 ${stage.status === 'in-progress' ? 'ring-4 ring-secondary/30' : ''}`}>
                        <Icon className="w-7 h-7 text-white" />
                        {stage.status === 'completed' && (
                          <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Content */}
                      <div className="glass-card p-4 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-display font-bold text-foreground">{stage.title}</h4>
                          <span className={`text-xs px-2 py-0.5 rounded-full ${
                            stage.status === 'completed' 
                              ? 'bg-green-100 text-green-600' 
                              : stage.status === 'in-progress' 
                                ? 'bg-secondary/20 text-secondary' 
                                : 'bg-muted text-muted-foreground'
                          }`}>
                            {stage.status === 'completed' ? '✓' : stage.status === 'in-progress' ? '⏳' : '○'}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{stage.description}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Progress Summary */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-card p-8 mt-12"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">Current Progress</h3>
                <p className="text-muted-foreground">Development phase with AI integration in parallel</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-500">3</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">2</p>
                  <p className="text-xs text-muted-foreground">In Progress</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-muted-foreground">2</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPipelineSlide;
