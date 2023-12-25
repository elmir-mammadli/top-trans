<template>
    <div class="max-w-[992px] mx-auto flex justify-center  mb-6 mt-20">
    <div v-for="(step, index) in reservationData" :key="index" class="flex items-center">
        <div :class="[
          chapter > index ? 'bg-green-500' : 'bg-green-200'
          ]" class="w-8 h-8 rounded-full flex items-center font-semibold justify-center text-white">
            {{ index + 1 }}
        </div>
        <div class="flex-grow h-1 bg-gray-400 mx-2"></div>
        <div>
            {{ step.step }}
        </div>
        <div v-if="index !== reservationData.length - 1" class="h-[1px] bg-gray-400 w-[150px] mx-4"></div>
    </div>
</div>
<form
    loading="lazy"
    data-aos="fade-up"
    data-aos-duration="600"
    @submit.prevent="submitForm"
    class="max-w-[1024px] outline-4 mx-auto bg-orange-400 mt-10 p-6 rounded-lg"
    >
<section v-if="chapter === 1">
    <div class="grid grid-cols-2 gap-x-12">
      <div class="mb-4">
          <label for="from" class="block mb-2 text-sm font-medium text-white">{{ $t('form.from') }}</label>
          <AdressComplete 
          v-model="formData.from" 
          type="text" 
          name="from" 
          class="w-full p-2 rounded-[8px]" 
          @address-selected="address => formData.from = address.display_name"
          :coordinates="{
            lat: parentLat,
            lon: parentLon
          }"
          />
          <p v-if="selectedAddress">Selected Address: {{ selectedAddress }}</p>
    </div>
      <div class="mb-4">
      <label label for="to" class="block mb-2 text-sm font-medium text-white">{{ $t('form.to') }}</label>
      <AdressComplete 
      v-model="formData.to" 
      class="w-full p-2 rounded-[8px]" 
      type="text"
     :coordinates="{
        lat: parentLat,
        lon: parentLon
      }" 
      name="to" 
      @address-selected="address => formData.to = address.display_name"
      />
          <p v-if="selectedAddress">Selected Address: {{ selectedAddress }}</p>
    </div>
    </div>
    <div class="flex flex-row items-end gap-x-12 w-full">
      <div class="flex gap-x-4 w-full">
        <div>
        <label for="date" class="block rounded mb-2 text-sm font-medium text-white">{{ $t('form.date') }}</label>
        <Calendar v-model="formData.formattedDate" class="calendar text-bold max-w-[112px]" dateFormat="dd.mm.yy" placeholder="DD/MM/YYYY" />
      </div>
      <div>
        <label for="time" class="block mb-2 text-sm font-medium rounded text-white">{{ $t('form.time') }}</label>
        <Calendar v-model="formData.formatTime" id="calendar-timeonly" class="calendar calendar-timeonly max-w-[85px] input:text-center" placeholder="12:00" timeOnly />
      </div>
        <div>
        <label label for="passengers" class="block mb-2 text-sm font-medium text-white">{{ $t('form.passengers') }}</label>
        <InputText id="passengers" v-model="formData.passengers" type="number" name="passengers" class="w-[80px] p-2 rounded-[8px]"  placeholder="0" />
        </div>
      <div class="flex justify-center items-end gap-x-3">
        <div>
        <label for="luggage" class="block mb-2 text-sm font-medium text-white">{{ $t('form.luggage') }}</label>
        <InputText v-model="formData.luggage" type="number" name="luggage" class="w-[80px] p-2 rounded-[8px]" placeholder="0" />
        </div>
      </div>
      </div>
      <div class="w-full">
        <Button :label="$t('form.search-button')" type="submit" icon="pi pi-check" class="w-full bg-green-500 hover:bg-green-600 p-2 text-white" />
      </div>
    </div>
