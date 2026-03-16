import Link from "next/link";
import { Section } from "@/components/layout/Section";
import {
  ArrowRight,
  Shield,
  Zap,
  Terminal,
  Cloud,
  BrainCircuit,
  Workflow,
  Cpu,
  Layers,
  Bot,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero */}
      <Section className="flex flex-col justify-center min-h-[80vh] py-20 md:py-32">
        <div className="max-w-3xl space-y-8 mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            AI Engineering & Cloud Infrastructure
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            We build{" "}
            <span className="text-emerald-400">AI-powered systems</span> that
            actually work in{" "}
            <span className="text-amber-400">production</span>.
          </h1>
          <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            From custom model training to cloud infrastructure to intelligent
            automation — powered by{" "}
            <strong>XCT</strong>, our protocol for safe LLM integration where
            models propose and deterministic tools execute.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Discuss Your Project
            </Link>
            <Link
              href="/projects"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              See Our Projects
            </Link>
          </div>
        </div>
      </Section>

      {/* What We Do — 3 Pillars */}
      <Section className="bg-muted/40">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground">
            Three areas of deep specialization — not generic dev work.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Cloud & Automation</h3>
            <p className="text-muted-foreground">
              Infrastructure as Code, CI/CD pipelines, Kubernetes, observability
              — we automate the boring stuff so you focus on shipping features.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              Learn more{" "}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <BrainCircuit className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Custom Model Training</h3>
            <p className="text-muted-foreground">
              LoRA fine-tuning and full training of open-source LLMs for your
              domain — from dataset curation to quantized deployment.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              Learn more{" "}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Workflow className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">LLM Automation Flows</h3>
            <p className="text-muted-foreground">
              Custom workflows for document validation, procedure enforcement,
              agentic pipelines, and data enrichment — structured and auditable.
            </p>
            <Link
              href="/services"
              className="group inline-flex items-center text-sm text-primary font-medium hover:underline"
            >
              Learn more{" "}
              <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      {/* XCT Protocol */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-primary/5">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Shield className="mr-2 h-4 w-4" />
            Our Core Technology
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            XCT — Execution Control Transfer
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Decision is cheap. Execution is expensive. XCT inverts traditional
            AI sovereignty — models propose actions, systems validate, and
            deterministic tools execute. No autonomy without control.
          </p>
          <div className="grid gap-6 md:grid-cols-3 mt-12">
            <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Model Proposes</h3>
              <p className="text-muted-foreground">
                AI analyzes context and suggests exactly one action per
                iteration. No planning ahead, no autonomous loops.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">System Validates</h3>
              <p className="text-muted-foreground">
                The system owns the execution loop. Every proposal is validated
                before anything happens. Veto power is built-in.
              </p>
            </div>
            <div className="space-y-4 p-6 rounded-xl border bg-card/50 backdrop-blur-sm">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Terminal className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Tools Execute</h3>
              <p className="text-muted-foreground">
                Deterministic tools run the action and return results as
                first-class signals. Errors inform, they don&apos;t terminate.
              </p>
            </div>
          </div>
          <div className="pt-8">
            <Link
              href="/projects"
              className="group inline-flex items-center text-primary font-medium hover:underline"
            >
              Explore the XCT ecosystem{" "}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Section>

      {/* Polaris Ecosystem */}
      <Section className="bg-muted/40">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Polaris Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            Open-source tools we built and use in production — from runtime to
            platform.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border bg-card p-6 space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cpu className="h-5 w-5" />
            </div>
            <h3 className="font-bold">Polaris Core</h3>
            <p className="text-sm text-muted-foreground">
              C++ runtime for llama.cpp with Python bindings. 55% token savings
              and JSON early-stop.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                C++
              </span>
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                Python
              </span>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-6 space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Bot className="h-5 w-5" />
            </div>
            <h3 className="font-bold">Polaris v2</h3>
            <p className="text-sm text-muted-foreground">
              Multi-modal AI chat with voice, documents, and multi-platform
              support. Local or cloud deployment.
            </p>
            <Link
              href="https://tech-tweakers.github.io/polaris-v2-web/#/"
              target="_blank"
              className="inline-flex items-center text-xs text-primary font-medium hover:underline"
            >
              Live Demo
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
          <div className="rounded-xl border bg-card p-6 space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Workflow className="h-5 w-5" />
            </div>
            <h3 className="font-bold">Polaris v3</h3>
            <p className="text-sm text-muted-foreground">
              Automation platform powered by XCT. Document validation,
              blockchain trades, Docker/EKS orchestration.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                XCT
              </span>
              <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">
                FastAPI
              </span>
            </div>
          </div>
          <div className="rounded-xl border bg-card p-6 space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Layers className="h-5 w-5" />
            </div>
            <h3 className="font-bold">XCT-Qwen3-4B</h3>
            <p className="text-sm text-muted-foreground">
              LoRA-trained execution model. Not a chatbot — a constrained engine
              for deterministic systems.
            </p>
            <Link
              href="https://huggingface.co/tech-tweakers/XCT-Qwen3-4B"
              target="_blank"
              className="inline-flex items-center text-xs text-primary font-medium hover:underline"
            >
              HuggingFace
              <ExternalLink className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Explore all projects{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Ready to build something real?
          </h2>
          <p className="text-muted-foreground text-lg">
            Whether you need a trained model, a cloud migration, or an
            intelligent automation pipeline — let&apos;s talk engineering.
          </p>
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Get in Touch
          </Link>
        </div>
      </Section>
    </div>
  );
}
