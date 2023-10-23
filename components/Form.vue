<template>
    <form
    loading="lazy"
    data-aos="fade-up"
    data-aos-duration="600"
    @submit.prevent="submitForm"
    class="max-w-[1024px] outline-4 mx-auto bg-orange-500 mt-20 p-6 rounded-lg"
    :class="{ 'shake-effect': shake = true }"
    >
    <div class="grid grid-cols-2 gap-x-12">
      <div class="mb-4">
          <label for="from" class="block mb-2 text-sm font-medium text-white">From</label>
          <AdressComplete v-model="firstForm.from" type="text" name="from" class="w-full p-2 rounded-[8px]" @address-selected="address => firstForm.from = address.display_name" />
          <p v-if="selectedAddress">Selected Address: {{ selectedAddress }}</p>
    </div>
      <div class="mb-4">
      <label label for="to" class="block mb-2 text-sm font-medium text-white">To</label>
      <AdressComplete v-model="firstForm.to" class="w-full p-2 rounded-[8px]" type="text" name="to" @address-selected="address => firstForm.to = address.display_name" />
          <p v-if="selectedAddress">Selected Address: {{ selectedAddress }}</p>
    </div>
    </div>
    <div class="flex flex-row items-end gap-x-12 w-full">
      <div class="flex gap-x-4 w-full">
        <div>
        <label for="date" class="block rounded mb-2 text-sm font-medium text-white">Date</label>
        <Calendar v-model="firstForm.pickupDate" class="calendar text-bold max-w-[112px]" dateFormat="dd/mm/yy" placeholder="DD/MM/YYYY" />
      </div>
      <div>
        <label for="date" class="block mb-2 text-sm font-medium rounded text-white">Time</label>
        <Calendar v-model="firstForm.pickupTime" id="calendar-timeonly" class="calendar calendar-timeonly max-w-[65px] input:text-center" placeholder="00:00" timeOnly />
      </div>
        <div>
        <label label for="to" class="block mb-2 text-sm font-medium text-white">Passengers</label>
        <Dropdown v-model="selectedPassengers" editable :options="numbers" optionLabel="number" placeholder="0" class="calendar w-[120px] rounded-lg" />
        </div>
      <div class="flex justify-center items-end gap-x-3">
        <div>
        <label class="block mb-2 text-sm font-medium text-white">Luggage</label>
        <Dropdown v-model="selectedPassengers" editable :options="numbers" optionLabel="number" placeholder="0" class="calendar w-[120px] rounded-lg" />
        </div>
      </div>
      </div>
      <div class="w-full">
        <Button label="Search" type="submit" icon="pi pi-check" class="w-full bg-green-500 hover:bg-green-600 p-2 text-white" />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import Dropdown from 'primevue/dropdown/Dropdown.vue';
import Button from "primevue/button/Button.vue";
import InputText from 'primevue/inputtext/InputText.vue';
import AdressComplete from './AdressComplete.vue';
import Calendar from 'primevue/calendar/Calendar.vue';
import { defineExpose } from 'vue'

const selectedAddress = ref('');
const shake = ref(false)
const selectedPassengers = ref();
const numbers = ref([
    { number: '1' },
    { number: '2' },
    { number: '3' },
    { number: '4' },
    { number: '5' },
    { number: '6' },
    { number: '7' },
    { number: '8' },
    { number: '9' },
    { number: '10' }
]);

type FormData = {
  from: string;
  to: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  luggage: number;
};

 const firstForm = reactive<FormData>({
  from: '',
  to: '',
  pickupDate: '',
  pickupTime: '',
  passengers: 0,
  luggage: 0
});

const submitForm = async () => {
        try {
            const response = await useFetch('/api/test', {
                method: 'POST',
                body: JSON.stringify({
                  clientEmail: 'elmirmammadli18@gmail.com',
                  formDetails: firstForm
                })
            });
        } catch (e) {
          console.log(e);
        }
    };

function shakeOn () {
    shake.value = true
}

const props = defineProps({
  triggerShake: Boolean
});

watch(() => props.triggerShake, (newValue) => {
  if (newValue) {
    shakeOn();
  }
});
</script>

<style global lang="scss">
.calendar {
  input {
    border-radius: 8px;
  };
  .calendar-timeonly {
    input {
      border-radius: 8px;
    }
  }
}

.shake-effect {
  animation: shake 0.5s;
}
@keyframes shake {
  0% { transform: translateX(0); }
  25% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  75% { transform: translateX(-10px); }
  100% { transform: translateX(0); }
}
</style>
