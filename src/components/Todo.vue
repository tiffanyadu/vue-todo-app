<template>
  <div class="column">
    <div class="ui card">
      <div class="content" v-show="!isEditing">
        <div class="header">
          {{ todo.task }}
        </div>
        <div class="meta">
          {{ todo.category }}
        </div>
        <div class="extra content">
          <span class="right floated edit icon" v-on:click="showForm">
            <i class="edit icon"></i>
          </span>
          <span class="right floated trash icon" v-on:click="deleteTodo(todo)">
            <i class="trash icon"></i>
          </span>
        </div>
      </div>
      <div class="content" v-show="isEditing">
        <div class="ui form">
          <div class="field">
            <label>Task</label>
            <input type="text" v-model="todo.task">
          </div>
          <div class="field">
            <label>Category</label>
            <input type="text" v-model="todo.category">
          </div>
          <div class="ui two button attached buttons">
            <button class="ui basic blue button" v-on:click="hideForm">
              Close X
            </button>
          </div>
        </div>
      </div>
      <div class="ui bottom attached disabled button" v-show="!isEditing && todo.done" disabled>
        Completed
      </div>
      <div class="ui bottom attached teal basic button" v-on:click="completeTodo(todo)" v-show="!isEditing && !todo.done">
        In progress
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  props: ['todo'],
  data() {
    return {
      isEditing: false
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
    completeTodo(todo) {
      this.$emit('complete-todo', todo);
    }
  }
};
</script>