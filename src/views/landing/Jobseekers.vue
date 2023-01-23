<template>
  <main>
    <!-- Hero -->
    <section class="mb-32">
      <Hero
        class="lg:pl-20 pr-4 px-5"
        :cards="cards"
        title="The right job can change everything"
        caption="We make it easy to find your dream job - regardless of your location. Browse over 100,000 jobs from top companies to fast-growing startups."
      >
        <template #button>
          <div class="flex space-x-5">
            <Button label="Find a job" color="primary" to="/jobseekers" /> <Button label="Hire Top Talent" color="primary" to="/companies" outline />
          </div>
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
          <p class="font-albertBold lg:text-5xl text-4xl text-brand-black mb-3 text-center">
            Sit back and let the <br />
            opportunities come to you
          </p>
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
          <div class="">
            <p class="font-normal lg:text-5xl text-4xl text-brand-black text-opacity-70 mb-4 whitespace-nowrap">
              <span class="font-albertBold text-brand-black whitespace-nowrap">Find the job made for you.</span> <br />
              Level up your job search
            </p>
            <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
              We provide access to top companies, a community of experts, and resources that can help accelerate your career.
            </p>
            <ul class="list-none font-normal lg:text-base text-sm text-opacity-60 text-brand-black mb-6">
              <li class="flex items-center">
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
            <div class="flex items-center mb-6 justify-center lg:justify-start">
              <Button label="Find your next job" color="primary" class="mr-4" to="/signup" />
              <Button label="Learn More" color="primary" outline to="/jobseekers" />
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
          <div class="">
            <p class="font-normal lg:text-5xl text-4xl text-brand-black text-opacity-70 mb-4 whitespace-nowra">
              Skip the commute. <br />
              <span class="font-albertBold text-brand-black">We are bringing the office to you.</span>
            </p>
            <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
              Introducing a new suite of tools to help you find a remote tech job, from anywhere in the world. Apply to get your profile featured
              directly to companies that are hiring remotely (including internationally).
            </p>
            <div class="flex items-center mb-6 justify-center lg:justify-start">
              <Button label="Hire Top Talent" color="primary" class="mr-4" to="/signup" />
              <Button label="Learn More" color="primary" outline to="/companies" />
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
      <div class="bg-[#060505] h-[908px] flex justify-center">
        <div class="px-36 flex items-center">
          <div class="">
            <p class="text-white lg:font-albertBold lg:text-5xl mb-4 lg:w-2/5">Stand a chance to earn up to $1,000 🤑</p>
            <p class="text-white font-normal text-base mb-4 w-[51%]">
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
          <div class="hidden lg:block text-white">slider</div>
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
