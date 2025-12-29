"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/components/Section";
import { ArrowUpRight, Loader2, AlertCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

// TODO: Replace with your deployed Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL: any = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

export default function BookACallPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<any>(null);
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (!formData) return;

        const submitForm = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: "POST",
                    body: JSON.stringify(formData),
                });

                if (!response.ok) throw new Error("Failed to submit");
                const json = await response.json();
                if (json.result === "error") {
                    console.error("Google Apps Script Error:", json.error);
                    throw new Error(json.error?.message || "Script returned an error");
                }
                toast.success("Request sent successfully!");
                formRef.current?.reset();

            } catch (err: any) {
                console.error(err);
                setError(err.message || "Something went wrong. Please try again or email directly.");
                toast.error("Something went wrong. Please try again.");
            } finally {
                setIsLoading(false);
                setFormData(null);
            }
        };

        submitForm();
    }, [formData]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const newFormData = new FormData(form);
        const data = {
            name: newFormData.get("name"),
            email: newFormData.get("email"),
            type: newFormData.get("type"),
            reason: newFormData.get("reason"),
        };
        setFormData(data);
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12 flex items-center justify-center relative">
            <motion.div
                initial="initial"
                animate="animate"
                variants={fadeInUp}
                className="container max-w-2xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">
                        Let&#39;s <span className="font-serif italic font-light text-muted-foreground">Talk.</span>
                    </h1>
                    <p className="text-lg text-muted-foreground font-light">
                        Tell me about your project and I&#39;ll get back to you shortly.
                    </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 bg-neutral-50 p-8 md:p-12 rounded-[3rem] border border-black/5 relative overflow-hidden">
                    {/* Form Content */}
                    <div className="space-y-2">
                        <Label htmlFor="name" className="ml-2 uppercase tracking-wide text-xs text-muted-foreground">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="bg-white rounded-2xl border-black/5 py-6 px-6 text-base"
                            placeholder="John Doe"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email" className="ml-2 uppercase tracking-wide text-xs text-muted-foreground">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="bg-white rounded-2xl border-black/5 py-6 px-6 text-base"
                            placeholder="john@example.com"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="type" className="ml-2 uppercase tracking-wide text-xs text-muted-foreground">Requirements</Label>
                        <Select name="type" required>
                            <SelectTrigger className="w-full bg-white rounded-2xl border-black/5 py-6 px-6 text-base">
                                <SelectValue placeholder="Select requirement" />
                            </SelectTrigger>
                            <SelectContent className="bg-white rounded-2xl border-black/5 text-base">
                                <SelectItem value="SaaS">SaaS</SelectItem>
                                <SelectItem value="Web Application">Web Application</SelectItem>
                                <SelectItem value="Mobile App">Mobile App</SelectItem>
                                <SelectItem value="AI Agents & Chatbots">AI Agents & Chatbots</SelectItem>
                                <SelectItem value="Consultation">Consultation</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="reason" className="ml-2 uppercase tracking-wide text-xs text-muted-foreground">Why do you want to book?</Label>
                        <Textarea
                            id="reason"
                            name="reason"
                            required
                            rows={4}
                            className="bg-white rounded-2xl border-black/5 py-4 px-6 text-base resize-none"
                            placeholder="Tell me a bit about your project goals..."
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className={cn(
                            "w-full bg-foreground text-background font-medium h-[60px] rounded-2xl text-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 mt-4",
                            isLoading && "opacity-80"
                        )}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Send Request <ArrowUpRight className="w-5 h-5" />
                            </>
                        )}
                    </Button>

                    {error && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-red-500 text-sm text-center mt-2 flex items-center justify-center gap-2"
                        >
                            <AlertCircle className="w-4 h-4" /> {error}
                        </motion.p>
                    )}

                    <p className="text-xs text-center text-muted-foreground mt-4">
                        Or email directly at <a href="mailto:bansalnaman9585@gmail.com" className="underline hover:text-foreground">bansalnaman9585@gmail.com</a>
                    </p>
                </form>
            </motion.div>
        </div>
    );
}
