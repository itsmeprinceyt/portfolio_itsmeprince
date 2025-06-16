import { TextProps } from '../../types/TextProps.type';

export default function TextHighlighter({ text }: TextProps) {
    return (
        <span className="bg-gradient-to-r from-neutral-900 to-neutral-950 text-neutral-300 border border-neutral-800 hover:border-neutral-700 shadow-xl shadow-neutral-700/10 px-1 rounded-md hover:scale-105 inline-block shadow-lg/10 hover:shadow-lg/20">{text}</span>
    )
}