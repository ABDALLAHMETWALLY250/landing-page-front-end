// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "nuxt-swiper", "nuxt-marquee", "@nuxtjs/i18n"],
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["@/assets/styles/tailwind.css", "@/assets/styles/main.css"],

  i18n: {
    locales: [
      {
        code: "ar",
        name: "Arabic",
        file: "ar.json",
        language: "ar",
        dir: "rtl",
      },
      {
        code: "en",
        name: "English",
        file: "en.json",
        language: "en",
        dir: "ltr",
      },
    ],
  },

  app: {
    head: {
      title: "Neop Task",
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    },
  },
});
