<template>
    <div class="bg-white page__wrap">
        <Modal />
        <Header />
      <slot />
      <!-- <Footer /> -->
    </div>
  </template>

  <script lang="ts" setup> 
  import AOS from 'aos'
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite';
import Aos from 'aos';
  
  onBeforeMount(() => {
    AOS.init()
  }),

  onMounted(() => {
    initFlowbite();
  });
  </script>

  <style>
@media screen and (min-width: 120.0625em) {
  .page__wrap {
    box-shadow: 0 0 22px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
  }
}

.page__wrap {
  font-family: 'Poppins', sans-serif;
  min-width: 300px;
  width: 100%;
}
  </style>