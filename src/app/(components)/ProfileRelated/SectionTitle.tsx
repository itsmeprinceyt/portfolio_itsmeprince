import Link from "next/link"
import Image from "next/image"
export default function SectionTitle({ title, href }: { title: string, href: string }) {
    return (
        <Link href={href} className=" text-xl w-full max-w-32 md:max-w-40 flex items-start gap-2 p-2">
            {title}
            <Image
                src="/icons/open.svg"
                height={15}
                width={15}
                alt="Open"
                className="invert"
            />
        </Link>
    )
};

