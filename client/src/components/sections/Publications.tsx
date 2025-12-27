import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Publications() {
  const publications = [
    {
      title: "Interpretable Machine Learning for Medical Diagnosis",
      venue: "NeurIPS 2024",
      date: "December 2024",
      description: "A novel approach to visualizing attention mechanisms in transformer models applied to medical imaging.",
      tags: ["ML", "Healthcare", "Interpretability"]
    },
    {
      title: "Aligning Large Language Models with Human Preferences",
      venue: "ICML 2024",
      date: "July 2024",
      description: "Proposed a reinforcement learning framework that significantly improves model alignment with diverse human feedback.",
      tags: ["LLMs", "RLHF", "Alignment"]
    },
    {
      title: "The Ethics of Autonomous Systems",
      venue: "CHI 2023",
      date: "April 2023",
      description: "A qualitative study on user trust and accountability in autonomous vehicle decision making.",
      tags: ["HCI", "Ethics", "User Study"]
    }
  ];

  return (
    <section id="publications" className="py-24">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-4xl font-serif font-bold">Selected Publications</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-muted-foreground">A collection of my recent research work and conference papers.</p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-serif">{pub.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">{pub.venue} • {pub.date}</CardDescription>
                      </div>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{pub.description}</p>
                    <div className="flex gap-2 flex-wrap">
                      {pub.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="font-normal text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
