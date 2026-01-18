import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import AOS from 'aos'
import 'aos/dist/aos.css'

// marquee
import Vue3Marquee from 'vue3-marquee'

// i18n
import { createI18n } from 'vue-i18n'
import enLocale from './i18n/locales/en.json'
import arLocale from './i18n/locales/ar.json'

// css
import './assets/styles/main.css'

const i18n = createI18n({
  legacy: false,
  silentDeprecationWarnings: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: enLocale,
    ar: arLocale,
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Marquee)
app.use(i18n)

app.mount('#app')

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out',
})

// Refresh AOS on route change
router.afterEach(() => {
  setTimeout(() => {
    AOS.refresh()
  }, 100)
})
