import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Engineer Intern",
      company: "SellStatic",
      location: "Toronto, ON",
      period: "Sept. 2025 - Current",
      description: [
        "Built and scaled Java-based backend services using Spring Boot, designing and maintaining RESTful APIs that handle authentication, data processing, and content delivery for a production platform accessed by thousands of users",
        "Designed and optimized backend workflows for automated ad and website generation, coordinating multiple Java services and API pipelines to increase generation speed by 300% while maintaining reliability under real user load",
        "Designed and implemented 100+ reusable social media templates, making it easy for users to generate and upload ads directly from the platform to social channels, while the backend efficiently handled customization, asset management, and high user demand",
        "Integrated third-party APIs and data scraping solutions into the platform, storing and querying structured data with MongoDB, and deploying backend services on AWS to support scalability, uptime, and smooth operation in production environments",
        "Built 5+ fully functional customer websites from end to end, collaborating closely with teammates through GitHub for version control, code reviews, and feature iteration, and contributing to a product recognized as Top 10 at WebSummit 2025",
      ],
      tags: ["Java", "Spring Boot", "MongoDB", "AWS", "REST APIs", "Git", "GitHub"],
    },
    {
      role: "Game Developer Intern",
      company: "AgentFlow AI",
      location: "Toronto, ON",
      period: "May 2025 - Sept. 2025",
      description: [
        "Designed and built AI-driven agents using large language models, implementing core logic and services in Java to support interactive gameplay systems with 30+ branching states and story paths, used across multiple game prototypes and internal demos",
        "Built structured prompt pipelines, tool schemas, and API integrations in Java, enabling agents to dynamically generate gameplay mechanics, dialogue, and narrative content, improving generation speed by 2–3× and reducing latency across hundreds of automated generation runs",
        "Tested, refined, and shipped agent behavior using 100+ user interaction sessions, collaborating through Git and GitHub for version control and code reviews, improving response consistency, state accuracy, and overall gameplay stability across releases",
      ],
      tags: ["Java", "LLM", "AI Agents", "Game Development", "API Integration", "Git", "GitHub"],
    },
    {
      role: "VP of Finance",
      company: "UX Laurier",
      location: "Waterloo, ON",
      period: "Sept. 2025 - Current",
      description: [
        "Lead financial strategy and operations for a student-run UX organization, overseeing yearly budgets and ensuring fiscal responsibility across multiple initiatives",
        "Develop and implement comprehensive financial planning frameworks, including budget forecasting, expense tracking, and financial reporting systems to optimize resource allocation",
        "Collaborate with executive board to secure funding through sponsorships and grants, establishing partnerships with industry leaders and local businesses to support organizational growth",
        "Oversee financial compliance and risk management, ensuring adherence to university policies and maintaining transparent financial records for stakeholder accountability",
        "Mentor junior team members on financial literacy and provide strategic guidance on event budgeting and fundraising initiatives",
      ],
      tags: ["Financial Planning", "Budget Management", "Leadership", "Stakeholder Relations", "Strategic Planning", "Risk Management"],
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
      role: "Wedding & Event Decorator",
      company: "Freelance",
      location: "Ontario, Canada",
      period: "Sept. 2023 - Present",
      description: [
        "Design and set up event décor for weddings, parties, and cultural events",
        "Coordinate with clients to match themes, colours, and layout visions",
        "Manage décor inventory, props, and setup/teardown to ensure flawless event execution",
      ],
      tags: ["Event Planning", "Design", "Client Coordination", "Project Management"],
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
    {
      role: "Server",
      company: "Eggsmart",
      location: "Milton, ON",
      period: "Sept. 2025 - Present",
      description: [
        "Provide friendly, efficient table service in a fast-paced breakfast restaurant",
        "Handle orders, payments, and customer requests with a positive attitude",
        "Maintain clean dining areas and support smooth kitchen–front-of-house communication",
      ],
      tags: ["Customer Service", "Communication", "Fast-Paced Environment", "Team Collaboration"],
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
