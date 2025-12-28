"use client";

import Section, { fadeInUp } from "./Section";
import { motion } from "framer-motion";

const testimonials = [
    {
        name: "Mr. Ravi",
        role: "Founder - Prime Care Alliance",
        quote: "He was recommended to me by a colleague for site development and design, and I can assure you that working with him would be beneficial. He is really imaginative and attentive to your needs, and suddenly presto—the job is done. He continued to communicate even after the project was turned over to see if anything needed to be changed and whether everything was going well. I endorse him. Bravo to you, friend 👍",
    },
    {
        name: "Srijan Mehrotra",
        role: "Founder - Model Verse(Featured on Shark Tank India Season 3)",
        quote: "From the initial concept to the final product, Naman exceeded our expectations every step of the way",
    },
    {
        name: "Rajan Kumar",
        role: "Founder - Staffison",
        quote: "Naman have a very good experience in creating website, I have hired Naman for my website development and I get a good result.",
    },
    {
        name: "Mr. Ujwal",
        role: "Founder - Up-bringing",
        quote: "Naman is very professional and have a great understanding of the latest technologies. He helped us build our SaaS product from scratch and we are very happy with the results.",
    },
];

export default function Testimonials() {
    return (
        <Section id="testimonials" className="bg-white">
            <div className="container mx-auto px-4 md:px-12 py-8 md:py-12">
                <motion.h2 variants={fadeInUp} className="text-5xl md:text-6xl font-bold mb-10 md:mb-20 text-center text-foreground tracking-tighter">
                    What People <span className="text-muted-foreground font-serif italic font-light">Say.</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            variants={fadeInUp}
                            key={index}
                            className="relative p-8 md:p-10 bg-neutral-50 rounded-[2rem] border border-black/5 flex flex-col justify-between hover:bg-neutral-100 transition-colors duration-300"
                        >
                            <div>
                                <span className="text-6xl text-black/10 font-serif leading-none block mb-4">“</span>
                                <p className="text-lg md:text-xl text-foreground/80 font-light leading-relaxed mb-8 relative z-10">
                                    {test.quote}
                                </p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 flex items-center justify-center text-lg font-bold text-black/50 shrink-0">
                                    {test.name.charAt(0)}
                                </div>
                                <div className="mt-1">
                                    <h4 className="font-bold text-base leading-tight text-foreground">{test.name}</h4>
                                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mt-1 leading-snug">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
