import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export function Publications() {
  const publications = [
    {
      title: "Cross-partition calls in partitioned, tamper-evident data stores",
      venue: "US Patent US11556658B2",
      date: "January 2023",
      description: "A novel approach for sharing data between blockchains.",
      tags: ["Web3", "EVM", "Blockchain", "Axcore"]
    },
    {
      title: "The Dawn of Digital Fort Knoxes: How Multisig and MPC Are Revolutionizing Crypto Security.",
      venue: "Hackernoon",
      date: "June 2025",
      description: "Multisig and MPC Wallets.",
      tags: ["Web3", "Wallets", "Cryptography"]
    },
    {
      title: "How I Built a Go MCP Server to Query Crypto Balances in VSCode.",
      venue: "Hackernoon",
      date: "September 2025",
      description: "How to build an MCP server using Go SDK.",
      tags: ["AI", "MCP", "Go"]
    }
  ];

  return (
    <section id="publications" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-8 md:space-y-12"
        >
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold">Selected Publications</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-sm md:text-base text-muted-foreground">A collection of my recent work and publications.</p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-primary/20 hover:border-l-primary">
                  <CardHeader className="pb-3 md:pb-4">
                    <div className="flex justify-between items-start gap-3 md:gap-4">
                      <div className="space-y-1 flex-1 min-w-0">
                        <CardTitle className="text-lg md:text-xl font-serif">{pub.title}</CardTitle>
                        <CardDescription className="text-primary font-medium text-xs md:text-sm">{pub.venue} • {pub.date}</CardDescription>
                      </div>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 mt-1">
                        <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                      </a>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3 md:space-y-4">
                    <p className="text-sm md:text-base text-muted-foreground">{pub.description}</p>
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
