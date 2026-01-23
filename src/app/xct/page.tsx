import { Section } from "@/components/layout/Section";
import Link from "next/link";
import { Shield, Zap, Terminal, ArrowRight, Github, CheckCircle, AlertTriangle, Code } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "XCT Protocol | Tech Tweakers",
  description: "Execution Control Transfer — Our protocol for safe LLM integration in production systems.",
};

export default function XCTPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <Section className="py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Shield className="mr-2 h-4 w-4" />
            Core Technology
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            XCT — Execution Control Transfer
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            A revolutionary protocol that inverts traditional AI sovereignty models.
            LLMs operate and make decisions, but execution remains with deterministic tools.
            Control stays where it belongs: with engineered systems.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row pt-4">
            <Link href="https://github.com/Tech-Tweakers/XCT" className="inline-flex items-center justify-center rounded-md border bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              <Terminal className="mr-2 h-4 w-4" />
              Our Projects
            </Link>
          </div>
        </div>
      </Section>

      {/* The Problem */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">The Problem</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional AI integration approaches create operational risk by delegating executive authority to models.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="text-xl font-bold text-destructive">Traditional Approach</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Model decides, plans, and executes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Tools are extensions of model will</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Unintended state mutations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Non-deterministic failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-destructive mt-2 shrink-0" />
                  <span>Difficult rollback and audit</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-bold text-primary">XCT Solution</h3>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Model proposes actions only</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>System validates and executes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Deterministic tool execution</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Errors become first-class signals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span>Traceable state changes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Principles */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Core Principles</h2>
            <p className="text-lg text-muted-foreground">
              Five fundamental rules that ensure reliability and control.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-1">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">1</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">No action without explicit tool invocation</h3>
                  <p className="text-muted-foreground">
                    Describing an action is forbidden. Only real tool calls mutate state.
                    The model communicates intent through structured proposals, not by simulating execution.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">2</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">One step per iteration</h3>
                  <p className="text-muted-foreground">
                    The model returns one decision per cycle. The system controls the loop,
                    enabling interruption, rate limiting, and step-by-step validation.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">3</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">The model is stateless between calls</h3>
                  <p className="text-muted-foreground">
                    Context is provided externally. The model doesn't "remember" — the system does.
                    This ensures reproducibility and eliminates hidden state dependencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">4</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">Errors are first-class signals</h3>
                  <p className="text-muted-foreground">
                    Failed tool execution returns structured error information. The model reacts accordingly,
                    treating errors as valuable information rather than exceptions to be avoided.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0">
                  <span className="font-bold text-lg">5</span>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold">The system has veto power</h3>
                  <p className="text-muted-foreground">
                    Even if the model proposes valid syntax, the system can refuse execution based on
                    policy, resource constraints, or safety considerations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Protocol Flow */}
      <Section className="bg-muted/30">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">Protocol Flow</h2>
            <p className="text-lg text-muted-foreground">
              A simple request/response contract that ensures control and reliability.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Code className="h-5 w-5 text-primary" />
                Model Returns
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2 text-primary">1. Propose next action:</h4>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto"><code>{`{
  "next_step": {
    "tool": "fs.write",
    "arguments": {
      "path": "file.txt",
      "content": "..."
    },
    "goal": "why this step is needed"
  }
}`}</code></pre>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2 text-primary">2. Signal completion:</h4>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto"><code>{`{
  "done": true,
  "message": "what was accomplished"
}`}</code></pre>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <Terminal className="h-5 w-5 text-primary" />
                System Responds
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2 text-green-600">Success:</h4>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto"><code>{`{
  "status": "success",
  "result": { ... }
}`}</code></pre>
                </div>

                <div className="rounded-lg border bg-card p-4">
                  <h4 className="font-semibold mb-2 text-orange-600">Error (signal):</h4>
                  <pre className="text-sm bg-muted p-3 rounded overflow-x-auto"><code>{`{
  "status": "error",
  "message": "fs.write failed: permission denied"
}`}</code></pre>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-6">
              "Error is not failure — it's information."
            </blockquote>
          </div>
        </div>
      </Section>

      {/* When to Use */}
      <Section>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight">When to Use XCT</h2>
            <p className="text-lg text-muted-foreground">
              Not every AI use case needs this level of control. Use XCT when the cost of error exceeds the value of speed.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <h3 className="text-xl font-bold text-green-600">Use XCT For</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Production systems with non-trivial failure cost</li>
                <li>• Infrastructure automation (deploy, scale, delete)</li>
                <li>• Financial operations and transactions</li>
                <li>• Any context where "undo" is expensive or impossible</li>
                <li>• High-stakes decision making</li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-orange-600" />
                <h3 className="text-xl font-bold text-orange-600">Not For</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Rapid prototyping</li>
                <li>• Creative exploration</li>
                <li>• Low-stakes experimentation</li>
                <li>• Interactive conversations</li>
                <li>• Simple query/response patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="border-t bg-muted/20">
        <div className="flex flex-col items-center text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter">
            Ready to Build Reliable AI Systems?
          </h2>
          <p className="text-muted-foreground text-lg">
            XCT ensures your AI integrations are safe, auditable, and production-ready.
            Let's discuss how this approach can benefit your engineering challenges.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
              Discuss Your Project
            </Link>
            <Link href="https://github.com/Tech-Tweakers/XCT" className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
              <Github className="mr-2 h-4 w-4" />
              Technical Details
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}