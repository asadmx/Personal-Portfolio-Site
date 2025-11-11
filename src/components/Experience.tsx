import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Full-Stack Developer Intern",
      company: "SellStatic",
      location: "Toronto, ON",
      period: "Apr. 2025 - Current",
      description: [
        "Engineered scalable backend systems using PHP and Next.js, supporting dynamic content delivery and robust third-party integrations",
        "Partnered with founding team to translate business goals into resilient technical architecture",
        "Developed responsive and accessible front-end components with WordPress, HTML, CSS, and JavaScript",
        "Led design and implementation of modular UI/UX templates used by hundreds of customers",
      ],
      tags: ["PHP", "Next.js", "WordPress", "JavaScript", "Git"],
    },
    {
      role: "AI Freelance Writer",
      company: "DataAnnotation",
      location: "Remote",
      period: "Feb. 2025 - Current",
      description: [
        "Evaluated AI-generated responses for tone, context, and factual accuracy",
        "Delivered in-depth feedback to improve Large Language Model behavior and reduce bias",
        "Enhanced natural language flow and consistency across varied use cases",
      ],
      tags: ["AI", "LLM", "Quality Assurance"],
    },
    {
      role: "Shift Supervisor",
      company: "Daata Grill",
      location: "Milton, ON",
      period: "Apr. 2023 - Oct. 2025",
      description: [
        "Led team of 10+ staff in fast-paced restaurant setting",
        "Streamlined workflows to reduce wait times and improve training processes",
        "Maintained high standards for safety, cleanliness, and performance",
      ],
      tags: ["Leadership", "Operations", "Team Management"],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 hover:shadow-xl transition-all duration-300 border-border bg-card"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-2xl font-bold text-card-foreground">{exp.role}</h3>
                    </div>
                    <p className="text-lg text-primary font-semibold">{exp.company}</p>
                    <p className="text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-muted-foreground">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
