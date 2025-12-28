import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-linear-to-b from-background via-secondary/20 to-background opacity-50" />
      <div className="container px-4 z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="lg:text-8xl font-serif font-bold text-foreground text-[68px]">Abhaar Gupta</h1>
          <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
            Software Engineer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border flex items-center justify-center shadow-lg">
            <span className="text-muted-foreground text-lg font-light">Your Photo</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
