<template>
  <main>
    <!-- w-[454px] -->
    <div class="lg:flex items-center justify-between w-full">
      <div class="lg:w-1/2 lg:pr-28">
        <Label class="flex" v-if="labelText" :labelText="labelText" />
        <p :class="[white ? 'text-white' : 'text-brand-black']" class="text-5xl md:w-auto lg:text-[60px] font-albertExtraBold lg:leading-[64px] mb-5 md:mb-3">{{ title }}</p>
        <p class="font-albertSmall mb-8 pr-12 md:pr-0" :class="[white ? 'text-white' : 'text-brand-black']">
          {{ caption }}
        </p>
        <slot name="button" />
      </div>
      <div class="self-start">
        <VueCardStack
          :cards="cards"
          :card-width="350"
          :card-height="350"
          :stack-width="stackWidth"
          :max-visible-cards="parseInt(maxVisibleCards)"
          :scale-multiplier="parseFloat(scaleMultiplier)"
          ref="stack"
        >
          <template v-slot:card="{ card }">
            <img style="width: 100%; height: 100%" :src="card.background" alt="hero" class="rounded-xl object-cover" />
          </template>
        </VueCardStack>
      </div>
    </div>
  </main>
</template>

<script>
import VueCardStack from '@/components/cardStack/CardStack.vue';
import Label from '@/components/Label.vue';
import { debounce } from '@/utils/debounce';
export default {
  props: { cards: Array, title: String, caption: String, labelText: String, white: Boolean },
  components: {
    VueCardStack,
    Label,
  },
  data() {
    return {
      maxVisibleCards: 5,
      containerWidth: 470,
      scaleMultiplier: 1,
    };
  },
  computed: {
    stackWidth: {
      get() {
        return this.containerWidth;
      },
      set: debounce(function (val) {
        this.containerWidth = parseInt(val);
        this.$refs.stack.rebuild();
      }, 100),
    },
  },
};
</script>
