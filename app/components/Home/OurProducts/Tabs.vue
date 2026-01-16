<script setup lang="ts">
import { ref, defineEmits } from "vue";

const emit = defineEmits<{
  (e: "tabChange", tab: string): void;
}>();

const tabs = [
  "All categories",
  "Special offers",
  "Best seller",
  "Coffee",
  "Coffee equipment",
];

const activeTab = ref("All categories");

const selectTab = (tab: string) => {
  activeTab.value = tab;
  emit("tabChange", tab);
};
</script>
  
  <template>
  <div class="tabs !mt-5 flex flex-wrap justify-center gap-5 px-4">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="selectTab(tab)"
      class="relative pb-2 text-[20px] transition-colors duration-300"
      aria-label="Select tab"
      :class="
        activeTab === tab
          ? 'text-[#004876] font-medium'
          : 'text-[#3B2F2F]/70 hover:text-[#3B2F2F]'
      "
    >
      {{ tab }}

      <span
        class="absolute left-0 bottom-0 h-[2px] w-full bg-[#004876] transition-transform duration-300"
        :class="activeTab === tab ? 'scale-x-100' : 'scale-x-0'"
        style="transform-origin: left"
      />
    </button>
  </div>
</template>
  