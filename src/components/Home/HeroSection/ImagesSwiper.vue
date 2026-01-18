<script setup lang="ts">
import IconsArrowNext from '@/components/Icons/ArrowNext.vue'
import IconsArrowPrev from '@/components/Icons/ArrowPrev.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const { locale } = useI18n()

const { images } = defineProps<{
  images: {
    id: number
    image: string
    alt: string
  }[]
}>()

const swiperInstance = ref<any>(null)

const onSwiper = (swiper: any) => {
  swiperInstance.value = swiper
}

const handlePrev = () => {
  swiperInstance.value?.slidePrev()
}

const handleNext = () => {
  swiperInstance.value?.slideNext()
}
</script>
  
  <template>
  <div class="swiper-wrapper w-full">
    <div class="swiper-wrapper__inner w-full">
      <Swiper
        :key="locale"
        :dir="locale === 'ar' ? 'rtl' : 'ltr'"
        :loop="true"
        :centered-slides="true"
        :speed="800"
        :slides-per-view="1"
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
        class="swiper-basic w-full"
        @swiper="onSwiper"
      >
        <SwiperSlide
          v-for="slide in images"
          :key="`slide-basic-${slide.id}`"
          :style="{
            background:
              slide.id % 2
                ? 'linear-gradient(90deg, #004876 0%, #1E71A6 100%)'
                : 'linear-gradient(90deg, #6F4336 0%, #3B2F2F 100%)',
            borderRadius: '50%',
          }"
        >
          <img :src="slide.image" :alt="slide.alt" />
        </SwiperSlide>
      </Swiper>

      <div class="swiper-basic-buttons">
        <button @click="handlePrev" class="swiper-button-prev" aria-label="Previous slide">
          <IconsArrowPrev
            :style="locale === 'ar' ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'"
          />
        </button>
        <button @click="handleNext" class="swiper-button-next" aria-label="Next slide">
          <IconsArrowNext
            :style="locale === 'ar' ? 'transform: rotate(180deg)' : 'transform: rotate(0deg)'"
          />
        </button>
      </div>
    </div>
  </div>
</template>