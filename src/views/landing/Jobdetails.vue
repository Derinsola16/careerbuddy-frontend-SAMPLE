<template>
  <!-- overlay  -->
  <Overlay v-if="isOverlay" :hide-overlay="hideOverlay" />
  <!-- content  -->
  <div class="px-5 lg:px-20">
    <!-- back  -->
    <div class="flex items-center space-x-4 mb-12 cursor-pointer w-24">
      <div class="w-8 h-8 opacity-70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="text-xs text-brand-black w-2 h-2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
        </svg>
      </div>
      <p class="uppercase opacity-50 font-medium">back</p>
    </div>

    <!-- company header  -->
    <div class="md:flex md:item-center md:justify-between mb-8 space-y-5 md:space-y-0">
      <!-- left side  -->
      <div class="flex items-center space-x-5">
        <div class="rounded-full overflow-hidden w-16 h-16 md:w-18 md:h-18">
          <img src="@/assets/images/complogo.png" class="w-full h-full object-cover" />
        </div>
        <div class="">
          <p class="text-sm text-brand-black opacity-70 font-semibold">cowrywise</p>
          <h2 class="font-albertBold text-brand-black capitalize text-xl">senior front-end engineer</h2>
          <div class="flex items-center opacity-50 space-x-4 mt-1">
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6 text-brand-black"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <p class="text-brand-black font-medium capitalize">remote | anywhere</p>
            </div>
            <div class="flex items-center space-x-2">
              <div class="w-4 h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="{1.5}"
                  stroke="currentColor"
                  className="w-6 h-6 text-brand-black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
              </div>
              <p class="text-brand-black font-medium capitalize">full time</p>
            </div>
          </div>
        </div>
      </div>

      <!-- right side  -->
      <div class="flex items-center space-x-3">
        <button @click="showOverlay" class="bg-brand-primary border-2 border-brand-primary text-[white] rounded-xl py-3 px-8">Apply now</button>
        <button
          class="text-brand-primary border-2 border-brand-primary rounded-xl py-3 px-6 flex items-center space-x-2 hover:bg-brand-primary hover:text-[white]"
        >
          <div class="w-4 h-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </div>
          <p class="font-semibold">Save for later</p>
        </button>
      </div>
    </div>

    <!-- job details and company information  -->
    <div class="flex items-center justify-between border-b border-[#ccc] mb-5">
      <!-- left div  -->
      <div class="flex items-center space-x-6">
        <button
          @click="isTrue"
          :class="isActive ? 'border-b-2 border-brand-primary text-brand-black font-albertBold' : 'text-brand-black opacity-50'"
          class="py-3"
        >
          Job details
        </button>
        <button
          @click="isFalse"
          :class="!isActive ? 'border-b-2 border-brand-primary text-brand-black font-bold' : 'text-brand-black opacity-50'"
          class="py-3"
        >
          Company information
        </button>
      </div>

      <!-- right div  -->
      <p class="py-3 text-brand-black italic font-medium text-xs md:text-base">Posted 4 days ago</p>
    </div>

    <!-- Details to show when Job details is active -->
    <div class="py-2 md:pr-12 mb-12" v-if="isActive">
      <Details />
    </div>

    <!-- Company information if active -->
    <div class="py-2 mb-12" v-else>
      <!-- information and links  -->
      <CompanyInfo />

      <!-- open positions  -->
      <div class="space-y-5 pb-10 border-b border-[#ccc] mt-12 md:mt-0">
        <div class="mt-8 flex justify-between items-center">
          <p class="text-xl text-brand-black font-bold capitalize">open positions (23)</p>
          <div class="flex items-center space-x-2 text-[#00973C]">
            <p class="text-sm font-bold capitalize">see all</p>
            <div class="w-4 h-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
        </div>

        <!-- carousel  -->
        <Carousel />
      </div>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/Overlay.vue';
import Details from '@/components/Details.vue';
import CompanyInfo from '@/components/CompanyInfo.vue';
import Carousel from '@/components/Carousel.vue';

export default {
  // state
  data() {
    return {
      isActive: true,
      isOverlay: false,
    };
  },
  // actions
  methods: {
    isTrue() {
      this.isActive = true;
    },
    isFalse() {
      this.isActive = false;
    },
    showOverlay() {
      document.body.style.overflow = 'hidden';
      this.isOverlay = true;
    },
    hideOverlay() {
      this.isOverlay = false;
      document.body.style.overflow = 'auto';
    },
  },
  components: { Overlay, Details, CompanyInfo, Carousel },
};
</script>
