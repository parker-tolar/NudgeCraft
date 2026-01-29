"use client";

import { useState } from "react";
import { LandingScreen } from "@/components/landing-screen";
import { PrimerScreen } from "@/components/primer-screen";
import { ScenarioScreen } from "@/components/scenario-screen";
import { ReflectionScreen } from "@/components/reflection-screen";
import { primerContent } from "@/lib/content";
import { CourseHeader } from "@/components/course-header";

type GameState = "landing" | "primer" | "scenario" | "reflection";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("landing");
  const [primerStep, setPrimerStep] = useState(0);

  const handleStart = () => {
    setGameState("primer");
  };

  const handlePrimerNext = () => {
    if (primerStep < primerContent.length - 1) {
      setPrimerStep(primerStep + 1);
    } else {
      setGameState("scenario");
    }
  };

  const handleScenarioComplete = () => {
    setGameState("reflection");
  };

  const handleReplay = () => {
    setPrimerStep(0);
    setGameState("landing");
  };

  const getStageLabel = (): string => {
    switch (gameState) {
      case 'landing':
        return 'Introduction';
      case 'primer':
        return `Primer (${primerStep + 1}/${primerContent.length})`;
      case 'scenario':
        return 'Interactive Scenario';
      case 'reflection':
        return 'Key Principles';
      default:
        return '';
    }
  };


  const renderContent = () => {
    switch (gameState) {
      case "landing":
        return <LandingScreen onStart={handleStart} />;
      case "primer":
        const content = primerContent[primerStep];
        return (
          <PrimerScreen
            key={primerStep}
            title={content.title}
            text={content.text}
            pullQuote={content.pullQuote}
            onNext={handlePrimerNext}
            isLast={primerStep === primerContent.length - 1}
          />
        );
      case "scenario":
        return <ScenarioScreen onComplete={handleScenarioComplete} />;
      case "reflection":
        return <ReflectionScreen onReplay={handleReplay} />;
      default:
        return <LandingScreen onStart={handleStart} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <CourseHeader stage={getStageLabel()} />
      <main className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>
          <div className="absolute left-1/4 top-1/4 h-64 w-1/2 bg-primary/5 blur-[120px]"></div>
          <div className="absolute right-1/4 bottom-1/4 h-64 w-1/2 bg-accent/5 blur-[100px]"></div>
        </div>
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div key={gameState + primerStep} className="animate-in fade-in-50 duration-500">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
