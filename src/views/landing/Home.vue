<template>
  <main>
    <!-- Hero -->
    <section class="lg:mb-32">
      <Hero
        class="lg:pl-20 pr-4 px-5"
        :cards="cards"
        title="We take the hassle out of job hunting & talent sourcing"
        caption="Join the world's #1 startup community specialized in remote & local technical talent and opportunities"
      >
        <template #button>
          <div class="flex space-x-5 mb-8 md:mb-0">
            <Button label="Find a job" color="primary" to="/jobseekers" /> <Button label="Hire Top Talent" color="primary" to="/companies" outline />
          </div>
        </template>
      </Hero>
    </section>
    <!-- company slider -->
    <section>
      <Slider>
        <div class="flex mt-10">
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
          <p class="font-albertExtraBold lg:text-5xl text-4xl text-brand-black mb-3">Leverage World-Class Talent</p>
          <p class="text-brand-black md:px-10 md:text-xl py-2 md:py-0 font-normal text-center lg:w-[50%] lg:text-lg lg:px-0">
            We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important
            initiatives.
          </p>
        </div>
        <img src="@/assets/images/connect.svg" alt="" class="m-auto" />
      </div>
    </section>

    <!-- Details -->
    <div class="space-y-6 md:space-x-0">
      <DetailSection2 />
    </div>

    <!-- Word on street -->
    <section class="mt-20">
      <div class="flex lg:items-center items-start flex-col px-4">
        <Label labelText="WORD ON THE STREET" :icon="Loud" class="" />
        <p class="font-albertExtraBold lg:text-5xl text-4xl text-brand-black">Hear what others are saying</p>
        <div class="snap-x snap-mandatory mt-6 lg:mt-8 p-3 flex items-center justify-between space-x-7 w-full overflow-x-scroll scrollbar-hide">
          <div
            v-for="x in 20"
            :key="x"
            class="border border-brand-black px-7 py-8 md:py-20 lg:py-14 rounded-xl snap-proximity snap-center snap-always flex-shrink-0 w-[244px] md:w-[293px]"
          >
            <Stroke class="mb-6" />
            <p class="text-sm md:text-base text-brand-black font-normal">
              Careerbuddy didn't just place me with Softcom but did regular check-ins and followed up. The way they worked and engaged with me was
              outstanding.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech team -->
    <section class="lg:px-20 px-5 mt-12 lg:mt-28">
      <div
        class="bg-brand-red flex items-center rounded-3xl md:rounded-2xl relative intro-bg w-full px-8 py-10 before:opacity-40 md:before:opacity-[0.15]"
      >
        <!-- text  -->
        <div class="md:w-1/2 z-20 space-y-5">
          <p class="text-white font-semibold lg:text-base text-sm text-center bg-black rounded-xl py-2.5 px-6 inline-block">INTRODUCING 🎉</p>
          <h2 class="font-albertBold text-[#fff] text-4xl lg:text-5xl">Top-tier tech teams built & managed for you.</h2>
          <p class="text-sm text-[#fff] w-[85%]">
            We help companies build and manage remote teams worldwide. We take care of everything; hiring, onboarding, remuneration, regulation & even
            physical workspaces if required.
          </p>
          <div class="flex space-x-5">
            <Button label="Hire Top Talent" color="white" to="/companies" />
            <Button label="Learn More" color="white" to="/signup" outline />
          </div>
        </div>
        <!-- image  -->
        <div class="w-1/2 z-20 hidden md:flex justify-center">
          <div class="relative flex items-center">
            <!-- light divs  -->
            <div class="w-[280px] h-[280px] absolute top-0 left-0 bg-white opacity-40 ml-9 rounded-lg mt-2.5"></div>
            <div class="w-[260px] h-[260px] absolute top-0 left-0 bg-white opacity-20 ml-[72px] rounded-lg mt-5"></div>
            <!-- image and overflow info  -->
            <div class="relative w-[300px] h-[300px]">
              <div class="overflow-hidden rounded-lg">
                <img src="../../assets/images/introFrame.png" class="w-full h-full object-cover" alt="image" />
              </div>
              <div
                class="rounded-lg py-3 overflow-hidden overflowInfo px-4 bg-[rgba(255,255,255,0.6)] absolute w-[280px] bottom-2 left-[50%] -translate-x-[50%]"
              >
                <div class="z-20 relative">
                  <p class="text-brand-black opacity-90 font-albertBold capitalize">Gbajabiamila Aminat</p>
                  <p class="capitalize opacity-50 text-brand-black">Senior Cloud Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Spotlight -->
    <section class="">
      <div class="md:flex md:flex-col lg:flex-row items-center justify-center space-y-16 lg:space-x-12 lg:space-y-0 lg:px-20 px-4 relative top-20 md:top-36">
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
      <div class="bg-[#060505] md:h-[800px] flex justify-center">
        <div class="md:px-36 flex items-center px-5 pb-20 md:pb-0 mt-36 md:pt-0">
          <div class="lg:w-1/2">
            <p class="text-white text-4xl pr-8 font-albertBold lg:text-5xl mb-4">Stand a chance to earn up to $1,000 🤑</p>
            <p class="text-white font-normal text-base mb-4">
              Any of your high performing friends or colleagues looking for work? Send them our way. You could earn up to
              <span class="font-bold">$1,000 </span> if they get hired through CareerBuddy.
            </p>
            <ul class="list-none font-normal lg:text-base text-sm text-opacity-60 text-brand-black mb-6">
              <li class="flex items-center text-sm text-white mb-2">
                <Check class="mr-3" fill="white" />
                Sign up to create an account
              </li>
              <li class="flex items-center text-sm text-white mb-2">
                <Check class="mr-3" fill="white" />
                Refer your friends to sign up with us
              </li>
              <li class="flex items-center text-sm text-white">
                <Check class="mr-3" fill="white" />
                Get paid when they get hired
              </li>
            </ul>
            <Button label="Start Referring" color="primary" />
          </div>
          <div class="hidden lg:flex justify-center w-1/2">
            <div class="relative flex items-center">
              <!-- light divs  -->
              <div class="w-[280px] h-[280px] absolute top-0 left-0 bg-white opacity-40 ml-9 rounded-lg mt-2.5"></div>
              <div class="w-[260px] h-[260px] absolute top-0 left-0 bg-white opacity-20 ml-[72px] rounded-lg mt-5"></div>
              <!-- image -->
              <div class="overflow-hidden rounded-lg relative w-[300px] h-[300px]">
                <img src="../../assets/images/manSlider.png" class="w-full h-full object-cover" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="lg:mt-20 lg:mx-20 mx-5 mt-12">
      <div class="rounded-xl flex flex-col items-center justify-center newsletter md:h-[350px] py-10 px-5 md:px-0 md:py-0">
        <h2 class="font-albertExtraBold text-brand-black text-4xl md:text-5xl text-center">Subscribe to our newsletter</h2>
        <p class="text-brand-black opacity-80 md:w-[650px] text-center mt-3">
          Get to know about top open jobs in Africa’s fastest-growing startups before anyone else. Every week, we'll send you all the top jobs in
          startups across Africa.
        </p>
        <form class="flex items-center flex-col md:flex-row justify-between md:space-x-5 mt-5 space-y-5 md:space-y-0 w-full md:w-auto">
          <input type="text" class="w-full md:w-[400px] px-5 py-4 border-none rounded-lg" placeholder="Enter your email address" />
          <button class="w-full md:w-[180px] py-4 rounded-lg bg-brand-primary text-white font-medium">Subscribe</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import Slider from '@/components/Slider.vue';
import SpotlightCard from '@/components/SpotlightCard.vue';
import Label from '@/components/Label.vue';
import Check from '@/assets/icons/check.svg?inline';
import Button from '@/components/Button.vue';
import Loud from '@/assets/icons/loud.svg?inline';
import Stroke from '@/assets/icons/stroke.svg?inline';
import { ref } from 'vue';
import DetailSection2 from '@/components/DetailSection2.vue';

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
</script>

<style scoped>
.bg {
  background: url('../../assets/images/bg.svg');
}

.overflowInfo:before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  z-index: 1;
  left: 0;
  top: 0;
}

.newsletter {
  background: url('../../assets/images/paper.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.intro-bg:before {
  position: absolute;
  content: '';
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url('../../assets/images/Vector.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 1;
}
</style>
