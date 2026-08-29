import { useState } from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { brands } from "../../data/brands";

const formNames = {
  "Moonlit Visual": "moonlit-contact",
  "C.K. Drama World": "ck-drama-contact",
  "Learnove Academy": "learnove-contact"
};

export default function ContactForm() {
  const [brand, setBrand] = useState(brands[0].name);
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});

  function validate(form) {
    const values = Object.fromEntries(new FormData(form).entries());
    const next = {};
    if (!values.name?.trim() || values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email || "")) next.email = "Please enter a valid email address.";
    if (!values.subject?.trim() || values.subject.trim().length < 3) next.subject = "Please add a short subject.";
    if (!values.message?.trim() || values.message.trim().length < 10) next.message = "Please provide at least 10 characters.";
    setErrors(next);
    return { ok: Object.keys(next).length === 0, values };
  }

  async function submit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const result = validate(form);
    if (!result.ok) return;
    if (result.values["bot-field"]) return;

    setStatus("sending");
    const data = new URLSearchParams();
    const formName = formNames[brand];
    data.append("form-name", formName);
    data.append("name", result.values.name);
    data.append("email", result.values.email);
    data.append("brand", brand);
    data.append("subject", result.values.subject);
    data.append("message", result.values.message);

    try {
      const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data.toString() });
      if (!response.ok) throw new Error("Submission failed");
      form.reset(); setBrand(brands[0].name); setErrors({}); setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return <form name={formNames[brand]} onSubmit={submit} data-netlify="true" netlify-honeypot="bot-field" className="space-y-5" noValidate>
    <input type="hidden" name="form-name" value={formNames[brand]} />
    <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>
    {[
      ["name","Name","text","Your name"],
      ["email","Email","email","you@example.com"],
      ["subject","Subject","text","What can we help with?"]
    ].map(([name,label,type,placeholder])=><label key={name} className="block"><span className="mb-2 block text-sm font-semibold">{label} *</span><input required name={name} type={type} placeholder={placeholder} aria-invalid={!!errors[name]} className="w-full rounded-xl border border-white/[.09] bg-white/[.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-white/[.05]" />{errors[name]&&<span className="mt-2 block text-xs text-red-300">{errors[name]}</span>}</label>)}
    <label className="block"><span className="mb-2 block text-sm font-semibold">Brand *</span><select name="brand" value={brand} onChange={e=>setBrand(e.target.value)} className="w-full rounded-xl border border-white/[.09] bg-[#10111d] px-4 py-3.5 text-sm text-white outline-none focus:border-white/25">{brands.map(b=><option key={b.name}>{b.name}</option>)}</select></label>
    <label className="block"><span className="mb-2 block text-sm font-semibold">Message *</span><textarea required name="message" rows="7" placeholder="Tell us what you'd like to discuss..." className="w-full resize-y rounded-xl border border-white/[.09] bg-white/[.035] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-white/25 focus:border-white/25 focus:bg-white/[.05]" />{errors.message&&<span className="mt-2 block text-xs text-red-300">{errors.message}</span>}</label>
    <button disabled={status==="sending"} className="w-full rounded-full bg-white px-5 py-3.5 text-sm font-bold text-[#080810] transition hover:bg-white/90 disabled:opacity-60">{status==="sending" ? "Sending…" : "Send Message"}</button>
    {status==="success"&&<div role="status" className="flex gap-3 rounded-xl border border-emerald-300/15 bg-emerald-300/[.06] p-4 text-sm text-emerald-100"><CheckCircle2 size={18}/> Message sent successfully. Thank you for reaching out.</div>}
    {status==="error"&&<div role="alert" className="flex gap-3 rounded-xl border border-red-300/15 bg-red-300/[.06] p-4 text-sm text-red-100"><AlertCircle size={18}/> We couldn't submit the form. Please try again.</div>}
  </form>;
}
