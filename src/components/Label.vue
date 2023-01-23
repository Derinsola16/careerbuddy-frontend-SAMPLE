<template>
  <div class="flex items-center bg-black rounded-xl py-2.5 px-6 mb-5">
    <p class="text-white font-semibold lg:text-base text-sm whitespace-nowrap pr-2">{{ labelText }}</p>
    <component v-if="icon" :class="[size]" class="fill-current grow" :is="icon" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({ labelText: String, icon: Boolean, size: String });
</script>
