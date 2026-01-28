"use client";

import { useState } from "react";
import { LandingScreen } from "@/components/landing-screen";
import { PrimerScreen } from "@/components/primer-screen";
import { ScenarioScreen } from "@/components/scenario-screen";
import { ReflectionScreen } from "@/components/reflection-screen";
import { primerContent } from "@/lib/content";

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
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-background">
      <div className="relative w-full flex items-center justify-center">
        {/* The key is important for re-triggering animations on component change */}
        <div key={gameState + primerStep} className="w-full">
           {renderContent()}
        </div>
      </div>
    </main>
  );
}
