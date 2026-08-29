import { Helmet } from "react-helmet-async";

const pages = {
  privacy: {
    title: "Privacy Policy",
    body: [
      ["Information collected","V1 may collect information you voluntarily submit through the contact form, such as your name, email address, selected brand, subject and message."],
      ["Form processing","Contact submissions are processed through Netlify Forms. Netlify may process submission data according to its own services and policies."],
      ["Use of information","Submitted information is used to respond to enquiries, collaborations and brand-related communications. V1 does not intentionally collect sensitive personal information through the contact form."],
      ["External links","The website links to third-party platforms. Their privacy practices are governed by their respective policies."],
      ["Updates","This policy may be updated as the Moonove website evolves."]
    ]
  },
  terms: { title:"Terms of Use", body:[["Website use","Use Moonove for lawful purposes and do not attempt to interfere with its operation."],["Intellectual property","Moonove's original branding, website design, original written content and original creative material should not be reproduced without appropriate permission."],["External links","Moonove may link to third-party platforms and is not responsible for their availability or content."],["Limitations","Website content is provided for general informational and creative purposes and may change without notice."]] },
  copyright: { title:"Copyright", body:[["Moonove material","Moonove's original branding, website design, original written content and original creative material are protected to the extent applicable."],["Third-party material","Names, trademarks, promotional references, images or media belonging to third parties remain the property of their respective owners."],["Requests","For rights-related questions or concerns, use the contact page to reach the relevant brand."]] },
  disclaimer: { title:"Content Disclaimer", body:[["Original and referenced content","Moonove may discuss or reference third-party names, trademarks, shows, platforms, images or media. Such references do not imply ownership or endorsement."],["Entertainment content","Drama recommendations and entertainment references are informational and subjective."],["Educational content","Learnove Academy provides educational resources for NEET preparation; content should not be treated as a guarantee of exam outcomes."],["Changes","Content and links may change as the brands evolve."]] }
};

export default function LegalPage({ type }) {
  const page = pages[type];
  return <div className="container-shell max-w-4xl pt-36 pb-28">
    <Helmet><title>{page.title} — Moonove</title><meta name="description" content={`${page.title} for Moonove Creative Collective.`} /></Helmet>
    <div className="eyebrow">Supporting page</div><h1 className="display mt-5 text-5xl font-extrabold sm:text-7xl">{page.title}</h1>
    <div className="mt-14 space-y-10">{page.body.map(([h,p])=><section key={h}><h2 className="text-xl font-bold">{h}</h2><p className="muted mt-3 leading-8">{p}</p></section>)}</div>
  </div>;
}
