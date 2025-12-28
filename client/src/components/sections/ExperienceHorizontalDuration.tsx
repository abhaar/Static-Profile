import { motion } from "framer-motion";

export function ExperienceHorizontalDuration() {
  const experiences = [
    { company: "Startup XYZ", startYear: 2017, endYear: 2018, duration: 1 },
    { company: "Amazon", startYear: 2018, endYear: 2019, duration: 1 },
    { company: "Microsoft", startYear: 2019, endYear: 2020, duration: 1 },
    { company: "Apple", startYear: 2020, endYear: 2021, duration: 1 },
    { company: "Meta", startYear: 2021, endYear: 2023, duration: 2 },
    { company: "Google", startYear: 2023, endYear: 2024, duration: 1 }
  ];

  const maxDuration = Math.max(...experiences.map(e => e.duration));
  const totalYears = experiences[experiences.length - 1].endYear - experiences[0].startYear;

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-accent/10 via-background to-secondary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-serif font-bold">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-8 px-4">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors w-32">
                    {exp.company}
                  </h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {exp.startYear} - {exp.endYear}
                  </span>
                </div>
                
                {/* Duration bar */}
                <div className="flex items-center gap-4">
                  <div className="w-32" />
                  <div className="flex-1 h-8 bg-muted rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(exp.duration / maxDuration) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="h-full bg-primary rounded-full group-hover:bg-accent transition-colors"
                    />
                    <div className="absolute inset-0 flex items-center justify-end pr-3">
                      <span className="text-xs font-medium text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        {exp.duration} yr{exp.duration > 1 ? 's' : ''}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
