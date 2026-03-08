export interface Article {
  slug: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string | null;
  archived: boolean;
  featured: boolean;
}

const articles: Article[] = [
  {
    slug: 'bridging-ai-literacy-gap',
    tag: 'Featured Article',
    title: 'Bridging the AI Literacy Gap: How Small Organizations Can Adopt AI Without Enterprise Budgets',
    excerpt:
      'The gap between large enterprises and smaller organizations isn\'t about access to AI tools — it\'s about literacy, governance, and practical support. This article explores the widening divide and what smaller organizations can do about it today.',
    date: 'March 2025',
    readTime: '8 min read',
    archived: false,
    featured: true,
  },
  {
    slug: 'ai-literacy-nonprofit-sector',
    tag: 'Workshop Recap',
    title: 'AI Literacy in the Nonprofit Sector: Key Takeaways',
    excerpt:
      'A summary of common questions, concerns, and "aha moments" from our nonprofit AI literacy workshops. What leaders really want to know about AI — and what surprises them most.',
    date: 'Coming Soon',
    readTime: null,
    archived: false,
    featured: false,
  },
  {
    slug: 'microsoft-365-copilot-small-orgs',
    tag: 'Guide',
    title: 'Microsoft 365 Copilot: What Small Organizations Actually Get',
    excerpt:
      'A plain-language breakdown of what Microsoft 365 Copilot does, what it costs, and which features matter most for organizations with 5–50 employees.',
    date: 'Coming Soon',
    readTime: null,
    archived: false,
    featured: false,
  },
  {
    slug: 'before-you-turn-on-copilot',
    tag: 'Best Practices',
    title: 'Before You Turn On Copilot: A 5-Step Governance Checklist',
    excerpt:
      'Five things every organization should have in place before enabling AI tools — from acceptable-use policies to data hygiene basics.',
    date: 'Coming Soon',
    readTime: null,
    archived: false,
    featured: false,
  },
];

export default articles;
