import Link from "next/link";
import { MessageCircle, Sparkles, User, FileText, BarChart3, Database, Brain } from "lucide-react";

function Button({
  children,
  variant = "primary",
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-[var(--accent)] text-white hover:bg-[#0077ed]"
      : "text-[var(--accent)] hover:text-[#004a99]";
  return <button className={`${base} ${styles}`}>{children}</button>;
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-4"
    >
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-dvh bg-[var(--background)]">
      <div className="mx-auto flex min-h-dvh max-w-5xl flex-col px-4 py-8 sm:px-6">
        {/* Top nav */}
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--accent)] text-white">
              <span className="text-lg">🎙️</span>
            </div>
            <span className="text-sm font-semibold tracking-tight text-[var(--foreground)]">
              Tofu
            </span>
          </div>
          <nav className="flex items-center gap-3 text-sm">
            <Link
              href="https://app.gotofu.io/login"
              className="text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              Sign in
            </Link>
            <Link href="https://app.gotofu.io/register">
              <Button>Get started</Button>
            </Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="pb-16">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <p className="inline-flex items-center gap-2 rounded-full bg-[var(--muted-bg)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Built for product discovery & research
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
              Discover what users really think.
              <br />
              At scale.
            </h1>
            <p className="text-sm text-[var(--muted)] sm:text-base">
              Generate realistic PM personas, interview them in a streaming chat
              interface, and turn transcripts into a searchable knowledge base
              of workflows, pain points, and buying signals.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link href="https://app.gotofu.io/register">
                <Button>Start for free</Button>
              </Link>
              <Link
                href="https://app.gotofu.io/login"
                className="text-sm font-medium text-[var(--accent)] transition-colors hover:underline"
              >
                Already using Tofu?
              </Link>
            </div>
          </div>

          {/* Sample chat */}
          <div className="mt-10 flex justify-center">
            <Card>
              <div className="mb-3 flex items-center justify-between text-xs text-[var(--muted)]">
                <span className="inline-flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--accent-muted)] text-base">
                    🧑‍💻
                  </span>
                  <span className="font-medium text-[var(--foreground)]">
                    Senior PM — Developer Tools
                  </span>
                </span>
                <span>Live interview · 12:04</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-end">
                  <div className="max-w-[75%] rounded-2xl rounded-br-md bg-[var(--accent)] px-4 py-2.5 text-left text-xs leading-relaxed text-white">
                    How do you currently discover new workflow pain points on
                    your team?
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="mt-1 text-lg">🧑‍💻</span>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-[var(--muted-bg)] px-4 py-2.5 text-xs leading-relaxed text-[var(--foreground)]">
                    Honestly, most of them show up in Slack rants or retro
                    notes. We rarely have time for structured discovery, so a
                    lot of real problems sit in people&apos;s heads or random
                    docs. That&apos;s what frustrates me the most.
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Three steps */}
        <section className="border-t border-[var(--card-border)] py-12">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              How it works
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              From zero to insights in three steps.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Card>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--muted-bg)] text-[var(--foreground)]">
                <User className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                1. Create personas
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Generate PM personas from templates, prompts, or LinkedIn PDFs.
                Capture seniority, company type, industry, and goals.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--muted-bg)] text-[var(--foreground)]">
                <MessageCircle className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                2. Run interviews
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Ask open‑ended questions in a streaming chat UI that feels like
                a real conversation, with suggested questions built in.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--muted-bg)] text-[var(--foreground)]">
                <BarChart3 className="h-4 w-4" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                3. Capture insights
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Turn transcripts into summaries, pain points, themes, and
                exports you can share with your team.
              </p>
            </Card>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-[var(--card-border)] py-12">
          <div className="mx-auto mb-8 max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
              Features
            </p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--foreground)] sm:text-2xl">
              Everything you need to understand your users.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <Sparkles className="h-4 w-4 text-[var(--foreground)]" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                AI‑generated personas
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Capture realistic PM archetypes with background, tools, and
                frustrations tailored to your product.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <FileText className="h-4 w-4 text-[var(--foreground)]" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Searchable transcripts
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Every interview is stored with a full transcript you can revisit
                and export in Markdown, JSON, or CSV.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <Database className="h-4 w-4 text-[var(--foreground)]" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Insights library
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                See recurring themes and top pain points across interviews, not
                just one conversation at a time.
              </p>
            </Card>
            <Card>
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[var(--muted-bg)]">
                <Brain className="h-4 w-4 text-[var(--foreground)]" />
              </div>
              <p className="text-sm font-semibold text-[var(--foreground)]">
                Built‑in analysis
              </p>
              <p className="mt-1 text-xs text-[var(--muted)]">
                Let Gemini summarize, cluster, and highlight what matters, while
                you stay focused on product decisions.
              </p>
            </Card>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-12">
          <div
            className="mx-auto max-w-3xl rounded-2xl border border-black/10 bg-gradient-to-br from-black via-black to-[#1c1c1e] p-8 text-center text-white"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-white/70">
              Stop guessing. Start understanding.
            </p>
            <h2 className="mt-2 text-xl font-semibold sm:text-2xl">
              Turn synthetic interviews into a real advantage.
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Bring qualitative insight into roadmap, sales, and strategy
              conversations without waiting weeks for user calls.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="https://app.gotofu.io/register">
                <Button>Get started in 2 minutes</Button>
              </Link>
              <Link
                href="https://app.gotofu.io/login"
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Or sign in to your workspace
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

