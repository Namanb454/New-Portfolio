"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const letterAnimation: any = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1],
        },
    }),
};

export default function Hero() {
    const title = "Hello";

    return (
        <div className="min-h-screen pt-20 md:pt-0 flex flex-col md:flex-row relative overflow-hidden bg-white text-foreground">

            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-6 md:px-16 lg:px-24 relative z-10 pt-10 md:pt-0">

                {/* Vertical Text Label */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="md:block md:absolute md:-left-16 md:top-1/2 top-28 md:-translate-y-1/2 md:-rotate-90 origin-center"
                >
                    <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase whitespace-nowrap">
                        Full Stack & AI Engineer
                    </span>
                    <div className="absolute top-1/2 left-full w-20 h-px bg-muted-foreground/30 ml-4" />
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex gap-12 mb-12"
                >
                    <div>
                        <h3 className="text-4xl font-light tracking-tight">+2</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Years Exp</p>
                    </div>
                    <div>
                        <h3 className="text-4xl font-light tracking-tight">+20</h3>
                        <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Projects Done</p>
                    </div>
                </motion.div>

                {/* Main Heading - Staggered Letters */}
                <div className="overflow-hidden mb-8 -ml-2">
                    <h1 className="text-7xl md:text-[11rem] leading-[0.8] font-medium tracking-tighter flex">
                        {title.split("").map((char, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterAnimation}
                                initial="hidden"
                                animate="visible"
                                viewport={{ amount: 0.2, once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </h1>
                </div>

                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 0.8, delay: 1, ease: "circOut" }}
                    className="pl-6 border-l-2 border-primary origin-left"
                >
                    <p className="text-lg md:text-2xl text-muted-foreground font-light leading-snug">
                        It's <span className="text-foreground font-medium">Naman Bansal</span>.
                        <br />
                        Building <span className="radiant-text font-semibold">Saas</span> & <span className="radiant-text font-semibold">AI Agents</span>.
                    </p>
                </motion.div>
            </div>

            {/* Right Image/Graphic Area - Rounded & Parallax feel */}
            <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative p-4 md:p-8">
                <motion.div
                    initial={{ height: "0%", borderRadius: "100%" }}
                    whileInView={{ height: "100%", borderRadius: "3rem" }} // Animate into rounded rect
                    viewport={{ amount: 0.2, once: true }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full relative overflow-hidden rounded[3rem]"
                >
                    {/* Abstract Content */}
                    <div className="absolute inset-0 bg-transparent">
                        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay z-10" />

                        {/* User Image */}
                        <Image
                            src="/hero-image3.webp"
                            alt="Naman Bansal"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out"
                            priority
                        />

                        {/* Overlay Gradient for Text Contrast if needed */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
