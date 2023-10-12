<template>
  <div>
    
  </div>
</template>
<!-- <template>
    <v-form v-model="valid">
        <div class="flex flex-col">
            <div class="flex justify-center items-center space-x-8">
            <v-autocomplete
                class="max-w-[470px]"
                name="pickup"
              v-model="pickUp"
              :rules="rules"
              label="Pickup from"
              required
              hide-details
            :items="['Vaclav Havel Airport', 'Florenc BUS', 'Georgia', 'Hlavni Nadrazi']"
            variant="outlined"
            ></v-autocomplete>
            <v-autocomplete
            name="drop-off"
            class="max-w-[470px]"
              v-model="dropOff"
              :rules="rules"
              label="Dropoff to"
              required
              hide-details
              variant="outlined"
              :items="['Centrum Chodov', 'Vaclavske Namesti', 'Vaclav Havel Airport', 'Hlavni Nadrazi']"
            ></v-autocomplete>
            </div>
            <div class="flex flex-row">
              <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Pick a Date"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      @input="menu = false"
    ></v-date-picker>
  </v-menu>
            </div>
        </div>
    </v-form>
  </template>
<script lang="ts" setup>
const valid = ref(false)
const dropOff = ref('')
const pickUp = ref('')
const email = ref('')
const rules = [
    (value:string) => {
        if (value) return true
        return `Please enter your ${props.name} address`
    }
]
const props = defineProps({
    name: {
        type: String,
        required: true
    }
})

</script>
<style>
.v-field {
    color: black;
}
</style>
<!-- <script>
  export default {
    data: () => ({
      valid: false,
      firstname: '',
      lastname: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      email: '',
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    }),
  }
</script> -->