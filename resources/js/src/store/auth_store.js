import { defineStore } from 'pinia'
import axios from "axios";
import _env_values from "@/src/store/_env_values.js";

export const auth_store = defineStore('auth_store', {
    state: () => {return {
        token : null,
        user: null,
        loginData:{
            email: null,
            password: null
        },
        registerData:{
            name: null,
            email: null,
            password: null,
            password_confirmation: null
        },
        errors: {}
    }},

    actions: {

        async login(){
            const data = this.loginData;
            try {
                const request = await axios.post('/api/auth/login',data);
                console.log(request);
            }catch (err) {
                console.log(err.status)
                this.errors.login = err.response.data.errors;
            }

        },



        resetAuthData(){
            this.loginData = {email: null, password: null};
            this.registerData = {
                name: null, email: null, password: null, password_confirmation: null
            };
        }
    },
})