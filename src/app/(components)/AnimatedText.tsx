"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import { AnimatedText } from '../../types/AnimatedText.type';

const translations: Record<string, string[]> = {
    "Mohd Uvaish": [
        "Mohd Uvaish",
        "मोहम्मद उवैश",
        "محمد اویش",
        "محمد عويش",
        "モハメド・ウヴァイシュ",
        "穆罕默德·乌维什",
        "Мохаммед Уваиш",
        "முகம்மது உவைஷ்",
        "মোহাম্মদ উভাইশ",
        "મોહમ્મદ ઉવૈશ",
    ],
    "ItsMe Prince": [
        "ItsMe Prince",
        "मैं हूँ प्रिंस",
        "میں ہوں پرنس",
        "أنا الأمير",
        "私はプリンスです",
        "我是王子",
        "Я Принц",
        "நான் பிரின்ஸ்",
        "আমি প্রিন্স",
        "હું પ્રિન્સ છું",
    ],
};

export default function AnimatedMultilingualText({
    text
}: AnimatedText) {
    const langs: string[] = useMemo(() => translations[text] || [text], [text]);
    const [current, setCurrent] = useState<string>(langs[0]);

    const prevRef = useRef(current);

    useEffect(() => {
        let showOriginal: boolean = false;
        const interval = setInterval(() => {
            let next: string;
            if (showOriginal || langs.length === 1) {
                next = langs[0];
            } else {
                const withoutOriginal: string[] = langs.slice(1);
                next = withoutOriginal[Math.floor(Math.random() * withoutOriginal.length)];
            }
            prevRef.current = next;
            setCurrent(next);
            showOriginal = !showOriginal;
        }, 1500);

        return () => clearInterval(interval);
    }, [langs]);

    return (
        <span className={`transition-all duration-500 ease-in-out`}>
            {current}
        </span>
    );
}