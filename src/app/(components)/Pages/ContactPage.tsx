"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { SocialIcon } from "react-social-icons";
import { FormErrors, Status } from "../../../types/contact.type";
import {
  GitHubLink,
  InstagramLink,
  LinkedInLink,
  YouTubeLink,
} from "../../../utils/main.util";
import PageWrapper from "../PageWrapper";
import ShimmerButton from "../Utils/ShimmerButton";
import ShimmerLinkNormal from "../Utils/ShimmerLinkNormal";

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

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (
    name: string,
    email: string,
    message: string
  ): FormErrors => {
    const newErrors: FormErrors = {};
    if (!name.trim()) newErrors.name = "name is required";
    else if (name.trim().length < 2)
      newErrors.name = "name must be at least 2 characters";
    else if (name.trim().length > 50)
      newErrors.name = "name must be less than 50 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "please enter a valid email address";

    if (!message.trim()) newErrors.message = "message is required";
    else if (message.trim().length < 10)
      newErrors.message = "message must be at least 10 characters";
    else if (message.trim().length > 1000)
      newErrors.message = "message must be less than 1000 characters";

    return newErrors;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    setErrors({});

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const validationErrors = validateForm(name, email, message);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://api.web3forms.com/submit",
        {
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "Something went wrong.");
      }
    } catch (err: unknown) {
      setStatus("error");
      if (axios.isAxiosError(err)) {
        setErrorMsg(
          err.response?.data?.message ?? "Network error. Please try again."
        );
      } else {
        setErrorMsg("Network error. Please try again.");
      }
    }
  };

  const socials = [
    { url: GitHubLink, label: "github" },
    { url: LinkedInLink, label: "linkedin" },
    { url: YouTubeLink, label: "youtube" },
    { url: InstagramLink, label: "instagram" },
  ];

  return (
    <PageWrapper>
      <div className="text-white min-h-screen px-6 py-24 max-w-5xl mx-auto">
        {/* ── Header ── */}
        <motion.div
          {...fadeIn(0)}
          className="border-l border-stone-950 pl-6 mb-20"
        >
          <p className="text-[10px] tracking-[0.5em] text-stone-700 uppercase mb-3">
            Get in touch
          </p>
          <h1 className="text-5xl md:text-7xl font-cinzel tracking-wide uppercase leading-none">
            Contact
          </h1>
          <p className="text-[10px] tracking-[0.4em] text-stone-700 uppercase mt-3">
            Let&apos;s build something together
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-stone-700" />

          <div className="flex flex-col">
            {/* ── Section 1: Socials ── */}
            <motion.div {...fadeUp(0.1)} className="relative pl-10 pb-16">
              <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 border border-stone-700 bg-stone-900" />

              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] tracking-[0.35em] uppercase text-stone-400">
                  Social
                </span>
                <span className="text-[9px] text-stone-400">&mdash;</span>
                <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400">
                  Links
                </span>
              </div>

              <h2 className="font-cinzel text-xl tracking-wide uppercase text-white mb-1">
                Find me on
              </h2>
              <p className="text-[12px] tracking-[0.3em] uppercase text-stone-600 mb-6">
                the web
              </p>

              {/* Social cards grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {socials.map(({ url, label }) => (
                  <ShimmerLinkNormal key={label} href={url} external>
                    <SocialIcon
                      url={url}
                      as="div"
                      style={{ height: 32, width: 32, pointerEvents: "none" }}
                      bgColor="transparent"
                      className="opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    />
                    <span className="uppercase">{label}</span>
                  </ShimmerLinkNormal>
                ))}
              </div>
            </motion.div>

            {/* ── Section 2: Form ── */}
            <motion.div {...fadeUp(0.2)} className="relative pl-10 pb-0">
              {/* Dot */}
              <div className="absolute left-0 top-2.5 -translate-x-1/2 w-2 h-2 border border-stone-700 bg-stone-900" />

              <h2 className="font-cinzel text-xl tracking-wide uppercase text-white mb-1">
                Send a message
              </h2>
              <p className="text-[12px] tracking-[0.3em] uppercase text-stone-400 mb-6">
                I&apos;ll get back to you shortly
              </p>

              <form
                onSubmit={onSubmit}
                className="flex flex-col gap-5 max-w-lg"
              >
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-stone-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    disabled={status === "loading"}
                    placeholder="your name"
                    className={`
                      bg-transparent border
                      ${errors.name ? "border-red-600" : "border-stone-800"}
                      focus:border-stone-500
                      text-stone-300 text-[12px] tracking-widest
                      p-2 outline-none
                      transition-colors duration-200
                      placeholder:text-stone-700
                      disabled:opacity-40
                    `}
                  />
                  {errors.name && (
                    <p className="text-[9px] uppercase tracking-[0.2em] text-red-600">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-stone-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    disabled={status === "loading"}
                    placeholder="your@email.com"
                    className={`
                      bg-transparent border
                      ${errors.email ? "border-red-600" : "border-stone-800"}
                      focus:border-stone-500
                      text-stone-300 text-[12px] tracking-widest
                      p-2 outline-none
                      transition-colors duration-200
                      placeholder:text-stone-700
                      disabled:opacity-40
                    `}
                  />
                  {errors.email && (
                    <p className="text-[9px] uppercase tracking-[0.2em] text-red-600">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] uppercase tracking-[0.3em] text-stone-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    disabled={status === "loading"}
                    placeholder="what's on your mind..."
                    className={`
                      bg-transparent border
                      ${errors.message ? "border-red-600" : "border-stone-800"}
                      focus:border-stone-500
                      text-stone-300 text-[12px] tracking-widest
                      p-2 outline-none resize-none
                      transition-colors duration-200
                      placeholder:text-stone-700
                      disabled:opacity-40
                    `}
                  />
                  {errors.message && (
                    <p className="text-[9px] uppercase tracking-[0.2em] text-red-600">
                      {errors.message}
                    </p>
                  )}
                </div>

                <ShimmerButton
                  type="submit"
                  disabled={status === "loading"}
                  className="mt-2 disabled:opacity-40 disabled:cursor-not-allowed self-start"
                >
                  {status === "loading" ? "sending..." : "send message"}
                </ShimmerButton>

                {status === "success" && (
                  <p className="text-[9px] uppercase tracking-[0.3em] text-stone-500 animate-pulse">
                    message sent — i&apos;ll be in touch.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-[9px] uppercase tracking-[0.3em] text-red-600">
                    {errorMsg}
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        </div>

        <div className="fixed w-96 h-96 bg-white/5 blur-3xl rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </PageWrapper>
  );
}
