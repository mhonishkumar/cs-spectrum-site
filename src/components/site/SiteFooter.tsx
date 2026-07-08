import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, Twitter, MapPin, Mail, Phone, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Faculty", href: "/faculty" },
  { label: "Research", href: "/faculty-research" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/faculty-blog" },
  { label: "Achievements", href: "/achievements" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-card border-t hairline pt-20 pb-10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-12">
        
        {/* Footer Introduction */}
        <div className="flex flex-col">
          <Reveal delay={0}>
            <h4 className="font-display text-xl text-primary font-medium mb-4">
              Department of Computer Science and Engineering
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering future innovators through quality education, cutting-edge research, industry collaboration, and continuous learning. Our department is committed to nurturing skilled professionals who contribute to technology and society with creativity, integrity, and excellence.
            </p>
          </Reveal>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col lg:pl-8">
          <Reveal delay={100}>
            <h5 className="font-semibold text-primary tracking-wide mb-6">Quick Links</h5>
            <ul className="space-y-3 text-sm font-medium">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href as "/"}
                    className="text-muted-foreground hover:text-brand transition-colors relative inline-block group py-0.5"
                  >
                    {link.label}
                    <span className="absolute left-0 bottom-0 w-0 h-px bg-brand transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col lg:pl-4">
          <Reveal delay={200}>
            <h5 className="font-semibold text-primary tracking-wide mb-6">Contact Information</h5>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3 group cursor-default">
                <div className="mt-0.5 p-1.5 rounded-md bg-secondary text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  Velammal Institute of Technology,<br />
                  Chennai - Kolkata High Way,<br />
                  Panchetti, Tamil Nadu 601204
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-md bg-secondary text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </div>
                <a href="mailto:hod.cse@velammalitech.edu.in" className="hover:text-brand transition-colors duration-300">
                  hod.cse@velammalitech.edu.in
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-md bg-secondary text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <Phone className="h-4 w-4" />
                </div>
                <a href="tel:+919087556789" className="hover:text-brand transition-colors duration-300">
                  +91 90875 56789
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-1.5 rounded-md bg-secondary text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                  <Globe className="h-4 w-4" />
                </div>
                <a href="https://velammalitech.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors duration-300">
                  velammalitech.edu.in
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        {/* Stay Connected */}
        <div className="flex flex-col">
          <Reveal delay={300}>
            <h5 className="font-semibold text-primary tracking-wide mb-6">Stay Connected</h5>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Follow the Department of Computer Science and Engineering on our official social media platforms to stay updated with the latest events, research activities, student achievements, workshops, and announcements.
            </p>
            <div className="flex items-center gap-3 text-muted-foreground flex-wrap">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/innovate-cse-751818420/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/vitcsedepartment?igsh=MXVxZGx1ZWMzYWdkZA==", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "https://www.youtube.com/@InnovateCSE", label: "YouTube" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary hover:bg-brand hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      {/* Footer Bottom */}
      <Reveal delay={400}>
        <div className="mx-auto max-w-7xl px-6 mt-16 pt-8 border-t hairline flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-[13px] text-muted-foreground">
            © 2026 Department of Computer Science and Engineering<br className="md:hidden" />
            <span className="hidden md:inline"> | </span>Velammal Institute of Technology.<br className="md:hidden" />
            <span className="hidden md:inline"> </span>All Rights Reserved.
          </div>
          <div className="text-[13px] text-muted-foreground/80">
            Designed and Maintained by the Department of Computer Science and Engineering.
          </div>
        </div>
      </Reveal>
    </footer>
  );
}
