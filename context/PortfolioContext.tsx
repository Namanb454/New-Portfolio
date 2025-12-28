"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the available sections and their order
export const SECTIONS = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Gallery" }, // Renaming label just for clarity, though id remains
    { id: "testimonials", label: "Testimonials" },
];

interface PortfolioContextType {
    currentSectionIndex: number;
    nextSection: () => void;
    prevSection: () => void;
    goToSection: (index: number) => void;
    isFirstSection: boolean;
    isLastSection: boolean;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const nextSection = () => {
        if (currentSectionIndex < SECTIONS.length - 1) {
            setCurrentSectionIndex((prev) => prev + 1);
        }
    };

    const prevSection = () => {
        if (currentSectionIndex > 0) {
            setCurrentSectionIndex((prev) => prev - 1);
        }
    };

    const goToSection = (index: number) => {
        if (index >= 0 && index < SECTIONS.length) {
            setCurrentSectionIndex(index);
        }
    };

    const isFirstSection = currentSectionIndex === 0;
    const isLastSection = currentSectionIndex === SECTIONS.length - 1;

    return (
        <PortfolioContext.Provider
            value={{
                currentSectionIndex,
                nextSection,
                prevSection,
                goToSection,
                isFirstSection,
                isLastSection,
            }}
        >
            {children}
        </PortfolioContext.Provider>
    );
}

export function usePortfolio() {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error("usePortfolio must be used within a PortfolioProvider");
    }
    return context;
}
