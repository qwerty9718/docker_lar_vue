<template>

  <div class="container mt-5" style="max-width: 800px">

    <LoginRegisterSwitcher/>
    {{authStore.errors}}
    <!-- Pills content -->
    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form>

          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-3">

            <input
                type="email"
                id="loginName"
                class="form-control"
                v-model="authStore.loginData.email"
                autocomplete="email"/>
            <label class="form-label" for="loginName">Email or username</label>

          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-3">
            <input
                type="password"
                id="loginPassword"
                class="form-control"
                v-model="authStore.loginData.password"
                autocomplete="current-password" />
            <label class="form-label" for="loginPassword">Password</label>
          </div>

          <div class="form-check mt-2 mb-2">
            <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
            <label class="form-check-label" for="loginCheck"> Remember me </label>
          </div>

          <!-- Submit button -->
          <button type="button" class="btn btn-primary btn-block mb-3" @click="authStore.login()">Sign in</button>

        </form>
      </div>
    </div>

  </div>

</template>

<script setup>
import LoginRegisterSwitcher from "@/src/Components/Auth/LoginRegisterSwitcher.vue";
import {auth_store} from "@/src/store/auth_store.js";

const authStore = auth_store();
</script>

<style scoped>

</style>