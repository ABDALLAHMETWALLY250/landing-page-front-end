<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import IconsAr from '@/components/Icons/Ar.vue'
import IconsEn from '@/components/Icons/En.vue'

const { locale } = useI18n()

const updateDocumentLanguage = (lang: string) => {
  document.documentElement.lang = lang
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
}

const toggleLocale = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar'
}

onMounted(() => {
  updateDocumentLanguage(locale.value)
})

watch(locale, (newLocale) => {
  updateDocumentLanguage(newLocale)
})
</script>
  
  <template>
  <div class="change-language">
    <button
      @click="toggleLocale"
      class="lang-btn"
      :aria-label="`Switch to ${locale === 'ar' ? 'English' : 'Arabic'}`"
    >
      <IconsAr v-if="locale === 'en'" />
      <IconsEn v-else />
    </button>
  </div>
</template>