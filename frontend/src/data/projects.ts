// centralized project data — imported by both the grid and individual project pages

export type ProjectStep = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string;
  description: string;
  image: string;
  steps: ProjectStep[];
  // add more fields here
};

export const projects: Project[] = [
  {
    slug: "pokemon-redesign",
    title: "Pokémon Redesign",
    tags: "Case study / UX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis, sem at ullamcorper tempus, quam ipsum cursus arcu, varius pharetra ligula massa in odio.",
    image: "/images/projects/project1.png",
    steps: [
      {
        title: "Understanding the problem",
        description: "Lorem ipsum dolor sit amet...",
      },
      {
        title: "User research",
        description: "Lorem ipsum dolor sit amet...",
      },
      {
        title: "The approach",
        description: "Lorem ipsum dolor sit amet...",
      },
      {
        title: "Prototyping & design",
        description: "Lorem ipsum dolor sit amet...",
      },
      {
        title: "Designing solutions",
        description: "Lorem ipsum dolor sit amet...",
      },
    ],
  },
  {
    slug: "morph",
    title: "Morph",
    tags: "CLI tool / App",
    description: "Every time I moved photos off my digicam, I'd spend way too long manually renaming files, sorting duplicates, and organizing everything by hand.",
    image: "",
    steps: [],
  },
  {
    slug: "querying-covid",
    title: "Querying Covid",
    tags: "Case study / Dashboard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis, sem at ullamcorper tempus, quam ipsum cursus arcu, varius pharetra ligula massa in odio.",
    image: "",
    steps: [],
  },
  {
    slug: "sephora-reimagined",
    title: "Sephora Reimagined",
    tags: "Case study / UX",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mattis, sem at ullamcorper tempus, quam ipsum cursus arcu, varius pharetra ligula massa in odio.",
    image: "",
    steps: [],
  },
];