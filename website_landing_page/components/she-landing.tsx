"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bell,
  Brain,
  CalendarDays,
  ChevronRight,
  FileText,
  Fingerprint,
  Lock,
  MessageCircle,
  Moon,
  ShieldCheck,
  Sparkles,
  Upload,
  X,
  Zap
} from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";

const features = [
  {
    icon: MessageCircle,
    title: "AI Health Chat",
    copy: "Nuanced conversations that hold context, tone, and privacy with care."
  },
  {
    icon: FileText,
    title: "Blood Report Analysis",
    copy: "Clear, gentle summaries that help you understand patterns and next questions."
  },
  {
    icon: CalendarDays,
    title: "Period & Hormone Tracking",
    copy: "Cycles, symptoms, and hormonal shifts mapped into a calmer daily view."
  },
  {
    icon: Zap,
    title: "Vitamin Deficiency Insights",
    copy: "AI-assisted signals for fatigue, nutrition, and lifestyle blind spots."
  },
  {
    icon: Brain,
    title: "PCOS Support",
    copy: "Supportive tracking for symptoms, routines, and evidence-aware reflection."
  },
  {
    icon: Bell,
    title: "Smart Wellness Reminders",
    copy: "Soft nudges that adapt to your rhythm without feeling clinical or loud."
  }
];

const trustItems: Array<{ icon: LucideIcon; title: string; copy: string }> = [
  {
    icon: Lock,
    title: "Private by design",
    copy: "Sensitive prompts stay framed as personal context."
  },
  {
    icon: Fingerprint,
    title: "User-owned profile",
    copy: "Name, age, and preferences shape the tone."
  },
  {
    icon: ShieldCheck,
    title: "Clear boundaries",
    copy: "Safe education mode for younger users."
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function SheLanding() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
  <main className="relative min-h-screen overflow-hidden bg-void text-text">
      <AmbientBackground />
      <Header onStart={() => setModalOpen(true)} />
      <Hero onStart={() => setModalOpen(true)} />
      <Features />
      <ChatPreview />
      <UploadSection />
      <TrustSection />
      <LaunchReadiness />
      <FooterCta onStart={() => setModalOpen(true)} />
      <OnboardingModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}

function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-18rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px]" />
      <div className="absolute right-[-12rem] top-[28rem] h-[30rem] w-[30rem] rounded-full bg-glow/12 blur-[120px]" />
      <div className="absolute bottom-[-16rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent_0%,#07070A_72%)]" />
    </div>
  );
}

function Header({ onStart }: { onStart: () => void }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-40 px-4 pt-4 sm:px-6"
    >
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
        <a href="#" className="flex items-center gap-3" aria-label="SHE home">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-semibold text-white shadow-aurora">
            S
          </span>
          <span className="text-sm font-semibold tracking-[0.24em] text-white">SHE</span>
        </a>
        <div className="hidden items-center gap-7 text-sm text-zinc-300 md:flex">
          <a className="transition hover:text-white" href="#features">
            Features
          </a>
          <a className="transition hover:text-white" href="#chat">
            AI Preview
          </a>
          <a className="transition hover:text-white" href="#privacy">
            Privacy
          </a>
        </div>
        <button
          onClick={onStart}
          className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-void transition hover:bg-glow hover:text-white"
        >
          Start
        </button>
      </nav>
    </motion.header>
  );
}

function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <motion.div initial="hidden" animate="show" transition={{ staggerChildren: 0.12 }} className="max-w-3xl">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-medium text-zinc-300 backdrop-blur"
          >
            <Sparkles className="h-4 w-4 text-glow" />
            Private wellness intelligence for every phase
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-balance text-5xl font-semibold leading-[1.02] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            SHE - Women&apos;s Health AI
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Private AI-powered health conversations designed for women.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              onClick={onStart}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-white shadow-aurora transition hover:bg-glow"
            >
              Start Your Journey
              <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <a
              href="#chat"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:border-glow/60 hover:bg-white/[0.08]"
            >
              Try Demo
            </a>
          </motion.div>
        </motion.div>
        <HeroDevice />
      </div>
    </section>
  );
}

