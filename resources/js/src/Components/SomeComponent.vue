<script setup>
  const buttonClick = () => {
    alert('test')
  }
</script>

<template>
  Test  <button @click="buttonClick()">click</button>
</template>

<style scoped>

</style>