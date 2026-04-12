interface SkillLink {
  linkName?: string;
  linkURL?: string;
  note?: string;
}

interface SkillInfoItem {
  description?: string[];
  Links?: SkillLink[];
}

export interface SkillInterface {
  file: string;
  fullName: string;
  SkillInfo?: SkillInfoItem[];
  date?: string;
}
