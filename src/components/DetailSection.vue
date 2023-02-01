<template>
  <div
    v-for="items in detailInfo"
    :key="items.id"
    class="md:flex lg:px-20 px-5 items-center justify-between lg:pt-20 pt-10 w-full pb-9"
    :class="items.imgLeft ? 'bg-white flex-row-reverse' : 'bg-[#FFFAFB]'"
  >
    <div class="mb-6 lg:mb-0 md:w-1/2">
      <p class="text-white font-semibold lg:text-base text-sm text-center bg-black rounded-xl py-2.5 px-6 inline-block">{{ items.labelText }}</p>
      <p class="font-normal lg:text-5xl text-4xl mt-8 text-brand-black w-[80%] text-opacity-70 mb-5" v-html="items.title"></p>
      <p class="font-normal lg:text-base text-sm text-brand-black text-opacity-80 mb-3">
        {{ items.subHead }}
      </p>
      <ul class="list-none font-normal lg:text-base text-sm text-opacity-60 text-brand-black mb-6">
        <li class="flex items-center mb-2 space-x-3" v-for="list in items.offers" :key="list">
          <span class="text-brand-black w-4 h-3.5">
            <svg viewBox="0 0 16 13" fill="current-color" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.0502 12.1031C5.72832 12.1031 5.40645 11.9812 5.15957 11.7344L0.368945 6.94375C-0.12168 6.45313 -0.12168 5.65625 0.368945 5.16563C0.85957 4.675 1.65645 4.675 2.14707 5.16563L6.0502 9.06875L13.8533 1.2625C14.3439 0.771875 15.1408 0.771875 15.6314 1.2625C16.1221 1.75312 16.1221 2.55 15.6314 3.04063L6.9377 11.7344C6.69395 11.9781 6.37207 12.1031 6.0502 12.1031Z"
              />
            </svg>
          </span>
          <p>{{ list }}</p>
        </li>
      </ul>
      <div class="flex items-center mb-6 justify-start">
        <Button label="Find your next job" color="primary" class="mr-4" :to="items.link" />
        <Button label="Learn More" color="primary" outline to="/signup" />
      </div>
      <!-- profile  -->
      <div class="space-y-5 py-6 border-t-2 border-gray-200">
        <p class="font-normal md:w-[80%] text-sm text-brand-black text-opacity-80 mb-4">{{ items.testimony }}</p>
        <div class="flex items-center space-x-3">
          <div class="overflow-hidden rounded-full w-[44px] h-[44px]">
            <img :src="items.profileImage" alt="profile" class="w-full h-full object-cover" />
          </div>
          <div class="space-y-0.5">
            <p class="font-albertBold text-base text-brand-black">{{ items.name }}</p>
            <p class="font-normal text-xs text-brand-black text-opacity-80">{{ items.role }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- the image  -->
    <div class="md:w-1/2 flex" :class="items.imgLeft ? 'justify-start' : 'justify-end'">
      <div class=" relative md:w-[90%] px-6 md:px-0">
        <div class="rounded-lg overflow-hidden">
          <img :src="items.heroImg" alt="image" class="w-full h-full object-cover" />
        </div>
        <!-- floating info  -->
        <div class="w-[350px] lg:w-[450px] rounded-lg bg-[#fff] p-5 flex justify-between shadow-3xl absolute bottom-4 md:-bottom-10 left-[50%] -translate-x-[50%]">
          <div class="flex items-center space-x-3">
            <div class="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] rounded-lg overflow-hidden">
              <img src="@/assets/images/flutterwave.png" alt="logo" class="w-full h-full object-cover" />
            </div>
            <div class="">
              <p class="text-xs uppercase text-[#000] opacity-50">{{ items.compName }}</p>
              <h2 class="font-albertExtraBold text-base lg:text-xl capitalize">{{ items.profName }}</h2>
              <p class="text-xs md:text-sm text-[#000] opacity-50">{{ items.pos }}</p>
            </div>
          </div>
          <p class="text-xs md:text-sm text-[#000] opacity-50">{{ items.days }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './Button.vue';

export default {
  data() {
    return {
      detailInfo: [
        {
          id: 0,
          testimony:
            '"Careerbuddy supported me in every step of the hiring process and even helped me get favorable working terms with my employers."',
          labelText: 'FOR JOB SEEKERS',
          profileImage: require('@/assets/images/hero.png'),
          name: 'Teju Adeyinka',
          role: 'Head of Growth, Buycoins',
          title: '<span class="font-albertBold text-brand-black">The right job</span> can change everything',
          subHead: 'We provide access to top companies, a community of experts, and resources that can help accelerate your career.',
          offers: [
            "Unique jobs at startups and tech companies you can't find anywhere else",
            "Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.",
            'Everything you need to know to job search - including seeing salary and stock options upfront when looking.',
            'Connect directly with founders at top startups - no third party recruiters allowed.',
          ],
          compName: 'flutterwave',
          pos: 'Remote | 4 years ex.',
          profName: 'head of sales',
          days: '4 days ago',
          heroImg: require('@/assets/images/sales.png'),
          link: '/jobseekers'
        },
        {
          id: 1,
          testimony:
            "“They make the recruitment process a lot less daunting. From how quickly they are able to source for candidates to ensuring the sourced candidates are of high quality and are a great fit for our company, they're great at what they do.”",
          labelText: 'FOR COMPANIES',
          profileImage: require('@/assets/images/hero.png'),
          name: 'Segun Makinde',
          role: 'Chief Operations Officer, Casava',
          imgLeft: true,
          title: 'Managing a company is hard<span class="font-albertBold text-brand-black">, hiring talent shouldn’t be</span>',
          subHead: "We do the vetting for you! We review the world's top tech talent and highlight candidates directly to you 2x a week.",
          offers: [
            '8 million responsive and startup-ready candidates, with all the information you need to vet them',
            'Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free',
          ],
          compName: 'lagos, nigeria',
          pos: 'Front-end Developer | 4 years ex.',
          profName: 'akomolafe chidinma',
          heroImg: require('@/assets/images/man.png'),
          link: '/companies'
        },
      ],
    };
  },
  components: { Button },
};
</script>
