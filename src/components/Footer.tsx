import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-accent text-primary-foreground py-12 overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-primary-foreground rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main content */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Asad Malik</h3>
            <p className="text-primary-foreground/80 mb-6">
              Software Engineer Intern | Computer Science Student
            </p>

            {/* Social links */}
            <div className="flex gap-4 justify-center mb-8">
              <a
                href="https://github.com/asadmx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/asad-s-malik"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
              <a
                href="mailto:mali9182@mylaurier.ca"
                className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-primary-foreground/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
              <p>
                © {new Date().getFullYear()} Asad Malik. All rights reserved.
              </p>
              <p className="flex items-center gap-2">
                Built with <Heart className="h-4 w-4 text-red-400 animate-pulse" /> using React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
