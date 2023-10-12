<template>
    <form class="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <!-- From input -->
      <div class="mb-4">
        <label for="from" class="block text-gray-700 font-bold mb-2">From</label>
        <input type="text" id="from" v-model="from" class="form-input text-black" />
      </div>

      <!-- Reverse button -->
    <div class="mb-4 text-center">
      <button @click="reverse" class="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">
        Reverse
      </button>
    </div>
  
      <!-- To input -->
      <div class="mb-4">
        <label for="to" class="block text-gray-700 font-bold mb-2">To</label>
        <input type="text" id="to" v-model="to" class="form-input text-black" />
      </div>
  
      <!-- Pickup date -->
      <div class="mb-4">
        <label for="pickup-date" class="block text-gray-700 font-bold mb-2">Pickup Date</label>
        <input type="date" id="pickup-date" v-model="pickupDate" class="form-input" />
      </div>
  
      <!-- Pickup time -->
      <div class="mb-4">
        <label for="pickup-time" class="block text-gray-700 font-bold mb-2">Pickup Time</label>
        <select id="pickup-time" v-model="pickupTime" class="form-select">
          <option value="08:00">08:00</option>
          <!-- Add more time options as needed -->
        </select>
      </div>
  
      <!-- Passengers number -->
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Passengers Number</label>
        <div class="flex">
          <div class="mr-4">
            <label for="adults" class="block text-gray-600 font-semibold">Adults</label>
            <input type="number" id="adults" v-model="adults" class="form-input" />
          </div>
          <div>
            <label for="children" class="block text-gray-600 font-semibold">Children</label>
            <input type="number" id="children" v-model="children" class="form-input" />
          </div>
        </div>
      </div>
  
      <!-- Luggage -->
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Luggage</label>
        <div class="flex">
          <div class="mr-4">
            <label for="hand-luggage" class="block text-gray-600 font-semibold">Hand luggage</label>
            <input type="number" id="hand-luggage" v-model="handLuggage" class="form-input" />
          </div>
          <div>
            <label for="checked-luggage" class="block text-gray-600 font-semibold">Checked luggage</label>
            <input type="number" id="checked-luggage" v-model="checkedLuggage" class="form-input" />
          </div>
        </div>
      </div>
  
      <!-- Send button -->
      <div class="text-center">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send
        </button>
      </div>
    </form>
  </template>
  
  <script setup lang="ts">
  
  const from = ref('');
  const to = ref('');
  const pickupDate = ref('');
  const pickupTime = ref("08:00, 09:00, 10:00, 11:00, 12:00, 13:00");
  const adults = ref(0);
  const children = ref(0);
  const handLuggage = ref(0);
  const checkedLuggage = ref(0);

const reverse = computed(() => {
    return {
      from: to.value,
      to: from.value,
    };
  });
  </script>
  