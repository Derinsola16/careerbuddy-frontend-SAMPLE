<template>
  <main class="">
    <div class="border border-[#EDEDED] h-full rounded-xl flex flex-col lg:flex-row items-center lg:justify-between justify-center">
      <div class="lg:w-1/2 bg-opacity-10 bg-brand-primary w-full grid place-content-center" :class="[`bg-[${bgColor}]`]">
        <img :src="img" alt="image" class="object-cover" />
      </div>
      <div class="lg:pl-8 lg:py-16 px-5 py-6 bg-white">
        <Label :labelText="label" class="mb-5 w-44" />
        <p class="font-albertBold text-3xl text-black lg:mb-2.5 mb-2">{{ title }}</p>
        <p class="lg:text-base text-sm text-brand-black mb-4 lg:mb-6">{{ text }}</p>
        <Button :label="btnLabel" color="primary" outline />
      </div>
    </div>
  </main>
</template>

<script setup>
import Label from '@/components/Label.vue';
import Button from '@/components/Button.vue';
import { defineProps } from 'vue';

defineProps({ img: String, bgColor: String, label: String, title: String, text: String, btnLabel: String });
</script>
