<script setup lang="ts">
import cards from "@/data/ourShopCards.json";

const cardsData = cards;

// Only initialize AOS on client side
onMounted(() => {
  if (process.client && typeof window !== "undefined") {
    import("aos").then((AOS) => {
      AOS.default.init({
        // Your AOS config here
        duration: 800,
        once: true,
      });
    });
  }
});
</script>
  
  <template>
  <div class="our-shop">
    <div class="shop-grid">
      <!-- Left Image Section -->
      <ClientOnly>
        <div class="left-image" data-aos="zoom-in">
          <div class="images">
            <NuxtImg
              src="/images/ourShopbg.webp"
              class="first-image"
              alt="Shop background"
              loading="lazy"
            />
            <NuxtImg
              src="/images/coffePacks.png"
              class="coffee-packs"
              alt="Coffee packs"
              loading="lazy"
            />
          </div>
        </div>
        <template #fallback>
          <div class="left-image">
            <div class="images">
              <NuxtImg
                src="/images/ourShopbg.webp"
                class="first-image"
                alt="Shop background"
                loading="lazy"
              />
              <NuxtImg
                src="/images/coffePacks.png"
                class="coffee-packs"
                alt="Coffee packs"
                loading="lazy"
              />
            </div>
          </div>
        </template>
      </ClientOnly>

      <!-- Right Text & Cards Section -->
      <div class="content-section">
        <!-- Heading -->
        <div class="heading-wrapper">
          <p class="main-heading">
            {{ $t("Welcome to Our Shop") }}
          </p>
          <span class="sub-heading">
            {{ $t("The coffee you want, when you want it.") }}
          </span>
        </div>

        <!-- Cards Grid -->
        <div class="cards-grid">
          <ClientOnly>
            <CardsOurShopsCard
              v-for="item in cardsData"
              :key="item.id"
              :title="item.title"
              :description="item.description"
              :image="item.image"
              data-aos="zoom-in"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </div>
</template>