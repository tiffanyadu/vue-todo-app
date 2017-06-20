<template>
  <div class="column">
    <div class="ui card">
      <div class="content center aligned">
        <button class="ui circular button icon" v-on:click="openForm" v-show="!isCreating">
          <i class="plus icon"></i>
        </button>
        <div v-show="isCreating">
          <div class="content">
            <div class="ui form left aligned">
              <div class="field">
                <label>Task</label>
                <input v-model="taskText" type="text">
              </div>
              <div class="field">
                <label>Category</label>
                <input v-model="categoryText" type="text">
              </div>
              <div class="ui buttons">
                <button class="ui basic blue button" v-on:click="sendForm()">
                  Create
                </button>
                <button class="ui basic red button" v-on:click="closeForm">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskText: '',
      categoryText: '',
      isCreating: false
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    sendForm() {
      if (this.taskText.length > 0 && this.categoryText.length > 0) {
        const task = this.taskText;
        const category = this.categoryText;
        this.$emit('create-todo', {
          task,
          category,
          done: false,
        });
        this.taskText = '';
        this.categoryText = '',
        this.isCreating = false;
      }
    }
  }
};
</script>