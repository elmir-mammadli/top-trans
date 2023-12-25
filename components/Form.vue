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
          v-model="firstForm.from" 
          type="text" 
          name="from" 
          class="w-full p-2 rounded-[8px]" 
          @address-selected="address => firstForm.from = address.display_name"
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
      v-model="firstForm.to" 
      class="w-full p-2 rounded-[8px]" 
      type="text"
     :coordinates="{
        lat: parentLat,
        lon: parentLon
      }" 
      name="to" 
      @address-selected="address => firstForm.to = address.display_name"
      />
          <p v-if="selectedAddress">Selected Address: {{ selectedAddress }}</p>
    </div>
    </div>
    <div class="flex flex-row items-end gap-x-12 w-full">
      <div class="flex gap-x-4 w-full">
        <div>
        <label for="date" class="block rounded mb-2 text-sm font-medium text-white">{{ $t('form.date') }}</label>
        <Calendar v-model="firstForm.formattedDate" class="calendar text-bold max-w-[112px]" dateFormat="dd.mm.yy" placeholder="DD/MM/YYYY" />
      </div>
      <div>
        <label for="time" class="block mb-2 text-sm font-medium rounded text-white">{{ $t('form.time') }}</label>
        <Calendar v-model="firstForm.formatTime" id="calendar-timeonly" class="calendar calendar-timeonly max-w-[85px] input:text-center" placeholder="12:00" timeOnly />
      </div>
        <div>
        <label label for="passengers" class="block mb-2 text-sm font-medium text-white">{{ $t('form.passengers') }}</label>
        <InputText id="passengers" v-model="firstForm.passengers" type="number" name="passengers" class="w-[80px] p-2 rounded-[8px]"  placeholder="0" />
        </div>
      <div class="flex justify-center items-end gap-x-3">
        <div>
        <label for="luggage" class="block mb-2 text-sm font-medium text-white">{{ $t('form.luggage') }}</label>
        <InputText v-model="firstForm.luggage" type="number" name="luggage" class="w-[80px] p-2 rounded-[8px]" placeholder="0" />
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
      <InputText required v-model="firstForm.firstName" type="text" name="firstName" placeholder="John" class="w-full p-2 rounded-[8px]" />
      </div>
      <div class="mb-4">
      <label for="firstName" class="block mb-2 text-sm font-medium text-white">{{ $t('form.surname') }}</label>
      <InputText v-model="firstForm.lastName" type="text" name="lastName" placeholder="Doe" class="w-full p-2 rounded-[8px]" />
      </div>
      <div class="mb-4">
      <label for="email" class="block mb-2 text-sm font-medium text-white">{{ $t('form.email') }}</label>
      <InputText v-model="firstForm.email" type="text" name="email" placeholder="john.doe@mail.com" class="w-full p-2 rounded-[8px]" />
      </div>
      <div class="mb-4">
      <label for="phoneNumber" class="block mb-2 text-sm font-medium text-white">{{ $t('form.number') }}</label>
      <InputText v-model="firstForm.phoneNumber" type="tel" autofocus name="phoneNumber" placeholder="+1 (123) 456-7890" class="w-full p-2 rounded-[8px]" />
      </div>
      <div class="mb-4">
      <label for="flightNumber" class="block mb-2 text-sm font-medium text-white">{{ $t('form.flight-number') }}</label>
      <InputText v-model="firstForm.flightNumber" type="text" name="flightNumber" placeholder="BA1594" class="w-full p-2 rounded-[8px]" />
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

const { $t } = useLanguage()


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


const formatTime = computed(() => {
  let hours = String(pickupTime.value.getHours()).padStart(2, '0')
  let minutes = String(pickupTime.value.getMinutes()).padStart(2, '0')

  return `${hours}:${minutes}`
})
type FormData = {
  from: string;
  to: string;
  formattedDate: string,
  formatTime: string;
  passengers: string
  luggage: string
  selectedCar: string
  email: string
  firstName: string
  lastName: string
  phoneNumber: string
  flightNumber: string
  checked: boolean
};

 const firstForm = reactive<FormData>({
  from: 'Prague Airport',
  to: 'Papirnikova 617/7',
  formattedDate: '21.09.2023',
  formatTime: '18:50',
  passengers: '3',
  luggage: '3',
  selectedCar: 'Econom Sedan',
  email: 'elmir@ecomail.cz',
  firstName: '',
  lastName: 'Mammadli',
  phoneNumber: '+420777940265',
  flightNumber: 'BR1234',
  checked: false
});

const bookingItems = computed(() => [
  {
    key: $t('form.name'),
    value: firstForm.firstName
  },
  {
    key: $t('form.surname'),
    value: firstForm.lastName
  },
  {
    key: $t('form.email'),
    value: firstForm.email
  },
  {
    key: $t('form.number'),
    value: firstForm.phoneNumber
  },
  {
    key: $t('form.selected-car'),
    value: firstForm.selectedCar
  },
  {
    key: $t('form.flight-number'),
    value: firstForm.flightNumber
  },
  {
    key: $t('form.from').toUpperCase(),
    value: firstForm.from
  },
  {
    key: $t('form.to').toUpperCase(),
    value: firstForm.to
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
    value: firstForm.passengers
  },
  {
    key: $t('form.luggage').toUpperCase(),
    value: firstForm.luggage
  },
])

const itemsSchedule = computed(() => [...bookingItems.value.slice(6, 12)])
// const schedule = computed(() => [
// {
//     key: 'FROM:',
//     value: firstForm.from
//   },
//   {
//     key: 'TO:',
//     value: firstForm.to
//   },
//   {
//     key: 'DATE:',
//     value: formattedDate.value
//   },
//   {
//     key: 'TIME:',
//     value: formatTime.value
//   },
//   {
//     key: 'PASSENGERS:',
//     value: firstForm.passengers
//   },
//   {
//     key: 'LUGGAGE:',
//     value: firstForm.luggage
//   },
// ])
const chapter = ref(1)

const updateSelectedCar = (carName: string) => {
  firstForm.selectedCar = carName
}

const submitForm = async () => {
  chapter.value += 1;
        try {
            const response = await useFetch('/api/submit', {
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

