import { createStore } from "vuex";

import task from "src/stores/todo-task/task";

export default function () {
  const store = createStore({
    modules: {
      task,
    },
    strict: process.env.DEBUGGING,
  });
  return store;
}
