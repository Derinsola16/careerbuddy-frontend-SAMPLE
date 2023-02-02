<template>
  <main>
    <!-- Hero -->
    <section class="lg:mb-32">
      <Hero
        class="lg:pl-20 pr-4 px-5"
        :cards="cards"
        title="All the tools you need to hire,in one place."
        caption="We make it easy to find your dream job - regardless of your location. Browse over 100,000 jobs from top companies to fast-growing startups."
      >
        <template #button>
          <div class="flex space-x-5">
            <div class="flex border w-[386px] h-[64px] bg-[#FAFAFA] rounded-[10px]">
              <div class="w-[50px] flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-[#D9D3D5]">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </div>
              <input class="border-none w-full bg-[#FAFAFA] rounded-[10px]" type="text" placeholder="Enter your email address" />
            </div>
            <button class="w-[179px] h-[64px] rounded-[10px] bg-[#FF2449] text-[16px] font-[600] text-[#FFFFFF] font-albertSmall">
              Start hiring
            </button>
          </div>
        </template>
      </Hero>
    </section>

    <!-- carousel section -->
    <section class="lg:mb-24">
      <HireSlider />
    </section>

    <!-- company reason -->
    <section class="mt-14">
      <div class="lg:px-20 px-5">
        <p class="text-brand-black text-4xl md:leading-[67.2px] md:text-[56px] md:w-[500px] lg:w-auto">
          Companies think we’re the new cool,<br /><span class="font-albertExtraBold">Here’s why:</span>
        </p>

        <div class="mt-6 md:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12">
          <div class="space-y-3">
            <div class="rounded-full bg-brand-primary w-12 h-12 bg-opacity-10 flex items-center justify-center">
              <img src="../../assets/icons/suffix.png" alt="suffix" />
            </div>
            <p class="font-albertBold text-[24px] leading-[26.4px] text-brand-black">Precise talent-matching</p>
            <p class="font-[400] text-[16px] leading-[22px] lg:w-[391px] font-albert opacity-80">
              Get connected with the talents you are looking for. Careerbuddy shows your job openings to creatives with the skill-set you require
              immediately the job is posted.
            </p>
          </div>

          <div class="space-y-3">
            <div class="rounded-full bg-brand-primary w-12 h-12 bg-opacity-10 flex items-center justify-center">
              <img src="../../assets/icons/suffix1.png" alt="suffix" />
            </div>
            <p class="font-albertBold text-[24px] leading-[26.4px] text-brand-black">Faster communication</p>
            <p class="font-[400] text-[16px] leading-[22px] font-albert opacity-80">
              Do away with the back-and-forth of emailing. Chat directly with prospective hired on Careerbuddy, or jump on a quick call with them.
            </p>
          </div>

          <div class="space-y-3">
            <div class="rounded-full bg-brand-primary w-12 h-12 bg-opacity-10 flex items-center justify-center">
              <img src="@/assets/icons/suffix2.png" alt="suffix" />
            </div>
            <p class="font-albertBold text-[24px] leading-[26.4px] text-brand-black">Talent profiling</p>
            <p class="font-[400] text-[16px] leading-[22px] font-albert opacity-80">
              Get instant access to portfolios and resumes of creatives. Make informed judgments and find the right hire for your company or project
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Details -->
    <section class="bg-black mt-20">
      <Detail
        :labelText="detailInfo.labelText"
        :testimony="detailInfo.testimony"
        :profile="detailInfo.profileImage"
        :name="detailInfo.name"
        :role="detailInfo.role"
        textHolder="lg:w-1/2 lg:pr-28"
      >
        <template #text>
          <div class="">
            <p class="font-normal lg:text-5xl text-4xl text-brand-black text-opacity-70 mb-4">
              <span class="font-albertBold text-brand-black">Move past the traditional hiring process</span>
            </p>
            <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
              Get access to top creatives from all over the world, assess their portfolios, and manage your hiring process in simple and easy steps.
            </p>
            <ul class="list-none font-normal lg:text-base text-sm text-opacity-60 text-brand-black mb-6">
              <li class="flex items-center">
                <Check fill="#1A0004" class="mr-3" />
                Gain access to our Talent Pool
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Streamline your hiring process
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Hire top creatives
              </li>
            </ul>
            <div class="flex items-center mb-6 justify-start">
              <button class="w-[179px] h-[64px] rounded-[10px] bg-[#FF2449] text-[16px] font-[600] text-[#FFFFFF] font-albertSmall">
                Post a job
              </button>
            </div>
          </div>
        </template>
        <template #image>
          <img src="@/assets/images/sales.png" alt="image" class="rounded-xl object-cover w-60 lg:w-full m-auto" />
        </template>
      </Detail>
      <Detail
        :label="true"
        :labelText="detailInfoTwo.labelText"
        :testimony="detailInfoTwo.testimony"
        :profile="detailInfoTwo.profileImage"
        :name="detailInfoTwo.name"
        :role="detailInfoTwo.role"
        textHolder="lg:w-1/2 lg:pr-28"
        imgLeft
      >
        <template #text>
          <div class="">
            <p class="font-normal lg:text-5xl text-4xl text-brand-black text-opacity-70 mb-4">
              <span class="font-albertBold text-brand-black">Move past the traditional hiring process</span>
            </p>
            <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
              We do the vetting for you! We review the world's top tech talent and highlight candidates directly to you 2x a week.
            </p>
            <ul class="list-none font-normal lg:text-base text-sm text-opacity-60 text-brand-black mb-6">
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Contact the team
              </li>
              <li class="flex items-center text-sm">
                <Check fill="#1A0004" class="mr-3" />
                Get matched with vetted talents
              </li>
              <li class="flex items-center text-sm">
                <Check fill="#1A0004" class="mr-3" />
                Hire without overhead
              </li>
            </ul>
            <div class="flex items-center mb-6 justify-start space-x-5">
              <button class="w-[179px] h-[64px] rounded-[10px] bg-[#FF2449] text-[16px] font-[600] text-[#FFFFFF] font-albertSmall">
                Get started
              </button>
              <button
                class="w-[179px] h-[64px] rounded-[10px] border border-brand-primary text-[16px] font-[600] text-brand-primary font-albertSmall"
              >
                Get started
              </button>
            </div>
          </div>
        </template>
        <template #image>
          <img src="@/assets/images/man.png" alt="image" class="rounded-xl object-cover w-60 lg:w-full m-auto" />
        </template>
      </Detail>
    </section>

    <!-- Join the 100k -->
    <section class="lg:px-20 px-5 mt-12 md:mt-20">
      <p class="font-albertExtraBold text-3xl md:text-4xl lg:text-5xl -tracking-wide text-brand-black">
        Join the
        <span class="text-brand-primary">100K+</span>
        startups building <br class="hidden md:block" />their teams with us
      </p>
    </section>

    <!-- company slider -->
    <section class="mt-12 md:mt-20">
      <Slider>
        <div class="flex">
          <div v-for="x in 5" :key="x" class="items flex mr-3 space-x-3">
            <img src="../../assets/icons/piggy-png_1_1.png" class="h-10" />
            <img src="../../assets/icons/Flutterwave.png" class="h-10" />
            <img src="../../assets/icons/teamapt.png" class="h-10" />
            <img src="../../assets/icons/sabi.png" class="h-10" />
            <img src="@/assets/icons/Cadana.svg" class="h-10" />
          </div>
        </div>
      </Slider>
    </section>

    <!-- subscribe  -->
    <section class="mt-14 md:mt-28 px-5 lg:px-20">
      <div
        class="flex justify-center md:justify-around before:opacity-[0.2] md:before:opacity-[0.15] md:h-[343px] relative rounded-[20px] bg-black subScribe px-8 py-10"
      >
        <div class="flex justify-center items-center md:w-[610px] z-10">
          <div>
            <p
              class="md:w-[630px] md:h-[53px] font-[800] text-4xl md:text-[48px] md:leading-[52.8px] md:-tracking-wide text-white font-albert text-center"
            >
              Subscribe to our newsletter
            </p>
            <p
              class="md:w-[630px] md:h-[48px] opacity-80 font-albert font-[400] text-sm md:text-[16px] -tracking-wide md:leading-[24px] text-white text-center mt-3"
            >
              Get to know about top open jobs in Africa’s fastest-growing startups before anyone else. Every week, we'll send you all the top jobs in
              startups across Africa.
            </p>
            <!-- button -->
            <div class="md:flex md:justify-between md:w-[660px] mt-5 space-y-5 md:space-y-0">
              <input class="w-full md:w-[460px] h-[64px] bg-white rounded-[10px]" type="text" />
              <button class="w-full md:w-[183px] h-[64px] rounded-[10px] bg-brand-primary text-[16px] font-albert font-[600] text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import Detail from '@/components/DetailSection.vue';
