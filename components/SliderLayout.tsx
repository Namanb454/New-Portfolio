"use client";

import { usePortfolio, SECTIONS } from "@/context/PortfolioContext";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface SliderLayoutProps {
    children: ReactNode[];
}

export default function SliderLayout({ children }: SliderLayoutProps) {
    const { currentSectionIndex, nextSection, prevSection, isFirstSection, isLastSection } = usePortfolio();

    // Ensure we define direction based on index change for slide animation if needed, 
    // currently using a simple fade/scale transition.

    return (
        <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden bg-white text-foreground flex flex-col">

            {/* Main Content Area */}
            <div className="flex-1 w-full h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSectionIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full overflow-y-auto no-scrollbar p-0 pb-24 md:pb-32"
                    >
                        {/* Render the current section's component */}
                        <div className="min-h-full w-full h-full">
                            {children[currentSectionIndex]}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls (Fixed Bottom) */}
            <div className="absolute bottom-6 left-0 right-0 z-50 px-6 md:px-12 flex items-center justify-between pointer-events-none bg-transparent">

                {/* Previous Button */}
                <button
                    onClick={prevSection}
                    disabled={isFirstSection}
                    className={`
            pointer-events-auto flex items-center gap-2 px-6 py-3 rounded-full 
            transition-all duration-300 font-medium tracking-wide backdrop-blur-md
            ${isFirstSection
                            ? 'opacity-0 translate-y-10'
                            : 'opacity-100 translate-y-0 bg-white/10 hover:bg-black hover:text-white border border-black/10 text-foreground'}
          `}
                >
                    <ChevronLeft className="w-5 h-5" />
                    <span className="hidden md:inline">Previous</span>
                </button>

                {/* Progress Dots */}
                <div className="pointer-events-auto flex gap-2 p-2 rounded-full bg-white/50 backdrop-blur-md border border-white/20">
                    {SECTIONS.map((_, idx) => (
                        <div
                            key={idx}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentSectionIndex ? 'bg-black w-6' : 'bg-black/20'}`}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSection}
                    disabled={isLastSection}
                    className={`
            pointer-events-auto flex items-center gap-2 px-6 py-3 rounded-full 
            transition-all duration-300 font-medium tracking-wide backdrop-blur-md
            ${isLastSection
                            ? 'opacity-0 translate-y-10'
                            : 'opacity-100 translate-y-0 bg-black text-white hover:bg-black/80 hover:scale-105 border border-transparent'}
          `}
                >
                    <span className="hidden md:inline">Next</span>
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
