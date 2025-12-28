import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Contact() {

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-secondary/15 via-background to-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto space-y-8 md:space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-sm md:text-base text-muted-foreground">Have a question or want to collaborate? Feel free to reach out.</p>
          </div>

          <div className="max-w-2xl mx-auto space-y-8 md:space-y-12">
            <div className="space-y-4 md:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border flex items-center justify-center text-primary flex-shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-foreground text-sm md:text-base">Email</h4>
                  <a href="mailto:abhaar@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    abhaar@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 md:gap-4"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-background border flex items-center justify-center text-primary flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-medium text-foreground text-sm md:text-base">Location</h4>
                  <p className="text-muted-foreground">New York, NY</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="pt-6 md:pt-8 border-t border-border"
            >
              <h4 className="font-serif font-bold text-lg md:text-xl mb-4 md:mb-6">Connect With Me</h4>
              <div className="flex gap-3 md:gap-4">
                <a href="https://www.github.com/abhaar" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Github className="w-4 h-4 md:w-5 md:h-5" />
                </a>
                <a href="https://www.linkedin.com/in/abhaar" className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
