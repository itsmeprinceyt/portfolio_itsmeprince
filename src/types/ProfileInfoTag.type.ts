export type IconName = "Location" | "LinkedIn" | "GitHub" | "YouTube" | "Other";

export interface ProfileInfoTagProps {
    text: string;
    name: IconName;
    href?: string;
}