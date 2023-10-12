import { createI18n } from 'vue-i18n'

import cs from '../lang/cs.json'
import en from '../lang/en.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const config = useRuntimeConfig()
  const i18n = createI18n({
    legacy: false,
    locale: config.public.LOCALE as string,
    warnHtmlMessage: false, // disable of the Detected HTML in message
    messages: {
      cs,
      en
    }
  })
  vueApp.use(i18n)
})