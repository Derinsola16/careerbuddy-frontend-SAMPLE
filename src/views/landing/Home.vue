<template>
  <main>
    <!-- Hero -->
    <section class="mb-32">
      <Hero
        class="lg:pl-20 pr-4 px-5"
        :cards="cards"
        title="We take the hassle out of job hunting & talent sourcing"
        caption="Join the world's #1 startup community specialized in remote & local technical talent and opportunities"
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
          <p class="font-albertBold lg:text-5xl text-4xl text-brand-black mb-3">Leverage World-Class Talent</p>
          <p class="text-brand-black text-xl font-normal text-center lg:w-[40%]">
            We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important
            initiatives.
          </p>
        </div>
        <img src="@/assets/images/connect.svg" alt="" class="m-auto" />
      </div>
    </section>
    <!-- Details -->
    <section>
      <Detail
        :labelText="detailInfo.labelText"
        :testimony="detailInfo.testimony"
        :profile="detailInfo.profileImage"
        :name="detailInfo.name"
        :role="detailInfo.role"
        textHolder="lg:w-1/2 lg:pr-28"
        class="relative lg:bottom-[15.3rem] bottom-20"
      >
        <template #text>
          <div class="">
            <p class="font-normal lg:text-5xl text-4xl text-brand-black text-opacity-70 mb-4">
              <span class="font-albertBold text-brand-black">The right job</span> can change everything
            </p>
            <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
              We provide access to top companies, a community of experts, and resources that can help accelerate your career.
            </p>
            <ul class="list-none font-normal lg:text-base text-sm text-opacity-60 text-brand-black mb-6">
              <li class="flex items-center">
                <Check fill="#1A0004" class="mr-3" />
                Unique jobs at startups and tech companies you can't find anywhere else
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Everything you need to know to job search - including seeing salary and stock options upfront when looking.
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                Connect directly with founders at top startups - no third party recruiters allowed.
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
        :labelText="detailInfoTwo.labelText"
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
            <p class="font-normal lg:text-5xl text-4xl text-brand-black text-opacity-70 mb-4">
              Managing a company is hard<span class="font-albertBold text-brand-black">, hiring talent shouldn’t be</span>
            </p>
            <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
              We do the vetting for you! We review the world's top tech talent and highlight candidates directly to you 2x a week.
            </p>
            <ul class="list-none font-normal lg:text-base text-sm text-opacity-60 text-brand-black mb-6">
              <li class="flex items-center text-sm mb-2">
                <Check fill="#1A0004" class="mr-3" />
                8 million responsive and startup-ready candidates, with all the information you need to vet them
              </li>
              <li class="flex items-center text-sm">
                <Check fill="#1A0004" class="mr-3" />
                Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free
              </li>
            </ul>
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
    <!-- Tech team -->
    <section class="px-20 hidden">
      <div class="bg-brand-red rounded-lg">
        <div class="pl-11">
          <div class="">
            <Hero
              white
              labelText="INTRODUCING 🎉"
              :cards="cards"
              title="We take the hassle out of job hunting & talent sourcing"
              caption="Join the world's #1 startup community specialized in remote & local technical talent and opportunities"
            >
              <template #button>
                <div class="flex space-x-5">
                  <Button label="Hire Top Talent" color="white" to="/companies" />
                  <Button label="Learn More" color="white" to="/companies" outline />
                </div>
              </template>
            </Hero>
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
    <!-- Newsletter -->
    <section></section>
  </main>
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import Slider from '@/components/Slider.vue';
import SpotlightCard from '@/components/SpotlightCard.vue';
import Label from '@/components/Label.vue';
import Detail from '@/components/DetailSection.vue';
import Check from '@/assets/icons/check.svg?inline';
import Button from '@/components/Button.vue';
import Loud from '@/assets/icons/loud.svg?inline';
import Stroke from '@/assets/icons/stroke.svg?inline';
import { ref } from 'vue';

const detailInfo = ref({
  testimony: 'Careerbuddy supported me in every step of the hiring process and even helped me get favorable working terms with my employers.',
  labelText: 'FOR JOB SEEKERS',
  profileImage: require('@/assets/images/hero.png'),
  name: 'Teju Adeyinka',
  role: 'Head of Growth, Buycoins',
});
const detailInfoTwo = ref({
  testimony:
    "“They make the recruitment process a lot less daunting. From how quickly they are able to source for candidates to ensuring the sourced candidates are of high quality and are a great fit for our company, they're great at what they do.”",
  labelText: 'FOR COMPANIES',
  profileImage: require('@/assets/images/hero.png'),
  name: 'Segun Makinde',
  role: 'Chief Operations Officer, Casava',
});
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
</style>
