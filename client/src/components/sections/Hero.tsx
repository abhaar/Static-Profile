import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/minimalist_abstract_academic_background.png";

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
          className="space-y-6"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            Academic Researcher & Developer
          </div>
          <h1 className="text-5xl lg:text-7xl font-serif font-bold leading-tight text-foreground">
            Exploring the <br />
            <span className="text-muted-foreground italic">Future of AI</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            I specialize in machine learning, data science, and building intuitive user interfaces that bridge the gap between complex algorithms and human understanding.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="rounded-full px-8">
              My Work <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8">
              Resume <Download className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block"
        >
           <div className="aspect-square rounded-2xl overflow-hidden bg-muted relative shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
             <div className="absolute inset-0 bg-linear-to-tr from-primary/10 to-transparent z-10" />
             <img 
              src={heroImage} 
              alt="Abstract Minimalist" 
              className="w-full h-full object-cover"
             />
           </div>
        </motion.div>
      </div>
    </section>
  );
}
