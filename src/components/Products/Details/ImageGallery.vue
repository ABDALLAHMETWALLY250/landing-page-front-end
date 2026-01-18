<script setup>
import { computed } from "vue";

const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
  activeImage: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  productTitle: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["update:activeImage"]);

const currentImageIndex = computed(() => {
  return props.images.indexOf(props.activeImage) + 1;
});

const setActiveImage = (image) => {
  emit("update:activeImage", image);
};
</script>
    
    <template>
  <div class="space-y-4">
    <div class="relative bg-white rounded-3xl overflow-hidden group shadow-lg">
      <img
        :src="activeImage"
        :alt="productTitle"
        class="w-full h-[500px] lg:h-[600px] object-cover"
      />

      <div
        v-if="discount"
        class="absolute top-6 right-6 px-4 py-2 rounded-full font-bold text-sm shadow-lg text-white"
        style="background-color: var(--SecondaryColor)"
      >
        SAVE {{ discount }}%
      </div>

      <div
        class="absolute bottom-6 right-6 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-medium text-white"
        style="background-color: rgba(0, 72, 118, 0.7)"
      >
        {{ currentImageIndex }} / {{ images.length }}
      </div>
    </div>

    <div class="grid grid-cols-4 gap-3">
      <button
        v-for="(img, index) in images"
        :key="index"
        @click="setActiveImage(img)"
        class="relative bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-md"
        :class="{
          'ring-2 ring-offset-2': activeImage === img,
          'ring-1 ring-gray-200 hover:ring-gray-300': activeImage !== img,
        }"
        :style="activeImage === img ? 'ring-color: var(--PrimaryColor)' : ''"
        aria-label="Select image"
      >
        <img
          :src="img"
          :alt="`${productTitle} - Image ${index + 1}`"
          class="w-full h-24 object-cover"
          :class="{ 'opacity-50': activeImage !== img }"
        />
      </button>
    </div>
  </div>
</template>