export type Project = {
    id: string;
    name: string;
    breif_description: string;
    full_description: string;
    tags: string[];
    links: {
        live: {
            url: string;
            enabled: boolean;
        };
        github: {
            url: string;
            enabled: boolean;
        };
        youtube: {
            url: string;
            enabled: boolean;
        };
    };
    banner?: string;
};

export interface ProjectCard {
    project: Project,
    index: number
}