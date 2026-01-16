<script setup>
import { ref, computed } from "vue";
import productData from "~/data/product.json";

const product = ref(productData);
const activeImage = ref(productData.images[0]);
const quantity = ref(1);

const discountedPrice = computed(() => {
  return (
    product.value.price -
    (product.value.price * product.value.discount) / 100
  ).toFixed(2);
});

const addToCart = () => {
  console.log("Added to cart", {
    product: product.value,
    quantity: quantity.value,
  });
  alert(`Added ${quantity.value} item(s) to cart!`);
};
</script>
  
  <template>
  <div class="min-h-screen bg-gray-50">
    <div class="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
        <ProductsDetailsImageGallery
          :images="product.images"
          :activeImage="activeImage"
          :discount="product.discount"
          :productTitle="product.title"
          @update:activeImage="activeImage = $event"
        />

        <ProductsDetailsInfo
          :product="product"
          :quantity="quantity"
          :discountedPrice="discountedPrice"
          @update:quantity="quantity = $event"
          @addToCart="addToCart"
        />
      </div>

      <ProductsDetailsReviews
        :reviews="product.reviews"
        :rating="product.rating"
      />
    </div>
  </div>
</template>