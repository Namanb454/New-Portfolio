"use client";

import Section, { fadeInUp } from "./Section";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "XEqualTo",
        role: "Frontend Engineer",
        period: "April 2025 - Present",
        description: "Developing high-performance frontend architectures and scalable web applications.",
    },
    {
        company: "Mono",
        role: "SDE-Frontend",
        period: "Dec 2024 - Present",
        description: "Contributing to core product development with a focus on React and modern CSS frameworks.",
    },
    {
        company: "Vriddhi Solutions",
        role: "SDE Intern",
        period: "Dec 2024 - Jan 2025",
        description: "Assisted in software development lifecycles and implemented key feature modules.",
    },
    {
        company: "Model Verse",
        role: "Full Stack Engineer Intern",
        period: "Jan 2024 - Aug 2024",
        description: "Worked on full-stack development using modern web technologies to build robust solutions.",
    },
    {
        company: "Coding Ninjas",
        role: "SDE Intern",
        period: "Nov 2023 - Jan 2024",
        description: "Gained hands-on experience in software development practices and algorithm optimization.",
    },
    {
        company: "SiteScript",
        role: "Self Employed",
        period: "Aug 2023 - Nov 2024",
        description: "Managed freelance projects, delivering custom web solutions for diverse clients.",
    },
];

export default function Experience() {
    return (
        <Section id="experience" className="bg-white">
            <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                <motion.h2 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-20 text-foreground tracking-tighter">
                    Work <span className="text-muted-foreground font-serif italic font-light">Experience</span>
                </motion.h2>

                <div className="space-y-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            variants={fadeInUp}
                            key={index}
                            className="group relative pl-8 border-l-2 border-black/5 hover:border-black transition-colors duration-500 py-2"
                        >
                            <div className="absolute -left-[5px] top-3 w-2 h-2 bg-white border-2 border-black/20 rounded-full group-hover:border-black group-hover:scale-125 transition-all" />

                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-2xl font-bold text-foreground group-hover:translate-x-2 transition-transform duration-300">{exp.company}</h3>
                                <span className="text-sm font-mono text-muted-foreground uppercase tracking-wider bg-neutral-100 px-2 py-1 rounded-md">{exp.period}</span>
                            </div>

                            <h4 className="text-lg font-medium text-black/60 mb-3">{exp.role}</h4>
                            <p className="text-muted-foreground leading-relaxed max-w-2xl font-light text-lg">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
