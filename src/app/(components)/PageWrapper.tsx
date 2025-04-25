"use client";
import React from 'react';
import PageWrapper from '../../types/PageWrapper';

export default function PageWrapperNormal({
    children
}: PageWrapper) {
    return (
        <div className="z-5 min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(80,80,80,0.4),rgba(0,0,0,0))] flex justify-center items-center">
            {children}
        </div>
    );
}
