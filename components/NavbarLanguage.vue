<template>
    <div class="flex items-center z-10">
      <button type="button" data-dropdown-toggle="language-dropdown-menu" class="inline-flex items-center font-medium justify-center px-4 py-2 text-[15px] text-black dark:text-white rounded-lg cursor-pointer dark:hover:bg-gray-700 dark:hover:text-white">
        <img :src="locale === 'cs' ? '/images/icons/cz.png' : '/images/icons/en.png'" width="30" class="pr-2" alt="en lang">
        {{ locale === 'cs' ? 'CZ' : 'EN' }}
      </button>
      <!-- Dropdown -->
      <div
      class="z-50 hidden my-4 text-base list-none bg-gray-100 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu"
      :class="{'hidden': !isHidden}"
      >
        <ul class="py-2 font-medium" role="none">
          <li>
            <a @click="[
                locale === 'cs' ? switchLang('en') : switchLang('cs'),

          ]" class="block pt-1 cursor-pointer px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
              <div class="inline-flex items-center">
                <img :src="locale === 'cs' ? '/images/icons/en.png' : '/images/icons/cz.png'" width="30" class="pr-2" alt="cz lang">
                {{ locale === 'cs' ? 'EN' : 'CZ' }}
              </div>
            </a>
          </li>
        </ul>
      </div>
      <button data-collapse-toggle="navbar-language" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-language" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const isHidden = ref(false);
const switchLang = (lang: string) => {
    locale.value = lang;
    isHidden.value = !isHidden.value;
}
</script>