'use client';
import Link from 'next/link';
import { ResponsiveLinkProps } from '../../types/ResponsiveLink.type';

const colorClassMap: Record<'blue' | 'purple' | 'rose', string> = {
    blue: 'hover:text-blue-400',
    purple: 'hover:text-purple-400',
    rose: 'hover:text-rose-400',
};

export default function LinkShow({ url, color }: ResponsiveLinkProps) {
    const baseCSS = "flex-1 min-w-0";
    const hoverClass = colorClassMap[color];

    return (
        <Link
            href={url}
            target="_blank"
            className={`${baseCSS} ${hoverClass} transition-all ease-in-out duration-300`}
        >
            <span className="truncate block w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {url}
            </span>
        </Link>
    );
}
