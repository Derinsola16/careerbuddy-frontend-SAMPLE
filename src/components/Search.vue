<template>
    <div class="flex justify-center mt-10 mb-20 p-4 ">
          <div class="flex justify-around border border-[#DBD6D8] rounded">
            <!-- select role -->
            <div class=" ml-10 mr-10 border-r">
              <div class=" -mb-1">
                <label class="text-[#DBD6D8] text-[14px] ml-3" for="">Select Role</label>
              </div>
              <select class=" border-none" name="" id="">
                <option value="front_end_dev">Front-end development</option>
                <option value="product_design">Product Design</option>
                <option value="business_dev">Business Development</option>
                <option value="user_experience">User Experience Design</option>
                <option value="marketing_lead">Marketing Lead</option>
              </select>
            </div>
            <!-- Years of experience -->
            <div class=" mr-10 border-r pr-10">
              <div class=" -mb-1">
                <label class="text-[#DBD6D8] text-[14px] pr-10 mt-2" for="">Years of experience</label>
              </div>
              <select class=" -ml-3 border-none" name="" id="">
                <option value="">1 year</option>
                <option value="">2 - 5 years</option>
                <option value="">5 - 9 years</option>
                <option value="">5 - 9 years</option>
                <option value="">10 - 15 years</option>
                <option value="">> 15 years</option>
              </select>
            </div>
            <!-- Role type -->
            <div class=" mr-10 border-r pr-10">
              <div class=" -mb-1">
                <label class="text-[#DBD6D8] text-[14px] mt-2" for="type">Role Type</label>
              </div>
              <select class=" -ml-3 border-none outline-none" name="" id="">
                <option value="fullTime">Full Time</option>
                <option value="partTime">Part Time</option>
                <option value="contract">Contract</option>
                <option value="intern">Internship</option>
              </select>
            </div>
            <!-- location -->
            <div class=" mr-10 pr-10">
              <div class=" -mb-1">
                <label class="text-[#DBD6D8] text[14px] mt-2" for="">Location</label>
              </div>
              <select class=" -ml-3 border-none" name="" id="">
                <option value="">Lagos, Nigeria</option>
              </select>
            </div>
            <!-- button -->
            <div class=" mr-2 mt-1">
              <button class=" bg-[#FF2449] w-[168px] h-[52px] rounded-[8px] text-white font-bold">Search Job</button>
            </div>
          </div>
        </div>
</template>