<template>
  <div>
    <p>Completed: {{todos.filter(todo => {return todo.done === true}).length}} | In Progress: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <div class="ui divider"></div>
    <div class="ui four column grid">
      <todo v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="todo in todos" v-bind:todo="todo"></todo>
      <create-todo v-on:create-todo="createTodo"></create-todo>
    </div>
  </div>
</template>

<script type="text/javascript">

import Todo from './Todo';
import CreateTodo from './CreateTodo';

export default {
  props: ['todos'],
  components: {
    Todo,
    CreateTodo
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
    completeTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos[todoIndex].done = true;
    },
    createTodo(newTodo) {
      this.todos.push(newTodo);
    }
  }
};
</script>