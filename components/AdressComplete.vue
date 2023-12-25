<template>
  <div class="relative">
    <InputText
      class="w-full"
      type="text"
      v-model="query"
      @input="autopredict"
      required
      :placeholder="$t('form.address-placeholder')"
    />
    <div
      class="bg-white rounded border p-2 max-w-[510px] mt-4 z-30" 
      v-if="addresses.length && (addresses.length || popularLocations.length)">
      <div
        class="p-2 border-b cursor-pointer"
        v-for="(popular, index) in popularLocations"
        :key="index"
        @click="selectedAddress(popular)"
        v-if="query.length <= 3"
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
      </div>
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

<script setup lang="ts">
import InputText from 'primevue/inputtext/InputText.vue';
import { ref } from 'vue'
import axios from "axios";

const emit = defineEmits()
const query = ref('')
const addresses = ref([])

const props = defineProps<{
coordinates: {
  lat: number
  lon: number
}
}>()

const popularLocations = [
  { icon: 'ph:airplane-tilt', display_name: "Prague Airport (PRG)"},
  { icon: 'ph:bank', display_name: "Prague City Centre (Václavské náměstí)" },
  { icon: 'ph:bus', display_name: "Praha, ÚAN Florenc (Central Bus Station Florenc)" }
];

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZWxtaXIyMTgiLCJhIjoiY2xxOGdzeW5zMThpNDJtcDFnMGxueWd1biJ9.QorxNQclJDKwh07MORcl4A'

const autopredict = async () => {  
    if (!query.value) {
        addresses.value = []
        return
    }
    try {
        const response = await axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${query.value}.json`,
            {
                params: {
                    access_token: MAPBOX_TOKEN,
                    countrycodes: 'cz',
                    limit: 5,
                    autocomplete: true,
                }
            },
        );
          addresses.value = response.data.features.map((feature: {place_name: string}) => ({
          display_name: feature.place_name
        }));
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

const selectedAddress = (address: any) => {
    query.value = address.display_name;
    addresses.value = [];
};




watch(query, (newQuery) => {
      emit('update:modelValue', newQuery);
   });

   type LanLon = 'lat1' | 'lat2' | 'lon1' | 'lon2'
   
   type Coordinates = {
      lat1: number,
      lat2: number,
      lon1: number,
      lon2: number
   }

// function calculateDistance(coordinates: Coordinates) {
//   const R = 6371
//   const dLat = degreesToRadians(coordinates.lat2 - coordinates.lat1)
//   const dLon = degreesToRadians(coordinates.lon2 - coordinates.lon1)
//   const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(degreesToRadians(coordinates.lat1) * Math.cos(degreesToRadians(coordinates.lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2))
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
//   return R * c
// }

// function degreesToRadians (degrees: number) {
//   return degrees * Math.PI / 180
// }
</script>