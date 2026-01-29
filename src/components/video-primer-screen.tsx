"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type VideoPrimerScreenProps = {
  videoSrc: string;
  title: string;
  onContinue: () => void;
};

export function VideoPrimerScreen({ videoSrc, title, onContinue }: VideoPrimerScreenProps) {
  return (
    <div className="w-full max-w-3xl mx-auto p-8 animate-in fade-in duration-700 flex flex-col justify-center">
        <Card className="bg-secondary/30 border-border/30 overflow-hidden">
            <CardHeader>
                <CardTitle className="text-primary">{title}</CardTitle>
                <CardDescription>A short clip from Dr. Huberman.</CardDescription>
            </CardHeader>
            <CardContent className="px-0 pb-0">
                <video controls width="100%" src={videoSrc} className="aspect-video bg-black">
                    Your browser does not support the video tag.
                </video>
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
