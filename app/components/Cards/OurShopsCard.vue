<script setup lang="ts">
const { title, description, image } = defineProps<{
  title: string;
  description: string;
  image: string;
}>();
</script>

<template>
  <div class="flex w-full items-center gap-3">
    <NuxtImg :src="image" class="w-[81px] h-[81px]" />
    <div class="flex flex-col gap-3">
      <p class="text-[#004876] font-bold text-[16px]">{{ title }}</p>
      <span class="text-[#292625] font-normal w-[100%] text-[12px]">
        {{ description }}
      </span>
    </div>
  </div>
</template>
