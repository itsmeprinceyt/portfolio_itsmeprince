"use client";
import { useState } from "react";
import axios from "axios";
import ShimmerButton from "../(components)/Utils/ShimmerButton";
import { FormErrors, Status } from "../../types/contact.type";

import { SocialIcon } from "react-social-icons";
import {
  GitHubLink,
  InstagramLink,
  LinkedInLink,
  YouTubeLink,
} from "../../utils/main.util";
import PageWrapper from "../(components)/PageWrapper";

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

    if (!name.trim()) {
      newErrors.name = "name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "name must be at least 2 characters";
    } else if (name.trim().length > 50) {
      newErrors.name = "name must be less than 50 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "please enter a valid email address";
    }

    if (!message.trim()) {
      newErrors.message = "message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "message must be at least 10 characters";
    } else if (message.trim().length > 1000) {
      newErrors.message = "message must be less than 1000 characters";
    }

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
      <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-20">
        <div className="w-full max-w-md flex flex-col gap-8 ">
          {/* ── TOP: Heading + Social Icons ── */}
          <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
              contact
            </p>
            <h1 className="text-white text-xl font-light tracking-widest uppercase">
              get in touch
            </h1>

            {/* Divider with label */}
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 h-px bg-stone-800" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                find me on
              </span>
              <div className="flex-1 h-px bg-stone-800" />
            </div>

            {/* Social Icons Row */}
            <div className="flex items-center gap-2">
              {socials.map(({ url, label }) => (
                <SocialIcon
                  key={label}
                  url={url}
                  target="_blank"
                  style={{ height: 40, width: 40 }}
                  bgColor="transparent"
                  className="hover:scale-110 transition-all ease-in-out duration-300"
                />
              ))}
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-stone-800" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
              or send a message
            </span>
            <div className="flex-1 h-px bg-stone-800" />
          </div>

          {/* ── BOTTOM: Contact Form ── */}
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
                name
              </label>
              <input
                type="text"
                name="name"
                disabled={status === "loading"}
                className={`
                bg-transparent border
                ${errors.name ? "border-red-600" : "border-stone-900"}
                focus:border-stone-700
                text-stone-300 text-[12px] tracking-widest
                px-4 py-3 outline-none
                transition-colors duration-200
                placeholder:text-stone-500
                disabled:opacity-40
              `}
                placeholder="your name"
              />
              {errors.name && (
                <p className="text-[9px] uppercase tracking-[0.2em] text-red-600">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
                email
              </label>
              <input
                type="email"
                name="email"
                disabled={status === "loading"}
                className={`
                bg-transparent border
                ${errors.email ? "border-red-600" : "border-stone-900"}
                focus:border-stone-700
                text-stone-300 text-[12px] tracking-widest
                px-4 py-3 outline-none
                transition-colors duration-200
                placeholder:text-stone-500
                disabled:opacity-40
              `}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="text-[9px] uppercase tracking-[0.2em] text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
                message
              </label>
              <textarea
                name="message"
                rows={5}
                disabled={status === "loading"}
                className={`
                bg-transparent border
                ${errors.message ? "border-red-600" : "border-stone-900"}
                focus:border-stone-700
                text-stone-300 text-[12px] tracking-widest
                px-4 py-3 outline-none resize-none
                transition-colors duration-200
                placeholder:text-stone-500
                disabled:opacity-40
              `}
                placeholder="what's on your mind... how may I help you?"
              />
              {errors.message && (
                <p className="text-[9px] uppercase tracking-[0.2em] text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <ShimmerButton
              type="submit"
              disabled={status === "loading"}
              className="mt-2 w-full disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "sending..." : "send message"}
            </ShimmerButton>

            {/* Feedback */}
            {status === "success" && (
              <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 text-center mt-1 animate-pulse">
                message sent — i&apos;ll be in touch.
              </p>
            )}
            {status === "error" && (
              <p className="text-[10px] uppercase tracking-[0.25em] text-red-600 text-center mt-1">
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </main>
    </PageWrapper>
  );
}
