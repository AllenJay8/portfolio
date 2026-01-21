import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    year: "2023 – Present",
    school: "Filamer Christian University",
    level: "College",
  },
  {
    year: "2021 – 2023",
    school: "Feliciano Yusay Consing NHS",
    level: "Senior High School",
  },
  {
    year: "2017 – 2021",
    school: "Feliciano Yusay Consing NHS",
    level: "High School",
  },
  {
    year: "2011 – 2017",
    school: "Mambog Elementary School",
    level: "Elementary",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic journey that has shaped my foundation in technology and learning
          </p>
        </motion.div>

        <div className="space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={item.school}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="card-glass p-6 transition-all duration-300 hover:shadow-lg hover:glow-effect">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex items-center gap-3 md:w-48">
                    <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                      <GraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {item.year}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 border-t md:border-t-0 md:border-l border-border/50 pt-4 md:pt-0 md:pl-4">
                    <h3 className="text-lg font-semibold">{item.school}</h3>
                    <p className="text-primary font-medium">{item.level}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

