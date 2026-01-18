<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:quantity", "addToCart"]);

const decreaseQuantity = () => {
  if (props.quantity > 1) {
    emit("update:quantity", props.quantity - 1);
  }
};

const increaseQuantity = () => {
  emit("update:quantity", props.quantity + 1);
};

const handleAddToCart = () => {
  emit("addToCart");
};
</script>
    
    <template>
  <div class="flex flex-col">
    <!-- Rating & Reviews -->
    <div class="flex items-center gap-4 mb-4">
      <div class="flex items-center gap-1">
        <svg
          v-for="i in 5"
          :key="i"
          class="w-5 h-5"
          :class="
            i <= Math.floor(product.rating) ? 'text-amber-400' : 'text-gray-300'
          "
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
          />
        </svg>
      </div>
      <span class="font-medium" style="color: var(--SectionHeaderTitleColor)">
        {{ product.rating }}
      </span>
      <span class="text-gray-500">•</span>
      <a href="#reviews" class="text-gray-600 hover:opacity-70 underline">
        {{ product.reviews.length }} reviews
      </a>
    </div>

    <h1
      class="text-4xl lg:text-5xl font-bold mb-4 leading-tight"
      style="color: var(--SectionHeaderTitleColor)"
    >
      {{ product.title }}
    </h1>

    <p class="text-lg text-gray-600 leading-relaxed mb-8">
      {{ product.description }}
    </p>

    <div
      class="text-white p-6 rounded-2xl mb-8 shadow-lg"
      style="background-color: var(--PrimaryColor)"
    >
      <div class="flex items-baseline gap-3 mb-1">
        <span class="text-4xl font-bold"> ${{ discountedPrice }} </span>
        <span
          v-if="product.discount"
          class="text-xl text-gray-300 line-through"
        >
          ${{ product.price }}
        </span>
      </div>
      <p class="text-gray-100 text-sm flex items-center gap-2">
        <svg
          class="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Free shipping on orders over $50
      </p>
    </div>

    <div v-if="product.features" class="mb-8">
      <h3
        class="text-sm font-semibold uppercase tracking-wide mb-4"
        style="color: var(--SectionHeaderTitleColor)"
      >
        {{ $t("What's Included") }}
      </h3>
      <div class="grid grid-cols-2 gap-3">
        <div
          v-for="(feature, index) in product.features"
          :key="index"
          class="flex items-center gap-2 text-gray-700"
        >
          <svg
            class="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            style="color: var(--PrimaryColor)"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span class="text-sm font-medium">{{ feature }}</span>
        </div>
      </div>
    </div>

    <div class="flex items-center gap-4 mb-6">
      <label
        class="text-sm font-semibold uppercase tracking-wide"
        style="color: var(--SectionHeaderTitleColor)"
      >
        {{ $t("Quantity") }}
      </label>
      <div
        class="flex items-center border-2 rounded-xl overflow-hidden"
        style="border-color: var(--PrimaryColor)"
      >
        <button
          @click="decreaseQuantity"
          class="px-4 py-2 hover:opacity-70 transition-colors text-white"
          style="background-color: var(--PrimaryColor)"
          aria-label="Decrease quantity"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            />
          </svg>
        </button>
        <span
          class="px-6 py-2 text-lg font-semibold min-w-[60px] text-center"
          style="color: var(--SectionHeaderTitleColor)"
        >
          {{ quantity }}
        </span>
        <button
          @click="increaseQuantity"
          class="px-4 py-2 hover:opacity-70 transition-colors text-white"
          style="background-color: var(--PrimaryColor)"
          aria-label="Increase quantity"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-3">
      <button
        @click="handleAddToCart"
        class="flex-1 text-white py-4 px-8 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
        style="background-color: var(--PrimaryColor)"
        aria-label="Add to cart"
      >
        {{ $t("Add to Cart") }} • ${{ (discountedPrice * quantity).toFixed(2) }}
      </button>
      <button
        class="px-6 py-4 border-2 rounded-xl hover:opacity-70 transition-colors"
        style="
          border-color: var(--SecondaryColor);
          color: var(--SecondaryColor);
        "
        aria-label="Add to wishlist"
      >
        <svg
          class="w-6 h-6 mx-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span class="text-xs font-semibold mt-1 block">{{
          $t("Wishlist")
        }}</span>
      </button>
    </div>
  </div>
</template>