"use client";
import Link from "next/link";
import { BsPaypal } from "react-icons/bs";
import { SiKofi } from "react-icons/si";
import { BsCash } from "react-icons/bs";
import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import PageWrapperNormal from "../(components)/PageWrapper";
import { UPI_ID } from "../../utils/main.util";
import ShimmerButton from "../(components)/Utils/ShimmerButton";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6, delay },
});

export default function Support() {
  const [showUpi, setShowUpi] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const copyUPI = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <PageWrapperNormal>
      <div className="text-white min-h-screen px-6 py-24 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          {...fadeIn(0)}
          className="border-l border-stone-950 pl-6 mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            If you want
          </p>
          <h1 className="text-5xl md:text-7xl font-cinzel tracking-wide uppercase leading-none">
            Support Me
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-stone-700 uppercase mt-3">
            No pressure. seriously.
          </p>
        </motion.div>

        {/* ── Blurb ── */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-sm text-stone-500 leading-loose max-w-lg mb-20"
        >
          If something I built helped you, saved you time, or just looked cool
          &mdash; feel free to buy me a coffee. Or don&apos;t. I&apos;ll keep
          building either way.
        </motion.p>

        {/* ── Options ── */}
        <motion.div
          {...fadeUp(0.3)}
          className="grid grid-cols-1 md:grid-cols-3 border border-stone-950 mb-12"
        >
          {/* PayPal */}
          <Link
            href="https://paypal.me/itsmeprinceyt"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-4 p-8 md:border-r border-stone-950 border-b md:border-b-0 hover:bg-stone-900/30 transition-colors duration-300"
          >
            <BsPaypal
              size={20}
              className="text-stone-600 group-hover:text-stone-300 transition-colors duration-300"
            />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-1">
                PayPal
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600">
                paypal.me/itsmeprinceyt
              </p>
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-stone-600 group-hover:text-stone-500 transition-colors duration-300 mt-auto">
              Open &rarr;
            </span>
          </Link>

          {/* Ko-fi */}
          <Link
            href="https://ko-fi.com/itsmeprinceyt"
            target="_blank"
            rel="noreferrer noopener"
            className="group flex flex-col gap-4 p-8 md:border-r border-stone-950 border-b md:border-b-0 hover:bg-stone-900/30 transition-colors duration-300"
          >
            <SiKofi
              size={20}
              className="text-stone-600 group-hover:text-stone-300 transition-colors duration-300"
            />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-1">
                Ko-fi
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600">
                ko-fi.com/itsmeprinceyt
              </p>
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-stone-600 group-hover:text-stone-500 transition-colors duration-300 mt-auto">
              Open &rarr;
            </span>
          </Link>

          {/* UPI */}
          <button
            onClick={() => setShowUpi((p) => !p)}
            className="group flex flex-col gap-4 p-8 text-left hover:bg-stone-950 transition-colors duration-300 cursor-pointer"
          >
            <BsCash
              size={20}
              className="text-stone-600 group-hover:text-stone-300 transition-colors duration-300"
            />
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-1">
                UPI
              </p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-stone-600">
                Indian payments
              </p>
            </div>
            <span className="text-[9px] tracking-[0.3em] uppercase text-stone-600 group-hover:text-stone-500 transition-colors duration-300 mt-auto">
              {showUpi ? "Hide" : "Show ID"} &rarr;
            </span>
          </button>
        </motion.div>

        {/* ── UPI reveal ── */}
        <AnimatePresence>
          {showUpi && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="border border-stone-950 p-8 mb-12 flex items-center justify-between gap-4 flex-wrap"
            >
              <div>
                <p className="text-[9px] tracking-[0.4em] uppercase text-stone-600 mb-2">
                  UPI ID
                </p>
                <p className="font-cinzel text-xl text-stone-300 tracking-wide select-all">
                  {UPI_ID}
                </p>
              </div>
              <ShimmerButton onClick={copyUPI}>
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span
                      key="check"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-2"
                    >
                      <Check size={14} strokeWidth={1} />
                      <span className="text-[9px] tracking-[0.3em] uppercase">
                        Copied
                      </span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.15 }}
                      className="flex items-center gap-2"
                    >
                      <Copy size={14} strokeWidth={1} />
                      <span className="text-[9px] tracking-[0.3em] uppercase">
                        Copy
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </ShimmerButton>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapperNormal>
  );
}
