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
    description: "Temporary collaborative notebook. Enter a passcode and type together with connected users in real time.",
    url: "https://scratchpad-eldorado4.vercel.app",
    category: "Productivity",
    tags: ["Notes", "Collaborative", "Realtime"],
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
    id: "bio-data-maker",
    name: "Bio Data Maker",
    description:
      "Marriage biodata creator for Marathi / Hindu families. Beautiful templates, photo, custom fields, private — all in the browser.",
    url: "https://eldorado9604.github.io/bio-data-maker/",
    category: "Productivity",
    tags: ["Biodata", "Marriage", "Marathi", "Hindu", "PDF"],
    icon: "💍",
  },
];
