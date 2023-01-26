<template>
  <div class="lg:mt-28 mt-20">
    <div class="flex items-center flex-col px-4 text-center mb-7 lg:mb-9">
      <p class="font-albertBold lg:text-5xl text-4xl text-brand-black mb-3 text-center">
        Sit back and let the <br />
        opportunities come to you
      </p>
    </div>

    <!-- search job query -->
    <Search />
    <div class=" flex justify-center -mt-14">
        <div class=" w-5/6">
            <div class=" mb-10">
                <p class=" text-[32px] font-bold"> 8 result found</p>
            </div>

            <!-- search result -->
            <ResultCard />
        </div>
    </div>
  </div>
</template>


<script setup>
import ResultCard from '@/components/cardStack/ResultCard.vue';
import Search from '@/components/Search.vue';



</script>
