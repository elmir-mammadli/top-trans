<template>
  <div class="mx-auto max-w-screen-lg bg-white p-4 rounded shadow-md">
    <form @submit.prevent="submitForm" class="flex flex-col justify-center items-center">
      <div class="flex flex-row items-center justify-center">
        <div class="mb-4 flex flex-row">
        <label for="from" class="block text-gray-600 flex-none pr-2">From:</label>
        <input v-model="firstForm.from" type="text" id="from" name="from" class="input" placeholder="From" />
      </div>

      <div class="mb-4 flex flex-row">
        <label for="to" class="block text-gray-600 flex-none pr-2">To:</label>
        <input v-model="firstForm.to" type="text" id="to" name="to" class="input" placeholder="To" />
      </div>
      </div>

      <div class="flex items-center justify-center">
        <div class="mb-4 flex flex-row">
        <label for="pickupDate" class="block text-gray-600 flex-none pr-2">Pickup Date:</label>
        <input v-model="firstForm.pickupDate" type="date" id="pickupDate" name="pickupDate" class="input" placeholder="Date" />
      </div>

      <div class="mb-4 flex flex-row">
        <label for="pickupTime" class="block text-gray-600 flex-none pr-2">Pickup Time:</label>
        <input v-model="firstForm.pickupTime" type="time" id="pickupTime" name="pickupTime" class="input" placeholder="Time" />
      </div>
      </div>

      <div class="mb-4 flex flex-row">
        <label for="passengers" class="block text-gray-600 flex-none pr-2">Passengers:</label>
        <input v-model="firstForm.passengers" type="number" id="passengers" name="passengers" class="input" placeholder="1" />
      </div>

      <div class="mb-4">
        <label class="block text-gray-600">Luggage:</label>
        <div>
          <label for="handLuggage" class="inline-block mr-4">
            Hand Luggage
            <input v-model="firstForm.passengers" type="number" id="handluggage" name="handluggage" class="input" placeholder="1" />
          </label>
          <label for="checkedLuggage" class="inline-block">
            Checked Luggage
            <input v-model="firstForm.passengers" type="number" id="checkedluggage" name="checkedluggage" class="input" placeholder="1" />
          </label>
        </div>
      </div>

      <button type="submit" class="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Search</button>
    </form>
  </div>
</template>

<script setup lang="ts">

type FormData = {
  from: string;
  to: string;
  pickupDate: string;
  pickupTime: string;
  passengers: number;
  handLuggage: boolean;
  checkedLuggage: boolean;
};

const firstForm = reactive<FormData>({
  from: '',
  to: '',
  pickupDate: '',
  pickupTime: '',
  passengers: 0,
  handLuggage: false,
  checkedLuggage: false,
});

const submitForm = () => {
  // Handle form submission here, e.g., make an API request
  console.log('Form submitted with data:', 
  'From:' +  firstForm.from, 
  'To:' + firstForm.to, 
  'Date:' + firstForm.pickupDate, 
  'Time:' + firstForm.pickupTime, 
  'Passengers:' + firstForm.passengers, 
  'Hand luggage' + firstForm.handLuggage, 
  'Checked luggage' +  firstForm.checkedLuggage);
};
</script>

<style>
.input { 
  background-color: antiquewhite;
}
</style>
