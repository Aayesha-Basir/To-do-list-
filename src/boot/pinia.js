// import { boot } from "quasar/wrappers";
// import createStore from "src/stores";

// export default boot(({ app }) => {
//   const store = createStore();
//   app.use(store);
// });

import { boot } from "quasar/wrappers";
import { createPinia } from "pinia";

export default boot(({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
});
