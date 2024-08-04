<!-- <q-card flat class="tw-rounded-lg tw-bg-white border">
    <div>
      <p>Gender: {{ data?.gender }}</p>
      <p>Name: {{ data?.name?.first }}{{ data?.name?.last }}</p>
    </div>
  </q-card> -->
<template>
  <q-table
    :rows="indexedData"
    :columns="columns"
    row-key="id.value"
    class="tw-flex tw-w-[900px]"
  >
    <template v-slot:body-cell-name="props">
      <div class="tw-flex ag-mb-8 tw-items-center tw-justify-start">
        <AgImage
          :ratio="1 / 1"
          class="tw-w-6 tw-h-6 tw-rounded-md"
          placeholder="24x24"
          :src="props.row.picture.thumbnail"
        />

        <q-td :props="props" class="tw-flex tw-items-center ag-ml-8">
          <span class="ag-mr-8">
            {{ props.row.name.title }}

            {{ props.row.name.first }}
            {{ props.row.name.last }}
          </span></q-td
        >
      </div>
    </template>

    <template v-slot:body-cell-location="props">
      <q-td :props="props" class="tw-flex tw-items-center ag-ml-8">
        address: {{ props.row.location.city }} {{ props.row.location.state }}
      </q-td>
    </template>

    <template v-slot:body-cell-registered="props">
      <q-td :props="props" class="tw-flex tw-items-center ag-ml-8 text">
        {{ props.row.registered.date }} {{ props.row.registered.age }}
      </q-td>
    </template>
  </q-table>
</template>

<script setup>
import { computed } from "vue";

import AgImage from "src/components/AgImage.vue";
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const columns = [
  {
    name: "sNo",
    align: "left",
    label: "S.No",
    field: "sNo",
  },

  {
    name: "name",
    align: "left",
    label: "Name",
    field: "name",
  },
  {
    name: "gender",
    align: "left",
    label: "gender",
    field: "gender",
  },
  {
    name: "location",
    field: "location",
    align: "left",
    label: "address",
  },
  {
    name: "registered",
    field: "registered",
    align: "left",
    label: "registered",
  },
];
// const indexedData = computed(() => {
//   return props.data.map((item, index) => ({
//     ...item,
//     sNo: index + 1,
//   }));
// });

const indexedData = computed(() => {
  const dataWithIndex = props.data.map((item, index) => ({
    ...item,
    sNo: index + 1,
  }));
  console.log("dataWithIndex", dataWithIndex);
  return dataWithIndex;
});
</script>

<style lang="scss" scoped>
.border {
  //   outline: 2px solid gray;
  //   outline-offset: 5px;
  box-shadow: 15px 15px 6px red;
}
</style>
