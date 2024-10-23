<template>

  <div class="container mt-5" style="max-width: 800px">

    <LoginRegisterSwitcher/>

    <!-- Pills content -->
    <div class="tab-content">
      <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <form>

          <!-- Email input -->
          <div data-mdb-input-init class="form-outline mb-3">
            <input type="email" id="loginName" class="form-control" />
            <label class="form-label" for="loginName">Email or username</label>
          </div>

          <!-- Password input -->
          <div data-mdb-input-init class="form-outline mb-3">
            <input type="password" id="loginPassword" class="form-control" />
            <label class="form-label" for="loginPassword">Password</label>
          </div>

          <!-- 2 column grid layout -->
          <div class="row mb-3">
            <div class="col-md-6 d-flex justify-content-center">
              <!-- Checkbox -->
              <div class="form-check mb-3 mb-md-0">
                <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                <label class="form-check-label" for="loginCheck"> Remember me </label>
              </div>
            </div>

            <div class="col-md-6 d-flex justify-content-center">
              <!-- Simple link -->
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <!-- Submit button -->
          <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-3">Sign in</button>

          <!-- Register buttons -->
          <div class="text-center">
            <p>Not a member? <a href="#!">Register</a></p>
          </div>
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