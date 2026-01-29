"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hubermanCourse } from "@/lib/content";
import { RefreshCw, Check, BrainCircuit, Printer } from "lucide-react";
import { useMemo } from "react";
import { Certificate } from "./certificate";

type RecapScreenProps = {
  onReplay: () => void;
  userPatterns: string[];
};

export function RecapScreen({ onReplay, userPatterns }: RecapScreenProps) {
  const { title, principles, patterns } = hubermanCourse.recap;

  const userPattern = useMemo(() => {
    const pressureCount = userPatterns.filter(p => p === 'pressure').length;
    const balanceCount = userPatterns.filter(p => p === 'balance').length;
    return pressureCount > balanceCount ? patterns.pressure : patterns.balance;
  }, [userPatterns, patterns]);

  return (
    <>
        <div className="no-print w-full max-w-3xl mx-auto p-8 animate-in fade-in duration-700 flex flex-col justify-center">
        <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{title}</h2>
        </div>

        <Card className="bg-secondary/50 border-primary/30 mt-10">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary shrink-0">
                    <BrainCircuit className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl font-semibold">{userPattern.title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-base text-muted-foreground">{userPattern.description}</p>
            </CardContent>
        </Card>


        <div className="mt-10 grid gap-6 md:grid-cols-1">
            {principles.map((principle, index) => (
            <Card key={index} className="bg-secondary/30 border-border/30">
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

        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={onReplay}>
            <RefreshCw className="mr-2 h-4 w-4" /> Replay Course
            </Button>
            <Button size="lg" variant="outline" onClick={() => window.print()}>
                <Printer className="mr-2 h-4 w-4" /> Print Certificate
            </Button>
        </div>
        </div>
        <div className="print-only">
            <Certificate 
                userPatternTitle={userPattern.title} 
                userPatternDescription={userPattern.description} 
            />
        </div>
    </>
  );
}
