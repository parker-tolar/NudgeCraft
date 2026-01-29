"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight, Check, GripVertical, MoveDown, MoveUp } from "lucide-react";

type Beat = any; // You might want to define a proper type for your beats

type BeatScreenProps = {
  beat: Beat;
  onComplete: (pattern: string) => void;
};

// --- Sub-Components for Interactions ---

const SortingInteraction = ({ beat, onInteractionComplete }: { beat: Beat, onInteractionComplete: (result: any) => void }) => {
  const [items, setItems] = useState(beat.interaction.items.map((item: any) => ({ ...item, currentCategory: 'unassigned' })));
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, itemId: string) => {
    e.dataTransfer.setData("itemId", itemId);
    setDraggedItemId(itemId);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, category: string) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData("itemId");
    setItems(currentItems => currentItems.map((item: any) => item.id === itemId ? { ...item, currentCategory: category } : item));
    setDraggedItemId(null);
    (e.currentTarget as HTMLElement).classList.remove('border-primary', 'bg-primary/10');
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggedItemId) {
      (e.currentTarget as HTMLElement).classList.add('border-primary', 'bg-primary/10');
    }
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    (e.currentTarget as HTMLElement).classList.remove('border-primary', 'bg-primary/10');
  };

  const unassignedItems = items.filter((item: any) => item.currentCategory === 'unassigned');
  const category1Items = items.filter((item: any) => item.currentCategory === beat.interaction.categories[0]);
  const category2Items = items.filter((item: any) => item.currentCategory === beat.interaction.categories[1]);

  const handleSubmit = () => {
    let correctCount = 0;
    items.forEach((item: any) => {
      if (item.currentCategory === item.category) {
        correctCount++;
      }
    });
    onInteractionComplete({ correctCount, total: items.length });
  };

  const renderItem = (item: any) => (
    <div 
      key={item.id} 
      draggable 
      onDragStart={(e) => handleDragStart(e, item.id)}
      onDragEnd={() => setDraggedItemId(null)}
      className={cn(
        "p-3 rounded-lg bg-background/50 border cursor-grab",
        draggedItemId === item.id && "opacity-50"
      )}
    >
      <span>{item.text}</span>
    </div>
  );

  return (
    <div className="space-y-8">
        <p className="text-center text-lg">{beat.interaction.prompt}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card 
            onDrop={(e) => handleDrop(e, 'unassigned')} 
            onDragOver={handleDragOver} 
            onDragLeave={handleDragLeave}
            className="bg-secondary/20 transition-colors"
          >
            <CardHeader><CardTitle className="text-base text-center">Unsorted</CardTitle></CardHeader>
            <CardContent className="space-y-2 min-h-[100px] p-4">
              {unassignedItems.map(renderItem)}
            </CardContent>
          </Card>
          <Card 
            onDrop={(e) => handleDrop(e, beat.interaction.categories[0])} 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className="transition-colors"
          >
            <CardHeader><CardTitle className="text-base text-center">{beat.interaction.categories[0]}</CardTitle></CardHeader>
            <CardContent className="space-y-2 min-h-[100px] p-4">
              {category1Items.map(renderItem)}
            </CardContent>
          </Card>
          <Card 
            onDrop={(e) => handleDrop(e, beat.interaction.categories[1])} 
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className="transition-colors"
          >
            <CardHeader><CardTitle className="text-base text-center">{beat.interaction.categories[1]}</CardTitle></CardHeader>
            <CardContent className="space-y-2 min-h-[100px] p-4">
              {category2Items.map(renderItem)}
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
            <Button size="lg" onClick={handleSubmit} disabled={unassignedItems.length > 0}>Submit</Button>
        </div>
    </div>
  );
};


