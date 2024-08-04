<!-- <template>
  <div class="">
    <q-page>
      <div
        class="tw-flex tw-items-center tw-gap-10 tw-justify-center tw-mt-5 tw-h-14 tw-rounded-lg"
      >
        <h6>Keep Record Of Your Day To Day Activity...</h6>
        <span v-html="icons.note" />
      </div>
      <UpdateButton
        :filter="filter"
        :tabs="tabs"
        @update-filter="updateFilter"
      />

      <div class="tw-flex tw-items-center tw-justify-center tw-gap-8">
        <input v-model="text" placeholder="Add task" @keyup.enter="addTask" />
        <button @click="addTask" class="tw-rounded-md tw-w-16 tw-h-6">
          Add
        </button>
      </div>

      <ul class="">
        <li
          v-for="(todo, index) in filteredTodoTask"
          :key="index"
          class="tw-flex tw-items-center tw-justify-between tw-gap-8"
        >
          <input type="checkbox" v-model="todo.completed" />
          <span :class="{ completed: todo.completed }"> {{ todo.text }} </span>
          <button @click="removeTask(index)">Remove</button>
        </li>
      </ul>
    </q-page>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

import UpdateButton from "src/components/UpdateButton.vue";

import icons from "src/composables/svgIcons";

const filter = ref("All");
const tabs = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Completed",
    value: "completed",
  },
  {
    label: "Todo",
    value: "todo",
  },
];

const store = useStore();
// const title = computed(() => store.state.task.title);

const text = ref("");

const addTask = () => {
  if (text.value.trim() !== "") {
    store.dispatch("task/addTask", { text: text.value, completed: false });
    text.value = "";
  }
};

const updateFilter = (type) => {
  filter.value = type;
};
const removeTask = (index) => {
  return store.dispatch("task/removeTask", index);
};
const toggleTask = (index) => {
  return store.dispatch("task/toggleTask", index);
};

const filteredTodoTask = computed(() => {
  return store.getters["task/filteredTodos"](filter.value);
});
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
  color: grey;
}
</style> -->

<template>
  <div
    class="tw-flex tw-items-center tw-justify-center tw-gap-9 tw-h-10 tw-mt-10"
  >
    <div class="tw-text-2xl tw-font-bold">
      Keep Record Of Your Day To Day Activity...
    </div>
    <span v-html="icons.note" />
  </div>

  <div class="tw-flex tw-items-center tw-justify-between mt-5">
    <div class="tw-flex tw-items-center tw-flex-col">
      <div class="tw-flex tw-items-center">
        <span class="tw-font-bold tw-text-1xl tw-mr-4">Select by status:</span>
        <span
          v-html="icons.emoji"
          @click="toggleEvent"
          class="cursor-pointer"
        />
      </div>
    </div>
    <div class="tw-flex tw-items-center tw-gap-9 tw-h-10">
      <div>
        <q-input
          outlined
          v-model="text"
          placeholder="Add task"
          @keyup.enter="addTask"
        />
      </div>
      <div>
        <q-btn
          push
          color="white"
          label="ADD"
          class="bg-green text-white"
          @click="addTask()"
        />
      </div>
    </div>
    <div class="tw-flex tw-items-center">
      <div class="mr-4">
        <q-input
          rounded
          outlined
          v-model="nameFilter"
          placeholder="Search by name"
        >
          <q-icon name="search" class="mt-4" size="sm" v-if="!nameFilter" />
        </q-input>
      </div>
    </div>
  </div>

  <div class="tw-flex tw-mt-5 tw-relative">
    <div
      v-if="toggleValue"
      class="tw-flex tw-flex-col tw-gap-4 tw-absolute tw-left-0"
    >
      <q-btn
        push
        color="white"
        label="All"
        @click="setFilter('all')"
        class="bg-green text-white cursor-pointer"
      />
      <q-btn
        push
        color="white"
        label="Completed"
        @click="setFilter('completed')"
        class="bg-green text-white cursor-pointer"
      />
      <q-btn
        push
        color="white"
        label="To Do"
        @click="setFilter('todo')"
        class="bg-green text-white cursor-pointer"
      />
    </div>

    <div class="task-list tw-ml-48">
      <ul>
        <li v-for="(data, index) in filterTask" :key="index">
          <input type="checkbox" v-model="data.completed" />
          <div class="tw-flex tw-justify-center tw-items-center tw-gap-9">
            <span :class="{ clear: data.completed }">
              {{ data.adding }}
            </span>
            <q-btn
              push
              color="white"
              text-color="primary"
              label="Remove"
              class="bg-green text-white w-10"
              @click="remove(index)"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import icons from "src/composables/svgIcons";
import { ref, computed, onMounted } from "vue";
import { useTaskStore } from "src/stores/todo-task/task";
import { storeToRefs } from "pinia";

const taskStore = useTaskStore();
const { task, filter, nameFilter } = storeToRefs(taskStore);
const text = ref("");
const toggleValue = ref(false);

const toggleEvent = () => {
  toggleValue.value = !toggleValue.value;
};

const addTask = () => {
  if (text.value.trim() !== "") {
    taskStore.addtask({ adding: text.value, completed: false });
    text.value = "";
  }
};

const remove = (index) => {
  taskStore.removetask(index);
};

const setFilter = (value) => {
  filter.value = value;
};

const filterTask = computed(() => {
  return taskStore.filtertask();
});
</script>

<style lang="css">
.clear {
  color: grey;
  text-decoration: line-through;
}

.task-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 850px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
}

.task-list ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.task-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.task-list li:last-child {
  border-bottom: none;
}

.task-list input[type="checkbox"] {
  margin-right: 10px;
}
</style>
