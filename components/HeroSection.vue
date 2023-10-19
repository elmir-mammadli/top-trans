<template>
    <div class="relative max-w-screen-xl mx-auto mt-32">
        <!-- <span class="absolute -top-[50%] left-[-25%] z-0">
            <svg width="1920" height="846" viewBox="0 0 1920 846" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.15" d="M0 157.813L0.000350952 535.367C39.0004 646.736 240 846 499.52 846C762.5 846 882.875 793.972 1018.81 748.116C1152.5 703.018 1285.08 665.713 1519.33 665.713C1657.65 665.713 1771 707.164 1920 749.416V497.41C1850 555.843 1652.5 603.786 1468.5 603.786C1226 603.786 1040.99 468.145 937.5 296.649C834.06 125.242 642 0 411.067 0C251.534 0 58 78.9067 0 157.813Z" fill="#B3B3B3"/>
</svg>

        </span> -->
        <div
        class="relative flex flex-row justify-start items-center z-30">
            <div 
            data-aos="fade-right"
            data-aos-duration="600"
            class="flex flex-col items-start">
                <h1
                class="text-[72px] font-bold max-w-xl text-gray-800 leading-[80px]">
                    <!-- Your <span class="text-green-400">Destination</span>, Our <span class="text-blue-500">Commitment</span>. -->
                    Have your <span  class="text-orange-400">best&nbsp;transfer</span>
                </h1>
                <p class="mt-4 max-w-xl text-gray-700 font-normal text-[20px]">Fast, safe and easiest transfer services <span class="font-bold">in Prague.</span> </p>
                <div 
                class="flex gap-x-5">
                    <button @click="modalOpen = true" class="bg-orange-500 text-white font-semibold text-[18px] px-9 py-3 rounded-xl mt-8 hover:bg-orange-600 transition .4s ease-all">
                        Let's Go!
                </button>
                <button class="bg-[#fff] hover:bg-gray-800 text-gray-900 hover:text-[#fff] outline outline-gray-800 font-medium text-[18px] px-9 py-3 rounded-xl mt-8 transition .4s ease-all">
                    Pricing
                </button>
                </div>
            </div>
            <div>
                <span 
                class="relative">
                    <img
                    loading="lazy"
                    data-aos="fade-left"
                    data-aos-duration="600" 
                    class="relative z-50" src="/images/hero_vector.png" width="600" alt="hero-img">
                    <span 
                    loading="lazy"
                    data-aos="fade-up-left"
                    data-aos-duration="600" 
                    class="absolute z-10 -left-[12%] -top-[5%] -rotate-0">
                        <img class="" src="/images/plane.png" width="220" alt="">
                    </span>
                </span>
            </div>
        </div>
        <div class="max-w-[1024px] mx-auto bg-orange-500 mt-20 p-6 rounded-lg">
    <div class="grid grid-cols-2 gap-x-12">
      <div class="mb-4">
          <label for="from" class="block mb-2 text-sm font-medium text-white">From</label>
          <AdressComplete type="text" name="from" class="w-full" @address-selected="onAddressSelected" />
          <p v-if="selectedAddress">Selected Address: {{ selectedAddress }}</p>
    </div>
      <div class="mb-4">
      <label label for="to" class="block mb-2 text-sm font-medium text-white">To</label>
      <AdressComplete class="w-full" type="text" name="to" @address-selected="onAddressSelected" />
          <p v-if="selectedAddress">Selected Address: {{ selectedAddress }}</p>
    </div>
    </div>
    <div class="flex gap-x-4">
      <div>
        <label for="date" class="block mb-2 text-sm font-medium text-white">Pickup date and time</label>
        <input id="date" type="date" class="p-2 border">
        <input id="time" type="time" class="p-2 border">
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-white">Return</label>
        <button class="p-2 border">+</button>
      </div>
      <div>
        <label class="block mb-2 text-sm font-medium text-white">Passengers</label>
        <input type="number" class="p-2 border" v-model="passengers">
      </div>
      <div class="flex justify-center items-end gap-x-3">
        <div>
        <label class="block mb-2 text-sm font-medium text-white">Luggage</label>
        <input type="number" class="p-2 border" v-model="luggage">
        </div>
        <button class="bg-green-500 w-[230px] text-white px-4 py-[9px]">Search</button>
      </div>
    </div>
  </div>
        <transition name="ease-in-out">
      <FormModal :value="modalOpen" @close="modalOpen = false" />
    </transition>
    </div>
</template>
<script setup lang="ts">
import AdressComplete from './AdressComplete.vue';
import FormModal from './modal/FormModal.vue';
const modalOpen = ref(false)

const selectedAddress = ref('')
const passengers = ref(2)
const luggage = ref(0)

const onAddressSelected = (address: any) => {
  selectedAddress.value = address.display_name;
}
</script>

<style>
.ease-in-out-enter-from {
  @apply opacity-0;
}

.ease-in-out-enter-to {
  @apply opacity-100;
}

.ease-in-out-leave-active {
  @apply transition duration-200 ease-in-out;
}

.ease-in-out-leave-from {
  @apply opacity-100;
}

.ease-in-out-leave-to {
  @apply opacity-0;
}
</style>