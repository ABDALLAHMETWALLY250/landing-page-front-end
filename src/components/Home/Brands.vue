<script setup lang="ts">
import BrandsData from '@/data/brands.json'

const dataBrands = BrandsData
</script>

<template>
  <div class="brands !mt-8">
    <Vue3Marquee :loop="1" :pause-on-hover="true" direction="left">
      <div class="flex gap-20 w-full items-center">
        <div class="flex gap-20 w-full items-center" v-for="brand in dataBrands" :key="brand.id">
          <img :src="brand.image" class="w-[28px] h-[28px]" alt="brand image" />
          <p class="text-[24px] text-[#6F4336]">{{ brand.title }}</p>
        </div>
      </div>
    </Vue3Marquee>
  </div>
</template>
