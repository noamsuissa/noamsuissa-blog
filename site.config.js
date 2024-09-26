const CONFIG = {
  // profile setting (required)
  profile: {
    name: "noam suissa",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "ml/full-stack engineer",
    bio: "coding...👨‍💻",
    email: "noam.suissa01@gmail.com",
    linkedin: "noamsuissa18",
    github: "noamsuissa",
    instagram: "",
  },
  projects: [
    {
      name: `noamsuissa-blog`,
      href: "https://github.com/noamsuissa/noamsuissa-blog",
    },
    {
      name: `portfolio`,
      href: "https://noamaidev.com",
    },
  ],
  // blog setting (required)
  blog: {
    title: "noam suissa's blog",
    description: "welcome to my blog!",
    scheme: "light", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://blog.noamaidev.com",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "/og1.png", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false, // Changed to false since we're switching to Giscus
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  giscus: {
    enable: true,
    config: {
      repo: "noamsuissa/noamsuissa-blog",
      repoId: "R_kgDOM2fyOA",
      category: "Announcements",
      categoryId: "DIC_kwDOM2fyOM4Ci00V",
      mapping: "og:title",
      reactionsEnabled: "1",
      emitMetadata: "0",
      inputPosition: "top",
      lang: "en",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 600, // revalidate time for [slug], index
}

module.exports = { CONFIG }
