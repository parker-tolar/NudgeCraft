"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { scenarioContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, XCircle, ArrowRight } from "lucide-react";

type ScenarioScreenProps = {
  onComplete: () => void;
};

type Option = typeof scenarioContent.steps[0]['options'][0];

const feedbackIcons = {
  supportive: <CheckCircle className="text-primary" />,
  pressuring: <AlertCircle className="text-accent" />,
  counterproductive: <XCircle className="text-destructive" />,
};

const feedbackBorderColors = {
  supportive: "border-primary/50",
  pressuring: "border-accent/50",
  counterproductive: "border-destructive/50",
};

export function ScenarioScreen({ onComplete }: ScenarioScreenProps) {
  const [step, setStep] = useState(0);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const currentStep = scenarioContent.steps[step];

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    setSelectedOption(null);
    if (step < scenarioContent.steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  return (
    <div className="w-full max-w-3xl p-4 md:p-8 animate-in fade-in duration-700 flex flex-col justify-center min-h-screen">
      <Card className="bg-background/50 border-border/50">
        <CardHeader>
          <p className="text-muted-foreground">Alex says:</p>
          <blockquote className="mt-2 text-xl md:text-2xl text-foreground italic">
            "{currentStep.dialogue}"
          </blockquote>
        </CardHeader>
        <CardContent>
          <p className="mb-6 font-medium text-foreground">How do you respond?</p>
          <div className="grid grid-cols-1 gap-4">
            {currentStep.options.map((option) => (
              <button
                key={option.id}
                disabled={!!selectedOption}
                onClick={() => handleOptionSelect(option)}
                className={cn(
                  "p-4 rounded-lg border-2 text-left transition-all duration-300",
                  "disabled:cursor-not-allowed",
                  selectedOption
                    ? selectedOption.id === option.id
                      ? `bg-secondary ${feedbackBorderColors[option.type as keyof typeof feedbackBorderColors]}`
                      : "opacity-30 border-transparent"
                    : "hover:bg-secondary/50 border-border"
                )}
              >
                <p>{option.text}</p>
              </button>
            ))}
          </div>
        </CardContent>
        {selectedOption && (
          <CardFooter className="flex flex-col items-start gap-4 p-6 bg-secondary/30 rounded-b-lg animate-in fade-in duration-500">
            <div className="flex items-center gap-3">
              {feedbackIcons[selectedOption.type as keyof typeof feedbackIcons]}
              <h3 className="text-lg font-semibold capitalize text-foreground">{selectedOption.type}</h3>
            </div>
            <p className="text-foreground/80">{selectedOption.feedback}</p>
            <Button onClick={handleNext} className="self-end mt-2">
              {step === scenarioContent.steps.length - 1 ? 'Finish Scenario' : 'Next'}
              <ArrowRight className="ml-2" />
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}
