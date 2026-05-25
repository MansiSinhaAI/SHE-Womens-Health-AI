import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for SHE, a private AI-powered women's wellness platform.",
  alternates: {
    canonical: "/terms"
  }
};

const sections = [
  {
    title: "Use of SHE",
    copy: "SHE provides AI-powered wellness education, organization, and reflection tools. You agree to use the platform responsibly and provide accurate information where it affects personalization."
  },
  {
    title: "Not Medical Advice",
    copy: "SHE does not provide diagnosis, treatment, prescriptions, emergency support, or a substitute for care from a qualified clinician. Always consult an appropriate professional for personal health decisions."
  },
  {
    title: "AI Limitations",
    copy: "AI outputs can be incomplete, inaccurate, or not suitable for your situation. You are responsible for reviewing responses carefully before relying on them."
  },
  {
    title: "Uploads and Content",
    copy: "If you upload reports or share notes, you confirm you have the right to provide that content. Do not upload information about another person without permission."
  },
  {
    title: "Accounts and Access",
    copy: "When account features are available, you are responsible for keeping your login credentials secure and for activity that occurs through your account."
  },
  {
    title: "Changes",
    copy: "We may update these terms as the product evolves. Continued use of SHE after updates means you accept the revised terms."
  }
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-void px-4 py-10 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-glow transition hover:text-white">
          Back to SHE
        </Link>
        <h1 className="mt-10 text-4xl font-semibold text-white sm:text-5xl">Terms of Use</h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: May 25, 2026</p>
        <div className="mt-10 space-y-5">
          {sections.map((section) => (
            <section key={section.title} className="glass rounded-[1.5rem] p-6">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{section.copy}</p>
            </section>
          ))}
        </div>
        <p className="mt-8 rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5 text-sm leading-6 text-zinc-400">
          Contact:{" "}
          <a className="text-glow transition hover:text-white" href="mailto:she.app.work@gmail.com">
            she.app.work@gmail.com
          </a>
        </p>
      </div>
    </main>
  );
}
