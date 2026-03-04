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
  },
  {
    title: "Repo README Templates",
    description:
      "Professional templates for your project repositories. Web apps, CLI tools, libraries, and more.",
    href: "/repo-templates",
    icon: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
    badge: "Free",
  },
  {
    title: "Profile Checklist",
    description:
      "Interactive 20-point checklist to audit your GitHub profile. Track your progress as you improve.",
    href: "/checklist",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
    badge: "Interactive",
  },
  {
    title: "Complete Guide",
    description:
      "Everything recruiters look for in a GitHub profile. Step-by-step optimization strategy.",
    href: "/guide",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    badge: "Guide",
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
              Free templates, guides, and tools to help students and job seekers
              build a GitHub profile that gets them hired.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base">
                <Link href="/templates">Browse Templates</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link href="/checklist">Audit Your Profile</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Everything You Need</h2>
          <p className="mt-3 text-muted-foreground text-lg">
            All the resources to transform your GitHub profile.
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
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="bg-muted/50 border-y border-border">
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

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to Level Up?</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Start with our templates or run a full checklist audit on your
            profile. Everything is free.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/templates">Get Templates</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/guide">Read the Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
