export const APP_NAME = "NudgeCraft";

export const landingContent = {
  thesis: "A micro-course on the science of motivation and focus, based on the work of Dr. Andrew Huberman."
};

export const hubermanCourse = {
    title: "The Science of Motivation",
    beats: [
        {
            type: 'sorting',
            setup: {
                title: 'Dopamine = Wanting (not pleasure)',
                text: 'Dopamine is mainly about drive and anticipation, not enjoyment. It narrows your focus toward what you want next.',
            },
            interaction: {
                prompt: 'Sort these into Wanting (drive) vs Enjoying (here-and-now).',
                categories: ['Wanting (drive)', 'Enjoying (here-and-now)'],
                items: [
                    { id: 'b1-i1', text: 'I’m restless until I start.', category: 'Wanting (drive)' },
                    { id: 'b1-i2', text: 'I’m fixated on the next step.', category: 'Wanting (drive)' },
                    { id: 'b1-i3', text: 'Just thinking about it makes me want it.', category: 'Wanting (drive)' },
                    { id: 'b1-i4', text: 'I can’t stop checking progress.', category: 'Wanting (drive)' },
                    { id: 'b1-i5', text: 'I feel satisfied in the moment.', category: 'Enjoying (here-and-now)' },
                    { id: 'b1-i6', text: 'I’m present and content right now.', category: 'Enjoying (here-and-now)' },
                    { id: 'b1-i7', text: 'I can enjoy what I already have.', category: 'Enjoying (here-and-now)' },
                    { id: 'b1-i8', text: 'I’m calm even if nothing changes.', category: 'Enjoying (here-and-now)' },
                ],
            },
            feedback: {
                correct: 'You separated pursuit from enjoyment. That’s the foundational skill.',
                mixed: 'Notice how ‘wanting’ feels urgent and narrow; ‘enjoying’ feels settled and wide.',
            },
            pattern: 'balance'
        },
        {
            type: 'ordering',
            setup: {
                title: 'Anticipation is the lever',
                text: 'Anticipation can spike drive before reward is even received. The goal is to use anticipation to start, not to spiral into craving.',
            },
            interaction: {
                prompt: 'Arrange the steps into the best sequence to trigger momentum (without relying on hype).',
                items: [
                    { id: 'b2-i1', text: 'Define a tiny start line (2 minutes).', correctOrder: 0 },
                    { id: 'b2-i2', text: 'Make the next action painfully concrete.', correctOrder: 1 },
                    { id: 'b2-i3', text: 'Remove one obvious distraction.', correctOrder: 2 },
                    { id: 'b2-i4', text: 'Start (even imperfectly).', correctOrder: 3 },
                    { id: 'b2-i5', text: 'Mark completion with a small acknowledgment.', correctOrder: 4 },
                    { id: 'b2-i6', text: 'Stop and reset—don’t chase the next hit.', correctOrder: 5 },
                ],
            },
            feedback: {
                default: 'The point isn’t ‘motivation.’ It’s starting. Anticipation should push you into action, not into obsessing.',
            },
            pattern: 'pressure'
        },
        {
            type: 'multi-choice',
            setup: {
                title: 'Pleasure has a shadow: craving/pain',
                text: 'After pleasure, the brain produces a downshift that can feel like craving. Over time: pleasure tends to weaken, craving tends to grow.',
            },
            interaction: {
                steps: [
                    {
                        prompt: 'You finish a meaningful task. What’s the best move to avoid the crash-and-crave cycle?',
                        options: [
                            { id: 'b3-p1-o1', text: 'Celebrate hard every time so you stay motivated.', correct: false },
                            { id: 'b3-p1-o2', text: 'Treat every win like nothing—never celebrate.', correct: false },
                            { id: 'b3-p1-o3', text: 'Acknowledge the win, but don’t spike it every time.', correct: true },
                        ],
                    },
                    {
                        prompt: 'Why is that the best move?',
                        options: [
                            { id: 'b3-p2-o1', text: 'Big predictable rewards train bigger crashes.', correct: true },
                            { id: 'b3-p2-o2', text: 'Celebration is always bad.', correct: false },
                            { id: 'b3-p2-o3', text: 'Motivation only works if you suffer.', correct: false },
                            { id: 'b3-p2-o4', text: 'You should never feel good about progress.', correct: false },
                        ],
                    }
                ]
            },
            feedback: {
                default: 'The goal is stable drive. Predictable spikes train predictable crashes. You’re not killing joy—just stopping the brain from demanding ‘more’ instantly.',
            },
            pattern: 'balance'
        },
        {
            type: 'sorting',
            setup: {
                title: 'Balance drive vs here-and-now',
                text: 'Drive pulls attention outward toward what you don’t have yet. Here-and-now chemistry supports contentment with what’s present. A healthy system uses both.',
            },
            interaction: {
                prompt: 'Sort practices into Drive-Builders vs Here-and-Now Builders.',
                categories: ['Drive-Builders', 'Here-and-Now Builders'],
                items: [
                  { id: 'b4-i1', text: 'Write the next action on one line.', category: 'Drive-Builders' },
                  { id: 'b4-i2', text: 'Add novelty: change location or method.', category: 'Drive-Builders' },
                  { id: 'b4-i3', text: 'Use a short timed sprint (10–20 min).', category: 'Drive-Builders' },
                  { id: 'b4-i4', text: 'Pre-commit: calendar a start time.', category: 'Drive-Builders' },
                  { id: 'b4-i5', text: 'Savor one small part of the experience.', category: 'Here-and-Now Builders' },
                  { id: 'b4-i6', text: 'Slow attention: one sensory detail.', category: 'Here-and-Now Builders' },
                  { id: 'b4-i7', text: 'Short decompression ritual after effort.', category: 'Here-and-Now Builders' },
                  { id: 'b4-i8', text: 'Gratitude for what’s already done.', category: 'Here-and-Now Builders' },
                  { id: 'b4-i9', text: 'Sleep protection (consistent bedtime).', category: 'Here-and-Now Builders' },
                  { id: 'b4-i10', text: 'Do nothing for 60 seconds on purpose.', category: 'Here-and-Now Builders' },
                ],
            },
            feedback: {
                driveHeavy: 'You’re great at pursuit. Watch for never landing.',
                hereAndNowHeavy: 'You’re great at settling. Watch for difficulty starting.',
                balanced: 'This is the sweet spot: pursue, then land.',
            },
            pattern: 'balance'
        },
        {
            type: 'scheduling',
            setup: {
                title: 'Intermittent rewards (use the casino trick for good)',
                text: 'Intermittent reinforcement is extremely powerful—this is why gambling hooks people. Used responsibly, it can keep motivation high without burnout.',
            },
            interaction: {
                prompt: 'Build a 7-day reward schedule for a goal.',
                rules: [
                    'You cannot reward every day.',
                    'Include 1 surprise reward (not tied to the biggest milestone).',
                    'Include 1 ‘blunted win’ (you acknowledge progress but no big celebration).',
                    'Include 2+ no-reward days in the week.',
                ],
                tokens: [ 'No Reward', 'Tiny Reward', 'Surprise Reward', 'Blunted Win', 'Social Reward', 'Rest/Reset' ],
                days: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7']
            },
            feedback: {
                tooFrequent: 'This trains dependence and crashes.',
                tooSparse: 'This risks drift and avoidance.',
                good: 'This keeps drive alive while reducing the ‘more’ trap.',
            },
            pattern: 'pressure'
        }
    ],
    recap: {
        title: "Insight Recap",
        principles: [
            {
                title: "Dopamine is for pursuit",
                description: "It's the engine of wanting, not the feeling of having. Use it to start, not just to chase."
            },
            {
                title: "Anticipation triggers action",
                description: "The goal of anticipation is to get you over the starting line, not to daydream about the finish."
            },
            {
                title: "Reward schedules shape stability",
                description: "How and when you reward yourself matters more than how big the reward is. Keep it intermittent."
            }
        ],
        patterns: {
            pressure: {
                title: "Your Pattern: The Gas Pedal",
                description: "You have a strong instinct for building drive and forward momentum. Your challenge is to balance that with 'here-and-now' states to avoid burnout and a constant feeling of not-enough-ness. Remember to consciously step off the gas."
            },
            balance: {
                title: "Your Pattern: The Navigator",
                description: "You have a good intuition for balancing drive with contentment. Your challenge is to consciously apply these principles when you feel stuck or unmotivated. You have the map; remember to use it."
            }
        }
    }
};
