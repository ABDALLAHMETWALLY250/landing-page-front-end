<script setup lang="ts">
import productsData from "@/data/products.json";

const activeTab = ref("All categories");

const changeTab = (tab: string) => {
  activeTab.value = tab;
};

const filteredProducts = computed(() => {
  if (activeTab.value === "All categories") {
    return productsData;
  }
  return productsData.filter((product) => product.category === activeTab.value);
});
</script>
  
  <template>
  <div class="products !mt-20">
    <div class="container !mx-auto">
      
      <HomeOurProductsHeader />

      <HomeOurProductsTabs @tabChange="changeTab" />

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
          class="!mt-10 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10"
        >
          <CardsOurProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </Transition>
    </div>
  </div>
</template>
  