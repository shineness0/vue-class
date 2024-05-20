<script setup>
import { onMounted, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'

const users = ref([])

const name = ref('')
const gender = ref([])
const skills = ref('')
const occupation = ref('')

const signUp = () => {
  const userObj = {
    name: name.value,
    gender: gender.value,
    skills: skills.value,
    occupation: occupation.value
  }

  localStorage.setItem('users', JSON.stringify(userObj))
}

onMounted(() => {
  users.value = localStorage['users'] ? JSON.parse(localStorage['users']) : []

  console.log(users.value)
})
</script>

<template>
  <div class="col-md-5 p-5 mx-auto">
    <form class="shadow-sm p-3" @submit.prevent="signUp">
      <div class="form-group mb-4">
        <label>Name</label>
        <input class="form-control" v-model="name" />
      </div>

      <div class="form-group mb-4">
        <label>Gender</label>
        <input type="checkbox" value="Male" v-model="gender" />
        <label for="male">Male</label>
        <input type="checkbox" value="Female" v-model="gender" />
        <label>Female</label>
      </div>

      <div class="form-group mb-4">
        <label>Skills</label>
        <input type="radio" value="React" v-model="skills" />
        <label>React</label>
        <input type="radio" value="Vue" v-model="skills" />
        <label>Vue</label>
        <input type="radio" value="Angular" v-model="skills" />
        <label>Angular</label>
      </div>

      <div class="form-group mb-4">
        <label>Occupation</label>
        <select v-model="occupation" class="form-control">
          <option value="">Please select one</option>
          <option>Student</option>
          <option>Trader</option>
          <option>Sportybet</option>
        </select>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary" type="submit">Sumit</button>
      </div>
    </form>
  </div>
</template>
