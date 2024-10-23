import {createI18n} from "vue-i18n";
import en from "@/src/i18n/langs/en/en.js";
import ru from "@/src/i18n/langs/ru/ru.js";
import _env_values from "@/src/store/_env_values.js";

const storage_lang_key = _env_values.storage_lang_key
const defaultLangApp = _env_values.defaultLangApp;


const messages = {
    en: en,
    ru: ru,
}

const i18n = createI18n({
    locale: localStorage.getItem(storage_lang_key) ?? defaultLangApp, // Установите начальную локаль по умолчанию
    fallbackLocale: 'en',
    messages,
});

export default i18n;