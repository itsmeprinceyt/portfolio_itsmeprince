'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ResponsiveLinkProps } from '../../types/ResponsiveLink.type';

const linkMetaMap = {
    blue: {
        icon: '/icons/web.svg',
        label: '/live',
        textColor: 'text-blue-100',
        bg: `bg-blue-500 border border-blue-600 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40`,
    },
    purple: {
        icon: '/logo/dev-tools/2.github.svg',
        label: '/github',
        textColor: 'text-purple-100',
        bg: `bg-purple-500 border border-purple-600 shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40`,
    },
    rose: {
        icon: '/icons/youtube.svg',
        label: '/youtube',
        textColor: 'text-rose-100',
        bg: `bg-rose-500 border border-rose-600 shadow-lg shadow-rose-600/20 hover:shadow-rose-600/40`,
    },
    orange: {
        icon: '/icons/open.svg',
        label: '/learn-more',
        textColor: 'text-orange-100',
        bg: `bg-orange-500 border border-orange-600 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40`,
    }
} as const;

export default function LinkShow({ url, color }: ResponsiveLinkProps) {
    const meta = linkMetaMap[color];
    const containerClass = `flex items-center gap-2 text-white hover:scale-105 transition-all ease-in-out duration-300 px-2 py-1 rounded-md tracking-widest text-[12px] h-[30px] font-bold`

    return (
        <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div className={`${containerClass} ${meta.bg}`}>
                <Image
                    src={meta.icon}
                    width={20}
                    height={20}
                    alt={meta.label}
                    loading="lazy"
                    className="invert"
                />
                <span className={`${meta.textColor}`}>
                    {meta.label}
                </span>
            </div>
        </Link>
    );
}
