<template>
  <div>
    <input
      class="w-full"
      @input="autopredict"
      placeholder="Airport, address, station"
    />
    <div
      class="bg-white border p-2 max-w-[464px]" 
      v-if="addresses.length && (addresses.length || popularLocations.length)">
      <!-- <div
        class="p-2 border-b cursor-pointer"
        v-for="(popular, index) in popularLocations"
        :key="index"
        @click="selectedAddress(popular)"
      >
        <div>
          <span class="font-bold">
            <Icon 
            class="mr-1"
            :name="popular.icon"
            />
          </span>
          <span>{{ popular.display_name }}</span>
        </div>
      </div> -->
      <div
        class="p-2 border-b cursor-pointer"
        v-for="(address, index) in addresses"
        :key="index"
        @click="selectedAddress(address)"
      >
        {{ address.display_name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from "axios";
const emit = defineEmits()

const query = ref('')

const addresses = ref([])

// const popularLocations = [
//   { icon: 'ph:airplane-tilt', display_name: "Prague Airport (PRG)"},
//   { icon: 'ph:bank', display_name: "Prague City Centre" },
//   { icon: 'ph:bus', display_name: "Praha, ÚAN Florenc (Central Bus Station Florenc)" }
// ];


const autopredict = async () => {
    if(!query.value) {
        addresses.value = []
        return
    }
    try {
        const response = await axios.get(
            "https://nominatim.openstreetmap.org/search",
            {
                params: {
                    q: query.value,
                    format: 'json',
                    countrycodes: 'CZ',
                    limit: 4,
                }
            }, 
        )
        addresses.value = response.data
        console.log('Elmir');
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const selectedAddress = (address) => {
    query.value = address.display_name
    addresses.value = []
    emit('address-selected', address);
}

</script>
