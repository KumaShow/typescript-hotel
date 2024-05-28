<template>
  <!-- FIXME: 登入、註冊頁需要背景黑的 -->
  <div class="bg-background fixed top-0 w-full z-50">
    <header class="container text-white">
      <div class="flex items-center justify-between py-6">
        <router-link to="/" class="">
          <img
            class="w-28 h-10 md:w-[196px] md:h-[72px]"
            src="@/assets/img/pc/logo.png"
            alt="享樂酒店"
          />
        </router-link>
        <div class="md:hidden cursor-pointer p-2" @click="openMenu">
          <app-icon icon="ion:menu" width="24" height="24" />
        </div>
        <nav class="hidden md:flex items-center space-x-2">
          <template v-for="nav in navLinks" :key="nav.path">
            <router-link
              :to="nav.path"
              class="font-bold rounded-lg px-8 py-4 transition-all duration-300"
              :class="nav.class"
            >
              {{ nav.name }}
            </router-link>
          </template>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
const openMenu = () => {
  console.log('openMenu');
};

const navLinks = [
  {
    name: '客房旅宿',
    path: '/rooms',
    class: 'hover:bg-primary-120',
  },
  {
    name: '會員登入',
    path: '/login',
    class: 'hover:bg-primary-120',
  },
  {
    name: '立即訂房',
    path: '/',
    class: 'bg-primary-100 hover:bg-primary-120',
  },
];
</script>
