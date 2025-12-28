"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/Section";
import { ArrowUpRight } from "lucide-react";

export default function BookACallPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 flex items-center justify-center">
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="container max-w-2xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
                        Let's <span className="font-serif italic font-light text-muted-foreground">Talk.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground font-light">
                        Tell me about your project and I'll get back to you shortly.
                    </p>
                </div>

                <form className="space-y-6 bg-neutral-50 p-8 md:p-12 rounded-[3rem] border border-black/5">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium uppercase tracking-wide text-muted-foreground ml-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full bg-white px-6 py-4 rounded-2xl border border-black/5 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium uppercase tracking-wide text-muted-foreground ml-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-white px-6 py-4 rounded-2xl border border-black/5 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="type" className="text-sm font-medium uppercase tracking-wide text-muted-foreground ml-2">Requirements</label>
                        <select
                            id="type"
                            className="w-full bg-white px-6 py-4 rounded-2xl border border-black/5 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all appearance-none"
                        >
                            <option>Web Development</option>
                            <option>Mobile App</option>
                            <option>UI/UX Design</option>
                            <option>Consultation</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="reason" className="text-sm font-medium uppercase tracking-wide text-muted-foreground ml-2">Why do you want to book?</label>
                        <textarea
                            id="reason"
                            rows={4}
                            className="w-full bg-white px-6 py-4 rounded-2xl border border-black/5 focus:outline-none focus:ring-2 focus:ring-black/5 transition-all resize-none"
                            placeholder="Tell me a bit about your project goals..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-foreground text-background font-medium py-5 rounded-2xl text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-4"
                    >
                        Send Request <ArrowUpRight className="w-5 h-5" />
                    </button>

                    <p className="text-xs text-center text-muted-foreground mt-4">
                        Or email directly at <a href="mailto:bansalnaman9585@gmail.com" className="underline hover:text-foreground">bansalnaman9585@gmail.com</a>
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
