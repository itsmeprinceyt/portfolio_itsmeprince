"use client";
import React from 'react';
import PageWrapper from '../../types/PageWrapper.type';

export default function PageWrapperNormal({
    children
}: PageWrapper) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            {children}
        </div>
    );
}
