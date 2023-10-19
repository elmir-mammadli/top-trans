<template>
    <div class="w-full py-[120px]">
        <div class="flex flex-col items-center mb-[40px]">
            <p class="uppercase text-[16px] text-orange-400 font-bold">Frequently Asked Questions</p>
            <h1 class="text-[36px] max-w-xl text-gray-800 text-center font-semibold leading-[1.4]">Your most common questions answered here</h1>
        </div>
      <div 
      v-for="(q, index) in questions" 
      :key="index"
      class="mx-auto w-full max-w-4xl rounded-2xl bg-white p-2">
        <Disclosure as="div" v-slot="{ open }">
          <DisclosureButton
            class="flex w-full justify-between rounded-full bg-gray-100 px-6 py-5 text-left text-[18px] transition .4s ease-all font-medium text-gray-800 hover:bg-gray-200"
          >
            <span>
                {{ q.question }}
            </span>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-6 w-6 text-gray-800"
            />
          </DisclosureButton>
          <DisclosurePanel class="px-4 pt-4 pb-2 text-base text-gray-500">
            {{ q.answer }}
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
  import { ChevronUpIcon } from '@heroicons/vue/20/solid'

    const questions = [
        {
        question: 'When do I pay?',
        answer: 'For most booking, you can either choose to pay in advance for your airport transport service or when you\’re dropped at your hotel. If you\’re paying in advance online, our driver will be informed by our system, and there\’s nothing more you need to do. If you\’re paying on arrival by cash or credit card, you\’ll pay the full amount when you arrive at your destination.'
        },
        {
        question: 'Do I need to pay only in the local Czech Koruna currency (CZK)?',
        answer: 'Naturally we accept payment in the local CZK currency, but we also accept pounds sterling (GBP), US Dollars, Euros.'
        },
        {
            question: 'Are your prices per person or per vehicle?',
            answer: 'All our prices are per vehicle, not per person. The price you see on our website is the price you pay. There are no hidden extras.'
        },
        {
            question: 'Where do we meet our driver? How do we recognize our driver?',
            answer: 'When you arrive at the train station or Prague airport, our driver will be holding a visible orange card with our company logo and your lead passenger’s name printed on it. Click here for more information and photos about this.'
        },
    ]
  </script>  