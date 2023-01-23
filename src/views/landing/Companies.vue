<template>
  <main>
    <!-- Hero -->
    <section class="mb-32">
      <Hero
        class="lg:pl-20 pr-4 px-5"
        :cards="cards"
        title="All the tools you need to hire,in one place."
        caption="We make it easy to find your dream job - regardless of your location. Browse over 100,000 jobs from top companies to fast-growing startups."
      >
        <template #button>
          <div class="flex space-x-5">
            <Button label="Find a job" color="primary" to="/jobseekers" /> <Button label="Hire Top Talent" color="primary" to="/companies" outline />
          </div>
        </template>
      </Hero>
    </section>
    <!-- Extra -->
    <section class="my-60"><p>section</p></section>
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
  </main>
</template>
<script setup>
import Hero from '@/components/Hero.vue';
import Detail from '@/components/DetailSection.vue';
import Check from '@/assets/icons/check.svg?inline';
import Slider from '@/components/Slider.vue';
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
