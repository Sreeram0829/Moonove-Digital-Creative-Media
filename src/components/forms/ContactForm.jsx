import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { brands } from "../../data/brands";

const formNames = {
  "Moonlit Visual": "moonlit-contact",
  "C.K. Drama World": "ck-drama-contact",
  "Learnove Academy": "learnove-contact",
};

export default function ContactForm() {
  const defaultBrand = brands[0]?.name || "Moonlit Visual";

  const [brand, setBrand] = useState(defaultBrand);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  function validate(form) {
    const values = Object.fromEntries(new FormData(form).entries());
    const nextErrors = {};

    // NAME
    if (!values.name?.trim() || values.name.trim().length < 2) {
      nextErrors.name = "Please enter your name.";
    }

    // EMAIL
    if (
      !values.email?.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())
    ) {
      nextErrors.email = "Please enter a valid email address.";
    }

    // SUBJECT
    if (
      !values.subject?.trim() ||
      values.subject.trim().length < 3
    ) {
      nextErrors.subject = "Please add a short subject.";
    }

    // MESSAGE
    if (
      !values.message?.trim() ||
      values.message.trim().length < 10
    ) {
      nextErrors.message = "Please provide at least 10 characters.";
    }

    setErrors(nextErrors);

    return {
      ok: Object.keys(nextErrors).length === 0,
      values,
    };
  }

  async function submit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    // Clear previous status
    setStatus("idle");

    // Validate fields
    const result = validate(form);

    if (!result.ok) {
      return;
    }

    // Honeypot spam protection
    if (result.values["bot-field"]) {
      return;
    }

    const formName = formNames[brand] || "moonlit-contact";

    setStatus("sending");

    try {
      /*
       * Send the form to Netlify Forms.
       *
       * IMPORTANT:
       * This works on the deployed Netlify site.
       * localhost:5173 will return 404 because Vite itself
       * does not process Netlify form submissions.
       */

      const formData = new FormData(form);

      // Make absolutely sure Netlify receives the correct form name
      formData.set("form-name", formName);

      // Make sure the selected brand is included
      formData.set("brand", brand);

      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error(
          `Netlify submission failed: ${response.status}`
        );
      }

      // Reset form fields
      form.reset();

      // Reset selected brand
      setBrand(defaultBrand);

      // Clear validation errors
      setErrors({});

      // Show success message
      setStatus("success");
    } catch (error) {
      console.error("Contact form submission error:", error);

      setStatus("error");
    }
  }

  return (
    <form
      name={formNames[brand] || "moonlit-contact"}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={submit}
      className="space-y-5"
      noValidate
    >
      {/* Netlify form name */}
      <input
        type="hidden"
        name="form-name"
        value={formNames[brand] || "moonlit-contact"}
      />

      {/* HONEYPOT SPAM PROTECTION */}
      <p
        style={{
          position: "absolute",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          height: 1,
          width: 1,
          margin: -1,
          padding: 0,
          border: 0,
        }}
      >
        <label>
          Don&apos;t fill this out:
          <input
            name="bot-field"
            tabIndex="-1"
            autoComplete="off"
          />
        </label>
      </p>

      {/* NAME */}
      <label className="block">
        <span className="mb-2 block text-sm font-semibold">
          Name *
        </span>

        <input
          required
          name="name"
          type="text"
          minLength={2}
          maxLength={100}
          placeholder="Your name"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          className="w-full rounded-xl border border-white/[.09] bg-white/[.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-white/[.05]"
        />

        {errors.name && (
          <span className="mt-2 block text-xs text-red-300">
            {errors.name}
          </span>
        )}
      </label>

      {/* EMAIL */}
      <label className="block">
        <span className="mb-2 block text-sm font-semibold">
          Email *
        </span>

        <input
          required
          name="email"
          type="email"
          maxLength={150}
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          className="w-full rounded-xl border border-white/[.09] bg-white/[.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-white/[.05]"
        />

        {errors.email && (
          <span className="mt-2 block text-xs text-red-300">
            {errors.email}
          </span>
        )}
      </label>

      {/* BRAND */}
      <label className="block">
        <span className="mb-2 block text-sm font-semibold">
          Brand *
        </span>

        <select
          name="brand"
          value={brand}
          onChange={(event) => {
            setBrand(event.target.value);
            setStatus("idle");
            setErrors({});
          }}
          className="w-full rounded-xl border border-white/[.09] bg-[#10111d] px-4 py-3.5 text-sm text-white outline-none focus:border-white/25"
        >
          {brands.map((brandItem) => (
            <option
              key={brandItem.name}
              value={brandItem.name}
            >
              {brandItem.name}
            </option>
          ))}
        </select>
      </label>

      {/* SUBJECT */}
      <label className="block">
        <span className="mb-2 block text-sm font-semibold">
          Subject *
        </span>

        <input
          required
          name="subject"
          type="text"
          minLength={3}
          maxLength={150}
          placeholder="What can we help with?"
          aria-invalid={Boolean(errors.subject)}
          className="w-full rounded-xl border border-white/[.09] bg-white/[.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-white/[.05]"
        />

        {errors.subject && (
          <span className="mt-2 block text-xs text-red-300">
            {errors.subject}
          </span>
        )}
      </label>

      {/* MESSAGE */}
      <label className="block">
        <span className="mb-2 block text-sm font-semibold">
          Message *
        </span>

        <textarea
          required
          name="message"
          minLength={10}
          maxLength={5000}
          rows={7}
          placeholder="Tell us what you'd like to discuss..."
          aria-invalid={Boolean(errors.message)}
          className="w-full resize-y rounded-xl border border-white/[.09] bg-white/[.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-white/[.05]"
        />

        {errors.message && (
          <span className="mt-2 block text-xs text-red-300">
            {errors.message}
          </span>
        )}
      </label>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#080810] transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {/* SUCCESS */}
      {status === "success" && (
        <div
          role="status"
          aria-live="polite"
          className="flex gap-3 rounded-xl border border-emerald-300/15 bg-emerald-300/[.06] p-4 text-sm text-emerald-100"
        >
          <CheckCircle2
            size={18}
            className="mt-0.5 shrink-0"
          />

          <span>
            Message sent successfully. Thank you for
            reaching out.
          </span>
        </div>
      )}

      {/* ERROR */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="flex gap-3 rounded-xl border border-red-300/15 bg-red-300/[.06] p-4 text-sm text-red-100"
        >
          <AlertCircle
            size={18}
            className="mt-0.5 shrink-0"
          />

          <span>
            We couldn&apos;t submit the form. Please try
            again.
          </span>
        </div>
      )}
    </form>
  );
}