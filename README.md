# GitReady

**Make Your GitHub Job-Ready.**

Free templates, guides, and tools to help students and job seekers build a GitHub profile that gets them hired.

![Next.js](https://img.shields.io/badge/-Next.js-000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)

## What's Inside

### Profile README Templates
6 ready-to-use GitHub profile README templates:
- **Minimal** — Clean and simple
- **Creative** — Personality-driven with stats
- **Job Seeker** — Optimized for recruiters
- **Student** — Perfect for CS students and bootcamp grads
- **Full-Stack** — Balanced frontend/backend showcase with badges
- **Data Science** — Tailored for ML engineers

### Repo README Templates
4 professional templates for project repositories:
- **Web App** — For React, Next.js, Vue projects
- **CLI Tool** — For command-line tools
- **Library** — For npm packages and reusable libraries
- **Portfolio Project** — Problem/solution framing for showcase projects

### Interactive Profile Checklist
20-point interactive checklist covering:
- Profile basics (bio, photo, README, links)
- Repository hygiene (pinned repos, descriptions, naming)
- Documentation quality (READMEs, screenshots, badges)
- Activity patterns (contributions, commits, open source)

Progress saved in your browser. Tracks your score from 0% to 100%.

### Complete Guide
"How to Build a GitHub That Gets You Hired" — covering:
1. What recruiters actually look for (green flags vs red flags)
2. Profile setup (bio, photo, README, pinned repos)
3. README writing best practices
4. Contribution strategy for beginners
5. Common mistakes to avoid

### Before/After Examples
3 detailed transformation stories:
- Junior Developer (CS graduate)
- Career Changer (marketing to frontend)
- Data Science Student

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS + shadcn/ui
- **Hosting:** Vercel (static site, zero API costs)

## Getting Started

```bash
git clone https://github.com/nis1993tx/gitready.git
cd gitready
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── page.tsx            # Landing page
│   ├── templates/          # Profile README templates gallery
│   ├── repo-templates/     # Repo README templates gallery
│   ├── checklist/          # Interactive 20-point checklist
│   ├── guide/              # Complete optimization guide
│   ├── examples/           # Before/after examples
│   └── about/              # About page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Navbar, footer
│   └── templates/          # Template card, copy button
└── lib/
    ├── templates/          # Markdown template data
    │   ├── profile/        # 6 profile templates
    │   └── repo/           # 4 repo templates
    └── checklist-data.ts   # 20 checklist items with tips
```

## License

MIT

## Author

**Nisan Ital** — [LinkedIn](https://www.linkedin.com/in/nisan-ital/)
