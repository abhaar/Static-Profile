import { Sidebar } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64 w-full transition-all duration-300">
        <Hero />
        <About />
        <Experience />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}