</section>
<section v-if="chapter === 2">
  <div class="flex justify-between space-x-[24px]">
    <div class="bg-gray-100 rounded-lg flex flex-col max-w-[275px] w-full px-4 py-4">
      <span class="relative">
        <h1 class="text-left font-semibold">YOUR TRANSFER</h1>
        <span class="absolute rounded-lg border border-black px-3 py-1 text-[10px] font-semibold right-0 top-0">
          <a href="/">
            EDIT
          </a>
        </span>
      </span>
        <div v-for="(item, index) in itemsSchedule" :key="index">
              <div class="flex flex-col mt-3">
            <p class="font-semibold">
              {{ item.key }}
            </p>
            <p v-html="item.value"/>
        </div>
        </div>
    </div>

    <div>
      <div class="space-y-[24px] w-full">
        <CarModel @car-selected="updateSelectedCar" />
      </div>
    </div>
  </div>
</section>
<section v-if="chapter === 3">
    <div class="grid grid-cols-3 grid-rows-2 gap-x-8 w-full">
      <div class="relative mb-4">
      <label for="firstName" class="block mb-2 text-sm font-medium text-white">{{ $t('form.name') }}</label>
      <InputText required v-model="formData.firstName" type="text" name="firstName" placeholder="John" class="w-full p-2 rounded-[8px]" />
      </div>
      <div class="mb-4">
      <label for="firstName" class="block mb-2 text-sm font-medium text-white">{{ $t('form.surname') }}</label>
      <InputText v-model="formData.lastName" type="text" name="lastName" placeholder="Doe" class="w-full p-2 rounded-[8px]" />
      </div>
      <div class="mb-4">
      <label for="email" class="block mb-2 text-sm font-medium text-white">{{ $t('form.email') }}</label>
      <InputText v-model="formData.email" type="text" name="email" placeholder="john.doe@mail.com" class="w-full p-2 rounded-[8px]" />
      </div>
      <div class="mb-4">
      <label for="phoneNumber" class="block mb-2 text-sm font-medium text-white">{{ $t('form.number') }}</label>
      <InputText v-model="formData.phoneNumber" type="tel" autofocus name="phoneNumber" placeholder="+1 (123) 456-7890" class="w-full p-2 rounded-[8px]" />
      </div>
      <div class="mb-4">
      <label for="flightNumber" class="block mb-2 text-sm font-medium text-white">{{ $t('form.flight-number') }}</label>
      <InputText v-model="formData.flightNumber" type="text" name="flightNumber" placeholder="BA1594" class="w-full p-2 rounded-[8px]" />
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="mb-4 flex flex-col justify-start gap-y-1">
          <label for="childSeat" class="block mb-2 text-sm font-medium text-white">{{ $t('form.child-seat') }}</label>
          <div class="flex items-center gap-x-2">
            <Checkbox v-model="checked" :binary="true"/>
            <p class="text-white">{{ $t('form.child-seat-p') }}</p>
          </div>
      </div>
    <div class="mb-4">
        <Button label="Next" type="submit" icon="pi pi-check" class="w-full bg-green-500 hover:bg-green-600 p-2 text-white mt-7" />
      </div>
    </div>
  </section>
  <section v-if="chapter === 4">
    <div class="bg-white rounded-lg w-full p-4">
      <h1 class="text-center font-semibold mb-4">{{ $t('form.booking-details') }}</h1>
      <div>
          <table class="border-collapse w-full">
            <tbody>
              <tr v-for="index in 2" :key="index">
                  <td class="border border-gray-100 p-3" v-for="booking in bookingItems.slice((index-1)*6, index*6)" :key="booking.key">
                      <div>
                          <p class="font-semibold">
                              {{ booking.key }}
                          </p>
                          <p v-html="booking.value"/>
                      </div>
                  </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-x-2">
            <Checkbox v-model="isAgreed" :binary="true"/>
            <p v-html="$t('tcpp')" class="text-white" />
          </div>
      <div class="mb-4 w-[400px]">
        <Button label="Next" type="submit" icon="pi pi-check" class="w-full bg-green-500 hover:bg-green-600 p-2 text-white mt-7" />
      </div>
    </div>
  </section>
  </form>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext';
