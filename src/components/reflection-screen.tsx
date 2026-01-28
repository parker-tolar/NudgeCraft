"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reflectionContent } from "@/lib/content";
import { RefreshCw, Check } from "lucide-react";

type ReflectionScreenProps = {
  onReplay: () => void;
};

export function ReflectionScreen({ onReplay }: ReflectionScreenProps) {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 animate-in fade-in duration-700 flex flex-col justify-center min-h-screen">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{reflectionContent.title}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-foreground/80">
          {reflectionContent.synthesis}
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-1">
        {reflectionContent.principles.map((principle, index) => (
          <Card key={index} className="bg-secondary/50 border-border/50">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                <Check className="h-5 w-5" />
              </div>
              <CardTitle className="text-xl font-semibold">{principle.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base text-muted-foreground">{principle.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button size="lg" onClick={onReplay} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" /> Replay Scenario
        </Button>
      </div>
    </div>
  );
}
