export const brands = [
  {
    name: "Moonlit Visual",
    slug: "moonlit-visual",
    route: "/brands/moonlit-visual",
    description:
      "A drama-focused entertainment platform sharing recommendations, emotional edits, thrillers and stories from Korean, Chinese, Japanese and other Asian dramas.",
    shortDescription:
      "Drama recommendations, emotional edits and Asian entertainment.",
    image: "/assets/moonlit-visual/logo.png",
    category: "Entertainment",
    audience: "7K+ Across Platforms",
    accent: "moonlit",
    contentAreas: ["K-drama", "C-drama", "J-drama", "Recommendations", "Emotional edits", "Thrillers"],
    platforms: [
      { name: "Instagram", href: "https://www.instagram.com/moonlit_visual" },
      { name: "YouTube", href: "https://www.youtube.com/@moonlit_visual" },
      { name: "Facebook", href: "https://www.facebook.com/share/1FygHG8VM3" },
      { name: "X", href: "https://x.com/moonlit_visual" },
      { name: "Threads", href: "https://www.threads.com/@moonlit_visual" }
    ],
    stats: { Instagram: "5,081", YouTube: "292", Facebook: "2,177", Threads: "11", X: "New" },
    faq: [
      ["What kind of dramas does Moonlit Visual cover?", "Moonlit Visual focuses on Korean, Chinese, Japanese and other Asian dramas when relevant to the content."],
      ["Where can I follow Moonlit Visual?", "You can connect through its listed social platforms, including Instagram, YouTube, Facebook, X and Threads."],
      ["What type of content is published?", "Content includes recommendations, emotional edits, thriller-related content and general drama entertainment."],
      ["Can viewers request recommendations?", "Yes. Use the contact page to send a recommendation request or enquiry."],
      ["How can someone collaborate?", "Use the contact form and select Moonlit Visual as the brand."]
    ]
  },
  {
    name: "C.K. Drama World",
    slug: "ck-drama-world",
    route: "/brands/ck-drama-world",
    description:
      "An aesthetic drama space dedicated to discovering stories, recommendations and visually engaging entertainment content.",
    shortDescription: "An aesthetic drama space for stories and visual entertainment.",
    image: "/assets/ck-drama-world/identity.jpg",
    category: "Entertainment",
    audience: "1.4K+ Audience",
    accent: "ck",
    contentAreas: ["Aesthetic content", "Drama recommendations", "Visual storytelling"],
    platforms: [
      { name: "Instagram", href: "https://www.instagram.com/c.k.drama_world" }
    ],
    faq: [
      ["What is C.K. Drama World?", "C.K. Drama World is a drama entertainment brand focused on aesthetic content, recommendations and visual storytelling."],
      ["What kind of drama content is shared?", "The brand shares visually engaging drama content, recommendations and aesthetic entertainment."],
      ["Where can I follow it?", "C.K. Drama World is currently represented on Instagram."],
      ["Can viewers request recommendations?", "Yes. Use the contact page to send a recommendation request or enquiry."],
      ["How can someone collaborate?", "Use the contact form and select C.K. Drama World as the brand."]
    ]
  },
  {
    name: "Learnove Academy",
    slug: "learnove-academy",
    route: "/brands/learnove-academy",
    description:
      "A NEET-focused learning platform providing Physics, Chemistry and Biology content, including PYQs, notes and study resources.",
    shortDescription: "NEET-focused learning resources across Physics, Chemistry and Biology.",
    image: "/assets/learnove-academy/logo.png",
    category: "Learning",
    audience: "1K+ Across Platforms",
    accent: "learnove",
    contentAreas: ["Physics", "Chemistry", "Biology", "NEET PYQs", "Notes", "Study resources"],
    platforms: [
      { name: "YouTube", href: "https://www.youtube.com/@Learnove_Official" },
      { name: "Instagram", href: "https://www.instagram.com/learnove_official" }
    ],
    publicEmail: "learnoveacademy@gmail.com",
    faq: [
      ["What is Learnove Academy?", "Learnove Academy is a NEET-focused educational content platform."],
      ["Which NEET subjects are covered?", "The platform covers Physics, Chemistry and Biology."],
      ["What kind of PYQ content is available?", "The content includes NEET previous-year-question resources and educational explanations."],
      ["Are notes/study resources available?", "Notes, study resources and PDFs may be provided where applicable."],
      ["Where can students follow the content?", "Students can connect through Learnove Academy's YouTube and Instagram platforms."]
    ]
  }
];

export const brandBySlug = Object.fromEntries(brands.map((brand) => [brand.slug, brand]));
