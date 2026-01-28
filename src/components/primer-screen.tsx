"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

type PrimerScreenProps = {
  title: string;
  text: string;
  pullQuote: string;
  onNext: () => void;
  isLast: boolean;
};

export function PrimerScreen({ title, text, pullQuote, onNext, isLast }: PrimerScreenProps) {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 animate-in fade-in duration-700 flex flex-col justify-center min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{title}</h2>
      <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed">
        {text}
      </p>
      <blockquote className="mt-8 border-l-4 border-accent pl-6 py-2">
        <p className="text-lg md:text-xl italic text-foreground">
          "{pullQuote}"
        </p>
      </blockquote>
      <div className="mt-12 text-center">
        <Button size="lg" onClick={onNext}>
          {isLast ? "Start Scenario" : "Continue"} <ArrowRight className="ml-2" />
        </Button>
      </div>
    </div>
  );
}
