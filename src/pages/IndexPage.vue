<template>
  <div class="tw-mt-20">
    <GChart type="LineChart" :data="chartData" :options="chartOptions" />

    <div class="tw-flex tw-items-center tw-justify-center">
      <q-btn dense flat>
        <span v-html="icons.note" />
        <q-popup-proxy>
          <q-card>
            <q-card-section> This is the popup message!!</q-card-section>
          </q-card>
        </q-popup-proxy>
      </q-btn>
    </div>
  </div>
  <DateFile v-model="publishingDate" />
  <TimeFile v-model="publishingTime" />
</template>

<script setup>
import { ref } from "vue";

import { GChart } from "vue-google-charts";
import { format } from "date-fns";

import DateFile from "src/components/DateFile.vue";
import TimeFile from "src/components/TimeFile.vue";
import icons from "src/composables/svgIcons";

const videos = ref([
  {
    title: "Video 1",
    uploadDate: "2024-06-10",
    views: 15,
    icon: icons.video,
  },
  { title: "Video 2", uploadDate: "2024-06-20", views: 22, icon: icons.video },
  { title: "Video 3", uploadDate: "2024-06-22", views: 10, icon: icons.video },
  { title: "Video 4", uploadDate: "2024-06-25", views: 30, icon: icons.video },
  {
    title:
      "i am typing heret check if the title get adjusted to the width or not ",
    uploadDate: "2024-06-26",
    views: 5,
    icon: icons.video,
  },
]);

// const chartData = ref([
//   ["Date", "Views", { role: "tooltip", type: "string", p: { html: true } }],
//   ...videos.value.map((video) => [
//     format(new Date(video.uploadDate), "MMM dd"),
//     video.views,
//     `<div class='tw-bg-white-600 tw-rounded-xl tw-p-3'>
//        ${format(new Date(video.uploadDate), "MMM dd, yyyy")}<br>
//        ${video.icon} ${video.title}... ${video.views}
//      </div>`,
//   ]),
// ]);

const chartData = ref([
  ["Date", "Views", { role: "tooltip", type: "string", p: { html: true } }],
  ...videos.value.map((video) => [
    format(new Date(video.uploadDate), "MMM dd"),
    video.views,
    `<div class='tw-bg-white-600 tw-rounded-xl tw-p-3'>
       <div class="tw-mb-1">${format(
         new Date(video.uploadDate),
         "MMM dd, yyyy"
       )}</div>
       <div class="tw-flex tw-items-center tw-justify-between ">
         <div class=''>${video.icon}</div>
           <div class="tw-flex tw-mr-3"><strong>${video.title}<strong></div>
           <div>${video.views}</div>
       </div>
     </div>`,
  ]),
]);

const chartOptions = ref({
  hAxis: {
    title: "dates",
    gridlines: {
      color: "black",
    },
    textStyle: {
      color: "black",
      fontSize: 16,
    },
  },
  vAxis: {
    title: "views",
    textStyle: {
      color: "black",
      fontSize: 16,
    },
    gridlines: {
      color: "black",
    },
  },
  chartArea: { width: "50%", height: "50%" },
  height: 400,
  legend: {
    position: "none",
  },

  tooltip: {
    isHtml: true,
  },
});

const publishingDate = ref(new Date());
const publishingTime = ref(format(new Date(), "yyyy-MM-dd HH:mm:ss a"));

console.log("publishingTime", publishingTime.value);
</script>

<style scoped>
/* .tooltip {
  background: white;
  border: 1px solid red;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
  width: 50%;
} */

/* .tooltip button {
  background-color: #007bff;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
} */
</style>
