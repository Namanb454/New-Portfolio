"use client";

import Section, { fadeInUp } from "./Section";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Tipriyo",
        description: "Created a web-based virtual staging application that enables users to choose a particular room category along with its style. The application features over 7 categories of rooms and their respective styles and helps you to save 90% of the cost.",
        tags: ["React", "AI", "Virtual Staging"],
        gradient: "from-blue-600/10 to-cyan-500/10",
        link: "https://tipriyo.ai",
    },
    {
        title: "Reamor UI",
        description: "Developed an open source library for UI developers to perform parallax animations.",
        tags: ["Open Source", "UI Library", "Parallax"],
        gradient: "from-indigo-600/10 to-blue-500/10",
        link: "https://reamor-ui.vercel.app/",
    },
    {
        title: "Ai Gen Reels",
        description: "Automated video content creation platform powered by AI.",
        tags: ["AI Video", "Automation", "Content"],
        gradient: "from-purple-600/10 to-pink-500/10",
        link: "https://aigenreels.com/",
    },
    {
        title: "Docu Gen",
        description: "Intelligent document processing and summarization tool.",
        tags: ["NLP", "Productivity", "SaaS"],
        gradient: "from-emerald-600/10 to-teal-500/10",
        link: "https://docugen.ai",
    },
    {
        title: "Npm Js",
        description: "Developed a clone of the famous npm Js website. Search & install your favourite npm packages.",
        tags: ["Clone", "Search", "Registry"],
        gradient: "from-red-600/10 to-orange-500/10",
        link: "https://npmjs-clone-two.vercel.app/",
    },
    {
        title: "Horizon",
        description: "Built a platform that helps to connect with 50+ together and display transactions in real time.",
        tags: ["Real-time", "Fintech", "Networking"],
        gradient: "from-yellow-500/10 to-amber-600/10",
        link: "https://github.com/Namanb454/BankingApp",
    },
    {
        title: "E-commerce",
        description: "The ecommerce application is built on the MERN stack, utilizing ReactJS for the front end with Bootstrap for the user interface. The backend is developed using Node.js, and MongoDB is used as the database.",
        tags: ["MERN", "Bootstrap", "MongoDB"],
        gradient: "from-green-600/10 to-emerald-500/10",
        link: "https://materials.livspace.com/",
    },
];

export default function Projects() {
    return (
        <Section id="projects" className="bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-20 text-foreground tracking-tighter">
                    My <span className="text-muted-foreground font-serif italic font-light">Projects</span>
                </motion.h2>

                <div className="grid grid-cols-1 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            variants={fadeInUp}
                            key={index}
                            className="group relative rounded-[2.5rem] bg-neutral-50 border border-black/5 p-8 md:p-12 hover:border-black/20 hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-8 relative z-10">
                                <div>
                                    <h3 className="text-3xl md:text-5xl font-bold mb-6 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                                    <div className="flex flex-wrap gap-3">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-white rounded-full text-xs font-semibold tracking-wide border border-black/5 uppercase text-muted-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Link href={project.link} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-black/10 font-bold hover:bg-black hover:text-white transition-all shadow-sm">
                                    View <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>

                            <div className="md:w-3/4 relative z-10">
                                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed group-hover:text-foreground transition-colors duration-500">
                                    {project.description}
                                </p>
                            </div>

                            {/* Radiant Glow on Hover */}
                            <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl ${project.gradient} opacity-0 group-hover:opacity-100 blur-[100px] transition-opacity duration-700 pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
