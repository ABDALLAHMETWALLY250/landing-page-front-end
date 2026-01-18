<script setup lang="ts">
import HomeHeroSection from '@/components/Home/HeroSection/index.vue'
import HomeBrands from '@/components/Home/Brands.vue'
import HomeOurProducts from '@/components/Home/OurProducts/index.vue'
import HomeOurShop from '@/components/Home/OurShop/Index.vue'
</script>

<template>
  <div class="home">
    <HomeHeroSection />
    <HomeBrands />
    <HomeOurProducts />
    <HomeOurShop />

    <div class="w-full" data-aos="zoom-in">
      <img
        src="/gifs/dda15be9ebcd2eadf8201d558c4bf5c59c4fc7b4.gif"
        class="w-[203px] h-[203px] !mt-20"
        alt="gif"
        loading="lazy"
      />
    </div>
  </div>
</template>

