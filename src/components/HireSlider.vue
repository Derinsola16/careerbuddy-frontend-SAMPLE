<template>
  <div class="mt-12 md:mt-20 md:px-20 px-5 carousel md:h-[200px]">
    <div class="flex items-center justify-center space-x-6 h-full">
      <h1 class="font-albertExtraBold text-5xl md:text-6xl lg:text-7xl">Hire</h1>
      <div class="relative h-full">
        <transition-group name="slide">
          <div
            class="trans h-[70]"
            :class="currentIndex === 1 ? 'translate-y-[2px] md:translate-y-[42px] lg:translate-y-[2px]' : currentIndex === 2 ? ' -translate-y-[35px] md:translate-y-[5px] lg:-translate-y-[72px]' : 'translate-y-[43px] md:translate-y-[82px] lg:translate-y-[72px] '"
          >
            <p class="font-albert text-4xl md:text-4xl lg:text-7xl" v-for="(slide, index) in slides" :key="index" :class="currentIndex !== index && 'slide-leave-to'">
              {{ slide }}
            </p>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slides: ['Content Writers', 'Designers', 'Developer'],
      currentIndex: -1,
    };
  },
  mounted() {
    this.startSlideshow();
  },
  beforeDestroy() {
    clearInterval(this.slideshowInterval);
  },
  methods: {
    startSlideshow() {
      this.slideshowInterval = setInterval(() => {
        if (this.currentIndex < this.slides.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      }, 3000);
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  overflow: hidden;
}

.slide-leave-to {
  background-clip: text;
  background: -webkit-linear-gradient(180deg, rgba(26, 0, 4, 0) 0%, rgba(26, 0, 4, 0.06) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.trans {
  transition: transform 0.5s;
}
</style>
