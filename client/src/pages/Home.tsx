import { useState } from "react";
import { Sidebar } from "@/components/layout/Sidebar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { ExperienceHorizontalAlt } from "@/components/sections/ExperienceHorizontalAlt";
import { Publications } from "@/components/sections/Publications";
import { Contact } from "@/components/sections/Contact";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col lg:flex-row">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-2 rounded-lg bg-background border border-border hover:bg-muted transition-colors"
        aria-label="Toggle menu"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar - Hidden on mobile by default, shown via modal */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static w-64 h-screen lg:h-auto z-40 transition-transform duration-300`}>
        <Sidebar onNavigate={() => setSidebarOpen(false)} />
      </div>

      <main className="flex-1 w-full">
        <Hero />
        <About />
        <ExperienceHorizontalAlt />
        <Publications />
        <Contact />
      </main>
    </div>
  );
}
