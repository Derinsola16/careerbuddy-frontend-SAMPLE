<template>
  <div class="lg:mt-28 mt-20">
    <div class="flex items-center flex-col px-8 lg:px-4 text-center lg:mb-9">
      <p class="lg:font-albertBold lg:text-5xl font-extrabold text-3xl lg-text-4xl text-brand-black mb-3 text-center">
        Sit back and let the <br />
        opportunities come to you
      </p>
    </div>

    <!-- search job query for large screens -->
    <Search class="hidden lg:flex" />
    <!-- search job query for mobile screens -->
    <div class="mt-5 px-4 lg:hidden">
      <div class="relative">
        <input type="text" class="border border-[#DBD6D8] rounded-full w-full p-4" />
        <div class="text-[white] rounded-full bg-brand-primary p-3 absolute right-0 -top-1 cursor-pointer">
          <svg viewBox="0 0 24 24" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
            <g
              fill="none"
              fill-rule="evenodd"
              stroke-width="1.5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              transform="translate(2 4)"
            >
              <path d="m4.5 0c.55228475 0 1 .44771525 1 1v2c0 .55228475-.44771525 1-1 1s-1-.44771525-1-1v-2c0-.55228475.44771525-1 1-1z" />
              <path d="m16.5 2h-11" />
              <path d="m3.5 2h-3" />
              <path d="m4.5 10c.55228475 0 1 .4477153 1 1v2c0 .5522847-.44771525 1-1 1s-1-.4477153-1-1v-2c0-.5522847.44771525-1 1-1z" />
              <path d="m16.5 12h-11" />
              <path d="m3.5 12h-3" />
              <path d="m12.5 5c.5522847 0 1 .44771525 1 1v2c0 .55228475-.4477153 1-1 1s-1-.44771525-1-1v-2c0-.55228475.4477153-1 1-1z" />
              <path d="m11.5 7h-11" />
              <path d="m16.5 7h-3" />
            </g>
          </svg>
        </div>
      </div>
    </div>

    <div class="mt-6 px-4 lg:px-0 lg:flex lg:justify-center lg:-mt-14">
      <div class="lg:w-5/6">
        <div class="mb-5 lg:mb-10">
          <p class="lg:text-[32px] text-xl font-bold">8 result found</p>
        </div>

        <!-- search result -->
        <div v-for="i in 10" :key="i">
          <ResultCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ResultCard from '@/components/cardStack/ResultCard.vue';
import Search from '@/components/Search.vue';
</script>
