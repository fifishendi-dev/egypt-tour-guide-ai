import { motion } from "framer-motion";
import { Users } from "lucide-react";

const teamMembers = [
  { name: "Basmala Mamdouh", role: "Team Member" },
  { name: "Omnia Jawad", role: "Team Member" },
  { name: "Ahmed Samer", role: "Team Member" },
  { name: "Belal Fawzy", role: "Team Member" },
  { name: "Mohamed Hany", role: "Team Member" },
  { name: "Anas Montaser", role: "Team Member" },
  { name: "Ahmed Ibrahim", role: "Team Member" },
  { name: "Osama Ahmed", role: "Team Member" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const TeamSlide = () => {
  return (
    <section id="team" className="slide-section bg-gradient-to-b from-background to-muted/30 py-20">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Meet the <span className="text-gradient-gold">Innovators</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A dedicated team of 8 passionate developers and designers bringing RAFIQ to life
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 text-center group cursor-default"
            >
              {/* Avatar Circle */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary via-primary/80 to-secondary flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                {member.name.split(' ').map(n => n[0]).join('')}
              </div>
              
              {/* Name */}
              <h3 className="font-semibold text-primary group-hover:text-secondary transition-colors">
                {member.name}
              </h3>
              
              {/* Role */}
              <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
              
              {/* Number Badge */}
              <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-xs font-medium text-secondary">
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSlide;
