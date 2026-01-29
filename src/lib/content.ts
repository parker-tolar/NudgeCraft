export const APP_NAME = "NudgeCraft";

export const landingContent = {
  thesis: "The gentlest pressure creates the strongest resistance. True change is invited, not demanded."
};

export const primerContent = [
  {
    title: "The Pressure Paradox",
    text: "When we push, people push back. It's a natural, protective instinct called psychological reactance. The more we insist, the more they resist, even if they secretly agree.",
    pullQuote: "Pressure is the enemy of authentic motivation."
  },
  {
    title: "The Power of Autonomy",
    text: "Lasting change comes from within. When people feel they have a choice, they are more likely to own their decisions and commit to action. The goal is to create an environment where they *want* to change, not *have* to.",
    pullQuote: "Autonomy turns 'have to' into 'want to'."
  },
  {
    title: "From Fixing to Understanding",
    text: "Our role isn't to 'fix' someone's lack of motivation. It's to understand the story behind their resistance. By listening without judgment, we lower their defenses and open the door to collaboration and self-discovery.",
    pullQuote: "Seek to understand, not to solve."
  }
];

export const scenarioContent = {
  title: "Interactive Scenario",
  situation: "Your team member, Alex, has been quiet and disengaged for the past two weeks. A key project deadline is approaching, and their part is falling behind. You sit down to talk.",
  steps: [
    {
      dialogue: "I know, I know. I'm behind. I just... haven't been able to get into it.",
      options: [
        {
          id: 1,
          text: "It sounds like it's been hard to connect with the work lately. What's been on your mind?",
          type: "supportive",
          feedback: "Autonomy preserved: This response opens a dialogue without judgment. By acknowledging their feeling ('hard to connect') and asking an open-ended question, you invite them to share more. This lowers resistance."
        },
        {
          id: 2,
          text: "The deadline is pretty firm. We really need you to find a way to get focused and push through this.",
          type: "pressuring",
          feedback: "Pressure increased: This focuses on the problem (the deadline) and implies their current state is something to be 'pushed through.' It applies pressure and can make them feel like a problem to be solved, increasing resistance."
        },
        {
          id: 3,
          text: "Look, we all have off weeks. You just need to power through it. This can't slip.",
          type: "counterproductive",
          feedback: "Resistance signal: This dismisses their experience ('we all have off weeks') and applies direct pressure ('power through it'). It signals that their feelings are irrelevant, which shuts down communication and guarantees resistance."
        }
      ]
    },
    {
      dialogue: "I don't know. I guess I'm just not feeling very motivated by this project anymore. It feels like a lot of work for... what?",
      options: [
        {
          id: 1,
          text: "I hear that. It's tough to push hard when the purpose isn't clear. Can we talk about what part of this project used to excite you?",
          type: "supportive",
          feedback: "Autonomy preserved: You validate their feeling and connect it to a universal need for purpose. By asking about past excitement, you shift from the current problem to exploring potential solutions and reconnecting with their intrinsic motivation."
        },
        {
          id: 2,
          text: "A lot of projects feel like a grind. It's part of the job. What can we do to make it feel more manageable so you can get it done?",
          type: "pressuring",
          feedback: "Pressure increased: This normalizes the 'grind,' but frames the conversation around task management ('make it manageable') rather than motivation. It's a solution-focused approach that subtly pressures them toward completion without addressing the root cause."
        },
        {
          id: 3,
          text: "Motivation isn't really the point. The point is delivering on our commitments. We all have to do things we don't 'feel' like doing.",
          type: "counterproductive",
          feedback: "Resistance signal: This creates a direct conflict, pitting your need for delivery against their feeling. It explicitly invalidates their experience and frames the work as a non-negotiable obligation, which is the fastest way to destroy autonomy."
        }
      ]
    },
    {
      dialogue: "Maybe. I just feel like I'm spinning my wheels. I'm not even sure I'm the right person for this anymore.",
      options: [
        {
          id: 1,
          text: "That's a tough feeling. It sounds like you're questioning your fit here. Let's forget the deadline for a minute. What kind of work *would* feel energizing for you right now?",
          type: "supportive",
          feedback: "Autonomy preserved: You validate a deep concern (their 'fit'), remove the immediate pressure (the deadline), and give them full autonomy to explore what they value. This builds trust and opens up a completely different, more honest conversation."
        },
        {
          id: 2,
          text: "You're definitely the right person. That's just a feeling of being overwhelmed. Let's break down your remaining tasks into smaller steps. That always helps.",
          type: "pressuring",
          feedback: "Pressure increased: While reassuring them ('You're the right person'), you're also diagnosing their feeling ('you're overwhelmed') and jumping to a solution ('break it down'). This takes away their agency to define their own problem."
        },
        {
          id: 3,
          text: "We can't afford to have you second-guessing yourself now. You were assigned this for a reason. Let's focus on the tasks, not the feelings.",
          type: "counterproductive",
          feedback: "Resistance signal: This response communicates panic and dismisses their feelings as a liability. The message is clear: 'Your feelings are a problem; just do the work.' This maximizes pressure and invalidates their perspective."
        }
      ]
    }
  ]
};

export const reflectionContent = {
  title: "Reflection",
  synthesis: "Supportive conversations don't apply pressure; they create space. By prioritizing autonomy and understanding, we invite collaboration instead of triggering resistance.",
  principles: [
    {
      title: "Listen to the Story, Not Just the Words",
      description: "What's the feeling or belief behind their resistance?"
    },
    {
      title: "Affirm Autonomy",
      description: "Reinforce that they are in control of their choices and actions."
    },
    {
      title: "Shift from 'Solving' to 'Exploring'",
      description: "Ask questions that open up possibilities, rather than dictating solutions."
    }
  ]
};
