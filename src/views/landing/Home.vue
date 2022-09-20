<template>
  <main>
    <!-- <Hero /> -->
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
                <Check class="mr-3" />
                Unique jobs at startups and tech companies you can't find anywhere else
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check class="mr-3" />
                Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check class="mr-3" />
                Everything you need to know to job search - including seeing salary and stock options upfront when looking.
              </li>
              <li class="flex items-center text-sm mb-2">
                <Check class="mr-3" />
                Connect directly with founders at top startups - no third party recruiters allowed.
              </li>
            </ul>
            <div class="flex items-center mb-6 justify-center lg:justify-start">
              <Button label="Find your next job" color="primary" class="mr-4" />
              <Button label="Learn More" color="primary" outline />
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
                <Check class="mr-3" />
                8 million responsive and startup-ready candidates, with all the information you need to vet them
              </li>
              <li class="flex items-center text-sm">
                <Check class="mr-3" />
                Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free
              </li>
            </ul>
            <div class="flex items-center mb-6 justify-center lg:justify-start">
              <Button label="Find your next job" color="primary" class="mr-4" />
              <Button label="Learn More" color="primary" outline />
            </div>
          </div>
        </template>
        <template #image>
          <img src="@/assets/images/man.png" alt="image" class="rounded-xl object-cover w-60 lg:w-full m-auto" />
        </template>
      </Detail>
    </section>
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
    <section>
      <div class="lg:flex items-center justify-between grid gap-6 lg:gap-12 lg:px-20 px-4">
        <SpotlightCard
          :img="require('@/assets/images/spot-light.svg')"
          bgColor="#ECB20A"
          label="IN THE SPOTLIGHT"
          title="Get Featured"
          text="Apply to be featured
      and we'll highlight your profile to top recruiters and companies searching for your specific skills. Oh, it's also 100% free 🎉"
          btnLabel="Get
      Featured"
        />
        <SpotlightCard
          :img="require('@/assets/images/salary-mail.svg')"
          bgColor="#EE9430"
          label="SALARY INSIGHTS"
          title="Know your Worth"
          text="We have the data. Research by job title, industry, and company size to find your salary range and be prepared to nail your negotiations."
          btnLabel="Take a look"
        />
      </div>
    </section>
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

const settings = ref({
  arrows: false,
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: 'linear',
});
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
</script>
