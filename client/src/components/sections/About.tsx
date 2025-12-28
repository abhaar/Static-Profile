import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-secondary/15 via-background to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto space-y-8 md:space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
               <p>
                Hello! I'm a passionate software developer based in New York. I have over 10 years of professional experience with 8 years in the web3 industry.
               </p>
               <p>
                Currently, I'm employed as a web3 developer for Anchorage Digital.
               </p>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-6">
                 <div>
                   <h4 className="font-bold text-foreground block mb-2">Education</h4>
                   <ul className="text-sm space-y-2">
                     <li>MS Electrical Engineering, Columbia University, USA</li>
                     <li>BTech Electrical Engineering, NIT Kurukshetra, India</li>
                   </ul>
                 </div>
                 <div>
                   <h4 className="font-bold text-foreground block mb-2">Interests</h4>
                   <ul className="text-sm space-y-2">
                     <li>Web3</li>
                     <li>Distributed Systems</li>
                     <li>Blockchain Platforms</li>
                   </ul>
                 </div>
               </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
