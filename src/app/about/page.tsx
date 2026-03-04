import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata = {
  title: "About - GitReady",
  description: "About GitReady and Nisan Ital. Free tools to help you build a job-ready GitHub profile.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">About GitReady</h1>

      <div className="space-y-8">
        <div>
          <p className="text-muted-foreground text-lg">
            GitReady is a free resource built to help students and job seekers
            create GitHub profiles that actually get them hired.
          </p>
          <p className="text-muted-foreground mt-4">
            As someone who has reviewed thousands of profiles during years of
            tech recruiting, I saw the same mistakes over and over. Great
            developers with terrible GitHub profiles, losing opportunities
            because their work wasn&apos;t presented well.
          </p>
          <p className="text-muted-foreground mt-4">
            GitReady gives you everything you need to fix that: templates,
            guides, checklists, and real examples. All free, no signup
            required.
          </p>
        </div>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-3">About Nisan Ital</h2>
            <p className="text-muted-foreground text-sm">
              Career expert, entrepreneur, and AI trainer with 58K+ followers
              on LinkedIn. Former Talent Acquisition Director in global tech
              companies. Founder of Next Career (career consulting, Israel).
            </p>
            <p className="text-muted-foreground text-sm mt-3">
              Currently running personalized 1-on-1 AI training sessions,
              helping professionals use tools like Claude and ChatGPT to
              boost their productivity and advance their careers.
            </p>
            <div className="mt-4 flex gap-3">
              <Button asChild size="sm" variant="outline">
                <a
                  href="https://www.linkedin.com/in/nisanital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div>
          <h2 className="text-xl font-bold mb-3">Want to Learn More?</h2>
          <p className="text-muted-foreground">
            If you want personalized help with your career, AI tools, or
            professional development, reach out on LinkedIn or check out the
            training services.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/templates">Browse Templates</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/guide">Read the Guide</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
