"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/Section";
import Image from "next/image";

// Gallery items with actual image dimensions for proper bento grid sizing
const galleryItems = [
    { id: 1, title: "Reamor UI", category: "UI Design", image: "/images/p1.webp", width: 1200, height: 900 },
    { id: 2, title: "Tipriyo", category: "Mobile Design", image: "/images/p2.webp", width: 800, height: 1200 },
    { id: 3, title: "Real Estate", category: "Web App", image: "/images/p4.webp", width: 1400, height: 800 },
    { id: 4, title: "Ai Gen Reels", category: "UI/UX", image: "/images/p5.webp", width: 600, height: 1000 },
    { id: 5, title: "Npm Js", category: "Web Design", image: "/images/p6.webp", width: 1600, height: 900 },
    { id: 6, title: "Horizon", category: "Mobile UI", image: "/images/p7.webp", width: 800, height: 1400 },
    { id: 7, title: "Horizon", category: "Mobile UI", image: "/images/p8.webp", width: 1000, height: 600 },
    { id: 8, title: "Horizon", category: "Mobile UI", image: "/images/p9.webp", width: 900, height: 900 },
    { id: 9, title: "Horizon", category: "Mobile UI", image: "/images/p10.webp", width: 900, height: 900 },
    { id: 10, title: "Horizon", category: "Mobile UI", image: "/images/p11.webp", width: 900, height: 900 },
    { id: 11, title: "Horizon", category: "Mobile UI", image: "/images/p12.webp", width: 900, height: 900 },
    { id: 12, title: "Horizon", category: "Mobile UI", image: "/images/p13.webp", width: 900, height: 900 },
    { id: 13, title: "Horizon", category: "Mobile UI", image: "/images/p14.webp", width: 900, height: 900 },
    { id: 14, title: "Horizon", category: "Mobile UI", image: "/images/p15.webp", width: 900, height: 900 },
    { id: 15, title: "Horizon", category: "Mobile UI", image: "/images/p16.webp", width: 900, height: 900 },
    { id: 16, title: "Horizon", category: "Mobile UI", image: "/images/p17.webp", width: 900, height: 900 },
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

                {/* Bento Grid Layout using CSS columns for masonry effect */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {galleryItems.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={fadeInUp}
                            className="group relative bg-neutral-100 dark:bg-neutral-900 rounded-[1.5rem] overflow-hidden border border-black/5 dark:border-white/10 hover:shadow-2xl transition-all duration-500 break-inside-avoid"
                        >
                            {/* Image with natural aspect ratio */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={item.width}
                                height={item.height}
                                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                            />

                            {/* Hover overlay with title and category */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                <h3 className="text-white text-xl md:text-2xl font-bold">{item.title}</h3>
                                <p className="text-white/80 font-medium text-sm md:text-base">{item.category}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
