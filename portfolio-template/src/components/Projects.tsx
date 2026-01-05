import { motion } from "framer-motion";
import { ExternalLink, Github, Box, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  iconType: "boxes" | "globe";
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Inventory System",
    description: "An inventory management system built to track products and manage stock levels. Focused on database design, management, and integration using Django Framework.",
    iconType: "boxes",
    tags: ["Django", "HTML", "JavaScript", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Simple Web Pages",
    description: "Created basic websites to practice layout, styling, and structure. Includes personal pages, landing pages, and small static websites.",
    iconType: "globe",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const IconRenderer = ({ type }: { type: "boxes" | "globe" }) => {
  if (type === "boxes") {
    return (
      <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
        <Box className="w-8 h-8 text-primary" />
      </div>
    );
  }
  return (
    <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
      <Globe className="w-8 h-8 text-primary" />
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hands-on projects where I practice and apply what I'm learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Card className="card-glass overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:glow-effect">
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <IconRenderer type={project.iconType} />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    {project.demoUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
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

export default Projects;

