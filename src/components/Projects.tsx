import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
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

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="group/btn">
                    <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    View Code
                  </Button>
                  <Button size="sm" className="group/btn">
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
