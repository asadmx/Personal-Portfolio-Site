import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-section-bg">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <Card className="p-8 md:p-10 border-border bg-card hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <GraduationCap className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl md:text-3xl font-bold text-card-foreground">
                    Bachelor of Science
                  </h3>
                </div>
                <p className="text-xl text-primary font-semibold mb-2">
                  Wilfrid Laurier University
                </p>
                <p className="text-lg text-muted-foreground mb-2">
                  Major in Computer Science, Minor in Economics
                </p>
                <p className="text-muted-foreground">Milton, Ontario</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground mt-4 md:mt-0">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">Expected April 2026</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Award className="h-5 w-5 text-accent" />
                <h4 className="text-lg font-semibold text-card-foreground">Relevant Coursework</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-card-foreground mb-2">Computer Science:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Artificial Intelligence</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Data Science</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Software Project Management</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-card-foreground mb-2">Economics:</p>
                  <ul className="space-y-1 text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Microeconomics</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Macroeconomics</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-accent">•</span>
                      <span>Economic Data Analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-3 text-card-foreground">
                Extra-Curricular Activities
              </h4>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Badge variant="outline" className="shrink-0">Current</Badge>
                  <div>
                    <p className="font-medium text-card-foreground">VP of Finance - UX Laurier</p>
                    <p className="text-sm text-muted-foreground">
                      Overseeing budgeting, financial reporting, and sponsor outreach
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Badge variant="outline" className="shrink-0">Member</Badge>
                  <div>
                    <p className="font-medium text-card-foreground">Laurier Computing Society</p>
                    <p className="text-sm text-muted-foreground">
                      Participating in workshops, hackathons, and coding challenges
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
