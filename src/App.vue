<script setup>
// import FormComponent from './components/FormComponent.vue'
// import OptionComponent from './components/OptionComponent.vue'

const user = {
  id: 1,
  name: 'Sunday'
}
</script>

<template>
  <RouterLink :to="{ name: 'home' }">Go to Home</RouterLink>
  <RouterLink to="/about">Go to About</RouterLink>
  <RouterLink :to="`/users/${user.id}`">Go to Users</RouterLink>
  <RouterView />
  <!-- <FormComponent /> -->
  <!-- <OptionComponent /> -->
</template>
