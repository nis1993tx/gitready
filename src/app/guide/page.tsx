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
  { id: "project-anatomy", label: "Anatomy of a Strong Project" },
  { id: "contribution-strategy", label: "Contribution Strategy" },
  { id: "commit-messages", label: "Writing Good Commit Messages" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "faq", label: "FAQ" },
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
        <p className="mt-2 text-sm text-muted-foreground">
          Estimated read time: 20 minutes. Estimated implementation time: 2-3 hours.
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
            making a decision. They&apos;re not reading your code line by line
            &mdash; they&apos;re scanning for signals of quality, consistency,
            and professionalism. Here&apos;s what catches their eye:
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
                  <li>Projects with live demos or screenshots</li>
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
                  <li>Hardcoded API keys or credentials in code</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          <Card className="mt-4">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">The bottom line:</span>{" "}
                Make it obvious in 30 seconds that you&apos;re a capable developer
                who cares about quality. Your GitHub is a portfolio, not a storage drive.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Section 2 */}
        <section id="profile-setup">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            2. Profile Setup
          </h2>
          <p className="text-muted-foreground mb-6">
            Your profile is your first impression. Think of it as the landing page
            for your developer brand. Here&apos;s how to set it up right:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Bio</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Keep it specific and role-focused. State what you do and what
                technologies you use. Avoid vague statements like &quot;passionate
                about code.&quot;
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-md bg-destructive/10 p-3 text-sm">
                  <span className="font-medium text-destructive">Bad:</span>{" "}
                  &quot;I like coding&quot;
                </div>
                <div className="rounded-md bg-emerald/10 p-3 text-sm">
                  <span className="font-medium text-emerald">Good:</span>{" "}
                  &quot;Full-stack developer | React, Node.js, PostgreSQL | Building web apps&quot;
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="rounded-md bg-destructive/10 p-3 text-sm">
                  <span className="font-medium text-destructive">Bad:</span>{" "}
                  &quot;Student&quot;
                </div>
                <div className="rounded-md bg-emerald/10 p-3 text-sm">
                  <span className="font-medium text-emerald">Good:</span>{" "}
                  &quot;CS @ MIT &apos;25 | Python, ML, TensorFlow | Open to internships&quot;
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Profile Photo</h3>
              <p className="text-sm text-muted-foreground">
                Use a clear, professional headshot. Good lighting, simple
                background. Avoid logos, cartoons, or group photos. Recruiters
                want to see a person &mdash; it builds trust and makes your profile
                memorable.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Profile README</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Create a repository named exactly like your GitHub username.
                The README.md of this repo appears on your profile page. This
                is prime real estate &mdash; use it wisely.
              </p>
              <p className="text-sm text-muted-foreground mb-2">
                Include: a brief introduction, your tech stack (use badges),
                featured projects, and contact info.{" "}
                <Link href="/templates" className="text-primary hover:underline">
                  Use our templates
                </Link>{" "}
                to get started quickly.
              </p>
              <Card className="mt-3">
                <CardContent className="p-3">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">How to create it:</span>{" "}
                    Go to GitHub &rarr; New repository &rarr; Name it your username (e.g., &quot;johndoe&quot;) &rarr;
                    Check &quot;Add a README file&quot; &rarr; Create. The README will appear on your profile.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Pinned Repositories</h3>
              <p className="text-sm text-muted-foreground">
                Pin your 4-6 best projects. These are the first repos people
                see. Choose projects that showcase different skills, have good
                READMEs, and ideally have some stars. Order matters &mdash; put
                your strongest project first.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Social Links</h3>
              <p className="text-sm text-muted-foreground">
                Add your LinkedIn, portfolio website, and email. Make it easy
                for recruiters to contact you. A GitHub profile without contact
                info is a missed opportunity.
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
            seconds vs 5 minutes on your project. Think of it as a sales page
            for your work.
          </p>

          <div className="space-y-4">
            <h3 className="font-semibold">Every project README should include:</h3>
            <ol className="text-sm text-muted-foreground space-y-3 list-decimal list-inside">
              <li>
                <span className="font-medium text-foreground">
                  What it does
                </span>{" "}
                &mdash; One clear sentence describing the project and the problem it solves
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Screenshot or demo
                </span>{" "}
                &mdash; A visual preview of the project in action (GIFs are even better)
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Tech stack
                </span>{" "}
                &mdash; List the main technologies used (badges work great for quick scanning)
              </li>
              <li>
                <span className="font-medium text-foreground">
                  How to run it
                </span>{" "}
                &mdash; Clear installation and setup instructions that actually work
              </li>
              <li>
                <span className="font-medium text-foreground">Features</span>{" "}
                &mdash; Key features listed as bullet points
              </li>
              <li>
                <span className="font-medium text-foreground">
                  What you learned
                </span>{" "}
                &mdash; For portfolio projects, briefly mention key takeaways or challenges solved
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
                Use shields.io badges for a professional look (language, build status, license)
              </li>
              <li>
                Record a GIF demo using tools like LICEcap or Kap &mdash; motion catches attention
              </li>
              <li>
                Test your README: can someone else follow it and run your
                project? If not, it&apos;s not done
              </li>
              <li>
                Keep it concise. A README that&apos;s too long won&apos;t get
                read either. Aim for 1-2 scrolls of content
              </li>
              <li>
                Add a &quot;Live Demo&quot; link at the top if your project is deployed
              </li>
            </ul>
          </div>
        </section>

        {/* Section 4 - NEW: Project Anatomy */}
        <section id="project-anatomy">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            4. Anatomy of a Strong Portfolio Project
          </h2>
          <p className="text-muted-foreground mb-6">
            What separates a &quot;just another repo&quot; from a project that
            impresses recruiters? Let&apos;s break it down using a real example &mdash;{" "}
            <a
              href="https://github.com/nis1993tx/gitready"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              the GitReady repository itself
            </a>.
          </p>

          <div className="space-y-4">
            {[
              {
                title: "1. Descriptive Repository Name",
                good: '"gitready" — short, memorable, and describes what it does',
                bad: '"my-project-v2-final" or "untitled-1"',
                why: "Recruiters scan repo names first. A clear name immediately communicates purpose.",
              },
              {
                title: "2. Professional README",
                good: "Clear description, tech badges, getting started instructions, project structure",
                bad: "Auto-generated README or just the project name",
                why: "The README is your project's resume. It shows communication skills and attention to detail.",
              },
              {
                title: "3. Clear Project Structure",
                good: "Well-organized src/ directory with logical grouping (app/, components/, lib/)",
                bad: "All files dumped in the root directory",
                why: "Code organization signals engineering maturity. It shows you think about architecture.",
              },
              {
                title: "4. Meaningful Commit History",
                good: '"Add interactive profile checklist with localStorage" tells a story',
                bad: '"fix" or "wip" or "stuff" tells nothing',
                why: "Commit history shows how you think and work. Recruiters do check it.",
              },
              {
                title: "5. Tech Stack Badges",
                good: "Next.js, TypeScript, Tailwind badges in the README",
                bad: "No indication of what technologies were used",
                why: "Badges are scannable. Recruiters can instantly see if your skills match their needs.",
              },
              {
                title: "6. Setup Instructions That Work",
                good: "git clone → npm install → npm run dev — tested and verified",
                bad: "No instructions, or instructions that are outdated",
                why: "If someone can't run your project, it might as well not exist. Always test your setup steps.",
              },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-2">
                    <div className="rounded bg-emerald/10 p-2 text-xs">
                      <span className="font-medium text-emerald">Good:</span>{" "}
                      {item.good}
                    </div>
                    <div className="rounded bg-destructive/10 p-2 text-xs">
                      <span className="font-medium text-destructive">Bad:</span>{" "}
                      {item.bad}
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium text-foreground">Why it matters:</span>{" "}
                    {item.why}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-6">
            <CardContent className="p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <p className="text-sm text-muted-foreground">
                See all of these best practices in action on the real GitReady repository.
              </p>
              <Button asChild variant="outline" size="sm" className="shrink-0">
                <a
                  href="https://github.com/nis1993tx/gitready"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </a>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Section 5 */}
        <section id="contribution-strategy">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            5. Contribution Strategy
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
              <li>
                Don&apos;t fake activity with empty commits &mdash; recruiters can tell
              </li>
            </ul>

            <h3 className="font-semibold mt-6">Open Source Contributions</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Contributing to open source shows you can work with existing
              codebases and collaborate with others. It&apos;s one of the strongest
              signals a recruiter can see. Start small:
            </p>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                Fix typos in documentation (every project has them)
              </li>
              <li>
                Improve error messages or add missing tests
              </li>
              <li>
                Look for issues labeled &quot;good first issue&quot; or
                &quot;help wanted&quot; on GitHub Explore
              </li>
              <li>
                Contribute to tools you already use &mdash; you understand the codebase
              </li>
              <li>
                Write a thoughtful PR description explaining what you changed and why
              </li>
            </ul>

            <h3 className="font-semibold mt-6">What to Build If You Have No Ideas</h3>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>Solve a problem you personally have (todo app, expense tracker, recipe manager)</li>
              <li>Rebuild a tool you use daily but simpler (mini Spotify, basic Trello)</li>
              <li>Build something related to your target industry (healthcare dashboard, fintech calculator)</li>
              <li>Create a developer tool (VS Code extension, CLI utility, GitHub action)</li>
            </ul>
          </div>
        </section>

        {/* Section 6 - NEW: Commit Messages */}
        <section id="commit-messages">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            6. Writing Good Commit Messages
          </h2>
          <p className="text-muted-foreground mb-6">
            Commit messages are one of the most overlooked parts of a GitHub profile,
            but recruiters and engineering managers do read them. Good messages show
            clear thinking and professionalism.
          </p>

          <div className="space-y-4">
            <h3 className="font-semibold">The Formula</h3>
            <Card>
              <CardContent className="p-4">
                <p className="font-mono text-sm text-emerald">
                  [type]: [what you did] + [why, if not obvious]
                </p>
                <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <p className="font-mono text-xs">Add user authentication with JWT tokens</p>
                  <p className="font-mono text-xs">Fix checkout total calculation for discounted items</p>
                  <p className="font-mono text-xs">Refactor API routes to use middleware pattern</p>
                  <p className="font-mono text-xs">Update README with deployment instructions</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-destructive text-sm mb-2">Bad Messages</h3>
                  <ul className="text-xs text-muted-foreground space-y-1 font-mono">
                    <li>&quot;fix&quot;</li>
                    <li>&quot;update&quot;</li>
                    <li>&quot;asdf&quot;</li>
                    <li>&quot;WIP&quot;</li>
                    <li>&quot;changes&quot;</li>
                    <li>&quot;stuff&quot;</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-emerald text-sm mb-2">Good Messages</h3>
                  <ul className="text-xs text-muted-foreground space-y-1 font-mono">
                    <li>&quot;Fix login redirect for expired sessions&quot;</li>
                    <li>&quot;Add dark mode toggle to settings page&quot;</li>
                    <li>&quot;Improve search performance with debouncing&quot;</li>
                    <li>&quot;Remove unused dependencies to reduce bundle size&quot;</li>
                    <li>&quot;Add unit tests for payment service&quot;</li>
                    <li>&quot;Update API docs with new endpoints&quot;</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Pro tip:</span>{" "}
              Write commit messages in the imperative mood (&quot;Add feature&quot; not
              &quot;Added feature&quot;). Start with a verb. Keep the first line under 72
              characters.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section id="common-mistakes">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            7. Common Mistakes to Avoid
          </h2>

          <div className="space-y-4">
            {[
              {
                mistake: "Keeping dozens of incomplete or test repos public",
                fix: "Archive or make them private. Only show your best work. Quality beats quantity every time.",
              },
              {
                mistake: "No README on any project",
                fix: "Add a README to every pinned repo. Even a basic one is better than nothing. Use our templates to get started in 15 minutes.",
              },
              {
                mistake: "Only forked repos with no original contributions",
                fix: "Build original projects, even if small. Fork repos only if you actually contribute. Deleting unused forks cleans up your profile.",
              },
              {
                mistake: "Commit messages like 'fix', 'update', or 'asdf'",
                fix: "Write descriptive messages. 'Add user authentication with JWT tokens' takes 5 extra seconds but shows professionalism.",
              },
              {
                mistake: "Using your GitHub like Google Drive",
                fix: "GitHub is your portfolio, not storage. Only keep repos you want employers to see. Everything else should be private or archived.",
              },
              {
                mistake: "No profile photo or using a logo/meme",
                fix: "Use a professional headshot. You're applying for jobs, not posting on Reddit. A real photo builds trust.",
              },
              {
                mistake: "Hardcoded API keys, passwords, or secrets in code",
                fix: "Use environment variables. If you've already committed secrets, rotate them immediately and use .gitignore to prevent future leaks.",
              },
              {
                mistake: "No contact information or social links",
                fix: "Add your LinkedIn, email, and portfolio URL to your profile. A recruiter who can't contact you will move on to someone else.",
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

        {/* Section 8 - NEW: FAQ */}
        <section id="faq">
          <h2 className="text-2xl font-bold mb-4 scroll-mt-20">
            8. Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How many pinned repos should I have?",
                a: "4-6. Enough to show range, not so many that the quality drops. Each pinned repo should have a README and clear description.",
              },
              {
                q: "Should I keep my old learning projects?",
                a: "Make them private or archive them. They clutter your profile and don't represent your current skills. Keep only projects you're proud of.",
              },
              {
                q: "Is contributing to open source mandatory?",
                a: "No, but it's a strong signal. Even small contributions (docs fixes, bug reports) show collaboration skills. Start with projects you already use.",
              },
              {
                q: "How important is commit frequency?",
                a: "Consistency matters more than volume. 3-4 commits per week looks better than 50 commits in one day then nothing for months. Don't fake activity.",
              },
              {
                q: "What if I only have school projects?",
                a: "Polish your best 2-3 school projects: rename them, add proper READMEs, clean up the code. Then build 1-2 original projects to show initiative.",
              },
              {
                q: "Do I need to be an expert to have a good GitHub?",
                a: "No. Presentation matters more than complexity. A well-documented beginner project beats a complex one with no README.",
              },
              {
                q: "How do I make my GitHub graph look active?",
                a: "Work on something consistently — personal projects, open source, or even documentation updates. But focus on meaningful work, not just gaming the graph.",
              },
            ].map((item) => (
              <Card key={item.q}>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-sm">{item.q}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.a}</p>
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
