import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Project Alpha",
    description: "A modern web application with real-time features and stunning UI.",
    tags: ["React", "TypeScript", "Tailwind"],
    image: null,
  },
  {
    title: "Project Beta",
    description: "E-commerce platform with seamless payment integration.",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
    image: null,
  },
  {
    title: "Project Gamma",
    description: "Dashboard analytics tool with interactive data visualization.",
    tags: ["React", "D3.js", "Node.js"],
    image: null,
  },
  {
    title: "Project Delta",
    description: "Mobile-first social platform with real-time messaging.",
    tags: ["React Native", "Firebase", "WebSocket"],
    image: null,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 px-5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">Portfolio</p>
          <h2 className="text-2xl md:text-4xl font-bold gradient-text">My Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group surface-card glow-border glow-border-hover transition-all duration-500 overflow-hidden"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-muted/50 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-2xl font-bold">{project.title.charAt(project.title.length - 1)}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-5 md:p-6">
                <h3 className="text-foreground font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 text-sm py-2 min-h-[44px]">
                    <Github size={18} /> Code
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 text-sm py-2 min-h-[44px]">
                    <ExternalLink size={18} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
