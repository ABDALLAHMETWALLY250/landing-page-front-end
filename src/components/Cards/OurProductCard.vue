
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IconsStar from '@/components/Icons/Star.vue'

defineProps<{
  product: {
    id: number
    title: string
    author: string
    image: string
    discount: number
    rating: number
  }
}>()
const { locale } = useI18n()
</script>

<template>
  <div class="rounded-[32%] p-2 flex justify-center">
    <RouterLink
      :to="`/product/${product.id}`"
      class="block w-full group rounded-[30%] relative"
      :aria-label="product.title"
    >
      <div class="flex justify-start absolute top-5 left-7" v-show="product.discount">
        <span
          class="flex items-center justify-center rounded-lg bg-[#F9EDBD] !px-3 !py-2 text-sm font-medium text-secondary translate-x-6 translate-y-6 z-30"
        >
          -{{ product.discount }}%
        </span>
      </div>

      <div
        class="rounded-tr-[20%] rounded-tl-[20%] rounded-bl-[30%] rounded-br-[30%] bg-primary transition-all duration-300 group-hover:scale-[1.02]"
      >
        <div class="rounded-[30%] border-[10px] border-[#004876]">
          <div
            class="overflow-hidden rounded-tr-[22%] rounded-tl-[22%] rounded-bl-[30%] rounded-br-[30%] border-l-[10px] border-t-[10px] border-[#6f4336] bg-white"
          >
            <img
              :src="product.image"
              :alt="product.title"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div class="!mt-3 flex flex-col items-center text-center gap-3">
        <p class="font-medium text-secondary text-[#3B2F2F] text-[22px] font-medium">
          {{ product.title }}
        </p>
        <span class="text-[16px] font-normal text-[#8B8BA5]">{{ product.author }}</span>
        <div class="flex items-center gap-1">
          <IconsStar v-for="i in product.rating" :key="i" />
        </div>
      </div>
    </RouterLink>
  </div>
</template>
  