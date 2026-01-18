<script setup>
defineProps({
  reviews: {
    type: Array,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});
</script>
  
  <template>
  <div id="reviews" class="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
    <div
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4"
    >
      <div>
        <h2
          class="text-3xl font-bold mb-2"
          style="color: var(--SectionHeaderTitleColor)"
        >
          {{ $t('Customer Reviews') }}
        </h2>
      </div>
      <div class="flex flex-col items-start sm:items-end">
        <div class="flex items-baseline gap-2 mb-1">
          <span
            class="text-5xl font-bold"
            style="color: var(--SectionHeaderTitleColor)"
          >
            {{ rating }}
          </span>
          <span class="text-gray-500 text-lg">/5</span>
        </div>
        <div class="flex items-center gap-1">
          <svg
            v-for="i in 5"
            :key="i"
            class="w-5 h-5"
            :class="
              i <= Math.floor(rating) ? 'text-amber-400' : 'text-gray-300'
            "
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
      
      </div>
    </div>

    <div class="space-y-6">
      <div
        v-for="(review, index) in reviews"
        :key="index"
        class="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
      >
        <div class="flex items-start justify-between mb-3">
          <div class="flex items-center gap-3">
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
              style="
                background: linear-gradient(
                  135deg,
                  var(--PrimaryColor),
                  var(--SecondaryColor)
                );
              "
            >
              {{ review.name.charAt(0) }}
            </div>
            <div>
              <div
                class="font-semibold"
                style="color: var(--SectionHeaderTitleColor)"
              >
                {{ review.name }}
              </div>
              <div class="text-sm text-gray-500">{{ review.date }}</div>
            </div>
          </div>
          <div
            class="flex items-center gap-1 bg-amber-50 px-3 py-1 rounded-full"
          >
            <svg
              class="w-4 h-4 text-amber-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="font-semibold text-amber-700 text-sm">
              {{ review.rating }}
            </span>
          </div>
        </div>
        <p class="text-gray-700 leading-relaxed pl-15">
          {{ review.comment }}
        </p>
      </div>
    </div>
  </div>
</template>