const OrderingInteraction = ({ beat, onInteractionComplete }: { beat: Beat, onInteractionComplete: (result: any) => void }) => {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        setItems(beat.interaction.items.sort(() => Math.random() - 0.5));
    }, [beat.interaction.items]);

    const handleMove = (index: number, direction: 'up' | 'down') => {
        const newItems = [...items];
        const newIndex = direction === 'up' ? index - 1 : index + 1;
        if (newIndex >= 0 && newIndex < newItems.length) {
            [newItems[index], newItems[newIndex]] = [newItems[newIndex], newItems[index]];
            setItems(newItems);
        }
    };

    const handleSubmit = () => {
        let correctCount = 0;
        items.forEach((item, index) => {
            if (item.correctOrder === index) {
                correctCount++;
            }
        });
        onInteractionComplete({ correctCount, total: items.length });
    };

    return (
        <div className="w-full max-w-md mx-auto space-y-4">
             <p className="text-center text-lg mb-6">{beat.interaction.prompt}</p>
            {items.map((item, index) => (
                <Card key={item.id} className="p-3 flex items-center justify-between bg-secondary/20">
                    <div className="flex items-center gap-4">
                        <GripVertical className="text-muted-foreground" />
                        <span className="font-mono font-semibold text-primary w-6 text-center">{index + 1}</span>
                        <span>{item.text}</span>
                    </div>
                    <div className="flex flex-col">
                        <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => handleMove(index, 'up')} disabled={index === 0}><MoveUp /></Button>
                        <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => handleMove(index, 'down')} disabled={index === items.length - 1}><MoveDown /></Button>
                    </div>
                </Card>
            ))}
             <div className="text-center pt-4">
                <Button size="lg" onClick={handleSubmit}>Submit</Button>
            </div>
        </div>
    );
};

