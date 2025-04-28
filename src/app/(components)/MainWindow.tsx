"use client";
import React from 'react';
import PageWrapper from '../../types/PageWrapper';

export default function MainWindow({
    children
}: PageWrapper) {
    return (
        <div className="flex flex-col items-start gap-2  mt-14 mb-14">
            {children}
        </div>
    );
}
