'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ResponsiveLinkProps } from '../../types/ResponsiveLink.type';

const LinksMapping = {
    blue: {
        icon: '/icons/web.svg',
        label: '/demo',
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
        label: '/open',
        textColor: 'text-orange-100',
        bg: `bg-orange-500 border border-orange-600 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/40`,
    }
} as const;

export default function LinkShow({ url, color, disabled = false }: ResponsiveLinkProps & { disabled?: boolean }) {
    const LinkItem = LinksMapping[color];
    const mainContainerCSS = `flex items-center gap-2 text-white transition-all ease-in-out duration-300 px-2 py-1 rounded-md tracking-widest text-[12px] h-[30px] font-bold`;
    const disabledStyles = disabled
        ? "opacity-50 grayscale cursor-not-allowed hover:scale-100 hover:shadow-none"
        : "hover:scale-105";

    return (
        <Link
            href={disabled ? "" : url}
            target={(color === 'orange' || disabled) ? '' : '_blank'}
            rel="noopener noreferrer"
        >
            <div className={`${mainContainerCSS} ${LinkItem.bg} ${disabledStyles}`}>
                <Image
                    src={LinkItem.icon}
                    width={20}
                    height={20}
                    alt={LinkItem.label}
                    loading="lazy"
                    className="invert"
                />
                <span className={`${LinkItem.textColor}`}>
                    {LinkItem.label}
                </span>
            </div>
        </Link>
    );
}
