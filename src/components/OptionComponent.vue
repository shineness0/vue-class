<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, maxLength, email } from '@vuelidate/validators'

export default {
  setup() {
    useVuelidate()
    return { v$: useVuelidate() }
    // const job = ref('Software')

    // const myFunction = () => {
    //   console.log(job)
    // }
  },

  data() {
    return {
      name: 'Sunday',
      school: 'SQI',
      // User inputs
      form: {
        name: '',
        email: '',
        password: ''
      }
    }
  },

  methods: {
    signUp() {
      console.log(this.v$)
    },
    getSchool() {
      console.log(this.school)
    }
  },

  // Validation rules
  validations() {
    return {
      form: {
        name: { required, min: minLength(5), max: maxLength(11) },
        email: { required, email },
        password: { required, min: minLength(6), max: maxLength(8) }
      }
    }
  }
}
</script>

<template>
  <div class="col-md-5 p-5 mx-auto">
    <form class="shadow-sm p-3" @submit.prevent="signUp">
      <div class="form-group mb-4">
        <label>Name</label>
        <input class="form-control" v-model="v$.form.name.$model" />
        <div v-for="error in v$.form.name.$errors" :key="error">
          <span class="text-sm text-danger">{{ error.$message }}</span>
        </div>
      </div>

      <div class="form-group mb-4">
        <label>Email</label>
        <input type="email" class="form-control" v-model="v$.form.email.$model" />
        <div v-for="error in v$.form.email.$errors" :key="error">
          <span class="text-sm text-danger">{{ error.$message }}</span>
        </div>
      </div>

      <div class="form-group mb-4">
        <label>Password</label>
        <input type="password" class="form-control" v-model="v$.form.password.$model" />
        <div v-for="error in v$.form.password.$errors" :key="error">
          <span class="text-sm text-danger">{{ error.$message }}</span>
        </div>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary" type="submit">Sumit</button>
      </div>
    </form>
  </div>
</template>
