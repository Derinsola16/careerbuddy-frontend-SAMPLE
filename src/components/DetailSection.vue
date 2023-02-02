<template>
  <main>
    <div
      class="md:flex lg:px-20 px-5 items-center justify-between lg:pt-20 pt-10 w-full pb-9"
      :class="[imgLeft ? 'bg-white flex-row-reverse' : 'bg-[#FFFAFB]']"
    >
      <div :class="[textHolder]" class="mb-12 lg:mb-0 md:w-1/2 lg:w-auto">
        <Label v-if="labelText" :labelText="labelText" class="w-44" />
        <slot name="text" />
        <div class="border-b-2 w-full border-black border-opacity-10 mb-6"></div>
        <div>
          <p class="font-normal text-sm text-brand-black text-opacity-80 mb-3.5">
            {{ testimony }}
          </p>
          <div class="flex">
            <img class="w-11 h-11 rounded-full object-cover mr-2.5" :src="profile" alt="profile" />
            <div>
              <p class="font-bold text-base text-brand-black">{{ name }}</p>
              <p class="font-normal text-xs text-brand-black text-opacity-80">{{ role }}</p>
            </div>
          </div>
        </div>
      </div>
      <div :class="[imageHolder]" class="md:w-1/2 lg:w-auto">
        <slot name="image" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { defineProps } from 'vue';
import Button from '@/components/Button.vue';
import Label from '@/components/Label.vue';
defineProps({
  label: Boolean,
  imgLeft: Boolean,
  labelText: String,
  profile: Image,
  name: String,
  role: String,
  testimony: String,
  imageHolder: String,
  textHolder: String,
});
</script>
