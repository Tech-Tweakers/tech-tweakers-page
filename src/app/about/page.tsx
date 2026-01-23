import { Section } from "@/components/layout/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Tech Tweakers",
  description: "Engineering-focused consulting for cloud solutions, backend architecture, and applied AI.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Tech Tweakers</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Tech Tweakers is an engineering-focused consulting practice, specialized in cloud solutions, backend architecture, automation, and applied AI.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-7">
              Our goal is simple: to build high-quality software that stands the test of time. We approach every project as an engineering challenge that deserves a robust, scalable solution. Whether it's a client system or our own technology, we prioritize technical excellence and operational reliability.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Engineering Philosophy</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Rigor:</strong> We apply engineering discipline to every technical decision.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Simplicity:</strong> We avoid over-engineering. The best solution is often the simplest one that works at scale.</span>
              </li>
              <li className="flex gap-3">
                <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Reliability:</strong> We don't ship "hacky" code. We build for production from day one.</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            We are a small team of 2 active collaborators, combining years of experience in backend development, cloud infrastructure, and software architecture. We maintain a lean operation to ensure we can focus deeply on the technical quality of our work without the distractions of large agency overhead.
          </p>
        </div>
      </Section>
    </div>
  );
}

