"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { checklistItems, categories } from "@/lib/checklist-data";

const STORAGE_KEY = "gitready-checklist";

export default function ChecklistPage() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setChecked(JSON.parse(saved));
    }
  }, []);

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  };

  const totalChecked = Object.values(checked).filter(Boolean).length;
  const totalItems = checklistItems.length;
  const percentage = Math.round((totalChecked / totalItems) * 100);

  const getScore = () => {
    if (percentage >= 90) return { label: "Excellent", color: "text-emerald" };
    if (percentage >= 70) return { label: "Good", color: "text-primary" };
    if (percentage >= 40) return { label: "Needs Work", color: "text-amber" };
    return { label: "Getting Started", color: "text-destructive" };
  };

  const score = getScore();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold">GitHub Profile Checklist</h1>
        <p className="mt-3 text-muted-foreground text-lg">
          20 things to check and improve on your GitHub profile. Your progress
          is saved in your browser.
        </p>
      </div>

      {/* Score Card */}
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm text-muted-foreground">Profile Score</p>
              <p className={`text-3xl font-bold ${score.color}`}>
                {percentage}%
              </p>
              <p className={`text-sm font-medium ${score.color}`}>
                {score.label}
              </p>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Completed</p>
              <p className="text-2xl font-bold">
                {totalChecked}/{totalItems}
              </p>
            </div>
          </div>
          <Progress value={percentage} className="h-3" />
        </CardContent>
      </Card>

      {/* Checklist by Category */}
      <div className="space-y-8">
        {categories.map((category) => {
          const items = checklistItems.filter(
            (item) => item.category === category.id
          );
          const categoryChecked = items.filter((i) => checked[i.id]).length;

          return (
            <div key={category.id}>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-lg font-semibold">{category.label}</h2>
                <Badge variant="outline" className="text-xs">
                  {categoryChecked}/{category.count}
                </Badge>
              </div>
              <div className="space-y-3">
                {items.map((item) => (
                  <Card
                    key={item.id}
                    className={
                      checked[item.id] ? "border-emerald/30 bg-emerald/5" : ""
                    }
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <Checkbox
                          id={item.id}
                          checked={!!checked[item.id]}
                          onCheckedChange={() => toggle(item.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1">
                          <label
                            htmlFor={item.id}
                            className={`text-sm font-medium cursor-pointer ${
                              checked[item.id]
                                ? "line-through text-muted-foreground"
                                : ""
                            }`}
                          >
                            {item.label}
                          </label>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {item.tip}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
