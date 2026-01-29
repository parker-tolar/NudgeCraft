"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, VideoOff } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

type VideoPrimerScreenProps = {
  videoSrc: string;
  title: string;
  onContinue: () => void;
};

export function VideoPrimerScreen({ videoSrc, title, onContinue }: VideoPrimerScreenProps) {
  const [videoState, setVideoState] = useState<"loading" | "ready" | "error">("loading");

  return (
    <div className="w-full max-w-3xl mx-auto p-8 animate-in fade-in duration-700 flex flex-col justify-center">
        <Card className="bg-secondary/30 border-border/30 overflow-hidden">
            <CardHeader>
                <CardTitle className="text-primary">{title}</CardTitle>
                <CardDescription>A short clip from Dr. Huberman.</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
                <div className="aspect-video bg-black flex items-center justify-center relative">
                    {videoState === 'loading' && <Skeleton className="w-full h-full" />}
                    {videoState === 'error' && (
                        <div className="text-center text-muted-foreground p-4">
                            <VideoOff className="h-12 w-12 mx-auto mb-2" />
                            <p>Video could not be loaded.</p>
                            <p className="text-xs">Please ensure the file exists at <code>/public{videoSrc}</code></p>
                        </div>
                    )}
                    <video 
                        controls
                        src={videoSrc} 
                        className={`w-full h-full transition-opacity duration-300 ${videoState === 'ready' ? 'opacity-100' : 'opacity-0'}`}
                        onLoadedData={() => setVideoState('ready')}
                        onError={() => setVideoState('error')}
                        style={{ position: videoState === 'ready' ? 'relative' : 'absolute' }}
                    >
                        Your browser does not support the video tag.
                    </video>
                </div>
            </CardContent>
        </Card>
        <div className="mt-12 text-center">
            <Button size="lg" onClick={onContinue}>
            Start Assessment <ArrowRight className="ml-2" />
            </Button>
        </div>
    </div>
  );
}
