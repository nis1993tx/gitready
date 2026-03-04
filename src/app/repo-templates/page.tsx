import { repoTemplates } from "@/lib/templates/repo";
import { TemplateCard } from "@/components/templates/template-card";

export const metadata = {
  title: "Repo README Templates - GitReady",
  description:
    "Free repository README templates for web apps, CLI tools, libraries, and portfolio projects.",
};

export default function RepoTemplatesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">Repo README Templates</h1>
        <p className="mt-3 text-muted-foreground text-lg">
          Professional README templates for your project repositories. Copy,
          customize, and commit.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-sm font-medium text-muted-foreground mb-1">
          How to use
        </h2>
        <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
          <li>Click a template below to preview and copy the markdown</li>
          <li>
            Paste into your project&apos;s <code className="bg-muted px-1 rounded font-mono">README.md</code>
          </li>
          <li>Replace all placeholders with your project details</li>
          <li>Add screenshots or demo GIFs for maximum impact</li>
        </ol>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {repoTemplates.map((template) => (
          <TemplateCard key={template.category} template={template} />
        ))}
      </div>
    </div>
  );
}
