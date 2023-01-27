<template>
  <div class="w-full h-full flex items-center justify-center z-50 fixed inset-0 bg-overlay">
    <div class="absolute inset-0 h-full w-full cursor-pointer z-10 backdrop-blur-sm" @click="hideOverlay"></div>
    <div class="rounded-xl bg-brand-red w-[500px] h-[230px] flex flex-col items-center justify-center space-y-5 z-50">
      <div class="w-[350px] text-center space-y-1">
        <h2 class="text-[white] font-bold text-2xl">Sign in to continue</h2>
        <p class="text-xs text-[white]">Sign up to get access to all the features we’ve built just for you at Careerbuddy.</p>
      </div>
      <div class="flex space-x-5">
        <button class="bg-brand-black text-[white] rounded-xl w-32 py-4 capitalize">sign up</button>
        <button class="border-2 border-[white] rounded-xl w-32 py-4 text-[white] capitalize">sign up</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hideOverlay: {
      type: Function,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.overlay:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  backdrop-filter: blur(8px);
  z-index: 10;
}
</style>
