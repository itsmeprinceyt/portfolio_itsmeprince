"use client";
import { useEffect, useState } from "react";
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
        "ये हूँ मैं, प्रिंस",
        "یہ ہوں میں، پرنس",
        "إنه أنا، الأمير",
        "それは私、プリンスです",
        "是我，王子",
        "Это я, Принц",
        "நான் தான், பிரின்ஸ்",
        "আমি প্রিন্স",
        "હું છું પ્રિન્સ",
    ],
};

export default function AnimatedMultilingualText({
    text,
    className = "",
}: AnimatedText) {
    const langs = translations[text] || [text];
    const [current, setCurrent] = useState(langs[0]);

    useEffect(() => {
        let prev = current;

        const interval = setInterval(() => {
            let next = prev;
            while (next === prev && langs.length > 1) {
                next = langs[Math.floor(Math.random() * langs.length)];
            }
            prev = next;
            setCurrent(next);
        }, 2000);

        return () => clearInterval(interval);
    }, [langs]);

    return (
        <span className={`transition-all duration-500 ease-in-out ${className}`}>
            {current}
        </span>
    );
}
