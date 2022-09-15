<template>
  <main>
    <!-- <Hero /> -->
    <Detail :label="true" labelText="FOR JOB SEEKERS" :profile="profileImage" name="Teju Adeyinka" role="Head of Growth, Buycoins">
      <template #text>
        <div class="w">
          <p class="font-normal text-5xl text-brand-black text-opacity-70">
            <span class="font-albertBold text-brand-black">The right job</span> can change everything
          </p>
          <p class="font-normal text-base text-brand-black text-opacity-80">
            We provide access to top companies, a community of experts, and resources that can help accelerate your career.
          </p>
          <ul class="list-none font-normal xt-base text-opacity-60 text-brand-black">
            <li class="flex items-center">
              <Check class="mr-3" />
              Unique jobs at startups and tech companies you can't find anywhere else
            </li>
            <li class="flex items-center">
              <Check class="mr-3" />
              Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.
            </li>
            <li class="flex items-center">
              <Check class="mr-3" />
              Everything you need to know to job search - including seeing salary and stock options upfront when looking.
            </li>
            <li class="flex items-center">
              <Check class="mr-3" />
              Connect directly with founders at top startups - no third party recruiters allowed.
            </li>
          </ul>
        </div>
      </template>
      <template #image>
        <img src="@/assets/images/sales.png" alt="image" class="rounded-xl object-cover" />
      </template>
    </Detail>
  </main>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import Detail from '@/components/DetailSection.vue';
import Check from '@/assets/icons/check.svg?inline';

import { ref } from 'vue';

const profileImage = ref(require('@/assets/images/hero.png'));
</script>
