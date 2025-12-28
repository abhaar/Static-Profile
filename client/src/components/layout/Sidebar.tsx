import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { User, BookOpen, Mail, Home, Briefcase } from "lucide-react";

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
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
    onNavigate?.();
  };

  return (
    <aside className="w-full h-full bg-sidebar border-r border-sidebar-border flex flex-col items-start py-8 px-8 lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-64 lg:z-50">
      <div className="mb-12 w-full">
        <h1 className="text-xl font-serif font-bold tracking-tight text-sidebar-foreground">
          Portfolio.
        </h1>
      </div>

      <nav className="w-full flex-1 space-y-2">
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
              <span className="font-medium text-sm">
                {link.label}
              </span>
              <div className="absolute inset-0 bg-sidebar-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          );
        })}
      </nav>

      <div className="mt-auto w-full">
        <p className="text-xs text-muted-foreground">
          © 2024 Portfolio
        </p>
      </div>
    </aside>
  );
}
