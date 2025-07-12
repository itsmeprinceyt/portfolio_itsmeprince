import { RefObject } from "react";

export default interface DynamicIslandProps {
    scrollTo?: (ref: RefObject<HTMLDivElement | null>) => void;
    refs?: {
        homeRef?: RefObject<HTMLDivElement | null>;
        aboutRef?: RefObject<HTMLDivElement | null>;
        skillsRef?: RefObject<HTMLDivElement | null>;
        projectsRef?: RefObject<HTMLDivElement | null>;
    };
    buttons?: {
        label: string;
        onClick: () => void;
    }[];
}
