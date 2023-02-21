<template>
  <main>
    <!-- w-[454px] -->
    <div class="md:flex items-center justify-between w-full">
      <div class="md:w-1/2 lg:pr-28">
        <Label class="flex" v-if="labelText" :labelText="labelText" />
        <p
          :class="[white ? 'text-white' : 'text-brand-black']"
          class="text-5xl md:-text-4xl md:w-auto lg:text-[60px] font-albertExtraBold lg:leading-[64px] mb-5 md:mb-3"
        >
          {{ title }}
        </p>
        <p class="font-albertSmall mb-8 pr-12 md:pr-0" :class="[white ? 'text-white' : 'text-brand-black']">
          {{ caption }}
        </p>
        <slot name="button" />
      </div>
      <!-- image slider  -->
      <div class="md:w-1/2 relative overflow-hidden h-[350px] lg:h-[450px] w-full">
        <!-- light divs  -->
        <div class="w-[480px] h-[420px] absolute hidden lg:block top-0 left-0 bg-[#D9D9D9] opacity-40 ml-9 rounded-lg mt-[15px]"></div>
        <div class="w-[460px] h-[390px] absolute hidden lg:block top-0 left-0 bg-[#D9D9D9] opacity-20 ml-[72px] rounded-lg mt-[30px]"></div>
        <div class="w-[440px] h-[360px] absolute hidden lg:block top-0 left-0 bg-[#D9D9D9] opacity-10 ml-[110px] rounded-lg mt-[45px]"></div>

        <!-- image sliding -->
        <div
          class="absolute md:left-[50%] lg:left-0 md:-translate-x-[50%] lg:-translate-x-[0] slide w-full h-[300px] md:w-[300px] lg:w-[500px] lg:h-[450px] overflow-hidden rounded-lg"
          :class="currentIndex === index && 'active'"
          v-for="(items, index) in images"
          :key="index"
        >
          <img :src="items" class="w-full h-full object-cover" alt="image" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Label from '@/components/Label.vue';
export default {
  props: { title: String, caption: String, labelText: String, white: Boolean },
  components: {
    Label,
  },
  data() {
    return {
      images: [require('@/assets/images/hero.png'), require('@/assets/images/sales.png'), require('@/assets/images/man.png')],
      currentIndex: 0,
      intervalId: null,
    };
  },
  created() {
    this.startAutoPlay();
  },
  methods: {
    startAutoPlay() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 4000); // set the interval time in milliseconds
    },
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % 3; // set the number of slides
    },
  },
};
</script>

<style>
.slide {
  transition: 0.5s ease-in-out;
  opacity: 0;
}

.active {
  opacity: 1;
  z-index: 10;
}
</style>
