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
      <div class="self-start md:w-1/2 md:flex justify-center">
        <div class="relative flex items-center">
          <!-- light divs  -->
          <div class="w-[480px] h-[420px] absolute top-0 left-0 bg-[#D9D9D9] opacity-40 ml-9 rounded-lg mt-[15px]"></div>
          <div class="w-[460px] h-[390px] absolute top-0 left-0 bg-[#D9D9D9] opacity-20 ml-[72px] rounded-lg mt-[30px]"></div>
          <div class="w-[440px] h-[360px] absolute top-0 left-0 bg-[#D9D9D9] opacity-10 ml-[110px] rounded-lg mt-[45px]"></div>
          <!-- image and overflow info  -->
          <div class="relative w-[500px] h-[450px] overflow-hidden rounded-lg">
            <img src="../assets/images/hero.png" class="w-full h-full object-cover" alt="image" />
          </div>
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
    return {};
  },
};
</script>
