<template>
  <main class="">
    <div class="lg:h-[400px] md:w-[500px] lg:w-auto bg-white rounded-xl flex flex-col lg:flex-row lg:justify-between items-center border border-[#EDEDED] lg:border-none">
      <div class="bg-opacity-10 w-full grid place-content-center lg:flex grow h-[330px] lg:h-full rounded-tl-xl rounded-bl-xl" :class="[bgColor]">
        <img :src="img" alt="image" class="object-cover h-[200px] w-[200px] m-auto" />
      </div>
      <div class="lg:px-9 lg:py-16 px-5 py-8 h-full rounded-tr-xl rounded-br-xl">
        <Label :labelText="label" class="mb-5 w-44" />
        <p class="font-albertBold text-3xl text-black lg:mb-2.5 mb-2">{{ title }}</p>
        <p class="text-sm text-brand-black mb-4 lg:mb-6">{{ text }}</p>
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
