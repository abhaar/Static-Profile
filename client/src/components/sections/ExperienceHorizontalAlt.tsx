import { motion } from "framer-motion";

export function ExperienceHorizontalAlt() {
  const experiences = [
    { company: "Samsung", year: "2010", position: "above" },
    { company: "Trexquant Investments", year: "2015", position: "below" },
    { company: "Goldman Sachs", year: "2016", position: "above" },
    { company: "Axoni", year: "2018", position: "below" },
    { company: "Gemini", year: "2021", position: "above" },
    { company: "Bastion Platforms", year: "2024", position: "below" },
    { company: "Anchorage Digital", year: "2025", position: "above" }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gradient-to-br from-accent/10 via-background to-secondary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-8 md:space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative py-12 md:py-16 px-4">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-border transform -translate-y-1/2" />

            {/* Timeline items */}
            <div className="flex justify-between items-center relative z-10 gap-2 md:gap-4 flex-wrap md:flex-nowrap">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: exp.position === "above" ? -20 : 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center flex-1 group min-w-max md:min-w-fit"
                >
                  {exp.position === "above" ? (
                    <>
                      <div className="text-center mb-3 md:mb-6">
                        <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors text-xs md:text-sm">
                          {exp.company}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">{exp.year}</p>
                      </div>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-2 md:border-4 border-background group-hover:w-5 md:group-hover:w-6 group-hover:h-5 md:group-hover:h-6 transition-all duration-300" />
                    </>
                  ) : (
                    <>
                      <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary border-2 md:border-4 border-background group-hover:w-5 md:group-hover:w-6 group-hover:h-5 md:group-hover:h-6 transition-all duration-300" />
                      <div className="text-center mt-3 md:mt-6">
                        <h3 className="font-serif font-bold text-foreground group-hover:text-primary transition-colors text-xs md:text-sm">
                          {exp.company}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1">{exp.year}</p>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
