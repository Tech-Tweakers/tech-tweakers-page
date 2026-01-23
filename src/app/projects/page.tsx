import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { Github, BookOpen, Shield, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Tech Tweakers",
  description: "Our technical projects and solutions, featuring XCT protocol and client work.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our technical work spans from proprietary protocols to client solutions.
            We focus on building systems that scale, perform, and maintain operational reliability.
          </p>
        </div>
      </Section>

      <Section className="bg-muted/30">
        <div className="mb-12">
           <h2 className="text-3xl font-bold tracking-tight mb-6">Core Technology</h2>
           <div className="rounded-xl border bg-card p-8 shadow-sm">
             <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
               <div>
                 <div className="flex items-center gap-3 mb-2">
                   <Shield className="h-6 w-6 text-primary" />
                   <h3 className="text-2xl font-bold">XCT — Execution Control Transfer</h3>
                 </div>
                 <p className="text-muted-foreground mt-2 max-w-2xl">
                   A protocol for safe LLM integration in production systems. XCT inverts the sovereignty model:
                   models operate, but don't execute. Control remains with deterministic tools.
                 </p>
               </div>
               <div className="flex gap-3 shrink-0">
                 <Link href="https://github.com/Tech-Tweakers/XCT" className="inline-flex items-center justify-center rounded-md border bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                   <Github className="mr-2 h-4 w-4" />
                   GitHub
                 </Link>
                 <Link href="/xct" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                   <BookOpen className="mr-2 h-4 w-4" />
                   Learn More
                 </Link>
               </div>
             </div>

             <div className="grid md:grid-cols-2 gap-8 mt-8 border-t pt-8">
               <div>
                 <h4 className="font-semibold mb-3">Protocol Principles</h4>
                 <ul className="space-y-2 text-sm text-muted-foreground">
                   <li>• <strong>No action without explicit tool invocation</strong></li>
                   <li>• <strong>One step per iteration</strong> - controlled loop</li>
                   <li>• <strong>Errors are first-class signals</strong></li>
                   <li>• <strong>System has veto power</strong></li>
                 </ul>
               </div>
               <div>
                 <h4 className="font-semibold mb-3">Production Impact</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Born from real production use of LLMs in high-risk contexts. XCT solves operational risk by
                    moving control outside the model while maintaining AI capabilities.
                  </p>
               </div>
             </div>
           </div>
        </div>

        <div>
           <h2 className="text-2xl font-bold tracking-tight mb-6">Client Solutions</h2>
           <div className="grid gap-6 md:grid-cols-2">
             <div className="rounded-xl border bg-card p-6 shadow-sm">
               <div className="flex items-center gap-3 mb-3">
                 <div className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                   <Zap className="h-4 w-4" />
                 </div>
                 <h3 className="text-lg font-bold">Polaris Integration</h3>
               </div>
               <p className="text-muted-foreground text-sm mb-4">
                 Enterprise-grade Python API wrapper for Polaris ecosystem. Built for data teams
                 requiring automated report generation and asset synchronization across environments.
               </p>
               <div className="flex items-center justify-between">
                 <div className="flex gap-2">
                   <div className="bg-muted px-2 py-1 rounded text-xs font-mono">Python</div>
                   <div className="bg-muted px-2 py-1 rounded text-xs font-mono">Enterprise</div>
                   <div className="bg-muted px-2 py-1 rounded text-xs font-mono">API</div>
                 </div>
               </div>
             </div>
             <div className="rounded-xl border bg-card p-6 shadow-sm">
               <div className="flex items-center gap-3 mb-3">
                 <div className="inline-flex h-8 w-8 items-center justify-center rounded bg-primary/10 text-primary">
                   <BookOpen className="h-4 w-4" />
                 </div>
                 <h3 className="text-lg font-bold">Cloud Infrastructure Automation</h3>
               </div>
               <p className="text-muted-foreground text-sm mb-4">
                 Custom CI/CD pipelines, Infrastructure as Code, and deployment automation
                 for AWS, GCP, and Azure environments. Built for reliability and scalability.
               </p>
               <div className="flex items-center justify-between">
                 <div className="flex gap-2">
                   <div className="bg-muted px-2 py-1 rounded text-xs font-mono">Terraform</div>
                   <div className="bg-muted px-2 py-1 rounded text-xs font-mono">Kubernetes</div>
                   <div className="bg-muted px-2 py-1 rounded text-xs font-mono">CI/CD</div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </Section>
    </div>
  );
}