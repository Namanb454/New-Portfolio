"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/Section";
import Image from "next/image";

const galleryItems = [
    { id: 1, title: "FinTech Dashboard", category: "UI Design", image: "/gallery/1.jpg" }, // Placeholder
    { id: 2, title: "Wellness App", category: "Mobile Design", image: "/gallery/2.jpg" },
    { id: 3, title: "SaaS Analytics", category: "Web App", image: "/gallery/3.jpg" },
    { id: 4, title: "E-commerce Redesign", category: "UI/UX", image: "/gallery/4.jpg" },
    { id: 5, title: "Portfolio Concept", category: "Web Design", image: "/gallery/5.jpg" },
    { id: 6, title: "Banking App", category: "Mobile UI", image: "/gallery/6.jpg" },
];

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12">
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="container mx-auto"
            >
                <div className="mb-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
                        Design <span className="font-serif italic font-light text-muted-foreground">Gallery</span>
                    </h1>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                        A collection of user interfaces, design systems, and visual explorations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={fadeInUp}
                            className="group relative aspect-[4/3] bg-neutral-100 rounded-[2rem] overflow-hidden border border-black/5 hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Placeholder for images since we don't have real ones yet. 
                                In a real app, use next/image here. 
                            */}
                            <div className="absolute inset-0 bg-neutral-200 group-hover:bg-neutral-300 transition-colors flex items-center justify-center text-muted-foreground/30 text-4xl font-serif italic">
                                Preview
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-white text-2xl font-bold">{item.title}</h3>
                                <p className="text-white/80 font-medium">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
