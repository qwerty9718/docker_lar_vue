import './bootstrap';

import {createApp} from "vue";

import Index from "@/src/Index.vue";
import router from "@/src/router/router.js";
import i18n from "@/src/i18n/i18n.js";
import { createPinia } from 'pinia'

const pinia = createPinia()


createApp(Index)
    .use(i18n)
    .use(pinia)
    .use(router)
    .mount('#app');
