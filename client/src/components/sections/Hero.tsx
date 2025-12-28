import { motion } from "framer-motion";
import photo from "@assets/bg_1766894877019.jpg";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 md:pt-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-background via-secondary/20 to-background opacity-50" />
      <div className="container px-4 md:px-6 z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center md:text-left"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-foreground leading-tight">
            Abhaar Gupta
          </h1>
          <p className="text-lg md:text-2xl lg:text-3xl text-muted-foreground font-light">
            Software Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden bg-muted border border-border shadow-lg flex-shrink-0">
            <img 
              src={photo} 
              alt="Abhaar Gupta" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
