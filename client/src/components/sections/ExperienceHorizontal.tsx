import { motion } from "framer-motion";

export function ExperienceHorizontal() {
  const experiences = [
    { company: "Startup XYZ", year: "2017" },
    { company: "Amazon", year: "2018" },
    { company: "Microsoft", year: "2019" },
    { company: "Apple", year: "2020" },
    { company: "Meta", year: "2021" },
    { company: "Google", year: "2023" }
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

          <div className="relative px-4">
            {/* Horizontal line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-border" />

            {/* Timeline items */}
            <div className="flex justify-between items-start relative z-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center flex-1 group"
                >
                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background mb-6 group-hover:w-6 group-hover:h-6 group-hover:mb-5 transition-all duration-300" />

                  {/* Company name */}
                  <div className="text-center">
                    <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{exp.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
