import cs from '../lang/cs.json'
import en from '../lang/en.json'
import de from '../lang/de.json'

// export default defineNuxtPlugin(({ vueApp }) => {
//   const config = useRuntimeConfig()
//   const i18n = createI18n({
//     legacy: false,
//     locale: config.public.LOCALE as string,
//     warnHtmlMessage: false, // disable of the Detected HTML in message
//     messages: {
//       cs,
//       en
//     }
//   })
//   vueApp.use(i18n)
// })

export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  warnHtmlMessage: false, // disable of the Detected HTML in message
  messages: {
    en,
    cs,
    de
  }
}))