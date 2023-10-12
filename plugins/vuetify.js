import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VDatePicker } from 'vuetify/labs/VDatePicker'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      VDatePicker,
      ...components
    },
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})