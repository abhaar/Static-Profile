import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-background via-secondary/20 to-background opacity-50" />
      
      <div className="container px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-7xl lg:text-8xl font-serif font-bold leading-tight text-foreground">
            Your Name
          </h1>
          <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
            Software Engineer
          </p>
        </motion.div>
      </div>
    </section>
  );
}
