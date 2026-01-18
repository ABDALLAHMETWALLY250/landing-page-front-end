// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "nuxt-swiper",
    "nuxt-marquee",
    "@nuxtjs/i18n",
    "nuxt-aos",
  ],
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
      title: "landing page",
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          name: "description",
          content: "Neop Task",
        },
      ],
      htmlAttrs: {
        lang: "en",
        dir: "ltr",
      },
    },
  },

  aos: {
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  },
});
