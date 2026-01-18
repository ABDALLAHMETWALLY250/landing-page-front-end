<script setup lang="ts">
import productsData from '@/data/products.json'
import { computed, ref } from 'vue'
import HomeOurProductsHeader from '@/components/Home/OurProducts/Header.vue'
import HomeOurProductsTabs from '@/components/Home/OurProducts/Tabs.vue'
import CardsOurProductCard from '@/components/Cards/OurProductCard.vue'

const activeTab = ref('All categories')

const changeTab = (tab: string) => {
  activeTab.value = tab
}

const filteredProducts = computed(() => {
  if (activeTab.value === 'All categories') {
    return productsData
  }
  return productsData.filter((product) => product.category === activeTab.value)
})
</script>
  
  <template>
  <div class="products !mt-20">
    <div class="container !mx-auto">
      <HomeOurProductsHeader data-aos="zoom-in" />

      <HomeOurProductsTabs
        @tabChange="changeTab"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
      />

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in absolute"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          :key="activeTab"
          class="!mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-10"
        >
          <CardsOurProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>
  