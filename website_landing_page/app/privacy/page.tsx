import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SHE, a private AI-powered women's wellness platform.",
  alternates: {
    canonical: "/privacy"
  }
};

const sections = [
  {
    title: "What We Collect",
    copy: "SHE may collect basic profile details you choose to provide, such as first name and age, along with wellness notes, uploaded report content, product interactions, and technical information needed to operate the service."
  },
  {
    title: "How We Use Information",
    copy: "We use information to personalize your experience, provide AI-powered wellness conversations, summarize report content, improve product quality, maintain security, and understand aggregate usage patterns."
  },
  {
    title: "Sensitive Information",
    copy: "Wellness and health-related information can be sensitive. SHE is designed to treat this information carefully and only use it for the experience you request."
  },
  {
    title: "Analytics",
    copy: "We use lightweight, privacy-conscious analytics to understand page views and product usage. We avoid selling personal information."
  },
  {
    title: "Data Sharing",
    copy: "We do not sell your personal information. We may use trusted infrastructure and AI service providers to run the platform, process requests, prevent abuse, and comply with legal obligations."
  },
  {
    title: "Your Choices",
    copy: "You can avoid submitting sensitive information, request deletion of information associated with your account when account features are available, and contact us with privacy questions."
  }
];

export default function PrivacyPage() {
  return <PolicyPage title="Privacy Policy" updated="May 25, 2026" sections={sections} />;
}

function PolicyPage({
  title,
  updated,
  sections
}: {
  title: string;
  updated: string;
  sections: Array<{ title: string; copy: string }>;
}) {
  return (
    <main className="min-h-screen bg-void px-4 py-10 text-text sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-glow transition hover:text-white">
          Back to SHE
        </Link>
        <h1 className="mt-10 text-4xl font-semibold text-white sm:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-zinc-500">Last updated: {updated}</p>
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
