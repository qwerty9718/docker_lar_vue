import { defineStore } from 'pinia'
import axios from "axios";
import i18n from "@/src/i18n/i18n.js";
import env_values from "@/src/store/_env_values.js";

const storage_lang_key = env_values.storage_lang_key;

export const lang_Store = defineStore('lang_store', {
    state: () => {return {
        lang: '',
        storage_lang_key : `lang_${import.meta.env.VITE_APP_NAME}`
    }},

    actions: {
        getLangFromLocalStorage() {
            this.lang = localStorage.getItem(storage_lang_key) ?? 'ru';
        },
        setLanguage(setLang, reloadPage=false) {
            if (this.lang !== setLang){
                localStorage.setItem(storage_lang_key, setLang);
                this.lang = setLang;

                if (!reloadPage) i18n.global.locale = setLang;
                if (reloadPage) location.reload();
            }
        },
    },
})