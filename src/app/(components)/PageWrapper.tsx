"use client";
import PageWrapper from '../../types/PageWrapper.type';

export default function PageWrapperNormal({
    children
}: PageWrapper) {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center py-20">
            {children}
        </div>
    );
}
