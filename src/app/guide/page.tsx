import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "How to Build a GitHub That Gets You Hired - GitReady",
  description:
    "Complete guide to optimizing your GitHub profile for job hunting. What recruiters look for, step-by-step tips, and common mistakes to avoid.",
};

const toc = [
  { id: "what-recruiters-look-for", label: "What Recruiters Look For" },
  { id: "profile-setup", label: "Profile Setup" },
  { id: "readme-writing", label: "README Writing" },
  { id: "contribution-strategy", label: "Contribution Strategy" },
  { id: "common-mistakes", label: "Common Mistakes" },
];

export default function GuidePage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12">
      <div className="mb-10">
        <Badge variant="secondary" className="mb-4">
          Complete Guide
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-bold">
          How to Build a GitHub That Gets You Hired
        </h1>
        <p className="mt-3 text-muted-foreground text-lg">
          Everything you need to know to turn your GitHub profile into a
          job-winning portfolio. Written from the perspective of someone who has
          reviewed thousands of developer profiles.
        </p>
      </div>

      {/* Table of Contents */}
      <Card className="mb-12">
        <CardContent className="p-6">
          <h2 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wide">
            In this guide
          </h2>
          <ol className="space-y-2">
            {toc.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-primary hover:underline"
                >
                  {i + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      {/* Guide Content */}
      <div className="prose prose-invert prose-lg max-w-none space-y-16">
        {/* Section 1 */}
        <section id="what-recruiters-look-for">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            1. What Recruiters Look For
          </h2>
          <p className="text-muted-foreground mb-4">
            Most recruiters spend less than 30 seconds on your GitHub before
            making a decision. Here&apos;s what catches their eye:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-emerald mb-2">
                  Green Flags
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>Clean, well-documented projects</li>
                  <li>Consistent contribution activity</li>
                  <li>Clear profile README with skills</li>
                  <li>Professional photo and bio</li>
                  <li>Real-world projects (not just tutorials)</li>
                  <li>Meaningful commit messages</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <h3 className="font-semibold text-destructive mb-2">
                  Red Flags
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1.5">
                  <li>No README on any project</li>
                  <li>Last commit was months ago</li>
                  <li>Dozens of unnamed/test repos</li>
                  <li>Only forked repos, no original work</li>
                  <li>No profile photo or bio</li>
                  <li>Commit messages like &quot;fix&quot; or &quot;asdf&quot;</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            The goal is simple: make it obvious in 30 seconds that you&apos;re a
            capable developer who cares about quality.
          </p>
        </section>

        {/* Section 2 */}
        <section id="profile-setup">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            2. Profile Setup
          </h2>
          <p className="text-muted-foreground mb-6">
            Your profile is your first impression. Here&apos;s how to set it up
            right:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Bio</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Keep it specific and role-focused. State what you do and what
                technologies you use.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-md bg-destructive/10 p-3 text-sm">
                  <span className="font-medium text-destructive">Bad:</span>{" "}
                  &quot;I like coding&quot;
                </div>
                <div className="rounded-md bg-emerald/10 p-3 text-sm">
                  <span className="font-medium text-emerald">Good:</span>{" "}
                  &quot;Full-stack developer | React, Node.js, PostgreSQL&quot;
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Profile Photo</h3>
              <p className="text-sm text-muted-foreground">
                Use a clear, professional headshot. Good lighting, simple
                background. Avoid logos, cartoons, or group photos. Recruiters
                want to see a person.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Profile README</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Create a repository named exactly like your GitHub username.
                The README.md of this repo appears on your profile page.
              </p>
              <p className="text-sm text-muted-foreground">
                Include: a brief introduction, your tech stack (use badges),
                featured projects, and contact info.{" "}
                <Link href="/templates" className="text-primary hover:underline">
                  Use our templates
                </Link>{" "}
                to get started quickly.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Pinned Repositories</h3>
              <p className="text-sm text-muted-foreground">
                Pin your 4-6 best projects. These are the first repos people
                see. Choose projects that showcase different skills, have good
                READMEs, and ideally have some stars.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="readme-writing">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            3. README Writing
          </h2>
          <p className="text-muted-foreground mb-6">
            A good README is the difference between a recruiter spending 5
            seconds vs 5 minutes on your project.
          </p>

          <div className="space-y-4">
            <h3 className="font-semibold">Every project README should include:</h3>
            <ol className="text-sm text-muted-foreground space-y-3 list-decimal list-inside">
              <li>
                <span className="font-medium text-foreground">
                  What it does
                </span>{" "}
                &mdash; One clear sentence describing the project
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Screenshot or demo
                </span>{" "}
                &mdash; A visual preview of the project in action
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Tech stack
                </span>{" "}
                &mdash; List the main technologies used (badges work great)
              </li>
              <li>
                <span className="font-medium text-foreground">
                  How to run it
                </span>{" "}
                &mdash; Clear installation and setup instructions
              </li>
              <li>
                <span className="font-medium text-foreground">Features</span>{" "}
                &mdash; Key features listed as bullet points
              </li>
            </ol>

            <div className="mt-4">
              <Button asChild variant="outline" size="sm">
                <Link href="/repo-templates">Get Repo README Templates</Link>
              </Button>
            </div>

            <h3 className="font-semibold mt-6">Pro Tips</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                Use shields.io badges for a professional look
              </li>
              <li>
                Record a GIF demo using tools like LICEcap or Kap
              </li>
              <li>
                Test your README: can someone else follow it and run your
                project? If not, it&apos;s not done
              </li>
              <li>
                Keep it concise. A README that&apos;s too long won&apos;t get
                read either
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section id="contribution-strategy">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            4. Contribution Strategy
          </h2>
          <p className="text-muted-foreground mb-6">
            Your contribution graph tells a story. Here&apos;s how to make it a
            good one:
          </p>

          <div className="space-y-4">
            <h3 className="font-semibold">Building Consistency</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                Aim for 3-4 days per week of activity, not necessarily daily
              </li>
              <li>
                Even small commits count: updating docs, fixing typos,
                refactoring
              </li>
              <li>
                Work on personal projects between job applications
              </li>
              <li>
                Set a recurring reminder to push at least one meaningful commit
                per week
              </li>
            </ul>

            <h3 className="font-semibold mt-6">Open Source Contributions</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Contributing to open source shows you can work with existing
              codebases and collaborate with others. Start small:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                Fix typos in documentation (every project has them)
              </li>
              <li>
                Improve error messages or add tests
              </li>
              <li>
                Look for issues labeled &quot;good first issue&quot; or
                &quot;help wanted&quot;
              </li>
              <li>
                Contribute to tools you already use
              </li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section id="common-mistakes">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            5. Common Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {[
              {
                mistake: "Keeping dozens of incomplete or test repos public",
                fix: "Archive or make them private. Only show your best work.",
              },
              {
                mistake: "No README on any project",
                fix: "Add a README to every pinned repo. Even a basic one is better than nothing.",
              },
              {
                mistake: "Only forked repos with no original contributions",
                fix: "Build original projects, even if small. Fork repos only if you actually contribute.",
              },
              {
                mistake: "Commit messages like 'fix', 'update', or 'asdf'",
                fix: "Write descriptive messages: 'Add user authentication with JWT tokens'.",
              },
              {
                mistake: "Using your GitHub like Google Drive",
                fix: "GitHub is your portfolio, not storage. Only keep repos you want employers to see.",
              },
              {
                mistake: "No profile photo or using a logo/meme",
                fix: "Use a professional headshot. You're applying for jobs, not posting on Reddit.",
              },
            ].map((item) => (
              <Card key={item.mistake}>
                <CardContent className="p-4">
                  <p className="text-sm font-medium text-destructive mb-1">
                    Mistake: {item.mistake}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Fix: {item.fix}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Improve?</h2>
        <p className="text-muted-foreground mb-6">
          Start with the checklist to see where you stand, then grab templates
          to fill the gaps.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/checklist">Run the Checklist</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/templates">Get Templates</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
