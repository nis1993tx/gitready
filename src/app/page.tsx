import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    title: "Profile README Templates",
    description:
      "6 ready-to-use templates designed to make your GitHub profile stand out to recruiters.",
    href: "/templates",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
    badge: "Free",
    time: "15 min to customize",
  },
  {
    title: "Repo README Templates",
    description:
      "Professional templates for your project repositories. Web apps, CLI tools, libraries, and more.",
    href: "/repo-templates",
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    badge: "Free",
    time: "10 min per project",
  },
  {
    title: "Profile Checklist",
    description:
      "Interactive 20-point checklist to audit your GitHub profile. Track your progress as you improve.",
    href: "/checklist",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    badge: "Interactive",
    time: "30 min audit",
  },
  {
    title: "Complete Guide",
    description:
      "Everything recruiters look for in a GitHub profile. Step-by-step optimization strategy.",
    href: "/guide",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    badge: "Guide",
    time: "20 min read",
  },
];

const quickTips = [
  {
    tip: "Write a clear bio",
    detail: "Include your role, tech stack, and location. Recruiters scan bios in 3 seconds.",
    example: '"Full-stack developer | React, Node.js, PostgreSQL | Open to work"',
  },
  {
    tip: "Pin your 6 best repos",
    detail: "Quality over quantity. Only show polished projects with READMEs.",
  },
  {
    tip: "Add a profile README",
    detail: "Create a repo named after your username. Its README appears on your profile page.",
  },
  {
    tip: "Write descriptive commit messages",
    detail: '"Add user authentication with JWT" tells a story. "fix stuff" does not.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-emerald/5" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-24 sm:py-32">
          <div className="text-center max-w-3xl mx-auto">
            <Badge variant="secondary" className="mb-6">
              100% Free &mdash; No signup required
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Make Your GitHub{" "}
              <span className="text-primary">Job-Ready</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Most GitHub profiles get overlooked because they&apos;re incomplete
              and poorly presented. Recruiters spend 30 seconds scanning &mdash;
              GitReady helps you make every second count.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/templates">Get Started Free</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/checklist">Audit Your Profile</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Built by a former Talent Acquisition Director who reviewed thousands of developer profiles.
            </p>
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold">Who Is This For?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: "🎓", title: "Students", desc: "CS students and bootcamp grads who can code but can't land interviews because their GitHub looks empty" },
              { emoji: "🔄", title: "Career Changers", desc: "Professionals switching to tech who need to prove their skills without years of experience" },
              { emoji: "💼", title: "Job Seekers", desc: "Developers losing out to candidates with polished profiles — even when they write better code" },
              { emoji: "🚀", title: "Junior Devs", desc: "Early-career developers who want recruiters to find them instead of the other way around" },
            ].map((persona) => (
              <div key={persona.title} className="text-center">
                <div className="text-3xl mb-3">{persona.emoji}</div>
                <h3 className="font-semibold text-sm">{persona.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{persona.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" size="sm">
              <Link href="/checklist">See Where You Stand</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Everything You Need</h2>
          <p className="mt-3 text-muted-foreground text-lg">
            All the resources to transform your GitHub profile. Most people
            finish in 2-3 hours.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Link key={feature.href} href={feature.href} className="group">
              <Card className="h-full transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-2.5 text-primary">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d={feature.icon} />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">
                          {feature.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          {feature.badge}
                        </Badge>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                      <p className="mt-2 text-xs text-primary/70">
                        {feature.time}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Tips */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Quick Wins in 5 Minutes</h2>
            <p className="mt-3 text-muted-foreground text-lg">
              Don&apos;t have time for the full guide? Start with these high-impact
              changes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {quickTips.map((item, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <div className="flex gap-3">
                    <div className="flex items-center justify-center h-7 w-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{item.tip}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.detail}
                      </p>
                      {item.example && (
                        <p className="mt-2 text-xs font-mono bg-muted rounded px-2 py-1 text-emerald">
                          {item.example}
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Before vs After</h2>
            <p className="mt-3 text-muted-foreground text-lg">
              See the difference a polished GitHub profile makes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-destructive/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-destructive" />
                  <span className="font-semibold text-destructive text-sm">
                    Before
                  </span>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground font-mono">
                  <div className="rounded bg-muted p-3">
                    <p className="font-sans font-medium text-foreground mb-2">
                      Profile
                    </p>
                    <p>No bio</p>
                    <p>Default avatar</p>
                    <p>No profile README</p>
                    <p>0 pinned repos</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-sans font-medium text-foreground mb-2">
                      Repositories
                    </p>
                    <p>15 repos, all named &quot;untitled&quot; or &quot;test&quot;</p>
                    <p>No descriptions</p>
                    <p>No README files</p>
                    <p>Last commit: 6 months ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-emerald/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-emerald" />
                  <span className="font-semibold text-emerald text-sm">
                    After
                  </span>
                </div>
                <div className="space-y-3 text-sm text-muted-foreground font-mono">
                  <div className="rounded bg-muted p-3">
                    <p className="font-sans font-medium text-foreground mb-2">
                      Profile
                    </p>
                    <p>Clear bio with role + tech stack</p>
                    <p>Professional photo</p>
                    <p>Eye-catching profile README with stats</p>
                    <p>6 curated pinned repos</p>
                  </div>
                  <div className="rounded bg-muted p-3">
                    <p className="font-sans font-medium text-foreground mb-2">
                      Repositories
                    </p>
                    <p>5 polished projects with clear names</p>
                    <p>Descriptions + topics on every repo</p>
                    <p>Detailed READMEs with screenshots</p>
                    <p>Regular contributions + green graph</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <Link href="/examples">See Real Examples</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Real World Example */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center mb-10">
            <Badge variant="secondary" className="mb-4">
              Live Example
            </Badge>
            <h2 className="text-3xl font-bold">See a Real GitHub Project</h2>
            <p className="mt-3 text-muted-foreground text-lg max-w-2xl mx-auto">
              GitReady itself is an example of a well-structured GitHub project.
              Check out the actual repo to see best practices in action.
            </p>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Professional README", desc: "Clear description, badges, getting started instructions, project structure" },
                  { label: "Clean Architecture", desc: "Well-organized src/ directory with logical file grouping and naming" },
                  { label: "Descriptive Naming", desc: 'Repo named "gitready" — short, memorable, and describes what it does' },
                  { label: "Active Maintenance", desc: "Regular commits, meaningful messages, consistent contribution history" },
                ].map((item) => (
                  <div key={item.label}>
                    <h3 className="font-semibold text-sm text-emerald">{item.label}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                  Built with Next.js, TypeScript, and Tailwind CSS &mdash; deployed on Vercel.
                </p>
                <Button asChild variant="outline" size="sm">
                  <a
                    href="https://github.com/nis1993tx/gitready"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Common Questions</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "Do I need coding experience to benefit from this?",
              a: "No. If you have a GitHub account with even a few projects, GitReady will help you present them better. The templates and checklist work for beginners and experienced developers alike.",
            },
            {
              q: "How long does it take to improve my profile?",
              a: "Most people finish in 2-3 hours. Start with the checklist (30 min) to identify gaps, then use templates (15 min each) to fill them. You can spread it out over a few days.",
            },
            {
              q: "Will this guarantee I get hired?",
              a: "No tool can guarantee a job, but a polished GitHub profile significantly increases your chances. Recruiters often check GitHub before scheduling interviews — a strong profile can be the difference between getting contacted or being passed over.",
            },
            {
              q: "Should I keep my old learning projects?",
              a: "Archive or make private anything that doesn't represent your current skill level. Quality over quantity. 5 polished projects is better than 50 incomplete ones.",
            },
          ].map((item) => (
            <Card key={item.q}>
              <CardContent className="p-5">
                <h3 className="font-semibold text-sm">{item.q}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Ready to Level Up?</h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Start with the checklist to see where you stand, then grab
              templates to fill the gaps. Everything is free, forever.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/checklist">Run the Checklist</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/templates">Browse Templates</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