const MultiChoiceInteraction = ({ beat, onInteractionComplete }: { beat: Beat, onInteractionComplete: (result: any) => void }) => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<boolean[]>([]);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const currentStepData = beat.interaction.steps[step];

    const handleSelect = (option: any) => {
        if(selectedOption) return;
        setSelectedOption(option.id);
        
        setTimeout(() => {
            const newAnswers = [...answers, option.correct];
            setAnswers(newAnswers);
            setSelectedOption(null);
            if (step < beat.interaction.steps.length - 1) {
                setStep(step + 1);
            } else {
                onInteractionComplete({ correctCount: newAnswers.filter(a => a).length, total: newAnswers.length });
            }
        }, 1000);
    };

    return (
        <div className="w-full max-w-xl mx-auto">
            <p className="text-center text-lg mb-6">{currentStepData.prompt}</p>
            <div className="space-y-3">
                {currentStepData.options.map((option: any) => (
                    <button
                        key={option.id}
                        disabled={!!selectedOption}
                        onClick={() => handleSelect(option)}
                        className={cn(
                        "p-5 rounded-xl border text-left transition-all duration-300 group w-full",
                        "disabled:cursor-not-allowed",
                        selectedOption
                            ? selectedOption === option.id
                            ? option.correct ? `bg-primary/20 border-primary/50 ring-2 ring-primary/30` : `bg-destructive/20 border-destructive/50 ring-2 ring-destructive/30`
                            : "opacity-40 border-border/20"
                            : "bg-secondary/20 border-border/30 hover:bg-secondary/30 hover:border-primary/30"
                        )}
                    >
                        {option.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

const SchedulingInteraction = ({ beat, onInteractionComplete }: { beat: Beat, onInteractionComplete: (result: any) => void }) => {
    const [schedule, setSchedule] = useState<{ [key: string]: string | null }>({});

    const handleDragStart = (e: React.DragEvent<HTMLButtonElement>, token: string) => {
        e.dataTransfer.setData("token", token);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, day: string) => {
        e.preventDefault();
        const token = e.dataTransfer.getData("token");
        if(token) {
            setSchedule(prev => ({...prev, [day]: token}));
        }
        (e.currentTarget as HTMLElement).classList.remove('border-primary', 'bg-primary/10');
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        (e.currentTarget as HTMLElement).classList.add('border-primary', 'bg-primary/10');
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        (e.currentTarget as HTMLElement).classList.remove('border-primary', 'bg-primary/10');
    };


    const handleSubmit = () => {
        // Simple validation logic for feedback
        const rewardDays = Object.values(schedule).filter(t => t && t.includes('Reward'));
        const noRewardDays = Object.values(schedule).filter(t => t === 'No Reward').length;
        const surprise = Object.values(schedule).includes('Surprise Reward');
        const blunted = Object.values(schedule).includes('Blunted Win');
        
        let feedbackKey = 'good';
        if (rewardDays.length > 4) feedbackKey = 'tooFrequent';
        if (rewardDays.length < 2 || noRewardDays < 2 || !surprise || !blunted) feedbackKey = 'tooSparse';

        onInteractionComplete({ feedbackKey });
    };
    
    return (
        <div className="w-full max-w-3xl mx-auto">
            <p className="text-center text-lg mb-2">{beat.interaction.prompt}</p>
            <CardDescription className="text-center mb-6">
                Drag tokens onto the days below. {beat.interaction.rules.join(' ')}
            </CardDescription>

            <div className="flex justify-center gap-2 mb-8 flex-wrap">
                {beat.interaction.tokens.map((token: string) => (
                    <Button 
                        key={token} 
                        variant='outline'
                        draggable
                        onDragStart={(e) => handleDragStart(e, token)}
                        className="cursor-grab"
                    >
                        {token}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-7 gap-1 border rounded-lg p-2">
                {beat.interaction.days.map((day: string) => (
                    <div 
                        key={day} 
                        onDrop={(e) => handleDrop(e, day)}
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        className={cn("h-24 border rounded-md flex flex-col items-center justify-center transition-colors cursor-pointer", schedule[day] && 'bg-secondary/30')}>
                        <p className="font-semibold text-sm">{day}</p>
                        {schedule[day] && <p className="text-xs mt-2 text-center p-1 bg-background rounded">{schedule[day]}</p>}
                    </div>
                ))}
            </div>

            <div className="flex justify-between items-center pt-8">
                <Button variant="ghost" onClick={() => setSchedule({})}>Clear Board</Button>
                <Button size="lg" onClick={handleSubmit} disabled={Object.keys(schedule).length < 7}>Submit</Button>
            </div>
        </div>
    )
};


// --- Main Beat Screen Component ---

export function BeatScreen({ beat, onComplete }: BeatScreenProps) {
  const [view, setView] = useState<"setup" | "interaction" | "feedback">("setup");
  const [interactionResult, setInteractionResult] = useState<any>(null);

  const handleInteractionComplete = (result: any) => {
    setInteractionResult(result);
    setView("feedback");
  };

  const getFeedback = () => {
    if (beat.type === 'sorting') {
        const { correctCount, total } = interactionResult;
        return correctCount > total / 2 ? beat.feedback.correct : beat.feedback.mixed;
    }
    if (beat.type === 'ordering') {
        return beat.feedback.default;
    }
    if(beat.type === 'multi-choice') {
        return beat.feedback.default;
    }
    if(beat.type === 'scheduling') {
        return beat.feedback[interactionResult.feedbackKey];
    }
    return "";
  };


  const renderInteraction = () => {
    switch(beat.type) {
        case 'sorting':
            return <SortingInteraction beat={beat} onInteractionComplete={handleInteractionComplete} />;
        case 'ordering':
            return <OrderingInteraction beat={beat} onInteractionComplete={handleInteractionComplete} />;
        case 'multi-choice':
            return <MultiChoiceInteraction beat={beat} onInteractionComplete={handleInteractionComplete} />;
        case 'scheduling':
            return <SchedulingInteraction beat={beat} onInteractionComplete={handleInteractionComplete} />;
        default:
            return <p>Unknown interaction type</p>
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-8 flex flex-col justify-center">
      {view === "setup" && (
        <div className="text-center animate-in fade-in duration-700">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary">{beat.setup.title}</h2>
          <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl text-foreground/80 leading-relaxed">
            {beat.setup.text}
          </p>
          <div className="mt-12">
            <Button size="lg" onClick={() => setView("interaction")}>
              Start <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      )}

      {view === "interaction" && (
        <div className="animate-in fade-in duration-700">
          {renderInteraction()}
        </div>
      )}

      {view === "feedback" && (
        <div className="text-center animate-in fade-in duration-700">
          <Card className="bg-secondary/20 border-border/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Check className="mx-auto h-12 w-12 text-primary bg-primary/10 p-2 rounded-full mb-4" />
              <p className="text-lg md:text-xl text-foreground/90">
                {getFeedback()}
              </p>
            </CardContent>
          </Card>
          <div className="mt-12">
            <Button size="lg" onClick={() => onComplete(beat.pattern)}>
              Continue <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