function HeroDevice() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
      className="relative mx-auto w-full max-w-[34rem]"
    >
      <div className="absolute inset-8 rounded-[2rem] bg-primary/30 blur-[90px]" />
      <div className="glass relative rounded-[2rem] p-4 sm:p-5">
        <div className="rounded-[1.5rem] border border-white/8 bg-black/40 p-4">
          <div className="mb-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/20 text-glow">
                <Moon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">SHE AI</p>
                <p className="text-xs text-zinc-400">Private session active</p>
              </div>
            </div>
            <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
              encrypted
            </div>
          </div>
          <div className="space-y-3">
            <ChatBubble align="left">Tell me what has felt different lately.</ChatBubble>
            <ChatBubble align="right">Low energy, irregular cycle, and I want to understand my labs.</ChatBubble>
            <ChatBubble align="left">
              I can help you organize symptoms, cycle context, and report values into a clear wellness brief.
            </ChatBubble>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Cycle", "Labs", "Energy"].map((item) => (
              <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] p-3">
                <p className="text-xs text-zinc-400">{item}</p>
                <div className="mt-3 h-1.5 rounded-full bg-white/10">
                  <div className="h-full w-2/3 rounded-full bg-glow" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ChatBubble({ children, align }: { children: React.ReactNode; align: "left" | "right" }) {
  return (
    <div
      className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm leading-6 ${
        align === "right"
          ? "ml-auto bg-primary text-white"
          : "border border-white/8 bg-white/[0.06] text-zinc-200"
      }`}
    >
      {children}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <SectionIntro
        eyebrow="AI wellness stack"
        title="Built for private, emotionally intelligent health support."
        copy="SHE brings daily reflection, cycle context, lab understanding, and personalized nudges into one calm interface."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <motion.article
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.04 }}
            className="glass rounded-[1.5rem] p-6 transition hover:-translate-y-1 hover:border-glow/40"
          >
            <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-primary/14 text-glow">
              <feature.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-400">{feature.copy}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ChatPreview() {
  return (
    <section id="chat" className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[.82fr_1.18fr] lg:px-8">
      <SectionIntro
        eyebrow="AI chat preview"
        title="A conversation space that feels composed, never clinical."
        copy="Designed for the kinds of questions that need clarity, context, and a sense of privacy before anything else."
      />
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="glass rounded-[1.75rem] p-4 sm:p-6"
      >
        <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <p className="font-semibold text-white">Today&apos;s check-in</p>
            <p className="text-sm text-zinc-400">Context-aware AI response</p>
          </div>
          <Sparkles className="h-5 w-5 text-glow" />
        </div>
        <div className="space-y-4">
          <ChatBubble align="right">Why do I feel tired around the same time each cycle?</ChatBubble>
          <ChatBubble align="left">
            Fatigue can shift with sleep, nutrition, stress, cycle phase, and iron or vitamin markers. Based on your notes,
            I&apos;d start by comparing energy, flow, sleep, and recent lab values across the last two cycles.
          </ChatBubble>
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-4">
            <p className="text-sm font-medium text-white">SHE created a gentle follow-up plan</p>
            <div className="mt-3 grid gap-2 text-sm text-zinc-300 sm:grid-cols-3">
              <span className="rounded-full bg-white/[0.05] px-3 py-2">Track energy</span>
              <span className="rounded-full bg-white/[0.05] px-3 py-2">Review ferritin</span>
              <span className="rounded-full bg-white/[0.05] px-3 py-2">Sleep pattern</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function UploadSection() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[1.75rem] p-6 sm:p-8"
        >
          <div className="grid min-h-[20rem] place-items-center rounded-[1.35rem] border border-dashed border-glow/40 bg-white/[0.035] p-8 text-center">
            <div>
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/16 text-glow">
                <Upload className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">Blood Report Upload</h3>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-zinc-400">
                Convert lab reports into readable, private summaries with trends, questions, and wellness signals.
              </p>
              <button className="mt-6 rounded-full border border-white/12 bg-white/[0.06] px-5 py-3 text-sm font-semibold text-white transition hover:border-glow/60 hover:bg-primary/30">
                Upload Preview
              </button>
            </div>
          </div>
        </motion.div>
        <SectionIntro
          eyebrow="Lab intelligence"
          title="From dense numbers to understandable patterns."
          copy="SHE frames report insights in plain language, connecting values to symptoms, cycle context, nutrition, and lifestyle without turning the product into a sterile dashboard."
        />
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="privacy" className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass rounded-[2rem] p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <SectionIntro
            eyebrow="Trust & privacy"
            title="Designed around discretion from the first tap."
            copy="The interface is intentionally quiet: no alarming patterns, no public-feeling workflows, and no unnecessary friction around sensitive conversations."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {trustItems.map(({ icon: Icon, title, copy }) => (
              <div key={title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5">
                <Icon className="h-5 w-5 text-glow" />
                <p className="mt-5 font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LaunchReadiness() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
        <div className="glass rounded-[1.75rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-glow">AI guidance boundary</p>
          <h2 className="mt-4 text-2xl font-semibold text-white sm:text-3xl">Clear support, not diagnosis.</h2>
          <p className="mt-4 leading-7 text-zinc-300">
            SHE is designed for wellness education, reflection, report understanding, and private AI-powered
            conversations. It does not replace professional care, diagnose conditions, prescribe treatment, or provide
            urgent support.
          </p>
        </div>
        <div className="glass rounded-[1.75rem] p-6 sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-glow">Launch contacts</p>
          <div className="mt-5 space-y-4 text-sm text-zinc-300">
            <a className="block rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 transition hover:border-glow/50 hover:text-white" href="mailto:she.app.work@gmail.com">
              she.app.work@gmail.com
            </a>
            <div className="grid grid-cols-2 gap-3">
              <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center transition hover:border-glow/50 hover:text-white" href="/privacy">
                Privacy
              </a>
              <a className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center transition hover:border-glow/50 hover:text-white" href="/terms">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FooterCta({ onStart }: { onStart: () => void }) {
  return (
    <footer className="relative z-10 px-4 pb-8 pt-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-primary/30 bg-[linear-gradient(135deg,rgba(124,92,255,.24),rgba(255,255,255,.045))] p-8 shadow-aurora backdrop-blur sm:p-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-glow">Begin privately</p>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Meet the AI wellness space that moves at your pace.
            </h2>
          </div>
          <button
            onClick={onStart}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-void transition hover:bg-glow hover:text-white"
          >
            Start Your Journey
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-2 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <span>SHE</span>
        <div className="flex flex-wrap gap-4">
          <a className="transition hover:text-white" href="/privacy">
            Privacy Policy
          </a>
          <a className="transition hover:text-white" href="/terms">
            Terms of Use
          </a>
          <a className="transition hover:text-white" href="mailto:she.app.work@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-glow">{eyebrow}</p>
      <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400">{copy}</p>
    </motion.div>
  );
}

function OnboardingModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const ageNumber = Number(age);
  const isUnder16 = useMemo(() => Number.isFinite(ageNumber) && ageNumber > 0 && ageNumber < 16, [ageNumber]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 backdrop-blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.24 }}
            className="glass relative w-full max-w-lg rounded-[1.75rem] p-6 sm:p-8"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:bg-white/[0.08] hover:text-white"
              aria-label="Close onboarding"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="pr-10">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-glow">Private onboarding</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">Personalize your SHE space</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-400">
                A tiny profile helps the AI shape tone, boundaries, and educational context.
              </p>
            </div>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <label className="block">
                <span className="text-sm font-medium text-zinc-300">First Name</span>
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-glow/70"
                  placeholder="Avery"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-zinc-300">Age</span>
                <input
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  required
                  type="number"
                  min="1"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-glow/70"
                  placeholder="28"
                />
              </label>
              <button className="w-full rounded-full bg-primary px-5 py-4 text-sm font-semibold text-white shadow-aurora transition hover:bg-glow">
                Continue
              </button>
            </form>
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className={`mt-5 rounded-2xl border p-4 text-sm leading-6 ${
                    isUnder16
                      ? "border-amber-200/25 bg-amber-200/10 text-amber-100"
                      : "border-glow/30 bg-primary/12 text-zinc-200"
                  }`}
                >
                  {isUnder16
                    ? `${name || "Your"} SHE profile is set to educational-safe mode only, with age-aware wellness learning and supportive general guidance.`
                    : `${name || "Your"} private SHE profile is ready for AI wellness conversations, report summaries, and personal reminders.`}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
