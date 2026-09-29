export const recordCategories = {
  events: {
    id: "events",
    label: "EVENTS",
    singular: "Event",
    eyebrow: "01 EVENTS",
    title: "Events I have participated in",
    description:
      "A running record of hackathons, meetups, competitions, and other events where I learned, contributed, and built with others.",
  },
  build: {
    id: "build",
    label: "BUILD",
    singular: "Build",
    eyebrow: "02 BUILDS",
    title: "Things I am building",
    description:
      "Project notes about the ideas I turn into working software, the decisions behind them, and what I am improving next.",
  },
  study: {
    id: "study",
    label: "STUDY",
    singular: "Study",
    eyebrow: "03 STUDY",
    title: "What I am studying",
    description:
      "Learning notes about cybersecurity, development, and the practical experiments that help me understand each topic better.",
  },
};

export const records = [
  {
    slug: "first-event-record",
    category: "events",
    date: "ADD DATE",
    title: "Write about an event you participated in",
    excerpt:
      "Add what the event was, what you worked on, what you contributed, and what you learned from the experience.",
    tags: ["EVENT", "EXPERIENCE", "REFLECTION"],
    sections: [
      {
        heading: "What happened",
        body: "Write the name of the event, when it happened, and what made you decide to participate.",
      },
      {
        heading: "What I did",
        body: "Describe your role, the work you completed, and the people or ideas that helped you along the way.",
      },
      {
        heading: "What I learned",
        body: "Capture the most useful lesson and how you plan to apply it in your next project or event.",
      },
    ],
  },
  {
    slug: "first-build-record",
    category: "build",
    date: "ADD DATE",
    title: "Write about something you built",
    excerpt:
      "Add the story behind a project: the problem, the approach, the tools, and what you would change in the next version.",
    tags: ["BUILD", "PROJECT", "PROCESS"],
    sections: [
      {
        heading: "The idea",
        body: "Explain what you wanted to build and the problem or opportunity that started the project.",
      },
      {
        heading: "How I built it",
        body: "Write about the technology, important decisions, challenges, and the parts you are proud of.",
      },
      {
        heading: "What comes next",
        body: "Share the improvements, experiments, or lessons that will shape the next iteration.",
      },
    ],
  },
  {
    slug: "first-study-record",
    category: "study",
    date: "ADD DATE",
    title: "Write about something you studied",
    excerpt:
      "Add a learning note about a concept, course, or experiment and explain how you made the topic clearer for yourself.",
    tags: ["STUDY", "LEARNING", "CYBERSECURITY"],
    sections: [
      {
        heading: "The topic",
        body: "Introduce the concept you studied and why it felt worth spending time understanding.",
      },
      {
        heading: "How I learned it",
        body: "Describe the resources, practice, labs, or small experiments that helped the idea click.",
      },
      {
        heading: "My takeaway",
        body: "Summarise what you understand now and what you want to explore next.",
      },
    ],
  },
];

export function getCategory(categoryId) {
  return recordCategories[categoryId] ?? recordCategories.events;
}

export function getRecords(categoryId) {
  return records.filter((record) => record.category === categoryId);
}
