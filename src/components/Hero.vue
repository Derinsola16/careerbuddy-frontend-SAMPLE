<template>
  <main>
    <div class="md:flex px-20 items-center justify-between w-full">
      <div class="w-1/2">
        <p class="text-[80px] leading-[80px] text-brand-black font-albertBold">We take the hassle out of job hunting & talent sourcing</p>
        <p class="font-normal text-xl -tracking-widest text-brand-black">
          Join the world's #1 startup community specialized in remote & local technical talent and opportunities
        </p>
      </div>
      <div class="w-1/2 grow m-auto">
        <!-- <img src="@/assets/images/hero.png" alt="hero" /> -->
        <!-- <carousel :cards="cards" :stack-width="360" :card-width="280">
          <template #card="{ card }">
            <!- <div style="width: 100%; height: 100%" :style="{ background: card.background }"></div> ->
            <img style="width: 100%; height: 100%" :src="card.background" alt="hero" />
          </template>

          <template #nav>
            <div style="width: 100%; height: 100%" :style="{ background: card.back }"></div>
          </template> 
        </carousel>-->
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from '@/components/Slider.vue';
const cards = ref([
  { background: require('@/assets/icons/nav.svg') },
  { background: require('@/assets/logo.png') },
  { background: require('@/assets/images/hero.png') },
  { background: require('@/assets/logo.png') },
  { background: require('@/assets/icons/nav.svg') },
  { background: require('@/assets/images/hero.png') },
  { back: '#fc8890' },
  { back: '#b35d7f' },
  { back: '#fc8890' },
  { back: '#b35d7f' },
  { back: '#fc8890' },
  { back: '#b35d7f' },
]);
</script>
