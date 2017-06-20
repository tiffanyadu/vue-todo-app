<template>
  <div class="ui container">
    <h1 class="ui center aligned header">Vue.js Todo App</h1>
    <todo-list v-bind:todos="todos"></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'app',
  components: {
    TodoList
  },
  data() {
    return {
      todos: [{
        task: 'Get oil change',
        category: 'Car Maintenance',
        done: false,
      }, {
        task: 'Take out trash',
        category: 'Chores',
        done: true,
      }, {
        task: 'Pick up milk',
        category: 'Groceries',
        done: false,
      }]
    };
  }
};
</script>
