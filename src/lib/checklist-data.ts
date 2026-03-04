export type ChecklistItem = {
  id: string;
  label: string;
  tip: string;
  category: "profile" | "repos" | "documentation" | "activity";
};

export const checklistItems: ChecklistItem[] = [
  // Profile Basics
  {
    id: "bio",
    label: "Write a clear, specific bio",
    tip: 'Your bio should state your role and focus. Example: "Full-stack developer building tools with React and Node.js" beats "I like coding."',
    category: "profile",
  },
  {
    id: "avatar",
    label: "Use a professional profile photo",
    tip: "A clear, well-lit headshot works best. Avoid logos, cartoons, or blurry images. Recruiters want to see a real person.",
    category: "profile",
  },
  {
    id: "profile-readme",
    label: "Create a profile README",
    tip: "Create a repo with your username as the name, add a README.md. This shows up on your profile page. Use our templates to get started.",
    category: "profile",
  },
  {
    id: "location",
    label: "Add your location",
    tip: "Recruiters often filter by location. Add your city or country so you show up in local searches.",
    category: "profile",
  },
  {
    id: "social-links",
    label: "Add social links (LinkedIn, portfolio)",
    tip: "Link your LinkedIn and portfolio site. Makes it easy for recruiters to learn more about you and reach out.",
    category: "profile",
  },
  {
    id: "email",
    label: "Make your email visible or add contact info",
    tip: "If you want recruiters to reach you, make it easy. Either set your email to public or include it in your bio/README.",
    category: "profile",
  },
  // Repositories
  {
    id: "pinned-repos",
    label: "Pin your 4-6 best repositories",
    tip: "Pin projects that show your strongest skills. Quality over quantity. Choose repos that have good READMEs and clean code.",
    category: "repos",
  },
  {
    id: "repo-descriptions",
    label: "Add descriptions to all pinned repos",
    tip: "Every pinned repo should have a one-line description that explains what it does. Avoid blank descriptions.",
    category: "repos",
  },
  {
    id: "repo-topics",
    label: "Add topics/tags to your repositories",
    tip: "Add relevant topics (react, python, machine-learning) to help people discover your repos and to show your tech stack at a glance.",
    category: "repos",
  },
  {
    id: "clean-names",
    label: "Use clear, descriptive repo names",
    tip: '"task-manager-app" tells a recruiter what the project is. "project-1" or "test" does not. Rename repos that have unclear names.',
    category: "repos",
  },
  {
    id: "archive-old",
    label: "Archive or make private old/messy repos",
    tip: "Repos named 'test', 'untitled', or incomplete projects dilute your profile. Archive them or make them private.",
    category: "repos",
  },
  // Documentation
  {
    id: "repo-readmes",
    label: "Every pinned repo has a detailed README",
    tip: "Include: what it does, how to install/run it, screenshots if applicable, and the tech stack. Use our repo templates.",
    category: "documentation",
  },
  {
    id: "screenshots",
    label: "Add screenshots or demo GIFs to project READMEs",
    tip: "Visual proof is powerful. A screenshot or GIF demo of your app in action is worth a thousand lines of description.",
    category: "documentation",
  },
  {
    id: "tech-badges",
    label: "Add tech stack badges to READMEs",
    tip: "Badges like ![React](https://img.shields.io/badge/-React-61DAFB) make your README look professional and scannable.",
    category: "documentation",
  },
  {
    id: "install-instructions",
    label: "Include clear installation/setup instructions",
    tip: "If someone can't run your project by following the README, it's not complete. Test the instructions yourself.",
    category: "documentation",
  },
  // Activity
  {
    id: "contributions",
    label: "Maintain a consistent contribution graph",
    tip: "You don't need to commit daily, but aim for regular activity. Even small commits count. The green graph signals active development.",
    category: "activity",
  },
  {
    id: "recent-commits",
    label: "Have commits in the last 30 days",
    tip: "A profile with no recent activity looks abandoned. Even updating a README or fixing a typo counts as a recent commit.",
    category: "activity",
  },
  {
    id: "open-source",
    label: "Contribute to at least one open-source project",
    tip: "Even small contributions (docs fixes, bug reports, small PRs) show you can collaborate with others on real codebases.",
    category: "activity",
  },
  {
    id: "no-forked-spam",
    label: "Don't have a wall of unmodified forks",
    tip: "Forking 20 repos without contributing to them looks bad. Either contribute to forks or remove them from your public profile.",
    category: "activity",
  },
  {
    id: "commit-messages",
    label: "Write meaningful commit messages",
    tip: '"Add user authentication with JWT" tells a story. "fix stuff" does not. Your commit history is part of your portfolio.',
    category: "activity",
  },
];

export const categories = [
  { id: "profile" as const, label: "Profile Basics", count: 6 },
  { id: "repos" as const, label: "Repositories", count: 5 },
  { id: "documentation" as const, label: "Documentation", count: 4 },
  { id: "activity" as const, label: "Activity", count: 5 },
];
