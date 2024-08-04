import { boot } from "quasar/wrappers";
import VueGoogleCharts from "vue-google-charts";

export default boot(({ app }) => {
  app.use(VueGoogleCharts);
});
