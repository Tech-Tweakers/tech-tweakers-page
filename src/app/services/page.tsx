import Link from "next/link";
import { Section } from "@/components/layout/Section";
import {
  Cloud,
  Database,
  BrainCircuit,
  Layers,
  Cpu,
  ArrowRight,
  Check,
  Workflow,
  FileCheck,
  GitBranch,
  ShieldCheck,
  Bot,
  Container,
  RefreshCcw,
  Monitor,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Tech Tweakers",
  description:
    "Cloud automation, custom model training (LoRA & full fine-tuning), and LLM-powered automation workflows.",
};

const trainingTiers = [
  {
    name: "LoRA Fine-Tuning",
    icon: Layers,
    tagline: "Lightweight adaptation, production-ready fast",
    description:
      "Efficient parameter-efficient fine-tuning using Low-Rank Adaptation. Ideal for adapting powerful open-source models to your domain without the cost and complexity of full retraining.",
    highlights: [
      "Adapts models like LLaMA, Mistral, Qwen, and Gemma",
      "Trains on your proprietary data with minimal compute",
      "Mergeable adapters for flexible deployment",
      "Fast iteration — from dataset to deployed model in days",
      "Quantization-ready outputs (GGUF, AWQ, GPTQ)",
    ],
    useCases: [
      "Domain-specific assistants (legal, medical, finance)",
      "Custom code generation for internal frameworks",
      "Tone and style alignment for brand voice",
      "Classification and extraction pipelines",
    ],
  },
  {
    name: "Full Fine-Tuning",
    icon: Cpu,
    tagline: "Maximum performance, zero compromise",
    description:
      "End-to-end training of all model parameters for when you need peak performance on specialized tasks. We handle the full pipeline — from data curation to evaluation to deployment.",
    highlights: [
      "Full parameter training on multi-GPU / multi-node setups",
      "Custom data pipelines with quality filtering and deduplication",
      "Comprehensive evaluation suites and benchmark tracking",
      "Distributed training with DeepSpeed / FSDP",
      "Model distillation and architecture optimization",
    ],
    useCases: [
      "Building proprietary foundation models",
      "High-stakes domains requiring maximum accuracy",
      "Multi-task models with complex reasoning",
      "On-premise deployments with strict data governance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Our Technical Services
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide specialized engineering services, not generic web
            development. Our focus is on solving hard technical problems for
            startups and growing companies.
          </p>
        </div>
      </Section>

      {/* Cloud & Automation Section */}
      <Section className="bg-muted/30 py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Cloud className="mr-2 h-4 w-4" />
            Cloud & Automation
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Infrastructure That Scales With You
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We design, deploy, and maintain cloud-native infrastructure using
            Infrastructure as Code. From CI/CD pipelines to production
            observability — we automate the boring stuff so you can focus on
            shipping.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Cloud className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Infrastructure as Code</h3>
            <p className="text-muted-foreground leading-relaxed">
              Terraform, Pulumi, and CloudFormation to provision and manage
              infrastructure reproducibly across AWS, GCP, and Azure.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <RefreshCcw className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">CI/CD Pipelines</h3>
            <p className="text-muted-foreground leading-relaxed">
              Automated build, test, and deployment pipelines with GitHub
              Actions, GitLab CI, and ArgoCD — from commit to production with
              confidence.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Container className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Containers & Orchestration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Docker, Kubernetes, and ECS for containerized workloads —
              including service mesh, auto-scaling, and multi-environment
              deployments.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Monitor className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Observability</h3>
            <p className="text-muted-foreground leading-relaxed">
              Logging, metrics, and tracing with Grafana, Prometheus, and
              OpenTelemetry — so you always know what&apos;s happening in
              production.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Security & Compliance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Secrets management, IAM policies, network segmentation, and
              compliance-ready configurations baked into every deployment.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Managed Data Services</h3>
            <p className="text-muted-foreground leading-relaxed">
              Database provisioning, backup strategies, replication, and
              migration — PostgreSQL, Redis, DynamoDB, and more, fully
              automated.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Discuss your infrastructure needs{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* Model Training Section */}
      <Section className="py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <BrainCircuit className="mr-2 h-4 w-4" />
            New — Model Training
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Custom Model Training
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We fine-tune and train open-source LLMs for your specific domain.
            From lightweight LoRA adapters to full-parameter training — we
            deliver models that actually work for your use case.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {trainingTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col rounded-xl border bg-card shadow-sm overflow-hidden"
            >
              <div className="p-8 space-y-4 border-b bg-muted/20">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tier.icon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="text-sm font-medium text-primary">
                  {tier.tagline}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="p-8 space-y-6 flex-1">
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    What&apos;s included
                  </h4>
                  <ul className="space-y-2">
                    {tier.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Use cases
                  </h4>
                  <ul className="space-y-2">
                    {tier.useCases.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted-foreground pl-4 border-l-2 border-primary/20"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Discuss your training project{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* LLM Workflows Section */}
      <Section className="bg-linear-to-br from-primary/5 via-background to-primary/5 py-20">
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Workflow className="mr-2 h-4 w-4" />
            New — LLM Workflows
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Custom LLM Automation Flows
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We design and build intelligent workflows powered by LLMs to
            validate information, enforce procedures, and automate decisions
            that today depend on manual review. Structured, auditable, and
            production-grade.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <FileCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Information Validation</h3>
            <p className="text-muted-foreground leading-relaxed">
              Automated pipelines that cross-reference documents, extract
              structured data, and flag inconsistencies — replacing hours of
              manual review with reliable, repeatable checks.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <GitBranch className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Procedure Enforcement</h3>
            <p className="text-muted-foreground leading-relaxed">
              Workflows that follow your business rules step-by-step — routing
              decisions, enforcing checklists, and ensuring compliance with
              internal processes before any action is taken.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Quality Assurance</h3>
            <p className="text-muted-foreground leading-relaxed">
              Multi-stage review flows where LLMs analyze outputs against
              quality criteria, escalate edge cases, and produce audit trails
              for every decision made in the pipeline.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Agentic Pipelines</h3>
            <p className="text-muted-foreground leading-relaxed">
              Multi-step autonomous agents that reason, use tools, and
              coordinate with external systems — orchestrated with guardrails
              and human-in-the-loop checkpoints.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Database className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Data Enrichment</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ingestion flows that classify, normalize, and enrich raw data
              using LLMs — turning unstructured inputs into clean, actionable
              datasets integrated with your systems.
            </p>
          </div>

          <div className="flex flex-col space-y-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Workflow className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Custom Orchestration</h3>
            <p className="text-muted-foreground leading-relaxed">
              Tailor-made flow engines that connect multiple models, APIs, and
              business logic into a single coherent pipeline — designed for
              your exact operational needs.
            </p>
          </div>
        </div>

        <div className="rounded-xl border bg-card/50 p-8 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-4">How we build workflows</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">01</div>
              <h4 className="font-medium">Map</h4>
              <p className="text-sm text-muted-foreground">
                We map your current process, identify bottlenecks, and define
                where LLMs add real value.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">02</div>
              <h4 className="font-medium">Build</h4>
              <p className="text-sm text-muted-foreground">
                We build the flow with deterministic checkpoints, fallback
                logic, and observability baked in.
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-primary">03</div>
              <h4 className="font-medium">Iterate</h4>
              <p className="text-sm text-muted-foreground">
                We evaluate against your real data, tune prompts and models,
                and ship with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="group inline-flex items-center text-primary font-medium hover:underline"
          >
            Let&apos;s design your workflow{" "}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>
    </div>
  );
}

