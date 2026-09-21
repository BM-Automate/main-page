// Shared 6-step process, used by the homepage Process section and by every
// service page. Single source of truth so the steps never drift between pages.
export const processSteps = [
  {
    title: "Discovery",
    desc: "We start by truly listening — stakeholder conversations, user research and a clear look at the market. No assumptions, no guesswork. By the end, we all agree on exactly what \"done\" looks like.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M20 20l-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Strategy",
    desc: "We turn that research into a scoped roadmap — priorities, milestones and a realistic timeline, so every sprint moves toward a clear, measurable outcome.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Design",
    desc: "Clean, functional UI/UX designed around how your users actually work — from low-fidelity wireframes to polished, production-ready screens.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 20l1.5-5L17 3.5a2 2 0 0 1 2.8 2.8L8.5 18l-5 1.5 .5-1.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Development",
    desc: "Senior engineers build in weekly increments on modern, maintainable stacks — with you seeing real progress live, not a status report.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M8 6 3 12l5 6M16 6l5 6-5 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Testing",
    desc: "We stress-test every flow across devices and edge cases, so nothing embarrassing breaks the week after launch.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Launch",
    desc: "We deploy, monitor and stay on call — then keep improving the product with you once it's live in the world.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <circle cx="12" cy="10" r="1.8" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];
