export const useLanguage = () => {
    const { locale, t: $t } = useI18n()

     return { $t, locale }
}