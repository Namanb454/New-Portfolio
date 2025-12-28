"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram, Mail, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { usePortfolio, SECTIONS } from "@/context/PortfolioContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentSectionIndex, goToSection } = usePortfolio();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (pathname !== "/") {
      router.push("/");
      // We might need a delay or a param to scroll after nav, 
      // but for now just going home is enough. 
      // The context typically resets or we can force it.
      setTimeout(() => {
        const targetSection = SECTIONS.findIndex(s => s.id === sectionId);
        if (targetSection !== -1) goToSection(targetSection);
      }, 500);
    } else {
      const targetSection = SECTIONS.findIndex(s => s.id === sectionId);
      if (targetSection !== -1) {
        goToSection(targetSection);
      }
    }
    setIsOpen(false);
  }

  const isHome = pathname === "/";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md py-4 border-b border-white/10" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-end">

        {/* Logo
        <Link href="/" className="relative w-10 h-10 md:w-12 md:h-12 hover:scale-105 transition-transform" onClick={() => {
          if (isHome) goToSection(0);
        }}>
          <Image src="/logo.svg" alt="NB Logo" fill className="object-contain" />
        </Link> */}

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => handleNavClick('hero')}
            className={cn(
              "text-sm font-medium transition-colors relative group",
              pathname === "/" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Home
            <span className={cn("absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300", pathname === "/" ? "w-full" : "w-0 group-hover:w-full")} />
          </button>

          <Link
            href="/gallery"
            className={cn(
              "text-sm font-medium transition-colors relative group",
              pathname === "/gallery" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Gallery
            <span className={cn("absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300", pathname === "/gallery" ? "w-full" : "w-0 group-hover:w-full")} />
          </Link>

          <Link
            href="/book-a-call"
            className={cn(
              "text-sm font-medium transition-colors relative group",
              pathname === "/book-a-call" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            Book A Call
            <span className={cn("absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300", pathname === "/book-a-call" ? "w-full" : "w-0 group-hover:w-full")} />
          </Link>

          {/* Social Icos */}
          <div className="flex items-center gap-4 pl-4 border-l border-black/10">
            <a href="mailto:bansalnaman9585@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="https://github.com/Namanb454" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/naman-bansal-9585nb/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-600 transition-colors"><Linkedin className="w-5 h-5" /></a>
            <a href="https://x.com/namanbansaldev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/namanbansaldev/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-pink-600 transition-colors"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-xl z-[60] flex flex-col items-center justify-center lg:hidden"
            >
              <nav className="flex flex-col items-center gap-8">
                <button onClick={() => { handleNavClick('hero'); setIsOpen(false); }} className="text-3xl font-light">Home</button>
                <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-3xl font-light">Gallery</Link>
                <Link href="/book-a-call" onClick={() => setIsOpen(false)} className="text-3xl font-light">Book A Call</Link>

                <div className="flex items-center gap-6 mt-8 flex-wrap justify-center px-6">
                  <a href="mailto:bansalnaman9585@gmail.com" className="p-3 bg-white/10 rounded-full"><Mail className="w-6 h-6" /></a>
                  <a href="https://github.com/Namanb454" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full"><Github className="w-6 h-6" /></a>
                  <a href="https://www.linkedin.com/in/naman-bansal-9585nb/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full"><Linkedin className="w-6 h-6" /></a>
                  <a href="https://x.com/namanbansaldev" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full"><Twitter className="w-6 h-6" /></a>
                  <a href="https://www.instagram.com/namanbansaldev/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full"><Instagram className="w-6 h-6" /></a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
