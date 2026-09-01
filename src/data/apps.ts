import type { App } from "../types/app";

export const apps: App[] = [
  {
    id: "localdrop",
    name: "LocalDrop",
    description: "Quick local file sharing and transfer utility.",
    url: "https://localdrop-zeta.vercel.app",
    category: "Utilities",
    tags: ["Files", "Transfer", "Local"],
    icon: "📁",
  },
  {
    id: "scratchpad",
    name: "Scratchpad",
    description: "A simple personal notepad and scratchpad for quick notes.",
    url: "https://scratchpad-eldorado4.vercel.app",
    category: "Productivity",
    tags: ["Notes", "Writing", "Personal"],
    icon: "📝",
  },
  {
    id: "pdf-toolkit",
    name: "PDF Toolkit",
    description: "Useful browser-based tools for working with PDF files.",
    url: "https://pdf-tools-redesign.ashishburge111.workers.dev/index.html",
    category: "PDF Tools",
    tags: ["PDF", "Files", "Utility"],
    icon: "📄",
  },
  {
    id: "biodata-creator",
    name: "BioData Creator",
    description: "Create and manage biodata / resume style documents.",
    url: "https://eldorado9604.github.io/BioDataCreator/",
    category: "Productivity",
    tags: ["Documents", "Resume", "Personal"],
    icon: "📋",
  },
];
