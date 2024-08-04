<template>
  <div
    class="border tw-flex tw-justify-between tw-items-center tw-mt-10 tw-gap-14 tw-rounded-md tw-mx-60 tw-my-60"
  >
    <div>Hi ms Afreen khatun</div>

    <div>
      <q-btn
        @click="clickMe()"
        class="tw-bg-orange-600 tw-text-white tw-rounded-lg tw-m-4"
        >Click Me</q-btn
      >
    </div>
  </div>
  <q-input
    filled
    v-model="searchQuery"
    placeholder="Search..."
    @input="onSearch"
    clearable
    prepend-inner-icon="search"
  />

  <div class="tw-grid tw-grid-flow-row tw-grid-cols-4 tw-gap-6 tw-m-10">
    <DataCard :data="filteredData" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";

import axios from "axios";

import DataCard from "src/components/DataCard.vue";

const store = useStore();
const title = computed(() => store.state.task.title);

const data = ref([]);
const searchQuery = ref("");

const clickMe = () => {
  alert("soon to be a future fullStack develper :)");
};

const apiData = async () => {
  try {
    const res = await axios.get("https://randomuser.me/api/?results=8");
    console.log(data, res.data.results);
    data.value = res.data.results;
    console.log("data.value", Array.isArray(data.value));
  } catch (error) {
    console.log("error during data fetch from api", error);
    throw error;
  }
};

const filteredData = computed(() => {
  if (!searchQuery.value) {
    return data.value;
  }
  return data.value.filter(
    (person) => person.gender.toLowerCase() === searchQuery.value.toLowerCase()
  );
});

onMounted(apiData);
</script>

<style lang="scss" scoped>
.border {
  box-shadow: 10px 5px whitesmoke;
}
</style>
