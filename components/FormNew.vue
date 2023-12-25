<template>
  <div class="mt-20">
    <h1>Form</h1>
    <form @submit.prevent="handleSubmit">
    <input class="bg-gray-100 ms-4 border" placeholder="Name" type="text" v-model="form.firstName" name="firstName">
    <input class="bg-gray-100 ms-4 border" placeholder="Surname" type="text" v-model="form.firstName" name="lastName">
    <input class="bg-gray-100 ms-4 border" placeholder="Email" type="email" v-model="form.email" name="email">

    <Button type="submit">
      Send
    </Button>
    </form>
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios';

type Form = {
  firstName: string
  lastName: string
  email: string
}

const form: Form = {
  firstName: '',
  lastName: '',
  email: ''
}

const config = useRuntimeConfig()

const handleSubmit = async () => {
  try {
    const response = await axios.post(
      'https://api.sendgrid.com/v3/mail/send',
      {
        personalizations: [
          {
            to: [{ email: form.email }],
            subject: 'Your booking is confirmed'
          }
        ],
        from: { email: 'booking@taxi2airport.cz' },
        content: [
          
        ]
      },
      {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.public.SENDGRID_API_KEY}`
          }
        }
    )
    console.log(response.data);
    
  }
  catch (error) {
    console.error('Fetch error:', error);
  }
}
</script>