export interface FloatingImageProps {
    src: string;
    visible: boolean;
    getCursorPos: () => { x: number; y: number };
}