<script setup lang="ts">
import cards from '@/data/ourShopCards.json'
import CardsOurShopsCard from '@/components/Cards/OurShopsCard.vue'

const cardsData = cards
</script>
  
  <template>
  <div class="our-shop">
    <div class="shop-grid">
      <!-- Left Image Section -->
      <div class="left-image" data-aos="zoom-in">
        <div class="images">
          <img
            src="/images/ourShopbg.webp"
            class="first-image"
            alt="Shop background"
            loading="lazy"
          />
          <img
            src="/images/coffePacks.png"
            class="coffee-packs"
            alt="Coffee packs"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Right Text & Cards Section -->
      <div class="content-section">
        <!-- Heading -->
        <div class="heading-wrapper">
          <p class="main-heading">
            {{ $t('Welcome to Our Shop') }}
          </p>
          <span class="sub-heading">
            {{ $t('The coffee you want, when you want it.') }}
          </span>
        </div>

        <!-- Cards Grid -->
        <div class="cards-grid">
          <CardsOurShopsCard
            v-for="item in cardsData"
            :key="item.id"
            :title="item.title"
            :description="item.description"
            :image="item.image"
            data-aos="zoom-in"
          />
        </div>
      </div>
    </div>
  </div>
</template>