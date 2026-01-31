import { motion } from "framer-motion";
import { Smartphone, MapPin, User, Compass } from "lucide-react";
import mobileMapScreen from "@/assets/mobile-map-screen.jpg";
import mobileSettingsScreen from "@/assets/mobile-settings-screen.jpg";
import mobileExploreScreen from "@/assets/mobile-explore-screen.jpg";

const features = [
  { icon: Compass, title: "Explore Destinations", desc: "Discover Egypt's iconic locations" },
  { icon: MapPin, title: "Smart Navigation", desc: "Real-time route guidance with fare estimates" },
  { icon: User, title: "Profile Management", desc: "Settings, preferences, and account controls" },
];

const MobileUISlide = () => {
  return (
    <section id="mobile-ui" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-4">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">User Interface</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Mobile <span className="text-gradient-gold">UI Screens</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-4 mb-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-4 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-bold text-foreground text-sm">{feature.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone Screens */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {[
              { img: mobileExploreScreen, label: "Explore" },
              { img: mobileMapScreen, label: "Navigation" },
              { img: mobileSettingsScreen, label: "Settings" },
            ].map((screen, index) => (
              <motion.div
                key={screen.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="w-48 md:w-56 bg-gradient-to-b from-foreground/80 to-foreground rounded-[2rem] p-2 shadow-2xl">
                  <div className="rounded-[1.5rem] overflow-hidden">
                    <img 
                      src={screen.img} 
                      alt={`${screen.label} Screen`} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="text-center mt-3">
                  <span className="text-sm font-semibold text-foreground">{screen.label}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MobileUISlide;
