/**
 * Rich content for capability detail pages.
 *
 * Always-present elements live in typed slots so every capability page keeps
 * the same spine: hook → beforeAfter → why → whatGoodLooksLike →
 * whereFoundersGoWrong → doNow. The optional `blocks` body sits between the
 * fixed sections and `doNow` for deep dives, starter questions and named
 * examples. Capabilities without an entry here fall back to the summary +
 * bullets rendering on the capability page.
 */

import type { ToolBlock } from "@/lib/tools-content";

export type CapabilityBeforeAfter = {
  today: string[];
  success: string[];
};

export type CapabilityAction = {
  action: string;
  note: string;
  toolId?: string;
};

export type CapabilityContent = {
  hook: string;
  beforeAfter: CapabilityBeforeAfter;
  why: string;
  whatGoodLooksLike: string[];
  whereFoundersGoWrong: string[];
  doNow?: CapabilityAction[];
  blocks?: ToolBlock[];
};

export const capabilitiesContent: Record<string, CapabilityContent> = {
  "build-a-culture-that-compounds": {
    hook: "We've grown fast, but it doesn't feel like the same company anymore. New people don't get how we do things — and I can't put my finger on what changed.",
    beforeAfter: {
      today: [
        "Alignment depends on you being in the room.",
        "New hires take months to \"get it\" — and some never do.",
        "Values exist on a slide, but they don't change a single decision.",
      ],
      success: [
        "Your values do the aligning — the team holds the line when you're not there.",
        "People can feel the culture on day one, and hiring selects for it.",
        "A hundred people decide the way you would, without asking.",
      ],
    },
    why: "The one warning Peter Thiel gave Brian Chesky after funding Airbnb was \"don't fuck up the culture\" — because culture is what keeps a team aligned through hard times, and it erodes by default as you scale. Culture is not everyone being happy; it is the shared priorities and standards that make a hundred people decide the way you would, without asking.",
    whatGoodLooksLike: [
      "A small set of values that are genuinely unique to you — not words any company could claim.",
      "Values that show up in real decisions: what you build, who you hire, and what you refuse to tolerate.",
      "Culture you can feel on day one and that survives you being out of the room.",
    ],
    whereFoundersGoWrong: [
      "Generic values — \"transparency\", \"integrity\" — that commit you to nothing, because no one would ever claim the opposite.",
      "Values on the wall but absent from hiring, feedback and reviews, so they carry no real consequences.",
      "Treating culture as morale — keeping everyone happy — rather than alignment: keeping everyone pointed the same way when it is hard.",
    ],
    doNow: [
      {
        action: "Run the intern test on yourself",
        note: "Write the three words you'd want a new hire to say after day one — then the three they'd actually say today. The gap is your work list.",
      },
      {
        action: "Name one value in feedback this week",
        note: "Next time you praise or correct someone, tie it to a value by name. If no value fits, that's a finding too.",
      },
      {
        action: "Pressure-test each value",
        note: "Would a credible competitor ever claim the opposite? Strike or sharpen any that fail.",
        toolId: "values-deck",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Two questions to start",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "The intern test",
            note: "A new hire finishes their first day and says \"I love it here — three words I'd use are ___, ___, ___.\" What do you want them to say? What would they actually say today? The gap is the work.",
          },
          {
            title: "The hire post-mortem",
            note: "Which hires thrived and which didn't — and what was culturally, not technically, true of each? The pattern usually names a value you are already selecting for.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Make each value unique to you",
      },
      {
        kind: "paragraph",
        text: "A value only earns its place if it is distinctively true of you. The test: would a credible competitor ever claim the opposite? If not, it is table stakes, not a value.",
      },
      {
        kind: "callout",
        text: "\"Transparency\" is not a value — nobody argues for opacity. It only counts if you take it somewhere specific and costly, the way Netflix shared performance feedback openly. If your value would look identical on any startup's wall, sharpen it until it commits you to something.",
      },
      {
        kind: "heading",
        text: "Embed the values or lose them",
      },
      {
        kind: "list",
        items: [
          "Hiring: screen and debrief candidates explicitly against the values, not just the skills.",
          "Feedback: reference the values by name when you praise and when you correct.",
          "Performance reviews: score behaviour against values alongside role outcomes, so culture carries real consequences.",
          "Rituals and stories: repeat the moments where someone lived a value at a cost — that is what makes it believable.",
        ],
      },
    ],
  },
  "manage-my-energy-system": {
    hook:
      "My calendar is full of everyone else's priorities. By Thursday I'm running on caffeine, and the work I actually love hasn't happened in weeks.",
    beforeAfter: {
      today: [
        "The week is planned to 100%, so every surprise gets paid for in evenings.",
        "Sleep, exercise and friends are the first things cut when pressure rises.",
        "The work that used to give you energy has quietly disappeared from your calendar.",
      ],
      success: [
        "You plan 80% of the week and let the inevitable chaos fill the rest.",
        "Each of your seven core needs has a cadence — and most of them actually happen.",
        "Deep work owns your mornings, and one slot a week is reserved for the work you love.",
      ],
    },
    why:
      "Energy is not a mood — it is a system with inputs you can design. The anchor here is founder coach Dave Bailey's core-needs check-in: exercise, eating, sleep, people, solitude, learning and real time off, where each need funds a different capacity. Exercise buys willpower, sleep buys patience, solitude buys clarity, vacation buys perspective. That is why you can't substitute one for another — and why cutting them under pressure is a loan against exactly the capacities the pressure will demand.",
    whatGoodLooksLike: [
      "Weekly planning starts with how much — capacity honestly assessed, slack deliberately left — before deciding what goes in.",
      "The seven core needs each have a cadence you actually track: three workouts, three meetups, three walks a week.",
      "The shape of the day matches your energy: planning first thing Monday, deep work before lunch, meetings after it.",
    ],
    whereFoundersGoWrong: [
      "Planning 100% of the week. The unplanned 20% always arrives, and it collects from your evenings and weekends.",
      "Cutting the needs first under pressure — sleep, exercise, friends — precisely the inputs that fund willpower and patience when you need them most.",
      "Treating energy-giving work as an indulgence to delegate away. If you're a technical founder who loves to code, the weekly coding afternoon isn't a guilty pleasure — it's fuel.",
    ],
    doNow: [
      {
        action: "Cut next week's plan to 80%",
        note: "Open next week's calendar and remove or shrink commitments until a fifth of it is genuinely empty. The random 20% is coming either way — decide now that it lands in slack, not in your evenings.",
      },
      {
        action: "Score your seven needs out of 10",
        note: "Two minutes: exercise, eating, sleep, friends & family, solitude, training, vacation. The two lowest scores are next week's calendar edits.",
        toolId: "seven-founder-needs",
      },
      {
        action: "Move one meeting out of tomorrow morning",
        note: "Reclaim the morning for deep work and push the check-ins and quick calls to after lunch. One swap is enough to feel the difference.",
      },
      {
        action: "Book the slot for the work you love",
        note: "If coding charges you, one afternoon a week, recurring. Treat it like an investor meeting: it doesn't move.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Plan the week: how much, then what",
      },
      {
        kind: "paragraph",
        text: "Most founders plan what goes into the week and never ask how much should. Decide your real capacity first, then fill it — and leave deliberate slack, because the interruptions are not an exception, they are a known quantity.",
      },
      {
        kind: "callout",
        text: "\"I only plan 80% of my week. The other 20% gets filled with random stuff whether I plan it or not — this way it doesn't cost me my evenings.\" — Series A founder",
      },
      {
        kind: "paragraph",
        text: "Then look at what fills it, through two lenses. Leverage: is this work only you can do? (That is its own capability — Operate at the Right Altitude.) And balance: does the week contain work that gives energy back, not just work that matters? Optimising every hour for leverage until nothing in the week charges you is how high performers hollow themselves out.",
      },
      {
        kind: "heading",
        text: "Match the day to your energy",
      },
      {
        kind: "list",
        items: [
          "Monday, first thing: plan the week before the week plans you.",
          "Mornings: deep work, while the tank is full.",
          "Afternoons: meetings, quick wins and the short-term dopamine work.",
          "Guard the boundary: a 9am \"quick call\" costs a full deep-work block, not thirty minutes.",
        ],
      },
    ],
  },
  "build-resilience-and-recovery": {
    hook:
      "I know I'm in a bad place when every Slack ping makes me flinch. I'm wired all day, and the only off switch I've found is a drink in the evening.",
    beforeAfter: {
      today: [
        "Every week runs you: reactive, wired, no recovery in sight.",
        "A conference or a fundraise tips you over — and you stay tipped for weeks.",
        "You're making quarter-defining decisions at 70% capacity and calling it commitment.",
      ],
      success: [
        "You know your two states, and you can name what tips you from one into the other.",
        "A daily burnout score triggers a pre-agreed plan, not a negotiation with yourself.",
        "Sprints are deliberate and bounded, with recovery booked before the sprint starts.",
      ],
    },
    why:
      "This one is personal. When I had cancer, I was answering emails from the hospital bed within a couple of days — I never gave myself a chance to recover, because it never occurred to me that recovery was part of the job. It is. As the company grows, your work shifts from doing things to making calls, and decisions have a far lower tolerance for a depleted founder than tasks do: choosing the wrong quarter focus at 70% capacity costs more than any week of lost output. If you crash out, it is a disaster for the company — which makes managing your own energy close to job number one.",
    whatGoodLooksLike: [
      "You can describe your good equilibrium and your bad one in concrete behaviours — and you know which one you're in today.",
      "Known triggers — travel, conferences, fundraising — come with counterweights planned and booked in advance.",
      "Recovery is scheduled like any other commitment: the long run, the offline weekend and the quarterly vacation actually happen.",
    ],
    whereFoundersGoWrong: [
      "Treating recovery as a reward for finishing. The work never finishes, so the recovery never comes.",
      "Running the startup as one long sprint. Continuous sprinting isn't intensity — it's a slow crash with a delay on it.",
      "Keeping the struggle private from cofounders, so nobody can catch the slide into bad equilibrium until it shows up in your decisions.",
    ],
    doNow: [
      {
        action: "Score your burnout right now, out of 10",
        note: "Ten seconds. Then add it to your daily habit stack so tomorrow's score exists too.",
        toolId: "habit-stacks",
      },
      {
        action: "Book one piece of recovery before Friday",
        note: "The long run, the spa day, the offline weekend — in the calendar, not on the someday list.",
      },
      {
        action: "Text your cofounder your top trigger",
        note: "One message: \"when X stacks up, I slide — if you see it, call it.\" Accountability starts that simply.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Two stable states",
      },
      {
        kind: "paragraph",
        text: "Resilience gets easier once you see that you have two equilibria, and both are self-reinforcing. In the good one, planning, real breaks and exercise feed each other. In the bad one, reactivity, stress and drinking to switch off feed each other just as well — which is why you don't drift back to good on your own. The work is knowing what pushes you out of the good state, and having deliberate moves that pull you back.",
      },
      {
        kind: "heading",
        text: "Make it measurable",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Score it daily",
            note: "Add a burnout score out of 10 to your habit stack. Ten seconds a day is enough to catch the slide early.",
          },
          {
            title: "Pre-agree the thresholds",
            note: "Above 8: stop working — take at least a half day. Between 6 and 8: keep going, but the weekend is fully offline, no email, no laptop. Decide this while you're well; you won't decide it well when you're not.",
          },
          {
            title: "Enlist your cofounder",
            note: "Share your triggers and your thresholds. Let them ask \"did you book that vacation?\" with the same weight as \"did you ship that project?\".",
          },
        ],
      },
      {
        kind: "callout",
        text: "A startup is neither a marathon nor a sprint — it's a marathon with periods of sprinting. Sprinting is sometimes exactly right: a critical launch, a fundraise. Sprinting continuously is just burnout on a payment plan.",
      },
    ],
  },
  "build-my-growth-system": {
    hook:
      "I don't really have a system for my own growth. I just hope each crisis teaches me something.",
    beforeAfter: {
      today: [
        "Each hard week becomes the next lesson you scramble to absorb.",
        "You take in advice, but nothing organizes what changes you.",
        "The same growth edge keeps coming back.",
      ],
      success: [
        "You have a deliberate system: coach, peers and a personal board.",
        "You know the growth edge that matters now.",
        "Insight turns into practice through feedback loops and habits.",
      ],
    },
    why:
      "A startup may be the most intense professional growth opportunity you ever get, but opportunity alone does not guarantee growth. Bill Campbell is the anchor here: the leaders of Apple, Google and Intuit still used a coach because raw intelligence does not give you distance from yourself. Founder growth compounds when support, reflection and accountability are designed on purpose.",
    whatGoodLooksLike: [
      "A deliberate mix of coach, peers, personal board members, friends and family, with clarity on what each source gives you.",
      "A few trusted inputs such as books, podcasts and feedback loops that sharpen the current edge instead of becoming background noise.",
      "Weekly and monthly rhythms that turn reflection into practice, so growth lives in behaviour rather than aspiration.",
    ],
    whereFoundersGoWrong: [
      "Treating consumption as growth: more books, more podcasts, more notes, no system.",
      "Building a support network around prestige or convenience rather than truth, challenge and real perspective.",
      "Having good insights but never turning them into reps, so the same lesson comes back in a different disguise.",
    ],
    doNow: [
      {
        action: "Name your current growth edge in one sentence",
        note: "Not \"get better at leadership\" — the specific behaviour or pattern that keeps costing you.",
      },
      {
        action: "List the five people you actually learn from",
        note: "Next to each: what you ask of them today, and what you should ask. That's the first draft of your personal board.",
        toolId: "personal-board",
      },
      {
        action: "Put one rep in next week's calendar",
        note: "A habit stack, a feedback moment or a reading block tied to the edge. Growth that isn't scheduled loses to whatever is.",
        toolId: "habit-stacks",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "The ingredients for a growth system",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Coaching",
            note: "A coach gives you a place to pause, zoom out, ask what really matters, and be held accountable to the things you say are important.",
          },
          {
            title: "Peers",
            note: "A personal board is not just famous founders. It is a few trusted people who challenge your thinking, widen your lens and help you grow faster than you would alone.",
          },
          {
            title: "Family & friends",
            note: "Some of the best board members are not operators at all. They are people you respect for their joy, steadiness, courage or perspective when life and company both get hard.",
          },
          {
            title: "Books & podcasts",
            note: "Keep learning from strong inputs, but choose them deliberately. The point is not volume; it is exposing yourself to ideas that sharpen the growth edge you are working on now.",
          },
        ],
      },
      {
        kind: "heading",
        text: "How you really make progress",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Reflect",
            note: "Gather insight from feedback, books, conversations, wins, lowlights and whatever keeps repeating. The raw material for growth is already around you if you are paying attention.",
          },
          {
            title: "Identify",
            note: "Name the real growth edge underneath the noise. Do not settle for \"I want to be better\"; get specific about the behaviour, pattern or blind spot that most needs work.",
          },
          {
            title: "Practice",
            note: "Install a repeatable system that changes the week: a habit stack, a feedback rhythm, a reading block, a check-in, or a concrete rep you can actually keep.",
          },
        ],
      },
      {
        kind: "callout",
        text: "You can have all the conversations and all the books you want, but it does not matter unless they affect you. If feedback is the edge, the work is not the intention to improve. The work is installing the system: every Tuesday and Thursday, acknowledge two people well; after a tense meeting, write the feedback before the day ends. Growth compounds when it becomes behaviour.",
      },
    ],
  },
  "be-storyteller-in-chief": {
    hook:
      "When I pitch, I walk them through what we've built and I can feel the room staying cold. I don't know what story I'm supposed to tell — there's nothing that exciting yet.",
    beforeAfter: {
      today: [
        "You present facts and features, and watch investors stay polite and unmoved.",
        "Your best candidate nodded along, then took the corporate offer — nothing you said beat the pay cut.",
        "All-hands is a status update: the team leaves informed, not inspired.",
      ],
      success: [
        "You raise on the future you paint, not just the traction you have.",
        "Great people take pay cuts to join, because they want to be part of the story.",
        "The team retells your story to each other — alignment without you in the room.",
      ],
    },
    why:
      "My friend Dave calls the founder the Storyteller-in-Chief, and he's right. When you raise your first money, angels aren't investing in what you have today — they're investing in the story: the future you're painting and you as the protagonist in it. That's not a trick; it's the nature of the business. There is always a delta between what you have and the story you tell, and closing that delta is literally how a startup creates value. You'll tell the story everywhere — to your team to keep them focused, to investors when you raise, to hires who need a reason to walk away from a bigger salary.",
    whatGoodLooksLike: [
      "One core story — why you started, what you're changing in the world — that you can tell in your sleep, adapted for team, candidates, customers and investors.",
      "A practice rhythm: every all-hands carries a story, and every pitch, interview and update is treated as a rep.",
      "A repertoire that's always in stock: the mission, a customer moment from this month, and a teammate worth shouting out.",
    ],
    whereFoundersGoWrong: [
      "\"I don't know which story to tell.\" Bullshit — there's always a customer from this week, a teammate who delivered, the mission itself. Going quiet is the only wrong choice.",
      "Reporting instead of storytelling: all-hands as metrics readouts that inform everyone and move no one.",
      "Saying it once and assuming it landed. People need to hear things more than once — over-communication beats under-communication every time.",
    ],
    doNow: [
      {
        action: "Tell your origin story out loud tonight",
        note: "To a mirror, or record 90 seconds on your phone and watch it back once. You'll hear exactly where the story goes flat.",
      },
      {
        action: "Draft one three-ingredient story",
        note: "Fifteen minutes: the mission, one customer moment from this month, one teammate worth naming. That's your next all-hands opener.",
      },
      {
        action: "Put a story slot on the all-hands agenda",
        note: "A standing five minutes, at least one story every two weeks — and rotate the teller so it isn't always you.",
      },
      {
        action: "Rewrite the first paragraph of your next investor update as a story",
        note: "Future first, metrics second. The update is a monthly rep for the investor version of your story.",
        toolId: "investor-update",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "The three-ingredient story",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Philosophy",
            note: "Start with the big picture: the mission and why it matters. \"Our goal is to democratise wealth growth for the whole world\" — then a few lines on why that's worth someone's career.",
          },
          {
            title: "A customer",
            note: "Connect it to a real interaction. The friend at a party who said \"before you, I didn't even think about investing — now it feels natural and I'm in control of my money.\" Impact in the customer's own words.",
          },
          {
            title: "The team",
            note: "Close with a person. Shout out the teammate who pushed back when we were heading the wrong way, kept everyone on the same page and still delivered on time — and tie it to a company value by name.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Two techniques that carry any story",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "Sandwich it",
            note: "\"Today I'm going to tell you about A, B and C.\" Tell them. \"Today I've told you about A, B and C.\" It feels repetitive from the stage; from the audience, it's the version they remember.",
          },
          {
            title: "Ask, then answer",
            note: "\"So what's the most important thing for us to focus on next quarter?\" A rhetorical question tells the room a section just ended — and pulls their attention into the next one.",
          },
        ],
      },
    ],
  },
  "manage-capital-and-stakeholders": {
    hook:
      "I had a really bad relationship with my main investor in my first startup.",
    beforeAfter: {
      today: [
        "Board meetings feel like reporting upward, so you walk in tense and half-defensive.",
        "The first real conversation about a hard decision happens in the room, when everyone's posturing has already started.",
        "Investor updates go out as summaries, with no clear ask and no reason for people to feel part of the journey.",
      ],
      success: [
        "KPIs, highlights and challenges land before the meeting, so everyone starts from the same picture.",
        "The key investors have been pre-synced, the contentious points have already been aired, and the room can work the real decision.",
        "Every update gives stakeholders a way to help and enough founder magic that they want to stay close.",
      ],
    },
    why:
      "This one comes from scar tissue. In my first startup, our CEO stepped down soon after the round and the trust with our lead investor never really recovered. In an early-stage company, investors are betting on the founder as much as the numbers, so when trust breaks the relationship gets heavy fast. That's why this capability matters: board meetings and investor updates are not admin. They're how you keep belief, context and influence working for the company instead of against it.",
    whatGoodLooksLike: [
      "A board pack sent a few days early with KPIs first, then highlights, challenges and the decisions that matter.",
      "A pre-sync cadence that surfaces what investors want to discuss and socializes any controversial topic before it becomes a room-wide debate.",
      "Stakeholder communication that includes a clear ask, a reminder of what the company is now, and enough story or texture to make people want to help.",
    ],
    whereFoundersGoWrong: [
      "Slipping into employee mode and treating investors like your boss, which turns the meeting into a defensive report instead of a conversation you are steering.",
      "Saving the contentious decision for the board meeting itself, so people take positions in public before you've had the useful one-to-one conversations.",
      "Sending flat updates with no CTA, no refresher on the company, and nothing human or visual for busy angels to latch onto.",
    ],
    doNow: [
      {
        action: "Decide what the next board meeting is for",
        note: "Write one line before you build the deck: do you want honest discussion on an open question, or approval for a plan you've already shaped?",
      },
      {
        action: "Send the pack 72 hours early",
        note: "Lead with KPIs, highlights, lowlights and the big decisions so the meeting starts from shared reality, not slide-reading.",
        toolId: "board-pack",
      },
      {
        action: "Map and pre-sync the key voices",
        note: "Identify the one or two investors the room tends to orbit, ask what they most want to cover, and road-test anything controversial before the meeting.",
        toolId: "relationship-design-canvas",
      },
      {
        action: "Add a CTA and one visual to the next investor update",
        note: "Close with the specific help you want, then include a team, product or customer photo so people feel the company, not just the metrics.",
        toolId: "investor-update",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Two questions before any board meeting",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "What do I want from this room?",
            note: "Be conscious about the job of the meeting. An honest debate and a smooth approval path are different outcomes, and they require different prep.",
          },
          {
            title: "Who actually shapes the room?",
            note: "Boards are rarely flat democracies. Most investors converge around one or two influential voices, so know where the center of gravity is.",
          },
          {
            title: "What needs to be discussed one-to-one first?",
            note: "If a choice is likely to be contentious - partner A vs partner B, a leadership change, a reset in plan - take it private before you take it public.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Remember: they are not your boss",
      },
      {
        kind: "paragraph",
        text: "Investors have capital, influence and a real stake in the company, but they are not your line manager. Treat their views as important inputs, not operating authority. That mindset shift matters because it lets you stop performing for the room and start managing it.",
      },
      {
        kind: "callout",
        text: "Stakeholders want more than a spreadsheet. They want to feel the momentum, the team and the texture of the thing they're backing. If you're in person, let them feel the office or the product. If you're remote, use stories, specifics and strong visuals. Sprinkle a little founder magic.",
      },
    ],
  },
  "face-my-shadow": {
    hook:
      "I can usually see the pattern afterwards. In the moment, though, it still feels like the safest move.",
    beforeAfter: {
      today: [
        "Under pressure, the same reactions keep showing up: control, people-pleasing, criticism, avoidance, rescuing.",
        "A part of you still believes the old script keeps you safe, even when it now creates tension, delay or distance.",
        "You explain the pattern as personality instead of seeing it as an adaptation you can work with.",
      ],
      success: [
        "You can name the story or part that is taking over before it runs the meeting.",
        "You understand what that part is trying to protect, so you respond with less shame and more choice.",
        "Old patterns still visit, but they stop driving your leadership by default.",
      ],
    },
    why:
      "Positive Intelligence gives a helpful starting point here: saboteurs begin life as guardians. That is the key. The behaviour is not random or proof you are broken; it solved something once. A people-pleasing response may have been brilliant in a chaotic home because it kept the peace. Years later, the same move shows up in the boardroom and calls itself diplomacy while quietly eroding trust. The work is not to reject that part of you or declare war on it. It is to make the pattern conscious, thank it for the job it once did, and decide whether it still serves the life and company you are building.",
    whatGoodLooksLike: [
      "You can name your recurring shadow patterns and the situations that tend to trigger them.",
      "You can see the strength underneath the pattern: the care beneath people-pleasing, the standards beneath criticism, the agency beneath control.",
      "You have a repeatable interruption: notice, name, choose, and repair if needed.",
    ],
    whereFoundersGoWrong: [
      "Treating the shadow as identity: \"that's just how I am\" instead of a pattern that formed for a reason.",
      "Swinging to the opposite extreme and trying to amputate a real strength instead of finding its healthier expression.",
      "Using insight as a substitute for reps: taking the quiz, having the conversation, then never building the daily noticing muscle.",
    ],
    doNow: [
      {
        action: "Take the Saboteurs Quiz",
        note: "Use the official Positive Intelligence assessment as a naming device, not a diagnosis. Notice the Judge plus the two or three accomplices that most often hijack you.",
        toolId: "saboteurs-quiz",
      },
      {
        action: "Map one overused strength",
        note: "Pick a genuine strength and trace how too much of it becomes your pitfall, what balancing quality it needs, and what you attack in others when you are triggered.",
        toolId: "strength-in-shadow",
      },
      {
        action: "Run a Council of Me meeting",
        note: "List three versions of you — people-pleaser you, control-freak you, backpacker you — invite them into the same room, and ask what each is trying to protect.",
        toolId: "council-of-me",
      },
      {
        action: "Install one noticing rep",
        note: "For the next week, review the last workday and mark where you got overly critical, avoidant or controlling. If you catch it live, do the opposite within the hour: encourage, appreciate, ask the question, or loosen the grip.",
        toolId: "habit-stacks",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Old protection, new cost",
      },
      {
        kind: "paragraph",
        text: "A lot of shadow work gets easier once you see the pattern as old protection. Maybe you became a people-pleaser when the adults around you were volatile and keeping the peace felt essential. Maybe control became your way of staying safe in chaos. Back then, the pattern worked. The issue is not that it existed; the issue is that it stayed in charge long after the original danger passed.",
      },
      {
        kind: "callout",
        text: "If a pattern feels extreme, traumatic or destabilising, work with a therapist rather than trying to self-coach your way through it from a website.",
      },
      {
        kind: "heading",
        text: "Spot the loop",
      },
      {
        kind: "paragraph",
        text: "A lot of shadow patterns run as loops, not one-off incidents. You set an unrealistic expectation. Sometimes you meet it once and quietly decide that now this should always be normal. Sometimes you miss it, feel the frustration, and reach for a coping move — a drink, numbing out, avoidance, more self-criticism — which makes the next miss more likely. The win is seeing the loop early enough to step out of it.",
      },
      {
        kind: "image",
        src: "/images/os/expectation-loop.svg",
        alt: "A loop showing unrealistic expectations leading either to raising the bar again or to frustration and coping mechanisms that feed the cycle.",
      },
      {
        kind: "callout",
        text: "Exit points are simple but not easy: make the expectation realistic, name the frustration before it hardens, and choose a cleaner coping move while the pattern is still small.",
      },
      {
        kind: "heading",
        text: "Build the noticing muscle",
      },
      {
        kind: "paragraph",
        text: "This is a reps game. First the pattern runs unconsciously. Then you notice it after the fact. Then you catch it in the moment and choose differently. Eventually the healthier move gets easier. That is the whole arc: from unconscious incompetence, to conscious incompetence, to conscious competence, and finally to a more natural response.",
      },
      {
        kind: "list",
        items: [
          "Unconscious incompetence: the pattern runs you and you barely notice.",
          "Conscious incompetence: you spot it, often after the fact.",
          "Conscious competence: you catch it earlier and choose a better move.",
          "Unconscious competence: the healthier response starts to feel more like you.",
        ],
      },
    ],
  },
  "build-a-life-worth-scaling-for": {
    hook:
      "Someone asked me what all the sacrifice was for — the health, the friendships I'd let slide. All I had was \"Champagne at 40.\" And when I really looked at it, I couldn't tell you what that even looks like.",
    beforeAfter: {
      today: [
        "You're trading your health, your relationships and your hobbies now for a payoff you keep calling \"later\".",
        "Ask what \"later\" actually looks like and you go blank — it's a feeling, not a picture.",
        "Achievement is the only setting you've ever run, so you never stopped to ask what you're saying no to.",
      ],
      success: [
        "You can describe the life you're building toward in vivid, specific detail — the day, the people, the feeling.",
        "You've pulled concrete pieces of it into this year, instead of banking the whole thing on 40.",
        "You know which parts of founding genuinely serve you — and you spend more of your time there on purpose.",
      ],
    },
    why:
      "The founder who told me \"Champagne at 40\" couldn't describe the life he was sacrificing everything for. When we pulled it apart, two things fell out fast: he'd probably still be working at 40, just differently — more advisory — and he was giving up far too much today for a picture that didn't survive a second look. \"I work hard now for a better life later\" sounds like discipline, but it's usually a deferral you never examine — and most of what you're waiting for, you already have some access to. The point of the wealth, the exit, the yacht, was never the thing itself; it's the relationships, the time and the freedom underneath it. You don't need the yacht to start building those.",
    whatGoodLooksLike: [
      "You can picture your five-years-out life in concrete detail — where you wake up, who's there, how you spend the day, how much you're still working.",
      "At least one piece of that future is already in this year's calendar: the yearly gathering, the protected hobby, the relationship you stopped deferring.",
      "You've named the parts of founding that actually serve you — growth, mission, changing the lives of people around you — and you steer toward them.",
    ],
    whereFoundersGoWrong: [
      "Deferring the whole of life to a future win, because achievement is the only story you've ever run — the overachiever on autopilot.",
      "Sacrificing the needs first — health, relationships, hobbies — as if they're just the price of the ticket, when they're most of the destination.",
      "Chasing a future state you've never actually examined, so you can't see the parts of it you could be living right now.",
    ],
    doNow: [
      {
        action: "Do the five-year visualisation",
        note: "Close your eyes and walk through an ordinary day five years out: where you wake up, who's next to you, how the day feels, whether and how you're still working, your health, your money. Watch it, don't design it.",
        toolId: "live-it-today",
      },
      {
        action: "Pick one piece and live it this year",
        note: "Take the most vivid part of that future and find the cheap version now. Can't buy your parents a house? Rent an Airbnb once a year and gather the people you love. Book it.",
      },
      {
        action: "List your founder-years no's and yes's",
        note: "Two columns: what am I saying no to for these years, and what am I saying yes to? Be honest about which no's you actually chose and which you drifted into.",
      },
      {
        action: "Name the part of founding that serves you",
        note: "Growth, mission, the people whose lives you're changing — pick the one that's genuinely yours and put more of next week there.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "The overachiever's trap",
      },
      {
        kind: "paragraph",
        text: "Founders are intense people — a lot of us neurodivergent, most of us wired as achievers, the Enneagram Type 3s and the Type 1s. Achievement has been rewarded your whole life, so you run it on autopilot: the next milestone, the next round, the next win. The trap isn't working hard. It's never stopping to ask what you're trading for it, because the trade has always paid off before. These founder years are a specific chapter with specific costs — name them, or they get charged to you silently.",
      },
      {
        kind: "steps",
        steps: [
          {
            title: "What am I saying no to?",
            note: "The health, the relationships, the version of a normal life you're postponing. Write the real list. Some of it is a genuine, chosen trade; some of it you drifted into without deciding.",
          },
          {
            title: "What am I saying yes to?",
            note: "The parts of this you'd choose again — the growth, the freedom, the mission. This is the list you want to protect and lean into, not just endure.",
          },
        ],
      },
      {
        kind: "heading",
        text: "Build your own yacht",
      },
      {
        kind: "paragraph",
        text: "A very common founder dream is \"I'll provide for the people I love — buy my parents a house.\" You might not have the money for the house today. But you almost certainly have enough to rent an Airbnb once a year and bring your closest friends and family together — and start living the thing the house was really for. That's the move: don't wait for the destination to start living what the destination is for.",
      },
      {
        kind: "callout",
        text: "This is the \"build your own yacht\" idea (from The Real Estate God's essay of that name): a billionaire's yacht buys relationships, time and status — but you don't need the yacht to get what the yacht is for. You can start building that now, at a fraction of the cost.",
      },
      {
        kind: "heading",
        text: "Which parts of founding actually serve you?",
      },
      {
        kind: "paragraph",
        text: "The flip side of naming the cost is getting honest about the payoff that's real for you now, not at 40. Being a founder is a genuine engine for personal growth — but push past that: how is this true to your values, and are you still connected to your mission? For me, the most meaningful part was never the customers or the wealth. It was changing the lives of the people around me — building a working environment people loved, and giving them opportunities and skills they'd carry for the rest of their careers. Find your version of that, and you're already living part of the life you're scaling for.",
      },
    ],
  },
  "find-new-capital": {
    hook:
      "I've been out raising for months. Every pitch feels like a coin toss, half the no's come with a reason that means nothing, and the whole time the company is drifting without me. I'm exhausted and I can't even tell if I'm close.",
    beforeAfter: {
      today: [
        "You're raising because that's what founders do — you never stopped to ask what the capital is actually for.",
        "Outreach goes to everyone at once, with no momentum, and the market can smell the desperation.",
        "The raise has become your whole job, and culture and execution are quietly slipping while you're in investor meetings.",
      ],
      success: [
        "You've decided consciously to raise, and you know exactly what a great round looks like — because your investors, your peers and you defined it up front.",
        "You work a categorised list in short, sharp bursts that build FOMO, so investors move because they're afraid to miss out.",
        "The company keeps compounding while you're out raising, and you come back to a business that held the line without you.",
      ],
    },
    why:
      "Fundraising is not fair, and pretending otherwise will break you. Plenty of weak companies raise easily and plenty of great ones never do — momentum and luck matter far more than founders want to admit. I had a Series A extension that took a brutal year, and it very nearly finished me. So start with the question almost nobody asks: what is the capital actually for? Some businesses genuinely need it — a capital-intensive model like fintech, say — but many founders raise by default. Raising isn't a rite of passage; it's choosing to get married to an external party who will shape your decisions for years. Make that decision consciously, then treat the raise itself as a bounded, high-stakes sprint you prepare for rather than a thing that happens to you.",
    whatGoodLooksLike: [
      "You can say in one line what makes the next round a hell yes — and your existing investors, asked independently, would say the same thing.",
      "You work a long list categorised by likelihood and desirability, in phases of six to ten, rather than blasting everyone at once.",
      "Every pitch feeds a two-minute retro and a growing Q&A library, so your tenth conversation is far sharper than your first.",
    ],
    whereFoundersGoWrong: [
      "Raising by default — never asking what the capital is for, and getting married to an investor they didn't need.",
      "Going out to the whole list at once with no momentum, so a slow start reads as desperation and there's nowhere left to turn.",
      "Accepting generic rejections — \"wrong stage\", \"come back with more traction\" — as answers, instead of mining for the real reason they passed.",
    ],
    doNow: [
      {
        action: "Decide whether to raise at all",
        note: "Before anything else, write down exactly what the capital is for and what changes the day you take it on. If you can reach the next milestone without it, that's a finding.",
      },
      {
        action: "Run the hell-yes question",
        note: "Ask your existing investors, independently, what would make the next round a hell yes for them. Line their answers up next to your peers' rounds and your own view of success.",
      },
      {
        action: "Build and rank your long list",
        note: "List every plausible investor and tag each by likelihood and desirability; note ticket size, vertical and geography limits. Then carve off the top as a first phase of six to ten.",
      },
      {
        action: "Book a rehearsal-dinner pitch",
        note: "Do two low-stakes pitches with less desirable investors first. After each, run a two-minute retro with your cofounder and add every question you got to a Q&A library.",
      },
    ],
    blocks: [
      {
        kind: "heading",
        text: "Momentum is the whole game",
      },
      {
        kind: "paragraph",
        text: "Investors move for one reason: fear of missing out. A raise isn't a series of independent meetings — it's a single narrative you manage. Go out in short, sharp bursts to a phase of six to ten investors, give them a deadline, and keep feeding the story with real progress: a signed customer, a milestone hit, and above all another investor's interest. The first term sheet isn't the finish line — it's the lever you use to pull the next one forward. And if a phase stalls, pause. Don't burn your whole network and crawl back to the same people six months later; stop, fix what isn't landing, and come back with a stronger hand.",
      },
      {
        kind: "callout",
        text: "When an investor passes, don't accept \"wrong stage\" or \"needs more traction\" — those are non-answers. Ask the one question that gets a real one: \"What three things would have had to be different for this to go from a no to a hell yes?\"",
      },
      {
        kind: "heading",
        text: "Protect yourself and the company before you start",
      },
      {
        kind: "paragraph",
        text: "A raise takes far longer than you think, and it pulls you out of the business for months. Two things quietly break in that time: you, and the company. Look after yourself — take the vacation before you start, not after — and build enough resilience to survive a process that is genuinely unfair. Then make the company resilient without you: if you're in investor meetings all day, watch for culture and execution slipping, and stress-test now whether the business can thrive while you step back.",
      },
      {
        kind: "capabilityRefs",
        capabilityIds: ["build-resilience-and-recovery", "master-my-mindset"],
      },
    ],
  },
};

export function getCapabilityContent(
  capabilityId: string,
): CapabilityContent | undefined {
  return capabilitiesContent[capabilityId];
}

export function hasCapabilityContent(capabilityId: string): boolean {
  return capabilitiesContent[capabilityId] !== undefined;
}
