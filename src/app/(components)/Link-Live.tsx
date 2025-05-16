'use client';

import Link from 'next/link';

interface ResponsiveLinkProps {
    url: string;
}

export default function LinkLive({ url }: ResponsiveLinkProps) {
    return (
        <Link href={url} target="_blank">
            <span className="inline-block 
            max-w-[18rem]
            max-[360px]:max-w-[8rem]
            max-[399px]:max-w-[12rem]
            max-[400px]:max-w-[8rem]
            max-[470px]:max-w-[10rem]
            max-[500px]:max-w-[13rem]
            max-[550px]:max-w-[14rem]
            max-[670px]:max-w-[19rem]
            max-[730px]:max-w-[26rem]
            max-[755px]:max-w-[30rem]
            max-[800px]:max-w-[32rem]
            max-[820px]:max-w-[12rem]
            max-[900px]:max-w-[14rem]
            max-[960px]:max-w-[16rem]
            overflow-hidden whitespace-nowrap text-ellipsis hover:text-blue-500"
            >
                {url}
            </span>
        </Link>
    );
}
