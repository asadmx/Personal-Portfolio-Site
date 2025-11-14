import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Software Engineer Intern",
      company: "SellStatic",
      location: "Toronto, ON",
      period: "Apr. 2025 - Current",
      description: [
        "Engineered scalable backend systems using PHP and Next.js, supporting dynamic content delivery, authentication flows, and robust third-party integrations for lead generation, analytics, and investor engagement",
        "Partnered closely with the founding team to translate evolving business goals into resilient technical architecture, building a scalable digital platform that balanced performance, security, and future-proof flexibility",
        "Maintained reliable version control using Git and GitHub, managing feature branches, resolving merge conflicts efficiently, and supporting continuous integration in a fast-paced, agile development environment",
        "Developed responsive and accessible front-end components with Breakdance, WordPress, HTML, CSS, and JavaScript, ensuring consistent cross-browser compatibility and smooth user interactions across devices",
        "Led the design and implementation of modular UI/UX templates used by hundreds of customers, creating visually appealing, conversion-optimized layouts that improved usability and supported flexible brand customization",
      ],
      tags: ["PHP", "Next.js", "WordPress", "JavaScript", "HTML", "CSS", "Breakdance", "Git", "GitHub", "REST APIs"],
    },
    {
      role: "AI Freelance Writer",
      company: "DataAnnotation",
      location: "Remote",
      period: "Feb. 2025 - Current",
      description: [
        "Conducted comprehensive quality assurance testing on AI-generated content, evaluating 200+ model outputs weekly for semantic accuracy, contextual relevance, and bias mitigation",
        "Provided granular technical feedback to machine learning teams, contributing to 15% improvement in Large Language Model (LLM) response quality and hallucination reduction",
        "Optimized natural language processing (NLP) workflows by identifying edge cases and implementing systematic evaluation frameworks across diverse use cases",
        "Collaborated with data science team to refine training datasets and fine-tune model parameters, enhancing conversational AI coherence and user satisfaction scores",
      ],
      tags: ["AI/ML", "LLM", "NLP", "QA Testing", "Data Analysis"],
    },
    {
      role: "Shift Supervisor",
      company: "Daata Grill",
      location: "Milton, ON",
      period: "Apr. 2023 - Oct. 2025",
      description: [
        "Managed and mentored cross-functional team of 10+ employees in high-volume restaurant environment, achieving 98% customer satisfaction rating through effective communication and conflict resolution",
        "Optimized operational workflows and inventory management systems, reducing average customer wait times by 20% and minimizing food waste by 15% through data-driven process improvements",
        "Enforced compliance with health and safety regulations (HACCP standards), conducted staff training programs, and implemented quality control procedures to maintain 100% safety audit scores",
        "Demonstrated strong problem-solving and adaptability in fast-paced environment, coordinating shift schedules and managing peak-hour service for 100+ daily customers",
      ],
      tags: ["Leadership", "Operations", "Process Optimization", "Team Management", "Problem Solving"],
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
