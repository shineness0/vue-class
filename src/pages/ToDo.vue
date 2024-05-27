<template>
  <h1 class="fs-1">My Todo</h1>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Todo</th>
        <th scope="col">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(todo, index) in store.todos" :key="index">
        <th scope="row">{{ todo.id }}</th>
        <td>{{ todo.todo }}</td>
        <td>{{ todo.completed ? 'Completed' : 'Pending' }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script setup>
import { onMounted } from 'vue'
import { useTodoStore } from '../store/todoStore'

const store = useTodoStore()

onMounted(() => {
  store.getTodos()
})
</script>
