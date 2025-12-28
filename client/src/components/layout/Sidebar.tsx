import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { User, BookOpen, Mail, Home, Briefcase } from "lucide-react";

export function Sidebar() {
  const [location] = useLocation();

  const links = [
    { href: "#hero", label: "Home", icon: Home },
    { href: "#about", label: "About Me", icon: User },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#publications", label: "Publications", icon: BookOpen },
    { href: "#contact", label: "Contact Me", icon: Mail },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-sidebar border-r border-sidebar-border flex flex-col items-center lg:items-start py-8 z-50 transition-all duration-300">
      <div className="px-0 lg:px-8 mb-12 w-full flex justify-center lg:justify-start">
        <h1 className="text-xl font-serif font-bold hidden lg:block tracking-tight text-sidebar-foreground">
          Portfolio.
        </h1>
        <h1 className="text-xl font-serif font-bold lg:hidden text-sidebar-foreground">
          P.
        </h1>
      </div>

      <nav className="w-full flex-1 px-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;
          const isActive = location === link.href;

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden",
                "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                "text-muted-foreground"
              )}
            >
              <Icon className="w-5 h-5 shrink-0" />
              <span className="hidden lg:block font-medium text-sm">
                {link.label}
              </span>
              <div className="absolute inset-0 bg-sidebar-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          );
        })}
      </nav>

      <div className="px-0 lg:px-8 mt-auto w-full flex justify-center lg:justify-start">
        <p className="text-xs text-muted-foreground hidden lg:block">
          © 2024 Portfolio
        </p>
      </div>
    </aside>
  );
}
