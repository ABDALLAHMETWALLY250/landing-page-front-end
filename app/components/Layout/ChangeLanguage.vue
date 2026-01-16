<script setup lang="ts">
const { locale, setLocale } = useI18n();

onMounted(() => {
  document.documentElement.lang = locale.value;
  document.documentElement.dir = locale.value === "ar" ? "rtl" : "ltr";
});

watch(
  () => locale.value,
  () => {
    document.documentElement.lang = locale.value;
    document.documentElement.dir = locale.value === "ar" ? "rtl" : "ltr";
  }
);
</script>
    
    <template>
  <div class="change-language">
    <button
      @click="setLocale('ar')"
      class="lang-btn"
      aria-label="Switch to Arabic"
      v-show="locale !== 'ar'"
    >
      <IconsAr />
    </button>

    <button
      @click="setLocale('en')"
      class="lang-btn"
      aria-label="Switch to English"
      v-show="locale !== 'en'"
    >
      <IconsEn />
    </button>
  </div>
</template>