<script setup lang="ts">
import heroSection from "~/data/heroSection.json";

const data = heroSection;
</script>

<template>
  <div class="hero-section">
    <div class="swiper-container">
      <HomeHeroSectionImagesSwiper />
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
        $t("Get your ordered (better) coffee delivered to you if you want.")
      }}</span>
      <div class="actions">
        <button class="btn">
          <span>{{ data.sale }}</span>
          <IconsArrowDown />
        </button>
        <IconsCart class="w-10 h-12" />
      </div>
    </div>
  </div>
</template>

