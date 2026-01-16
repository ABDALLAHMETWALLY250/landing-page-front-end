<template>
  <div class="home">
    <HomeHeroSection />
    <HomeBrands />
    <LazyHomeOurProducts hydrate-on-visible />
    <LazyHomeOurShop hydrate-on-visible />

    <div class="w-full" data-aos="zoom-in">
      <NuxtImg
        src="/gifs/dda15be9ebcd2eadf8201d558c4bf5c59c4fc7b4.gif"
        class="w-[203px] h-[203px] !mt-20"
        alt="gif"
        loading="lazy"
      />
    </div>
  </div>
</template>

