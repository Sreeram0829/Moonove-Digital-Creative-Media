import { Helmet } from "react-helmet-async";
import { Mail } from "lucide-react";
import ContactForm from "../components/forms/ContactForm";
import NetlifyForms from "../components/forms/NetlifyForms";
import { brands } from "../data/brands";

export default function Contact() {
  return <div className="container-shell pt-36 pb-28">
    <Helmet><title>Contact — Moonove</title><meta name="description" content="Contact Moonove's brands for collaborations, creative opportunities, partnerships and brand-related enquiries." /></Helmet>
    <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <div className="eyebrow">Get in touch</div>
        <h1 className="display mt-5 text-5xl font-extrabold sm:text-7xl">Let's talk<br/>creative.</h1>
        <p className="muted mt-6 max-w-lg leading-8">Choose the Moonove brand relevant to your enquiry. The contact form routes the submission to the appropriate Netlify form.</p>
        <div className="mt-10 space-y-3">
          {brands.map(b=><div key={b.name} className="soft-border rounded-2xl bg-white/[.018] p-5"><div className="text-sm font-bold">{b.name}</div><div className="mt-1 text-sm text-white/45">{b.category === "Learning" ? "NEET-focused educational content" : "Drama & entertainment content"}</div><a className="mt-3 inline-flex items-center gap-2 text-sm text-white/65 hover:text-white" href={`mailto:${b.publicEmail || "moonlitvisual08@gmail.com"}`}><Mail size={14}/>{b.publicEmail || "moonlitvisual08@gmail.com"}</a></div>)}
        </div>
      </div>
      <div className="soft-border rounded-[2rem] bg-white/[.018] p-6 sm:p-9"><ContactForm /></div>
    </div>
    <NetlifyForms />
  </div>;
}
