<template>
  <footer class="bg-[#FFFAFB] md:py-10 md:px-10 lg:mx-20 md:mx-10 p-4 mb-9 rounded-3xl">
    <div class="md:flex justify-between grid gap-x-8 gap-y-6 grid-cols-2 items-start mb-6">
      <div>
        <p class="text-sm text-brand-black text-opacity-60 font-normal mb-6">Product</p>
        <div class="font-albertMedium whitespace-nowrap leading-6 tracking-[0.02em] font-extrabold text-brand-black">
          <p class="mb-3">Login</p>
          <p class="mb-3">Pricing</p>
          <p class="mb-3">For Talents</p>
          <p class="mb-3">For Employers</p>
          <p class="">Testimonials</p>
        </div>
      </div>
      <div>
        <p class="text-sm text-brand-black text-opacity-60 font-normal mb-6">Company</p>
        <div class="font-albertMedium whitespace-nowrap leading-6 tracking-[0.02em] font-extrabold text-brand-black">
          <p class="mb-3">About us</p>
          <p class="mb-3">Salary Data</p>
          <p class="">Blog</p>
        </div>
      </div>
      <div>
        <p class="text-sm text-brand-black text-opacity-60 font-normal mb-6">Support</p>
        <div class="font-albertMedium whitespace-nowrap leading-6 tracking-[0.02em] font-extrabold text-brand-black">
          <p class="mb-3">Weekly Demos</p>
          <p class="">Contact Us</p>
        </div>
      </div>
      <div>
        <p class="text-sm text-brand-black text-opacity-60 font-normal mb-6">Resources</p>
        <div class="font-albertMedium whitespace-nowrap leading-6 tracking-[0.02em] font-extrabold text-brand-black">
          <p class="mb-3">Our Newsletter</p>
          <p class="">Guides</p>
        </div>
      </div>
    </div>

    <div class="flex justify-between items-center">
      <div class="lg:flex items-center justify-between grid grid-rows-4 gap-2">
        <img src="@/assets/images/logo.svg" alt="logo" class="obeject-cover" />
        <p class="text-brand-black text-base font-medium order-last">&copy; 2022 Careerbuddy, Inc.</p>
        <p class="text-brand-primary text-base font-medium">Privacy Policy</p>
        <p class="text-brand-primary text-base font-medium">Terms of Service</p>
      </div>
      <div class="lg:flex justify-between items-center gap-2 grid">
        <Button small :icon="Twitter" color="primaryOpacity" outline />
        <Button small :icon="Instagram" color="primaryOpacity" outline />
        <Button small :icon="Linkedin" color="primaryOpacity" outline />
      </div>
    </div>
  </footer>
</template>

<script setup>
import Twitter from '@/assets/icons/twitter.svg?inline';
import Instagram from '@/assets/icons/instagram.svg?inline';
import Linkedin from '@/assets/icons/linkedin.svg?inline';
import Button from '@/components/Button.vue';
</script>
