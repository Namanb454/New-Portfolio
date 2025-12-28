"use client";

import Section, { fadeInUp } from "./Section";
import { Plane, Bike, Video } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Section id="about" className="bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div variants={fadeInUp} className="order-1 lg:order-1">
                        <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter text-foreground">
                            About <br /><span className="text-muted-foreground font-serif italic font-light">Myself.</span>
                        </h2>
                        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed font-light">
                            <p>
                                I'm a <strong className="text-foreground font-medium">full-stack developer</strong> with strong expertise in frontend, backend, and AI agent development, building scalable applications across multiple industries including FinTech, FinOps, SaaS, E-commerce, Holistic Wellness, Ed-tech and more.
                            </p>
                            <p>
                                I’ve developed products ranging from high-performance web platforms to automation systems and AI-driven tools, always focusing on clean architecture, seamless user experience, and reliable performance.
                            </p>
                            <p>
                                Creating informational and tech-focused videos on social media is another passion of mine, where I share learnings and projects with the community.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cards / Visuals */}
                    <div className="order-2 lg:order-2 grid grid-cols-1 gap-6">
                        <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] border border-black/5 hover:border-black/50 transition-all bg-neutral-50 hover:bg-white hover:shadow-xl group">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-sm group-hover:scale-110 transition-transform">
                                    <Plane className="w-6 h-6 text-foreground" />
                                </div>
                                <h4 className="font-bold text-2xl tracking-tight">Traveling</h4>
                            </div>
                            <p className="text-muted-foreground font-light text-lg">Exploring new cultures and places fuels my creativity.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] border border-black/5 hover:border-black/50 transition-all bg-neutral-50 hover:bg-white hover:shadow-xl group">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-sm group-hover:scale-110 transition-transform">
                                    <Bike className="w-6 h-6 text-foreground" />
                                </div>
                                <h4 className="font-bold text-2xl tracking-tight">Bike Riding</h4>
                            </div>
                            <p className="text-muted-foreground font-light text-lg">Finding freedom and problem-solving clarity on the road.</p>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="p-8 rounded-[2rem] border border-black/5 hover:border-black/50 transition-all bg-neutral-50 hover:bg-white hover:shadow-xl group">
                            <div className="flex items-center gap-6 mb-4">
                                <div className="p-4 rounded-2xl bg-white border border-black/5 shadow-sm group-hover:scale-110 transition-transform">
                                    <Video className="w-6 h-6 text-foreground" />
                                </div>
                                <h4 className="font-bold text-2xl tracking-tight">Content Creation</h4>
                            </div>
                            <p className="text-muted-foreground font-light text-lg">Sharing tech insights and knowledge with the community.</p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </Section>
    );
}
