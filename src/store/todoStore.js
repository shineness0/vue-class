import { defineStore } from 'pinia'
import axios from 'axios'

// store
// getters
// actions
export const useTodoStore = defineStore('todoStore', {
  state: () => {
    return {
      todos: [
        { id: 1, todo: 'Meeting with boss' },
        { id: 2, todo: 'Going to school' }
      ]
    }
  },
  getters: {},
  actions: {
    async getTodos() {
      try {
        const { data } = await axios.get('https://dummyjson.com/todos')

        this.todos = data.todos
      } catch (error) {}
    }
  }
})
