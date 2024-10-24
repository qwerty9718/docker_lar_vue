import { defineStore } from 'pinia'
import axios from "axios";

export const app_store = defineStore('app_store', {
    state: () => {return {
        number: 10
    }},

    actions: {
        initNumber(num){
            this.number = this.number + num;
        },
    },
})