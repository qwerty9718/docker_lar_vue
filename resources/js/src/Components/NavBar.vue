<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Навбар</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Переключатель навигации">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'main'}">
              {{$t ('main')}}
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'second-page'}">
              {{$t ('second_page')}}
            </router-link>
          </li>

        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Поиск">
          <button class="btn btn-outline-success" type="submit">Поиск</button>
        </form>

        <li class="d-flex">
          <button v-if="langStore.lang === 'en'" @click="langStore.setLanguage('ru',reloadPageAfterChangeLang)">en</button>
          <button v-if="langStore.lang === 'ru'" @click="langStore.setLanguage('en',reloadPageAfterChangeLang)">ru</button>
        </li>
      </div>
    </div>
  </nav>
</template>

<script setup>

import {onMounted} from "vue";
import {lang_Store} from "@/src/store/lang_store.js";
const langStore = lang_Store();

const reloadPageAfterChangeLang = true;

onMounted(() => {
  langStore.getLangFromLocalStorage();
  // login_register.getAccessToken();
})
</script>

<style scoped>

</style>