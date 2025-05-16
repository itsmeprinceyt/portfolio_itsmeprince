"use client";
import React from 'react';
import PageWrapper from '../../types/PageWrapper';

export default function MainWindow({
    children
}: PageWrapper) {
    return (
        <div className="relative min-h-screen flex flex-col justify-center items-center gap-2  cursor-default">
            {children}
        </div>
    );
}
