<template>
  <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="login-page-btn" @click="routeTo('login-page')">{{$t('login')}}</button>
    </li>
    <li class="nav-item" role="presentation">
      <button class="nav-link" id="register-page-btn" @click="routeTo('register-page')">{{$t('register')}}</button>
    </li>
  </ul>
</template>

<script setup>
import router from "@/src/router/router.js";
import {onMounted} from "vue";

onMounted(() => {
  const currentAuthPage = document.querySelector(`#${router.currentRoute.value.name}-btn`);
  currentAuthPage.classList.add('active');
})
const routeTo = (route) => {
  router.push({name: route})
}
</script>

<style scoped>

</style>