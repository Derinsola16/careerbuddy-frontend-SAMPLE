<template>
  <div class="flex justify-center mt-10 mb-20 p-4">
    <div class="flex gap-x-9 border border-[#DBD6D8] rounded">
      <!-- select role -->
      <div class="border-r w-64">
        <div class="-mb-1">
          <label class="text-[#DBD6D8] text-[14px] ml-3" for="">Select Role</label>
        </div>
        <select class="border-none focus:outline-none focus:ring-transparent" name="" id="">
          <option selected disabled>Select Option</option>
          <option value="product_design">Product Design</option>
          <option value="business_dev">Business Development</option>
          <option value="user_experience">User Experience Design</option>
          <option value="marketing_lead">Marketing Lead</option>
        </select>
      </div>

      <!-- Years of experience -->
      <div class="border-r w-64">
        <div class="-mb-1">
          <label class="text-[#DBD6D8] text-[14px] pr-10 mt-2" for="">Years of experience</label>
        </div>
        <select class="-ml-3 border-none focus:outline-none focus:ring-transparent" name="" id="">
          <option selected disabled>Select Option</option>
          <option value="">1 year</option>
          <option value="">2 - 5 years</option>
          <option value="">5 - 9 years</option>
          <option value="">5 - 9 years</option>
          <option value="">10 - 15 years</option>
          <option value="">> 15 years</option>
        </select>
      </div>
      <!-- Role type -->
      <div class="border-r w-64">
        <div class="-mb-1">
          <label class="text-[#DBD6D8] text-[14px] mt-2" for="type">Role Type</label>
        </div>
        <select class="-ml-3 border-none focus:outline-none focus:ring-transparent" name="" id="">
          <option selected disabled>Select Option</option>
          <option value="fullTime">Full Time</option>
          <option value="partTime">Part Time</option>
          <option value="contract">Contract</option>
          <option value="intern">Internship</option>
        </select>
      </div>
      <!-- location -->
      <div class="w-64">
        <div class="-mb-1">
          <label class="text-[#DBD6D8] text[14px] mt-2" for="">Location</label>
        </div>
        <select class="-ml-3 border-none focus:outline-none focus:ring-transparent w-full" name="" id="">
          <option selected disabled>Select Option</option>
          <option value="">Lagos, Nigeria</option>
        </select>
      </div>
      <!-- button -->
      <div class="mr-2 mt-1">
        <button class="bg-[#FF2449] w-[168px] h-[52px] rounded-[8px] text-white font-bold">Search Job</button>
      </div>
    </div>
  </div>
</template>
