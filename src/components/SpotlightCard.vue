<template>
  <main class="">
    <div class="border border-[#EDEDED] bg-slate-100 rounded-xl flex flex-col lg:flex-row lg:justify-between lg:w-[608px] lg:h-[402px] items-center">
      <div class="bg-opacity-10 w-full grid place-content-center lg:flex grow h-[330px] py-12 rounded-tl-xl rounded-bl-xl" :class="[bgColor]">
        <img :src="img" alt="image" class="object-cover h-[200px] w-[200px] m-auto" />
      </div>
      <div class="lg:px-9 lg:py-16 px-5 py-8 bg-white h-full rounded-tr-xl rounded-br-xl">
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
