import Link from "next/link"
import Image from "next/image"
export default function SectionTitle({ title, href }: { title: string, href: string }) {
    return (
        <div className=" text-xl w-full max-w-40 flex gap-2 p-2">
            {title}
            <Link href={href} className="invert">
                <Image
                    src="/icons/open.svg"
                    height={15}
                    width={15}
                    alt="Open"
                />
            </Link>
        </div>
    )
};

