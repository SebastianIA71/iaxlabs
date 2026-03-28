"use client";

import { submitProduct } from "@/actions/submission";
import { Button } from "@/components/ui/button";
import {
  Rocket,
  Send
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ProductSubmission() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const t = useTranslations("Submission");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      setStatus("loading");
      setErrorMessage("");

      const result = await submitProduct(formData);

      if (!result.success) {
        throw new Error(result.error || t("errorMessage"));
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : t("errorMessage")
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section 
      id="experimentos"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 pb-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 sm:p-12">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              {t("badge")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-white/80 max-w-lg">{t("description")}</p>
          </div>

          {/* Right form */}
          <div className="w-full lg:w-[420px]">
<div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 min-h-[220px] flex flex-col justify-center">

  <p className="text-white/80 text-sm mb-6 text-center">
    {t("ctaDescription")}
  </p>

  <a
    href="https://iafont.substack.com/?source=iaxlabs"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button
      className="w-full h-12 bg-white hover:bg-white/90 text-indigo-600 font-semibold rounded-xl transition-all duration-200 hover:shadow-lg"
    >
      <span className="flex items-center justify-center gap-2">
        <Send className="w-4 h-4" />
        {t("ctaButton")}
      </span>
    </Button>
  </a>

</div>

          </div>
        </div>
      </div>
    </section>
  );
}
