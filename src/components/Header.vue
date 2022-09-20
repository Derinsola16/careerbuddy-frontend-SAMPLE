<template>
  <nav class="sticky top-0 inset-x-0 z-30 w-screen lg:px-20 py-4 px-4 bg-white mb-20">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <router-link to="/" class="hidden lg:block"><img src="@/assets/images/logo.svg" alt="logo" class="object-cover" /></router-link>
        <router-link to="/" class="lg:hidden"><img src="@/assets/images/logosmall.svg" alt="logo" class="object-cover" /></router-link>
        <p class="bg-brand-green bg-opacity-10 lg:text-sm text-xs text-brand-green rounded-full p-2.5 lg:ml-3.5 ml-2 text-center">We’re hiring! 🎉</p>
      </div>
      <Nav fill="black" class="lg:hidden" />
      <div class="lg:flex items-center hidden">
        <div v-for="item in navItems" :key="item.name" class="ml-10 text-brand-black text-opacity-60 font-normal text-base">
          <router-link :to="item.link">{{ item.name }}</router-link>
        </div>
        <Button label="Sign up" color="black" class="ml-12" />
        <Button label="Log in" color="black" outline class="ml-4" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/components/Button.vue';
import Nav from '@/assets/icons/nav.svg?inline';

const navItems = ref([
  {
    name: 'Jobseekers',
    link: '/jobseekers',
  },
  {
    name: 'For Companies',
    link: 'companies',
  },
  {
    name: 'Careers',
    link: 'careers',
  },
  {
    name: 'Blog',
    link: 'https://blog.tamborin.io/',
  },
]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-link-exact-active {
  color: #ff2449;
}
</style>
