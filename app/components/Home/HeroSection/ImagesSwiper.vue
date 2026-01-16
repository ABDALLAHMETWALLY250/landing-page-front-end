<script setup lang="ts">
const { locale } = useI18n();

const slides = ref([
  {
    id: 1,
    image: "/images/Coffee Beans.png",
    alt: "Coffee Product 1",
  },
  {
    id: 2,
    image: "/images/bc1a7d0b38e15540379068957cb03dd05dfe1ff4.png",
    alt: "Coffee Beans",
  },
  {
    id: 3,
    image: "/images/Coffee Beans.png",

    alt: "Coffee Product 2",
  },
  {
    id: 4,
    image: "/images/bc1a7d0b38e15540379068957cb03dd05dfe1ff4.png",

    alt: "Coffee Beans",
  },
  {
    id: 5,
    image: "/images/Coffee Beans.png",

    alt: "Coffee Product 3",
  },
  {
    id: 6,
    image: "/images/bc1a7d0b38e15540379068957cb03dd05dfe1ff4.png",

    alt: "Coffee Beans",
  },
  {
    id: 7,
    image: "/images/Coffee Beans.png",

    alt: "Coffee Product 4",
  },
  {
    id: 8,
    image: "/images/bc1a7d0b38e15540379068957cb03dd05dfe1ff4.png",

    alt: "Coffee Beans",
  },
  {
    id: 9,
    image: "/images/Coffee Beans.png",

    alt: "Coffee Product 5",
  },
  {
    id: 10,
    image: "/images/bc1a7d0b38e15540379068957cb03dd05dfe1ff4.png",

    alt: "Coffee Beans",
  },
]);

const swiperBasicRef = ref(null);

const handlePrev = () => {
  if (swiperBasicRef.value?.swiper) {
    swiperBasicRef.value.swiper.slidePrev();
  }
};

const handleNext = () => {
  if (swiperBasicRef.value?.swiper) {
    swiperBasicRef.value.swiper.slideNext();
  }
};
</script>
            
    <template>
  <div class="swiper-wrapper">
    <div class="swiper-wrapper__inner">
      <ClientOnly>
        <swiper-container
          ref="swiperBasicRef"
          class="swiper-basic"
          :loop="true"
          :speed="800"
          :breakpoints="{
            768: {
              slidesPerView: 1,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 1.1,
              centeredSlides: true,
            },
            1280: {
              slidesPerView: 1.1,
              centeredSlides: true,
            },
          }"
          :key="locale"
          :dir="locale === 'ar' ? 'rtl' : 'ltr'"
        >
          <swiper-slide
            v-for="slide in slides"
            :key="`slide-basic-${slide.id}`"
            class="swiper-slide"
            :style="`${
              slide.id % 2
                ? `background: linear-gradient(90deg, #004876 0%, #1E71A6 100%);`
                : `background: linear-gradient(90deg, #6F4336 0%, #3B2F2F 100%);`
            } `"
            style="border-radius: 50%; width: fit-content"
          >
            <NuxtImg :src="slide.image" alt="Coffee Beans" />
          </swiper-slide>
        </swiper-container>

        <div class="swiper-basic-buttons">
          <button @click="handlePrev" class="swiper-button-prev">
            <IconsArrowPrev
              :style="
                locale === 'ar'
                  ? 'transform: rotate(180deg)'
                  : 'transform: rotate(0deg)'
              "
            />
          </button>
          <button @click="handleNext" class="swiper-button-next">
            <IconsArrowNext
              :style="
                locale === 'ar'
                  ? 'transform: rotate(180deg)'
                  : 'transform: rotate(0deg)'
              "
            />
          </button>
        </div>
      </ClientOnly>
    </div>
  </div>
</template>