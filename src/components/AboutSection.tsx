import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Writing maintainable, scalable solutions" },
  { icon: Palette, title: "Design Focused", desc: "Pixel-perfect UI with great UX" },
  { icon: Zap, title: "Performance", desc: "Fast, optimized applications" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary uppercase tracking-[0.2em] text-sm mb-3">About Me</p>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Who I Am</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="surface-card glow-border glow-border-hover p-8 md:p-10 mb-12 transition-all duration-500"
        >
          <p className="text-foreground/80 text-lg leading-relaxed">
            I'm a passionate developer who loves turning ideas into reality through code. 
            With a strong foundation in modern web technologies, I create applications 
            that are not only functional but also visually stunning. I believe that great 
            software should be both powerful and beautiful.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="surface-card glow-border glow-border-hover p-6 text-center transition-all duration-500"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-foreground font-semibold text-lg mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
