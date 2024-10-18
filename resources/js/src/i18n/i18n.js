import {createI18n} from "vue-i18n";
import en from "@/src/i18n/langs/en/en.js";
import ru from "@/src/i18n/langs/ru/ru.js";

const storage_lang_key = `lang_${import.meta.env.VITE_APP_NAME}`;
const messages = {
    en: en,
    ru: ru,
}

const i18n = createI18n({
    locale: localStorage.getItem(storage_lang_key) ?? 'ru', // Установите начальную локаль по умолчанию
    fallbackLocale: 'en',
    messages,
});

export default i18n;