<template>

  <div class="container mt-5" style="max-width: 800px">

    <LoginRegisterSwitcher/>

    <!-- Pills content -->
    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
        <form>
          <!-- Name input -->
          <div data-mdb-input-init class="form-outline mb-3">
            <input type="text" id="registerName" class="form-control" />
            <label class="form-label" for="registerName">Name</label>
          </div>

          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-3">
            <input type="email" id="registerEmail" class="form-control" />
            <label class="form-label" for="registerEmail">Email</label>
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-3">
            <input type="password" id="registerPassword" class="form-control" />
            <label class="form-label" for="registerPassword">Password</label>
          </div>

          <!-- Repeat Password input -->
          <div data-mdb-input-init class="form-outline mb-3">
            <input type="password" id="registerRepeatPassword" class="form-control" />
            <label class="form-label" for="registerRepeatPassword">Repeat password</label>
          </div>

          <!-- Submit button -->
          <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">Sign in</button>
        </form>
      </div>
    </div>
    <!-- Pills content -->

  </div>

</template>

<script setup>

import LoginRegisterSwitcher from "@/src/Components/Auth/LoginRegisterSwitcher.vue";
</script>

<style scoped>

</style>