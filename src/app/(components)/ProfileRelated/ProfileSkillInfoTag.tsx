import Link from "next/link"

export default function ProfileSkillInfo({text}: {text: string}){
    return(
        <Link href={`/skills/${text}`} className="border border-stone-50/20 bg-stone-950 shadow-lg shadow-stone-400/10 px-2 py-1 rounded-lg font-extralight hover:scale-105">
            {text}
        </Link>
    )
}