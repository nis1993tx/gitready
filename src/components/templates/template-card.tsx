"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CopyButton } from "./copy-button";
import type { Template } from "@/lib/templates/profile";

export function TemplateCard({ template }: { template: Template }) {
  const [open, setOpen] = useState(false);
  const previewLines = template.markdown.split("\n").slice(0, 6).join("\n");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Card className="cursor-pointer transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 group">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold group-hover:text-primary transition-colors">
                {template.name}
              </h3>
              <Badge variant="outline" className="text-xs">
                {template.category}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {template.description}
            </p>
            <div className="rounded-md bg-muted p-3 font-mono text-xs text-muted-foreground overflow-hidden max-h-32">
              <pre className="whitespace-pre-wrap">{previewLines}...</pre>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>{template.name} Template</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="preview" className="flex-1 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="preview">Preview</TabsTrigger>
              <TabsTrigger value="markdown">Markdown</TabsTrigger>
            </TabsList>
            <CopyButton text={template.markdown} />
          </div>
          <TabsContent value="preview" className="flex-1 overflow-auto mt-4">
            <div className="prose prose-invert prose-sm max-w-none rounded-md bg-muted p-6 font-mono text-sm whitespace-pre-wrap">
              {template.markdown}
            </div>
          </TabsContent>
          <TabsContent value="markdown" className="flex-1 overflow-auto mt-4">
            <pre className="rounded-md bg-muted p-6 text-sm overflow-auto whitespace-pre-wrap font-mono">
              {template.markdown}
            </pre>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
