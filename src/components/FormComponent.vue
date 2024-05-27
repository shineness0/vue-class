<script setup>
import { computed, onMounted, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength, email } from '@vuelidate/validators'

const users = ref([])

const name = ref('')
const gender = ref([])
const skills = ref('')
const occupation = ref('')

const form = ref({
  name: '',
  email: '',
  password: ''
})

const rules = computed(() => ({
  // form: {
  name: { required, min: minLength(5), max: maxLength(11) },
  email: { required, email },
  password: { required, min: minLength(6), max: maxLength(8) }
  // }
}))

const v$ = useVuelidate(rules, form)

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
  <div class="max-w-lg shadow-sm mx-auto">
    <form class="shadow-sm p-3" @submit.prevent="signUp">
      <div class="form-group mb-4">
        <label>Name</label>
        <input
          class="block border w-full px-4 py-1 mt-2 rounded-md ring-2 focus:outline-0"
          v-model="v$.name.$model"
        />
        <div v-for="error in v$.name.$errors" :key="error">
          <span class="text-sm text-red-500">{{ error.$message }}</span>
        </div>
      </div>

      <div class="form-group mb-4">
        <label>Email</label>
        <input type="email" class="form-control" v-model="v$.email.$model" />
        <div v-for="error in v$.email.$errors" :key="error">
          <span class="text-sm text-danger">{{ error.$message }}</span>
        </div>
      </div>

      <div class="form-group mb-4">
        <label>Password</label>
        <input type="password" class="form-control" v-model="v$.password.$model" />
        <div v-for="error in v$.password.$errors" :key="error">
          <span class="text-sm text-danger">{{ error.$message }}</span>
        </div>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary" type="submit">Sumit</button>
      </div>
    </form>
  </div>
</template>

<!-- <template>
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
</template> -->
