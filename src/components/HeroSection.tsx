import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--glow-cyan) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--glow-cyan) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary uppercase tracking-[0.3em] text-sm mb-4 font-medium">
            Hi, I'm Radinka Maliq
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text leading-tight">
            Student
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
            I build simple things that work great.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-5"
        >
          <a href="#projects" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:shadow-[0_0_25px_hsl(var(--glow-cyan)/0.4)]">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-primary/30 text-primary font-semibold transition-all hover:bg-primary/10">
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "#" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="text-muted-foreground hover:text-primary transition-colors">
              <Icon size={22} />
            </a>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown className="text-muted-foreground" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
