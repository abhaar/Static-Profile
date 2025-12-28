import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-secondary/15 via-background to-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-serif font-bold">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
               <p>
                 Hello! I'm a passionate researcher and developer based in San Francisco. With a background in Computer Science and Cognitive Science, I'm interested in how we can make AI systems more interpretable and aligned with human values.
               </p>
               <p>
                 Currently, I'm pursuing my PhD at Stanford University, working on large language model alignment. Before this, I spent two years as a Research Engineer at DeepMind.
               </p>
               <p>
                 When I'm not coding or writing papers, you can find me hiking the Marin Headlands, brewing the perfect pour-over coffee, or reading sci-fi novels.
               </p>
               
               <div className="grid grid-cols-2 gap-4 pt-6">
                 <div>
                   <h4 className="font-bold text-foreground block mb-2">Education</h4>
                   <ul className="text-sm space-y-2">
                     <li>PhD Computer Science, Stanford</li>
                     <li>BS Computer Science, MIT</li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-bold text-foreground block mb-2">Interests</h4>
                   <ul className="text-sm space-y-2">
                     <li>AI Alignment</li>
                     <li>Human-Computer Interaction</li>
                     <li>Data Visualization</li>
                   </ul>
                 </div>
               </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
