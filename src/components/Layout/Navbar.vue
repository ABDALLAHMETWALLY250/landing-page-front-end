<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import LayoutChangeLanguage from '@/components/Layout/ChangeLanguage.vue'
import IconsCart from '@/components/Icons/Cart.vue'

const isSidebarOpen = ref(false)
const sidebar = ref<HTMLElement | null>(null)

const menuItems = ['Home']

const { locale } = useI18n()

const toggleSidebar = (e: Event) => {
  e.stopPropagation()
  isSidebarOpen.value = !isSidebarOpen.value
}

const closeSidebar = () => {
  isSidebarOpen.value = false
}
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
            <button @click="closeSidebar" class="close-btn" aria-label="Close sidebar">✕</button>

            <p class="text-xl font-bold">Menu</p>

            <ul class="menu">
              <li
                v-for="(item, index) in menuItems"
                :key="index"
                class="menu-item"
                :style="{ animationDelay: `${index * 50}ms` }"
              >
                <RouterLink :to="`/`" class="menu-link">
                  {{ item }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </aside>
      </Transition>

      <div class="content">
        <div class="top-bar">
          <RouterLink :to="`/`" class="logo" aria-label="Home">
            <img src="/images/logo.png" alt="logo" class="logo" />
          </RouterLink>

          <div class="actions">
            <LayoutChangeLanguage />
            <IconsCart />

            <button @click="toggleSidebar" class="menu-btn" aria-label="Toggle sidebar">☰</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
  