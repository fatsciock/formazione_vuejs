<script lang="ts" setup>
import { ref, computed } from 'vue';

/**
 * 
 * INIZIATO IL 30/09
 * DA FINIRE
 * 
 */
let id = 0;
let removedIds: number[] = [];

const searchQuery = ref("");
const showOnlyNotDone = ref(false);

interface Todo {
  id: number;
  text: string;
  inEditing: boolean;
  done: boolean;
}

const newTodo = ref('');
const todos = ref<Todo[]>([
  { id: id++, text: 'Learn HTML', inEditing: false, done: false },
  { id: id++, text: 'Learn JavaScript', inEditing: false, done: false },
  { id: id++, text: 'Learn Vue', inEditing: false, done: false }
]);

function addTodo() {
  let newId = removedIds.pop();
  if (newId != 0 && !newId) {
    newId = id++;
  }

  todos.value.push({
    id: newId,
    text: newTodo.value,
    inEditing: false,
    done: false
  })
  newTodo.value = '';
}

function removeTodo(todo: Todo) {
  todos.value = todos.value.filter((el) => el.id !== todo.id);
  removedIds.push(todo.id);
  removedIds = removedIds.sort((id1, id2) => id2 - id1);
}

function editOrSaveTodo(todo: Todo) {
  todo.inEditing = !todo.inEditing;
}

const filteredTodos = computed(() => {
  let result = todos.value;
  if (showOnlyNotDone.value) {
    result = result.filter((t: Todo) => !t.done);
  }
  if (searchQuery.value.trim() !== "") {
    result = result.filter((t: Todo) => 
      t.text.toLocaleLowerCase().includes(searchQuery.value.toLocaleLowerCase())
    );
  }
  return result;
});
</script>

<template>
  <div>Info es:
   <ul>
      <li>Se l'id del todo è pari = testo sopralineato</li>
      <li>Se l'id del todo è dispari = testo sottolineato</li>
      <li>Se l'indice è pari = colore testo blu</li>
      <li>Se l'indice è dispari = colore testo verde</li>
   </ul>
  </div>
  <form @submit.prevent="addTodo">
    <input 
      v-model="newTodo" 
      required 
      placeholder="Nuovo todo"
      class="input"  
    >
    <button 
      type="submit"
      class="input"
      >Add Todo</button>
  </form>
  <div>
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Cerca todo..."
      class="input"  
    />
    <input
      v-model="showOnlyNotDone"
      type="checkbox"
      class="input"  
    >
      Mostra solo non completati
    </input>
  </div>
  
  <p v-if="todos.length == 0">Non ci sono todo :(</p>
  <ul v-else>
    <li 
      v-for="(todo, idx ) in filteredTodos" 
      :key="todo.id"
      :style="{ 
        color: idx % 2 === 0 ? 'blue' : 'green',
        textDecoration: todo.id % 2 === 0 ? 'overline' : 'underline'
      }"
    >
      <input type="checkbox" v-model="todo.done" class="input">
      <span 
        v-if="!todo.inEditing"
        :class="{ done: todo.done }">
        {{ todo.id }} - {{ todo.text }}
      </span>
      <input v-else v-model="todo.text" class="input"></input>
      <button @click="removeTodo(todo)" :disabled="todo.inEditing" class="input">X</button>
      <button @click="editOrSaveTodo(todo)" class="input">{{ todo.inEditing ? 'Salva' : 'Modifica' }}</button>
    </li>
  </ul>
</template>

<style scoped>
.input {
  padding: 4px;
  font-size: 14px;
  margin: 4px;
}

.done {
  color: red;
  font-weight: bold;
  text-decoration: line-through;
}
</style>