'use client';
import { useEffect, useState } from 'react';
// YEAR, MONTH ( INDEX-WISE 0-11 ) , DAY
const BIRTH_DATE = new Date(2005, 2, 10); 

function getAge(birthDate: Date): number {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const hasHadBirthday =
        now.getMonth() > birthDate.getMonth() ||
        (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());
    if (!hasHadBirthday) age--;
    return Math.max(0, age);
}

function getNextBirthday(birthDate: Date): Date {
    const now = new Date();
    const thisYearBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    return now > thisYearBirthday
        ? new Date(now.getFullYear() + 1, birthDate.getMonth(), birthDate.getDate())
        : thisYearBirthday;
}

function getCountdown(targetDate: Date): string {
    const diff = targetDate.getTime() - new Date().getTime();
    if (diff <= 0) return '🎉 Happy Birthday!';
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

export default function BirthdayCounter() {
    const [age, setAge] = useState(getAge(BIRTH_DATE));
    const [countdown, setCountdown] = useState(getCountdown(getNextBirthday(BIRTH_DATE)));

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const nextBirthday = getNextBirthday(BIRTH_DATE);
            setCountdown(getCountdown(nextBirthday));

            if (now.toDateString() === nextBirthday.toDateString() && now.getHours() === 0 && now.getMinutes() === 0) {
                setAge(getAge(BIRTH_DATE));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="text-center p-4 rounded-xl text-white shadow-md tracking-widest leading-7">
            <h2 className="text-2xl font-bold mb-2">{age}🍰</h2>
            <p className="text-lg">{countdown}</p>
        </div>
    );
}
