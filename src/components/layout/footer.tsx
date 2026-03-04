import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <Link href="/" className="font-bold text-lg">
              <span className="text-primary">Git</span>
              <span className="text-emerald">Ready</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Free tools and guides to make your GitHub profile job-ready.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/templates" className="hover:text-foreground transition-colors">
                  Profile Templates
                </Link>
              </li>
              <li>
                <Link href="/repo-templates" className="hover:text-foreground transition-colors">
                  Repo Templates
                </Link>
              </li>
              <li>
                <Link href="/checklist" className="hover:text-foreground transition-colors">
                  Profile Checklist
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-foreground transition-colors">
                  Complete Guide
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm mb-3">Connect</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="https://www.linkedin.com/in/nisanital/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} GitReady. Built by Nisan Ital.
        </div>
      </div>
    </footer>
  );
}
