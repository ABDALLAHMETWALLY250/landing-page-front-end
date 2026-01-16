<script setup lang="ts">
const isSidebarOpen = ref(false);
const sidebar = ref<HTMLElement | null>(null);

const menuItems = ["Home"];

const { locale } = useI18n();

const toggleSidebar = (e: Event) => {
  e.stopPropagation();
  isSidebarOpen.value = !isSidebarOpen.value;
};

const closeSidebar = () => {
  isSidebarOpen.value = false;
};
</script>
    


<template>
  <nav class="nav">
    <div class="nav-wrapper">
      <Transition name="fade">
        <div v-if="isSidebarOpen" @click="closeSidebar" class="overlay"></div>
      </Transition>

      <Transition name="slide">
        <aside v-if="isSidebarOpen" ref="sidebar" class="sidebar">
          <div class="sidebar-content">
            <button
              @click="closeSidebar"
              class="close-btn"
              aria-label="Close sidebar"
            >
              ✕
            </button>

            <h1 class="logo">Neop</h1>

            <ul class="menu">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="menu-item"
                :style="{ animationDelay: `${index * 50}ms` }"
              >
                <NuxtLink :to="`/${locale}`" class="menu-link">
                  {{ item }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </aside>
      </Transition>

      <div class="content">
        <div class="top-bar">
          <NuxtImg src="/images/logo.png" alt="logo" class="logo" />

          <div class="actions">
            <LayoutChangeLanguage />
            <IconsCart />

            <button
              @click="toggleSidebar"
              class="menu-btn"
              aria-label="Toggle sidebar"
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
  