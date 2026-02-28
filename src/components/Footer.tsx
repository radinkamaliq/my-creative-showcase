import { Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-12 md:py-16 px-5 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-bold gradient-text mb-4">Let's Work Together</h2>
        <p className="text-muted-foreground mb-8">
          Have a project in mind? I'd love to hear about it.
        </p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all hover:shadow-[0_0_25px_hsl(var(--glow-cyan)/0.4)] min-h-[48px]"
        >
          <Mail size={18} /> Get in Touch
        </a>
        <div className="flex items-center justify-center gap-6 mt-10">
          {[
            { icon: Github, href: "#" },
            { icon: Linkedin, href: "#" },
            { icon: Mail, href: "mailto:hello@example.com" },
          ].map(({ icon: Icon, href }, i) => (
            <a key={i} href={href} className="text-muted-foreground hover:text-primary transition-colors p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
              <Icon size={20} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground/50 text-sm mt-8">
          © 2026 Radinka Maliq. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
