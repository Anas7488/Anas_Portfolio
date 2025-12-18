
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Financial Health Dashboard',
    description: 'A comprehensive Power BI suite for a Fintech client analyzing $50M+ annual transactions, featuring predictive cash flow forecasting.',
    tags: ['Power BI', 'DAX', 'SQL', 'Python'],
    metrics: [
      { label: 'Accuracy', value: '98%' },
      { label: 'Latency', value: '<2s' }
    ],
    image: 'https://picsum.photos/seed/dashboard1/800/600'
  },
  {
    id: '2',
    title: 'Supply Chain Optimization',
    description: 'Reduced warehouse idle time by 22% through real-time inventory tracking and bottleneck identification using advanced Power Query transformations.',
    tags: ['Supply Chain', 'ETL', 'Power BI'],
    metrics: [
      { label: 'Efficiency', value: '+22%' },
      { label: 'Savings', value: '$120k' }
    ],
    image: 'https://picsum.photos/seed/dashboard2/800/600'
  },
  {
    id: '3',
    title: 'Marketing ROI Analytics',
    description: 'Unified 12+ data sources into a single source of truth for marketing performance, enabling multi-touch attribution modeling.',
    tags: ['Attribution', 'BigQuery', 'Power BI'],
    metrics: [
      { label: 'ROAS', value: 'x4.2' },
      { label: 'Channels', value: '12' }
    ],
    image: 'https://picsum.photos/seed/dashboard3/800/600'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Power BI', level: 95, category: 'Tools' },
  { name: 'Python', level: 88, category: 'Languages' },
  { name: 'AI Agents', level: 80, category: 'Concepts' },
  { name: 'SSMS', level: 85, category: 'Tools' },
  { name: 'Visual Studio (ETL)', level: 82, category: 'Tools' },
  { name: 'SQL (T-SQL)', level: 90, category: 'Languages' },
  { name: 'Data Modeling', level: 90, category: 'Concepts' },
  { name: 'ETL Pipelines', level: 87, category: 'Tools' }
];

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Anas, a World-Class Data Analyst and Power BI Expert.
Your goal is to answer questions about Anas's professional background, his projects, and his skills.
He is an expert in data visualization (Power BI), Python, AI Agents, SSMS, and ETL processes using Visual Studio.
Keep your tone professional, tech-forward, and data-driven.
If asked about topics outside his expertise, try to relate them back to how data analysis could help in those areas.
Be concise but insightful.
`;
