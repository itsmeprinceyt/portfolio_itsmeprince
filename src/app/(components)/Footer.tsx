"use client";

import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col items-center gap-8">
        {/* Divider */}
        <div className="w-16 h-px bg-stone-800" />

        {/* Copyright */}
        <p className="flex gap-2 text-xs tracking-[0.3em] text-stone-700 uppercase">
          <Copyright size={16} /> {new Date().getFullYear()} Mohd Uvaish. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
}
