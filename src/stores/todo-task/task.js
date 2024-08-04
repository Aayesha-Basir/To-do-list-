// const state = {
//   todos: [],
//   title: "LearningVuex Store",
// };

// const mutations = {
//   ADD_TASK(state, task) {
//     state.todos.push(task);
//   },

//   REMOVE_TASK(state, index) {
//     state.todos.splice(index, 1);
//   },

//   TOOGLE_TASK(state, index) {
//     state.todos[index].completed = !state.todos[index].completed;
//   },
// };

// const actions = {
//   addTask({ commit }, task) {
//     commit("ADD_TASK", task);
//   },
//   removeTask({ commit }, index) {
//     commit("REMOVE_TASK", index);
//   },

//   toggleTask({ commit }, index) {
//     commit("TOGGLE_TASK", index);
//   },
// };

// const getters = {
//   filteredTodos: (state) => (filter) => {
//     if (filter === "completed") {
//       return state.todos.filter((task) => task.completed);
//     } else if (filter === "todo") {
//       return state.todos.filter((task) => !task.completed);
//     } else {
//       return state.todos;
//     }
//   },
// };

// export default {
//   namespaced: true,
//   state,
//   mutations,
//   actions,
//   getters,
// };
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTaskStore = defineStore("task", () => {
  const task = ref([]);
  const nameFilter = ref("");
  const filter = ref("all");

  const addtask = (data) => {
    task.value.push(data);
  };

  const removetask = (index) => {
    task.value.splice(index, 1);
  };
  const setFilter = (value) => {
    filter.value = value;
  };

  const filtertask = () => {
    let filteredTasks = task.value;

    // Apply name filter first if there's a nameFilter value
    if (nameFilter.value.trim() !== "") {
      filteredTasks = filteredTasks.filter((data) =>
        data.adding.toLowerCase().includes(nameFilter.value.toLowerCase())
      );
    }
    if (filter.value === "completed") {
      filteredTasks = filteredTasks.filter((data) => data.completed);
    } else if (filter.value === "todo") {
      filteredTasks = filteredTasks.filter((data) => !data.completed);
    }

    console.log("Filtered tasks:", filteredTasks);
    return filteredTasks;
  };

  return {
    task,
    filter,
    nameFilter,
    addtask,
    removetask,
    filtertask,
    setFilter,
  };
});
