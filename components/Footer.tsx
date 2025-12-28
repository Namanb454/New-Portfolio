"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-20 bg-foreground text-background">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">

                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-2">Naman Bansal</h2>
                    <p className="text-white/60">Full Stack Developer & AI Engineer</p>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-black transition-all">
                        <Github size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-blue-600 transition-all">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-blue-400 transition-all">
                        <Twitter size={20} />
                    </a>
                    <a href="mailto:contact@namanbansal.me" className="p-3 bg-white/10 rounded-full hover:bg-white hover:text-red-500 transition-all">
                        <Mail size={20} />
                    </a>
                </div>

                <p className="text-white/40 text-sm">
                    © {new Date().getFullYear()} Naman Bansal.
                </p>
            </div>
        </footer>
    );
}
