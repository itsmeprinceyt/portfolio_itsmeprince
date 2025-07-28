export type ProjectFeature = {
    title: string;
    detail: string;
};

export type ProjectDescription = {
    intro: string;
    features?: ProjectFeature[];
    dependencies?: string[];
    usage_examples?: string[];
};

export type ProjectLink = {
    url: string;
    enabled: boolean;
};

export type Project = {
    id: string;
    name: string;
    description: string;
    full_description: ProjectDescription;
    tags: string[];
    links: {
        live: ProjectLink;
        github: ProjectLink;
        youtube: ProjectLink;
    };
    banner?: string;
    date?: string;
};

export interface ProjectCard {
    project: Project;
    index: number;
}
