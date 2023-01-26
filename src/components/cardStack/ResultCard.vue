<template>
  <div class="flex h-[152px] rounded-[10px] bg-[#FFFCF0] justify-between mb-5">
    <!-- result details -->
    <div class="ml-10 flex mt-8">
      <!-- logo -->
      <div class="mr-4">
        <img class="rounded-full h-[59px] w-[59px]" src="@/assets/images/joblogo.png" alt="" />
      </div>
      <!-- infos -->
      <div>
        <!-- name of company -->
        <div class="text-[16px] font-[600] text-[#1A0004] opacity-70">
          <p>Cowrywise</p>
        </div>
        <!-- role -->
        <div class="text-[#1A0004] text-[24px] font-[700]">
          <p>Senior Front-end Developer</p>
        </div>

        <!-- sub infos -->
        <div class="flex">
          <!-- location logo -->
          <div class="h-5 w-5 mr-3 text-[#8C7E7A]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <p class="text-[16px] font-[500] mr-3 border-r-2 text-[#1A0004] opacity-50 pr-3">Remote</p>
          <p class="text-[16px] font-[500] mr-3 text-[#1A0004] opacity-50 pr-3">Lagos</p>
          <div class="h-5 w-5 mr-3 text-[#8C7E7A]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="w-6 h-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </div>
          <p class="text-[16px] font-[500] mr-3 text-[#1A0004] opacity-50 pr-3">Full-time</p>
        </div>
      </div>
    </div>
    <!-- buttons -->
    <div class="flex mt-[50px] mr-10">
      <button class="w-[136px] h-[50px] left-0 top-0 bg-[#FF2449] rounded-[10px] text-[15px] font-[600] text-white mr-3">Apply now</button>
        <button class="w-[174px] h-[50px] left-[152] top-0 bg-[#FFFCF0] rounded-[10px] text-[15px] font-[600] text-[#FF2449] border-[1.5px] border-[#FF2449] flex items-center justify-center space-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" class="w-4 h-4">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
          />
        </svg>
        <p>
            Save for later
        </p>
        </button>
    </div>
  </div>
</template>
