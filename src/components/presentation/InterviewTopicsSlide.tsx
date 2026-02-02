import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";

const topics = [
  { topic: "Egyptian History", emoji: "🏛️", color: "from-rafiq-gold to-rafiq-coral", examples: ["Pharaohs", "Ancient Kingdoms", "Historical Events"] },
  { topic: "Landmarks", emoji: "🗿", color: "from-rafiq-coral to-rafiq-sky", examples: ["Pyramids", "Temples", "Museums"] },
  { topic: "Culture & Traditions", emoji: "🎭", color: "from-rafiq-sky to-primary", examples: ["Festivals", "Customs", "Art"] },
  { topic: "Local Cuisine", emoji: "🍽️", color: "from-primary to-secondary", examples: ["Traditional Dishes", "Restaurants", "Food Culture"] },
  { topic: "Tourist Safety", emoji: "🛡️", color: "from-secondary to-rafiq-gold", examples: ["Emergency Contacts", "Safe Areas", "Guidelines"] },
  { topic: "Practical Info", emoji: "ℹ️", color: "from-rafiq-gold to-primary", examples: ["Transportation", "Currency", "Weather"] },
];

const InterviewTopicsSlide = () => {
  return (
    <section id="interview-topics" className="min-h-screen py-16 bg-gradient-to-b from-background to-muted/30 flex items-center">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-rafiq-gold/20 text-rafiq-gold px-4 py-2 rounded-full mb-4">
            <MessageSquare className="w-4 h-4" />
            <span className="text-sm font-medium uppercase tracking-wider">Assessment Categories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Interview <span className="text-gradient-gold">Topics</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            6 comprehensive categories to assess tour guide knowledge and expertise
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((item, index) => (
              <motion.div
                key={item.topic}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 group hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="text-3xl">{item.emoji}</span>
                </div>
                
                {/* Topic Name */}
                <h3 className="text-lg font-display font-bold text-foreground mb-3">{item.topic}</h3>
                
                {/* Examples */}
                <div className="flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <span
                      key={example}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-center"
          >
            <div className="glass-card p-4 inline-block">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Interview Format:</strong> Random questions from each category to ensure comprehensive assessment
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InterviewTopicsSlide;
