import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const featuredProject = {
    title: "SellStatic",
    description: "Full-stack digital platform for SellStatic, a startup focused on lead generation, analytics, and investor engagement. Engineered scalable backend systems and responsive front-end components used by hundreds of customers.",
    highlights: [
      "Engineered scalable backend with PHP and Next.js for dynamic content delivery",
      "Built modular UI/UX templates for conversion-optimized layouts",
      "Developed responsive components with WordPress, Breakdance, and JavaScript",
      "Implemented authentication flows and third-party integrations",
      "Maintained version control using Git and GitHub in agile environment",
    ],
    tags: ["PHP", "Next.js", "WordPress", "Breakdance", "JavaScript", "REST APIs", "Git"],
    period: "2025",
    liveUrl: "https://sellstatic.com",
    featured: true,
  };

  const projects = [
    {
      title: "MW Immigration",
      description: "Professional immigration consulting website for MW Immigration services, providing comprehensive information about Canadian immigration services and consultation.",
      highlights: [
        "Built professional business website with modern design",
        "Implemented responsive layout for optimal mobile experience",
        "Created clear service presentation and contact flows",
        "Deployed and maintained live production website",
      ],
      tags: ["React", "Web Development", "Responsive Design", "Professional Site"],
      period: "2025",
      liveUrl: "https://mwimmigration.org",
    },
    {
      title: "United Rice Co",
      description: "E-commerce website for United Rice Company, showcasing rice products and facilitating online business operations for a rice distribution company.",
      highlights: [
        "Developed e-commerce platform with product catalog",
        "Implemented business-focused design and user experience",
        "Created responsive interface for various devices",
        "Deployed and managing live business website",
      ],
      tags: ["React", "E-commerce", "Business Website", "Web Development"],
      period: "2025",
      liveUrl: "https://unitedrice.co",
    },
    {
      title: "Pickup and Ride DBMS",
      description: "A comprehensive SQL database system for a ride-sharing application featuring normalized tables and optimized real-time queries for driver-rider matching.",
      highlights: [
        "Built full-scale SQL database with normalized tables",
        "Developed complex SQL procedures and joins for real-time matching",
        "Created analytics dashboards and automated reporting",
        "Improved data efficiency, scalability, and system reliability",
      ],
      tags: ["SQL", "Database Design", "PostgreSQL", "Data Analytics"],
      period: "Sept. 2025 – Oct. 2025",
    },
    {
      title: "SneakerHub",
      description: "A full-stack e-commerce web application for sneaker sales with React frontend and Node.js/Express backend, featuring real-time inventory management.",
      highlights: [
        "Built React frontend with responsive UI components",
        "Developed Node.js/Express REST API backend",
        "Integrated MongoDB for data management",
        "Implemented user favorites and real-time sneaker drops",
      ],
      tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      period: "Sept. 2025 – Oct. 2025",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          {/* Featured Project */}
          <Card className="p-8 md:p-10 mb-8 hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 bg-card group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-primary text-primary-foreground">Featured</Badge>
              </div>
              <div className="mb-6">
                <h3 className="text-3xl md:text-4xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {featuredProject.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{featuredProject.period}</p>
                <p className="text-muted-foreground leading-relaxed text-lg mb-6">
                  {featuredProject.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {featuredProject.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {featuredProject.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {featuredProject.liveUrl && (
                <Button asChild size="lg" className="group/btn">
                  <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5 group-hover/btn:rotate-12 transition-transform" />
                    Visit Website
                  </a>
                </Button>
              )}
            </div>
          </Card>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border bg-card group"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.period}</p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {project.liveUrl && (
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="group/btn"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Visit Website
                    </Button>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