import Button from "primevue/button/Button.vue";
import AdressComplete from './AdressComplete.vue';
import Calendar from 'primevue/calendar/Calendar.vue';
import CarModel from './CarModel.vue';
import Checkbox from 'primevue/checkbox/Checkbox.vue';
import type { FormDataVariables } from './data/formData';
import { FormData } from './data/formData';
import axios from 'axios';
const { $t } = useLanguage()

const formData = reactive<FormDataVariables>(FormData)

const reservationData = computed(() => [
  {
    step: $t('reservation.step-1')
  },
  {
    step: $t('reservation.step-2')
  },
  {
    step: $t('reservation.step-3')
  },
  {
    step: $t('reservation.step-4')
  },
])
const selectedAddress = ref('');
const pickupDate = ref(new Date())
const pickupTime = ref(new Date())
const checked = ref(false)
const isAgreed = ref(false)
const parentLat = 0
const parentLon = 0
const formattedDate = computed(() => {
  let day = String(pickupDate.value.getDate()).padStart(2, '0')
  let month = String(pickupDate.value.getMonth() + 1).padStart(2, '0')
  let year = pickupDate.value.getFullYear()

  return `${day}.${month}.${year}`
})

console.log('Elmir',);


const formatTime = computed(() => {
  let hours = String(pickupTime.value.getHours()).padStart(2, '0')
  let minutes = String(pickupTime.value.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
})

const bookingItems = computed(() => [
  {
    key: $t('form.name'),
    value: formData.firstName
  },
  {
    key: $t('form.surname'),
    value: formData.lastName
  },
  {
    key: $t('form.email'),
    value: formData.email
  },
  {
    key: $t('form.number'),
    value: formData.phoneNumber
  },
  {
    key: $t('form.selected-car'),
    value: formData.selectedCar
  },
  {
    key: $t('form.flight-number'),
    value: formData.flightNumber
  },
  {
    key: $t('form.from').toUpperCase(),
    value: formData.from
  },
  {
    key: $t('form.to').toUpperCase(),
    value: formData.to
  },
  {
    key: $t('form.date').toUpperCase(),
    value: formattedDate.value
  },
  {
    key: $t('form.time').toUpperCase(),
    value: formatTime.value
  },
  {
    key: $t('form.passengers').toUpperCase(),
    value: formData.passengers
  },
  {
    key: $t('form.luggage').toUpperCase(),
    value: formData.luggage
  },
])

const itemsSchedule = computed(() => [...bookingItems.value.slice(6, 12)])
const chapter = ref(1)
const config = useRuntimeConfig()

const updateSelectedCar = (carName: string) => {
  formData.selectedCar = carName
}

const submitForm = async () => {
    try {
      const response = await axios.post(
        'https://api.sendgrid.com/v3/mail/send',
        {
          personalizations:[
            {
              to: [{ email: 'elmirmammadli18@gmail.com' }],
              subject: 'Your reservation is confirmed'
            }
          ],
          from: { email: 'booking@taxi2airport.cz' },
          content: [
            {
              type: 'text/html',
              value: `
              <h1>Thank you for your reservation</h1>
              <p>Dear ${formData.firstName} ${formData.lastName},</p>
              <p>Thank you for your reservation. We will contact you shortly to confirm your booking.</p>
              <p>Kind regards,</p>
              <p>Taxi2Airport</p>
              `
            }
          ]
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.public.SENDGRID_API_KEY}`
          }
        }
      );
      console.log(response.data);
      chapter.value++
    }
    catch (error) {
      console.error('Error submitting error', error);
    }
  }
</script>

<style scoped lang="scss">
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

.p-dropdown-items-wrapper {
  padding-left: 12px;
}
</style>

