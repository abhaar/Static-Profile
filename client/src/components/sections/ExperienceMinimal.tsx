import { motion } from "framer-motion";

export function ExperienceMinimal() {
  const experiences = [
    {
      company: "Google",
      position: "Senior Software Engineer",
      period: "2023 - Present",
      description: "Leading the development of AI-powered features for core products."
    },
    {
      company: "Meta",
      position: "Software Engineer",
      period: "2021 - 2023",
      description: "Built infrastructure for content recommendation systems."
    },
    {
      company: "Apple",
      position: "Software Engineer",
      period: "2020 - 2021",
      description: "Developed features for iOS and macOS platforms."
    },
    {
      company: "Microsoft",
      position: "Software Engineer Intern",
      period: "2019 - 2020",
      description: "Contributed to cloud infrastructure and Azure services."
    },
    {
      company: "Amazon",
      position: "Intern - Software Development",
      period: "2018 - 2019",
      description: "Worked on AWS services and backend optimization."
    },
    {
      company: "Startup XYZ",
      position: "Co-Founder & CTO",
      period: "2017 - 2018",
      description: "Built and scaled a full-stack web application from scratch."
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
          className="max-w-2xl mx-auto space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-serif font-bold">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border-l-4 border-primary pl-6 py-2 hover:pl-8 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-foreground">{exp.position}</h3>
                    <p className="text-primary font-medium text-sm">{exp.company}</p>
                  </div>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">{exp.period}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
