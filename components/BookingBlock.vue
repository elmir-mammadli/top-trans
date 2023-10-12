<template>
    <div 
    loading="lazy"
    data-aos="fade-up"
    data-aos-once="true"
    data-aos-duration="600"
    class="flex flex-col items-center max-w-screen-xl mx-auto my-32">
        <div class="flex flex-col items-center">
            <p class="uppercase text-[16px] text-orange-400 font-bold">Reserve within a minute</p>
            <h1 class="text-[36px] max-w-xl text-gray-800 text-center font-semibold leading-[1.4]">Arrange your airport transfer in&nbsp;few easy steps</h1>
        </div>
        <div
        
        class="flex flex-row gap-x-14 mt-10">
            <div
            v-for="(item, index) in items" :key="index" 
            class="flex flex-col items-center">
            <span loading="lazy" class="w-[120px]" v-html="item.logo" />
            <div class="flex flex-col items-center mt-4">
                <p class="font-bold text-[20px] text-gray-800">
                {{ item.title }}
            </p>
            <p class="text-[18px] max-w-[300px] text-center mt-2 text-gray-500">
                {{ item.description }}
            </p>
            </div>
            </div>
        </div>
        <div class="mt-8">
            <button class="bg-orange-500 text-white font-semibold text-[18px] px-12 py-4 rounded-full mt-8 hover:bg-orange-600 transition .4s ease-all">
                        Book Now!
                </button>
        </div>
    </div>
</template>
<script setup lang="ts">
const items = [
    {
        logo: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={0} stroke="#ff8a4c" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>
`,
        title: 'Plan your ride ahead',
        description: 'Fix a time and choose a meeting place for your ride.',
    },
    {
        logo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fff" stroke="#ff8a4c" d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H15V3H9v2H6.5c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>
`,
        title: 'Choose the transport',
        description: 'Pick a car type and customize options for a more pleasant journey',
    },
    {
        logo: `<svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" strokeWidth={0} stroke="#ff8a4c">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>

`,
        title: 'Pay and enjoy',
        description: 'No hidden costs. Reasonable pricing, accepting all payment methods.',
    }
]
</script>