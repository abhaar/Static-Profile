import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

export function ExperienceCompact() {
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

          <div className="grid md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-all group cursor-pointer"
              >
                <div className="flex justify-between items-start gap-2 mb-3">
                  <div className="flex-1">
                    <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">{exp.company}</h3>
                    <p className="text-sm text-muted-foreground">{exp.position}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-xs text-primary font-medium mb-2">{exp.period}</p>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{exp.description}</p>
                <div className="flex gap-1 flex-wrap">
                  {exp.skills.slice(0, 2).map(skill => (
                    <Badge key={skill} variant="secondary" className="font-normal text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {exp.skills.length > 2 && (
                    <Badge variant="secondary" className="font-normal text-xs">
                      +{exp.skills.length - 2}
                    </Badge>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
