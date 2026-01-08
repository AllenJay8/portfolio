import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

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
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm Allen Jay Laher, a beginner web developer currently pursuing a degree in Computer Science at Filamer Christian University. My journey in web development started with a curiosity about how websites work, and I've been building my skills one project at a time.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4">
            I focus on creating clean, functional websites using HTML, JavaScript, and Tailwind CSS. As a student developer, I'm constantly learning and taking on new challenges to improve my craft. Every project teaches me something valuable, and I approach each task with enthusiasm and a growth mindset.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
