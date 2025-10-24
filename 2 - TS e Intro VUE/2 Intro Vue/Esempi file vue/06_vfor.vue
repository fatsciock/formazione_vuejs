<script lang="ts" setup>
import { ref } from 'vue'

// give each todo a unique id
let id = 0

interface Todo {
  id: number;
  text: string;
}

const newTodo = ref('')
const todos = ref<Todo[]>([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  todos.value.push({
    id: id++,
    text: newTodo.value
  })
  newTodo.value = ''
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((el) => el.id !== todo.id);
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button type="submit">Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }}
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>