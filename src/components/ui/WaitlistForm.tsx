"use client";

import { useState, type FormEvent } from "react";

interface WaitlistResponse {
  success: boolean;
  is_new_sign_up: boolean;
  is_pending_confirmation: boolean;
  position?: number;
  referral_code?: string;
  message?: string;
}

export function WaitlistForm({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [result, setResult] = useState<WaitlistResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const response = await fetch("https://waitlister.me/s/Ev3t8ZDHsdOw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data: WaitlistResponse = await response.json();

      if (data.success) {
        setResult(data);
        setStatus("success");
      } else {
        setErrorMsg(data.message || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success" && result) {
    const isDark = variant === "dark";
    return (
      <div className={`rounded-xl p-6 text-center ${isDark ? "bg-stone-100" : "bg-white/20"}`}>
        <p className={`text-2xl font-heading font-extrabold uppercase ${isDark ? "text-stone-950" : "text-white"}`}>
          {result.is_new_sign_up ? "You're on the list!" : "You're already on the list!"}
        </p>
        {result.position && (
          <p className={`mt-2 text-lg ${isDark ? "text-stone-600" : "text-orange-100"}`}>
            You&apos;re #{result.position} in line
          </p>
        )}
        {result.is_pending_confirmation && (
          <p className={`mt-2 text-sm ${isDark ? "text-stone-500" : "text-orange-200"}`}>
            Check your email to confirm your spot.
          </p>
        )}
      </div>
    );
  }

  const isDark = variant === "dark";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className={`flex-1 px-4 py-3 rounded-lg border text-base outline-none transition-all ${
          isDark
            ? "border-stone-300 bg-white text-stone-900 placeholder:text-stone-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            : "border-white/30 bg-white/10 text-white placeholder:text-orange-200 focus:border-white focus:ring-2 focus:ring-white/20"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className={`px-6 py-3 rounded-lg font-heading font-bold uppercase tracking-wide text-sm transition-all whitespace-nowrap ${
          isDark
            ? "bg-orange-500 text-white hover:bg-orange-600 disabled:bg-orange-300"
            : "bg-white text-orange-500 hover:bg-orange-50 disabled:bg-white/70"
        }`}
      >
        {status === "loading" ? "Joining..." : "Join Our Exclusive Beta"}
      </button>
      {status === "error" && (
        <p className={`text-sm sm:col-span-2 ${isDark ? "text-red-500" : "text-red-200"}`}>
          {errorMsg}
        </p>
      )}
    </form>
  );
}
