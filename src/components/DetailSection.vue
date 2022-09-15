<template>
  <main>
    <div class="flex px-20 items-start justify-between pt-20 w-full" :class="[imgLeft ? 'bg-white flex-row-reverse' : 'bg-[#FFFAFB]']">
      <div>
        <p v-if="label" class="text-white bg-black rounded-xl font-semibold text-base w-48 py-2.5 px-6 mb-8">{{ labelText }}</p>
        <slot name="text" />
        <div class="border-b-2 w-full border-black border-opacity-10"></div>
        <div>
          <p class="font-normal text-base text-brand-black text-opacity-80">
            “Careerbuddy supported me in every step of the hiring process and even helped me get favorable working terms with my employers.”
          </p>
          <div class="flex">
            <img class="w-11 h-11 rounded-full object-cover" :src="profile" alt="profile" />
            <div>
              <p class="font-bold text-base text-brand-black">{{ name }}</p>
              <p class="font-normal text-xs text-brand-black text-opacity-80">{{ role }}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <slot name="image" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { defineProps } from 'vue';
import Button from '@/components/Button.vue';
defineProps({
  label: Boolean,
  imgLeft: Boolean,
  labelText: String,
  profile: Image,
  name: String,
  role: String,
});
</script>
