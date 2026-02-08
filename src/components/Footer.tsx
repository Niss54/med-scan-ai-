import { Link } from "react-router-dom";
import { Brain, Phone, Mail, Globe, Github, Instagram, Youtube, Linkedin, Facebook, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Intro */}
          <div className="lg:col-span-1">
            <Link to="/" className="mb-4 flex items-center gap-2">
              <Brain className="h-7 w-7 text-primary" />
              <span className="font-display text-sm font-bold tracking-wider text-foreground">MONAI</span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A medical AI platform designed to help doctors analyze imaging reports faster and improve patient care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Features", href: "/features" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "Support", href: "/support" },
              ].map((l) => (
                <li key={l.href}>
                  <Link to={l.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-primary">Support</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" /> 8840301998
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" /> nishantma05@gmail.com
              </li>
              <li>
                <a href="https://www.nissh.info" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
                  <Globe className="h-4 w-4 text-primary" /> Any Query
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 font-display text-xs font-semibold uppercase tracking-widest text-primary">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Github, href: "https://github.com/Niss54" },
                { icon: Instagram, href: "https://www.instagram.com/niss_9854" },
                { icon: Youtube, href: "https://www.youtube.com/@Niss.visuals" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/niss-visuals/" },
                { icon: MessageCircle, href: "https://api.whatsapp.com/send/?phone=918840301998" },
                { icon: Send, href: "https://t.me/Nissvisuals" },
                { icon: Facebook, href: "https://www.facebook.com/nishant.maurya.585112/" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary text-muted-foreground transition-all hover:border-primary/50 hover:text-primary hover:glow-border"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Built by <span className="font-semibold text-primary">Nishant Maurya</span>. All rights reserved © 2026
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
