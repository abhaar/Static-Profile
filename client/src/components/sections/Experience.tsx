import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  const experiences = [
    {
      company: "Google",
      position: "Senior Software Engineer",
      period: "2023 - Present",
      description: "Leading the development of AI-powered features for core products.",
      skills: ["Python", "TypeScript", "Machine Learning", "System Design"]
    },
    {
      company: "Meta",
      position: "Software Engineer",
      period: "2021 - 2023",
      description: "Built infrastructure for content recommendation systems serving billions of users.",
      skills: ["React", "C++", "Big Data", "Distributed Systems"]
    },
    {
      company: "Apple",
      position: "Software Engineer",
      period: "2020 - 2021",
      description: "Developed features for iOS and macOS platforms.",
      skills: ["Swift", "Objective-C", "iOS Development", "Performance Optimization"]
    },
    {
      company: "Microsoft",
      position: "Software Engineer Intern",
      period: "2019 - 2020",
      description: "Contributed to cloud infrastructure and Azure services.",
      skills: ["C#", ".NET", "Azure", "Cloud Computing"]
    },
    {
      company: "Amazon",
      position: "Intern - Software Development",
      period: "2018 - 2019",
      description: "Worked on AWS services and backend optimization.",
      skills: ["Java", "AWS", "DynamoDB", "Lambda"]
    },
    {
      company: "Startup XYZ",
      position: "Co-Founder & CTO",
      period: "2017 - 2018",
      description: "Built and scaled a full-stack web application from scratch.",
      skills: ["Full Stack", "Node.js", "React", "Startup Growth"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-accent/10 via-background to-secondary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-serif font-bold">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-serif">{exp.position}</CardTitle>
                        <CardDescription className="text-primary font-medium">{exp.company}</CardDescription>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{exp.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{exp.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {exp.skills.map(skill => (
                        <Badge key={skill} variant="secondary" className="font-normal text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
