
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Tools' | 'Languages' | 'Concepts';
  icon?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
