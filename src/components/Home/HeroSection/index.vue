<script setup lang="ts">
import heroSection from '@/data/heroSection.json'
import HomeHeroSectionImagesSwiper from '@/components/Home/HeroSection/ImagesSwiper.vue'
import IconsArrowDown from '@/components/Icons/ArrowDown.vue'
import IconsCart from '@/components/Icons/Cart.vue'
import IconsCoffeBit from '@/components/Icons/CoffeBit.vue'

const data = heroSection
</script>

<template>
  <div class="hero-section !mb-5">
    <div class="swiper-container">
      <HomeHeroSectionImagesSwiper :images="data.images" />
    </div>
    <div class="content-wrapper">
      <h1 class="title">
        <p class="coffee-title">
          <span class="coffee-char">
            c
            <IconsCoffeBit class="icon" />
          </span>
          <span>offee</span>
        </p>

        <p>&shop</p>
      </h1>
      <span class="description">{{
        $t('Get your ordered (better) coffee delivered to you if you want.')
      }}</span>
      <div class="actions">
        <button class="btn" aria-label="Shop Now">
          <span>{{ data.sale }}</span>
          <IconsArrowDown />
        </button>
        <IconsCart class="w-10 h-12" />
      </div>
    </div>
  </div>
</template>

