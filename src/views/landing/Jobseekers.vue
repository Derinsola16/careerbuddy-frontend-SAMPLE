<template>
  <main>
    <!-- Hero -->
    <section class="mb-10 md:mb-32">
      <Hero
        class="lg:pl-20 pr-4 px-5"
        :cards="cards"
        title="The right job can change everything"
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

          <!-- <button class="bg-brand-primary hidden lg:block text-[white] w-[180px] py-5 rounded-lg" to="/signup">Join us</button>
          <div class="flex space-x-5 lg:hidden">
            <Button label="Find a job" color="primary" to="/jobseekers" /> <Button label="Hire Top Talent" color="primary" to="/companies" outline />
          </div> -->
        </template>
      </Hero>
    </section>
    <!-- company slider -->
    <section>
      <Slider>
        <div class="flex">
          <div v-for="x in 5" :key="x" class="items flex mr-3 space-x-3">
            <img src="@/assets/icons/g8.svg" class="h-10" />
            <img src="@/assets/icons/Cadana.svg" class="h-10" />
            <img src="@/assets/icons/Sabi.svg" class="h-10" />
          </div>
        </div>
      </Slider>
    </section>
    <!-- Connect -->
    <section>
      <div class="lg:mt-28 mt-20">
        <div class="flex items-center flex-col px-4 text-center mb-7 lg:mb-9">
          <p class="font-albertExtraBold lg:text-5xl text-4xl text-brand-black mb-3 text-center">
            Sit back and let the <br />
            opportunities come to you
          </p>
        </div>

        <!-- Search job query -->
        <Search class="hidden lg:flex" />
        <!-- search job query for mobile screens -->
        <div class="mt-5 px-4 mb-10 lg:hidden">
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

        <img src="@/assets/images/connect.svg" alt="" class="m-auto" />
      </div>
    </section>
    <!-- Details -->
    <section>
      <Detail
        :testimony="detailInfo.testimony"
        :profile="detailInfo.profileImage"
        :name="detailInfo.name"
        :role="detailInfo.role"
        textHolder="lg:w-1/2 lg:pr-28"
        class="relative lg:bottom-[15.3rem] bottom-20"
      >
        <template #text>
          <div class="pr-8 md:pr-0">
            <p class="font-normal lg:text-5xl text-[40px] leading-[44px] text-brand-black text-opacity-70 mb-4">
              Find the job made for you.
              <span class="font-albertExtraBold text-brand-black">Level up your job search</span>
            </p>
            <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
              We provide access to top companies, a community of experts, and resources that can help accelerate your career.
            </p>
            <ul class="list-none font-normal lg:text-base text-sm text-opacity-60 text-brand-black mb-6">
              <li class="flex items-center mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Unique jobs in niche industries
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Personalize job offers; Set salary & equity upfront
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Showcase skills beyond a resume
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Let founders and recruiters reach out to you.
              </li>
            </ul>
            <div class="flex items-center mb-6 justify-center lg:justify-start w-[227px] h-[64px] rounded-[10px] bg-brand-primary">
              <Button label="Find your next job" color="primary" class="h-[24px] font-albert font[600] text-white md:pl-[42px]" to="/signup">
                Find your next job
              </Button>
            </div>
          </div>
        </template>
        <template #image>
          <img src="@/assets/images/sales.png" alt="image" class="rounded-xl object-cover w-60 lg:w-full m-auto" />
        </template>
      </Detail>
      <Detail
        :label="true"
        :testimony="detailInfoTwo.testimony"
        :profile="detailInfoTwo.profileImage"
        :name="detailInfoTwo.name"
        :role="detailInfoTwo.role"
        textHolder="lg:w-1/2 lg:pr-28"
        class="relative lg:bottom-[15.3rem] bottom-20"
        imgLeft
      >
        <template #text>
          <div class="pr-8 md:pr-0">
            <p class="font-normal lg:text-5xl text-4xl text-brand-black text-opacity-70 mb-4 whitespace-nowra">
              Skip the commute. <br />
              <span class="font-albertBold text-brand-black">We are bringing the office to you.</span>
            </p>
            <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
              Introducing a new suite of tools to help you find a remote tech job, from anywhere in the world. Apply to get your profile featured
              directly to companies that are hiring remotely (including internationally).
            </p>
            <div class="flex items-center mb-6 justify-center lg:justify-start bg-brand-primary w-[227px] h-[64px] rounded-[10px]">
              <Button label="Hire Top Talent" color="primary" class="h-[24px] font-albert font[600] text-white md:pl-[42px]" to="/signup"
                >Find your next job</Button
              >
            </div>
          </div>
        </template>
        <template #image>
          <img src="@/assets/images/man.png" alt="image" class="rounded-xl object-cover w-60 lg:w-full m-auto" />
        </template>
      </Detail>
    </section>
    <!-- Word on street -->
    <section>
      <div class="flex lg:items-center items-start flex-col px-4">
        <Label labelText="WORD ON THE STREET" :icon="Loud" class="" />
        <p class="font-albertBold lg:text-5xl text-4xl text-brand-black">Hear what others are saying</p>
        <div class="snap-x snap-mandatory mt-8 p-3 flex items-center justify-between space-x-7 w-full overflow-x-scroll scrollbar-hide">
          <div
            v-for="x in 20"
            :key="x"
            class="border border-brand-black px-7 py-20 rounded-xl snap-proximity snap-center snap-always flex-shrink-0 w-[244px] md:w-[293px]"
          >
            <Stroke class="mb-6" />
            <p class="text-base text-brand-black font-normal">
              Careerbuddy didn't just place me with Softcom but did regular check-ins and followed up. The way they worked and engaged with me was
              outstanding.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Spotlight -->
    <section class="">
      <div class="lg:flex items-center justify-center grid gap-6 lg:gap-12 lg:px-20 px-4 relative top-48">
        <SpotlightCard
          :img="require('@/assets/images/spot-light.svg')"
          bgColor="bg-brand-spot"
          label="IN THE SPOTLIGHT"
          title="Get Featured"
          text="Apply to be featured
      and we'll highlight your profile to top recruiters and companies searching for your specific skills. Oh, it's also 100% free 🎉"
          btnLabel="Get
      Featured"
        />
        <SpotlightCard
          :img="require('@/assets/images/salary-mail.svg')"
          bgColor="bg-brand-mail"
          label="SALARY INSIGHTS"
          title="Know your Worth"
          text="We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations."
          btnLabel="Take a look"
        />
      </div>
    </section>
    <!-- Reference -->
    <section>
      <div class="bg-[#060505] pt-[120px] md:pt-[90px] flex justify-center">
        <div class="flex justify-around mt-20 md:w-[1264px] md:h-[343px] rounded-[20px] bg-black">
          <div class="flex p-10 md:px-0 justify-center items-center md:w-[610px]">
            <div>
              <p class="md:w-[630px] md:h-[53px] font-albertExtraBold text-4xl md:text-5xl md:-tracking-wide text-white text-center px-8 md:px-0">Subscribe to our newsletter</p>
              <p class="md:w-[630px] md:h-[48px] opacity-80 font-albert font-[400] text-sm md:text-[16px] md:-tracking-wide leading-[24px] text-white text-center mt-3">
                Get to know about top open jobs in Africa’s fastest-growing startups before anyone else. Every week, we'll send you all the top jobs
                in startups across Africa.
              </p>
              <!-- button -->
              <div class="flex flex-col md:flex-row space-y-5 md:space-y-0 justify-between md:w-[660px] mt-5">
                <input class="w-full md:w-[460px] h-[64px] bg-white rounded-[10px]" type="text" />
                <button class="w-full md:w-[183px] h-[64px] rounded-[10px] bg-brand-primary text-[16px] font-albert font-[600] text-white">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import Slider from '@/components/Slider.vue';
import Detail from '@/components/DetailSection.vue';
import Check from '@/assets/icons/check.svg?inline';
import Loud from '@/assets/icons/loud.svg?inline';
import Label from '@/components/Label.vue';
import SpotlightCard from '@/components/SpotlightCard.vue';
import { ref } from 'vue';
import Search from '@/components/Search.vue';
import Button from '@/components/Button.vue';

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
  profileImage: require('@/assets/images/hero.png'),
  name: 'Teju Adeyinka',
  role: 'Head of Growth, Buycoins',
});
const detailInfoTwo = ref({
  testimony:
    '“My experience with Careerbuddy was great. From the time they first reached out to me on LinkedIn, through the conversations with the hiring company and up to the time I received the offer.”',
  profileImage: require('@/assets/images/hero.png'),
  name: 'Segun Makinde',
  role: 'Chief Operations Officer, Casava',
});
</script>
