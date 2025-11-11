import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Asad Malik
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Full-Stack Developer & Computer Science Student
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 max-w-2xl mx-auto">
            Building scalable web applications with modern technologies. Passionate about creating
            elegant solutions to complex problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("projects")}
              className="group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700">
            <a
              href="https://github.com/asadmx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/asad-s-malik"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:mali9182@mylaurier.ca"
              className="p-3 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
