import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold gradient-text mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground mb-8">
          Have a project in mind? I'd love to hear about it.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:shadow-[0_0_25px_hsl(var(--glow-cyan)/0.4)]"
        >
          <Mail size={18} /> Get in Touch
        </a>
        <div className="flex items-center justify-center gap-6 mt-10">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "mailto:hello@example.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="text-muted-foreground hover:text-primary transition-colors">
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground/50 text-sm mt-8">
          © 2026 Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
