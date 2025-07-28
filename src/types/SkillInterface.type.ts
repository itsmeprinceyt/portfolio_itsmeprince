interface SkillLink {
    linkName?: string;
    linkURL?: string;
}

interface SkillInfoItem {
    description?: string;
    Links?: SkillLink[];
}

export interface SkillInterface {
    name: string;
    file: string;
    fullName: string;
    SkillInfo?: SkillInfoItem[];
}