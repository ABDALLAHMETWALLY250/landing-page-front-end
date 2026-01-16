<template>
  <div
    class="relative !mt-20 w-full bg-gradient-to-r from-[#004876] to-[#1E71A6] !py-8 !px-5 min-h-[62vh]"
  >
    <NuxtImg
      src="/images/Group 1000010753.png"
      alt=""
      class="absolute right-0 !-top-[20rem]"
    />

    <!-- Content -->
    <div class="container !mx-auto !mt-20 max-w-4xl">
      <div
        class="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-10"
      >
        <LayoutFooterMenuLinks />
        <LayoutFooterCafeLocation />
        <LayoutFooterContact />
      </div>

      <div class="w-full !mt-20 bg-[#FFFFFF95] h-[1px]"></div>

      <div class="flex items-center justify-between !mt-20">
        <p class="font-medium text-[12px] text-[#FFFFFF95]">{{ $t("Privacy policy") }}</p>
        <LayoutFooterSocialLinks />
      </div>
    </div>
  </div>
</template>
  