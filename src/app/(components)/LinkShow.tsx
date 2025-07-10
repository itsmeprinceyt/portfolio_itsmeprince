'use client';
import Link from 'next/link';
import ResponsiveLinkProps from '../../types/ResponsiveLink.type';

export default function LinkShow({ url }: ResponsiveLinkProps) {
    return (
        <Link href={url} target="_blank" className="flex-1 min-w-0">
            <span className="truncate block w-full whitespace-nowrap overflow-hidden text-ellipsis">
                {url}
            </span>
        </Link>

    );
}
