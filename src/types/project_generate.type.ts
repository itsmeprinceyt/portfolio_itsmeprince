export type Feature = { title: string; detail: string };

export type FormState = {
  id: string;
  name: string;
  description: string;
  date: string;
  banner: string;
  intro: string;
  features: Feature[];
  dependencies: string[];
  usage_examples: string[];
  tags: string[];
  live_enabled: boolean;
  live_url: string;
  github_enabled: boolean;
  github_url: string;
  youtube_enabled: boolean;
  youtube_url: string;
};
