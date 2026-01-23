import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["Python", "Java", "C", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "R"],
    },
    {
      category: "Frameworks & Technologies",
      skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Developer Tools",
      skills: ["Git", "GitHub", "Docker", "Jenkins", "Redis", "VS Code", "Figma"],
    },
    {
      category: "Concepts",
      skills: ["REST APIs", "CI/CD", "DevOps", "Agile", "OOP", "Linux"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 border-border bg-card hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-4 text-card-foreground flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent mr-3 rounded-full" />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="text-sm px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
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

export default Skills;
