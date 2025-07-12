'use client';
import { useEffect, useState } from 'react';
// YEAR, MONTH ( INDEX-WISE 0-11 ) , DAY
const BIRTH_DATE: Date = new Date(2005, 2, 10); 

function getAge(birthDate: Date): number {
    const now: Date = new Date();
    let age: number = now.getFullYear() - birthDate.getFullYear();
    const hasHadBirthday =
        now.getMonth() > birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
    if (!hasHadBirthday) age--;
    return Math.max(0, age);
}

function getNextBirthday(birthDate: Date): Date {
    const now: Date = new Date();
    const thisYearBirthday: Date = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    return now > thisYearBirthday
        ? new Date(now.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate())
        : thisYearBirthday;
}

function getCountdown(targetDate: Date): string {
    const diff: number = targetDate.getTime() - new Date().getTime();
    if (diff <= 0) return '🎉 Happy Birthday!';
    const days: number = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours: number = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes: number = Math.floor((diff / (1000 * 60)) % 60);
    const seconds: number = Math.floor((diff / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function BirthdayCounter() {
    const [age, setAge] = useState<number>(getAge(BIRTH_DATE));
    const [countdown, setCountdown] = useState<string>(getCountdown(getNextBirthday(BIRTH_DATE)));

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const nextBirthday: Date = getNextBirthday(BIRTH_DATE);
            setCountdown(getCountdown(nextBirthday));

            if (now.toDateString() === nextBirthday.toDateString() && now.getHours() === 0 && now.getMinutes() === 0) {
                setAge(getAge(BIRTH_DATE));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center text-white tracking-widest leading-7">
            <h2 className="text-2xl font-bold">{age}🎂</h2>
            <p className="text-lg">{countdown}</p>
        </div>
    );
}
