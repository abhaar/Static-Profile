import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export function ExperienceTimeline() {
  const experiences = [
    {
      company: "Google",
      position: "Senior Software Engineer",
      period: "2023 - Present",
      description: "Leading the development of AI-powered features for core products.",
      skills: ["Python", "TypeScript", "Machine Learning"]
    },
    {
      company: "Meta",
      position: "Software Engineer",
      period: "2021 - 2023",
      description: "Built infrastructure for content recommendation systems.",
      skills: ["React", "C++", "Big Data"]
    },
    {
      company: "Apple",
      position: "Software Engineer",
      period: "2020 - 2021",
      description: "Developed features for iOS and macOS platforms.",
      skills: ["Swift", "iOS Development"]
    },
    {
      company: "Microsoft",
      position: "Software Engineer Intern",
      period: "2019 - 2020",
      description: "Contributed to cloud infrastructure and Azure services.",
      skills: ["C#", ".NET", "Azure"]
    },
    {
      company: "Amazon",
      position: "Intern - Software Development",
      period: "2018 - 2019",
      description: "Worked on AWS services and backend optimization.",
      skills: ["Java", "AWS"]
    },
    {
      company: "Startup XYZ",
      position: "Co-Founder & CTO",
      period: "2017 - 2018",
      description: "Built and scaled a full-stack web application from scratch.",
      skills: ["Full Stack", "Node.js", "React"]
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
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-serif font-bold">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-border" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className="w-1/2">
                    <div className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-serif font-bold text-foreground">{exp.position}</h3>
                      <p className="text-primary font-medium text-sm">{exp.company}</p>
                      <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                      <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                      <div className="flex gap-2 flex-wrap mt-3">
                        {exp.skills.map(skill => (
                          <Badge key={skill} variant="secondary" className="font-normal text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-0 flex justify-center">
                    <div className="w-4 h-4 rounded-full bg-primary border-4 border-background mt-8" />
                  </div>

                  {/* Empty space on other side */}
                  <div className="w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
