"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { objectivesContent } from "@/lib/content";
import { Check, ArrowRight } from "lucide-react";

type ObjectivesScreenProps = {
  onStartCourse: () => void;
};

export function ObjectivesScreen({ onStartCourse }: ObjectivesScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-1000">
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">{objectivesContent.title}</h1>
      <p className="mt-4 max-w-2xl text-lg md:text-xl text-foreground/80">
        {objectivesContent.subtitle}
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full max-w-3xl">
        {objectivesContent.objectives.map((obj, index) => (
          <Card key={index} className="bg-secondary/30 border-none">
            <CardContent className="p-6 flex items-start gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0 mt-1">
                  <Check className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{obj.title}</h3>
                <p className="text-muted-foreground text-sm mt-1">{obj.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button size="lg" className="mt-12" onClick={onStartCourse}>
        Start Course <ArrowRight className="ml-2" />
      </Button>
    </div>
  );
}
