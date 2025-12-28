"use client";

import Section, { fadeInUp } from "./Section";
import { Code2, Database, Bot, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Code2 className="w-6 h-6" />,
        skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Redux", "Tailwind CSS", "Framer Motion", "Shopify", "Webflow"],
    },
    {
        title: "Backend",
        icon: <Database className="w-6 h-6" />,
        skills: ["Node.js", "Express.js", "NestJS", "Python", "Flask", "Supabase", "MongoDB", "SQL", "Postgres", "REST APIs"],
    },
    {
        title: "AI & Automation",
        icon: <Bot className="w-6 h-6" />,
        skills: ["Custom AI Agents", "Automation Pipelines", "Prompt Engineering", "Model Integrations"],
    },
    {
        title: "Tools & DevOps",
        icon: <Wrench className="w-6 h-6" />,
        skills: ["Git", "Linux", "Docker", "AWS", "CI/CD", "Firebase", "Sanity", "Vercel", "Microservices"],
    },
];

export default function Skills() {
    return (
        <Section id="skills" className="bg-white">
            <div className="container mx-auto px-6 md:px-12">
                <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-20 text-center text-foreground tracking-tighter">
                    Core <span className="text-muted-foreground font-serif italic font-light">Skill Set</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            variants={fadeInUp}
                            key={index}
                            className="p-8 rounded-[2rem] bg-neutral-50 border border-black/5 hover:border-black/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden"
                        >
                            <div className="mb-8 w-14 h-14 flex items-center justify-center bg-white rounded-2xl shadow-sm text-foreground group-hover:scale-110 transition-transform duration-300">
                                {category.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-6 text-foreground tracking-tight">{category.title}</h3>
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white border border-black/5 rounded-full text-xs font-medium text-muted-foreground group-hover:border-black/20 transition-colors">
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Radiant Hover Effect */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
