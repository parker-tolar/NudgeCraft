"use client";

import { useState } from "react";
import { LandingScreen } from "@/components/landing-screen";
import { BeatScreen } from "@/components/beat-screen";
import { RecapScreen } from "@/components/recap-screen";
import { hubermanCourse } from "@/lib/content";
import { CourseHeader } from "@/components/course-header";
import { ObjectivesScreen } from "@/components/objectives-screen";
import { VideoPrimerScreen } from "@/components/video-primer-screen";

type GameState = "objectives" | "landing" | "video" | "beat" | "recap";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("objectives");
  const [beatStep, setBeatStep] = useState(0);
  const [userPatterns, setUserPatterns] = useState<string[]>([]);

  const handleStartCourse = () => {
    setGameState("landing");
  };

  const handleStart = () => {
    setGameState("video");
  };

  const handleVideoComplete = () => {
    setGameState("beat");
  };

  const handleBeatComplete = (pattern: string) => {
    setUserPatterns(prev => [...prev, pattern]);
    if (beatStep < hubermanCourse.beats.length - 1) {
      setBeatStep(beatStep + 1);
      setGameState("video");
    } else {
      setGameState("recap");
    }
  };

  const handleReplay = () => {
    setBeatStep(0);
    setUserPatterns([]);
    setGameState("objectives");
  };

  const getStageLabel = (): string => {
    switch (gameState) {
      case 'objectives':
        return 'Learning Objectives';
      case 'landing':
        return 'Introduction';
      case 'video':
        return `Primer ${beatStep + 1}/${hubermanCourse.beats.length}`;
      case 'beat':
        return `Beat ${beatStep + 1}/${hubermanCourse.beats.length}`;
      case 'recap':
        return 'Key Principles';
      default:
        return '';
    }
  };


  const renderContent = () => {
    const beat = hubermanCourse.beats[beatStep];

    switch (gameState) {
      case "objectives":
        return <ObjectivesScreen onStartCourse={handleStartCourse} />;
      case "landing":
        return <LandingScreen onStart={handleStart} />;
      case "video":
        return (
          <VideoPrimerScreen
            key={beatStep}
            videoSrc={beat.video}
            title={beat.setup.title}
            onContinue={handleVideoComplete}
          />
        );
      case "beat":
        return (
          <BeatScreen
            key={beatStep}
            beat={beat}
            onComplete={handleBeatComplete}
          />
        );
      case "recap":
        return <RecapScreen onReplay={handleReplay} userPatterns={userPatterns} />;
      default:
        return <ObjectivesScreen onStartCourse={handleStartCourse} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <CourseHeader stage={getStageLabel()} />
      <main className="flex-1 flex items-center justify-center relative">
        <div className="absolute inset-0 -z-10 h-full w-full">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#383E472e_1px,transparent_1px),linear-gradient(to_bottom,#383E472e_1px,transparent_1px)] bg-[size:14px_24px] opacity-20"></div>
          <div className="absolute left-1/4 top-1/4 h-64 w-1/2 bg-primary/5 blur-[120px]"></div>
          <div className="absolute right-1/4 bottom-1/4 h-64 w-1/2 bg-accent/5 blur-[100px]"></div>
        </div>
        <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div key={gameState + beatStep} className="animate-in fade-in-50 duration-500">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
