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
            After reviewing thousands of developer profiles during years of
            tech recruiting, I kept seeing the same pattern: talented people
            with terrible GitHub profiles, losing opportunities because their
            work wasn&apos;t presented well.
          </p>
          <p className="text-muted-foreground mt-4">
            A great developer with a poor GitHub profile will lose to an
            average developer with a polished one. That&apos;s the reality of
            how recruiting works today. GitReady exists to fix that gap.
          </p>
          <p className="text-muted-foreground mt-4">
            Everything here is free, no signup required. Templates, guides,
            checklists, and real examples &mdash; everything you need in one
            place.
          </p>
        </div>

        {/* Why GitHub Matters */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Why GitHub Matters for Your Career</h2>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>
                GitHub has become the default portfolio for developers. Whether
                you&apos;re a student, career changer, or experienced engineer,
                your GitHub profile is often checked before you even get an
                interview.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                {[
                  { stat: "Recruiters check GitHub", detail: "Most tech recruiters review candidates' GitHub profiles as part of screening" },
                  { stat: "Code speaks louder than resumes", detail: "Your actual work is more convincing than bullet points on a PDF" },
                  { stat: "First impressions matter", detail: "A recruiter spends ~30 seconds scanning a profile before deciding" },
                  { stat: "It shows how you work", detail: "Commit history, documentation, and code quality reveal your work habits" },
                ].map((item) => (
                  <div key={item.stat} className="rounded-md bg-muted p-3">
                    <p className="font-medium text-foreground text-xs">{item.stat}</p>
                    <p className="text-xs mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="mt-3">
                The good news: improving your GitHub profile is one of the
                highest-ROI activities for job seekers. A few hours of work can
                make a lasting impression on every recruiter who views your
                profile.
              </p>
            </div>
          </CardContent>
        </Card>

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
            <p className="text-muted-foreground text-sm mt-3">
              GitReady was built using AI-assisted development as a
              demonstration of what&apos;s possible when career expertise meets
              modern technology. The{" "}
              <a
                href="https://github.com/nis1993tx/gitready"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                source code is open on GitHub
              </a>{" "}
              &mdash; and serves as a real-world example of a well-structured project.
            </p>
            <div className="mt-4 flex gap-3">
              <Button asChild size="sm" variant="outline">
                <a
                  href="https://www.linkedin.com/in/nisan-ital/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Button>
              <Button asChild size="sm" variant="outline">
                <a
                  href="https://github.com/nis1993tx/gitready"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
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
