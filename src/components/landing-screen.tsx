"use client";

import { Button } from "@/components/ui/button";
import { APP_NAME, landingContent } from "@/lib/content";

type LandingScreenProps = {
  onStart: () => void;
};

export function LandingScreen({ onStart }: LandingScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-1000 min-h-screen">
      <div className="relative mb-4">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">{APP_NAME}</h1>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
      </div>
      <p className="mt-4 max-w-xl text-lg md:text-xl text-foreground/80">
        {landingContent.thesis}
      </p>
      <Button size="lg" className="mt-8" onClick={onStart}>
        Start
      </Button>
    </div>
  );
}