import Check from '@/assets/icons/check.svg?inline';
import Slider from '@/components/Slider.vue';
import { ref } from 'vue';
import HireSlider from '@/components/HireSlider.vue';

const cards = ref([
  { background: require('@/assets/images/sales.png') },
  { background: require('@/assets/images/hero.png') },
  { background: require('@/assets/images/man.png') },
  { background: require('@/assets/images/sales.png') },
  { background: require('@/assets/images/hero.png') },
  { background: require('@/assets/images/sales.png') },
  { background: require('@/assets/images/hero.png') },
  { background: require('@/assets/images/man.png') },
  { background: require('@/assets/images/sales.png') },
  { background: require('@/assets/images/hero.png') },
]);
const detailInfo = ref({
  testimony:
    '“My experience with Careerbuddy has really been nothing short of excellent. The quick response of the staff during my interview process was impressive. Careerbuddy is one of the places I will always recommend to anyone.”',
  labelText: 'RECRUITMENT',
  profileImage: require('@/assets/images/hero.png'),
  name: 'Teju Adeyinka',
  role: 'Head of Growth, Buycoins',
});
const detailInfoTwo = ref({
  testimony:
    "“They make the recruitment process a lot less daunting. From how quickly they are able to source for candidates to ensuring the sourced candidates are of high quality and are a great fit for our company, they're great at what they do.”",
  labelText: 'OUTSTAFFING',
  profileImage: require('@/assets/images/hero.png'),
  name: 'Segun Makinde',
  role: 'Chief Operations Officer, Casava',
});
</script>

<style>
.subScribe:before {
  position: absolute;
  content: '';
  top: 0;
  width: 100%;
  height: 100%;
  background: url('../../assets/icons/bg-bg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 1;
}
</style>
