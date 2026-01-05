import { motion } from "framer-motion";
import { Code2, FileCode, Palette, Smartphone } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "HTML",
    description: "Semantic markup, accessibility basics, and clean document structure",
  },
  {
    icon: FileCode,
    title: "JavaScript",
    description: "DOM manipulation, event handling, and simple interactivity",
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    description: "Utility-first styling, responsive layouts, and rapid prototyping",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach, flexible grids, and media queries",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm a self-taught web developer focused on mastering the fundamentals. I started learning web development to turn ideas into real, working websites. Right now, I'm building my skills in HTML for structure, JavaScript for interactivity, and Tailwind CSS for fast, responsive styling.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            I enjoy the process of solving problems and seeing my code come to life in the browser. Every project teaches me something new, and I'm always looking to improve.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="card-glass p-6 h-full transition-all duration-300 hover:shadow-lg hover:glow-effect">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground">{skill.description}</p>
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

export default About;
