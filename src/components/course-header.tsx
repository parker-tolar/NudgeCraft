"use client";

import { APP_NAME } from "@/lib/content";

type CourseHeaderProps = {
  stage: string;
};

function formatStage(stage: string) {
  if (stage.includes("Primer")) {
    return stage;
  }
  // Add space before capital letters
  return stage.replace(/([A-Z])/g, ' $1').trim();
}

export function CourseHeader({ stage }: CourseHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <p className="font-semibold text-lg">{APP_NAME}</p>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
        </div>
        <div>
          <p className="text-sm text-muted-foreground capitalize">
            {formatStage(stage)}
          </p>
        </div>
      </div>
    </header>
  );
}
