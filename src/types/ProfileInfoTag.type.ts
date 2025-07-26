export type IconName = "Location" | "LinkedIn" | "GitHub" | "YouTube";

export interface ProfileInfoTagProps {
    text: string;
    name: IconName;
    href?: string;
}