import { profileTemplates } from "@/lib/templates/profile";
import { TemplateCard } from "@/components/templates/template-card";

export const metadata = {
  title: "Profile README Templates - GitReady",
  description:
    "Free GitHub profile README templates for job seekers, students, and developers. Copy, paste, and customize.",
};

export default function TemplatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Profile README Templates</h1>
        <p className="mt-3 text-muted-foreground text-lg">
          Pick a template, copy the markdown, and paste it into your GitHub
          profile repository. Replace the{" "}
          <code className="text-sm bg-muted px-1.5 py-0.5 rounded font-mono">
            {"{{PLACEHOLDERS}}"}
          </code>{" "}
          with your info.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-1">
          How to use
        </h2>
        <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
          <li>
            Create a repository with the same name as your GitHub username
          </li>
          <li>Click a template below to preview and copy the markdown</li>
          <li>
            Paste it into the <code className="bg-muted px-1 rounded font-mono">README.md</code> file
          </li>
          <li>Replace all placeholders with your real information</li>
          <li>Commit and push!</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {profileTemplates.map((template) => (
          <TemplateCard key={template.category} template={template} />
        ))}
      </div>
    </div>
  );
}
