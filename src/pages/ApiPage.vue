<!-- <template>
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
    filledclear
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
</style> -->

<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.login.uuid">
        {{ user.name.first }} {{ user.name.last }}
      </li>
    </ul>
    <button @click="fetchUsers(currentPage - 1)" :disabled="currentPage === 1">
      Previous
    </button>
    <button @click="fetchUsers(currentPage + 1)">Next</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const users = ref([]);
const currentPage = ref(3);
const resultsPerPage = 10;

const fetchUsers = async (page) => {
  if (page < 1) return;

  const response = await fetch(
    `https://randomuser.me/api/?page=${page}&results=${resultsPerPage}`
  );
  const data = await response.json();
  users.value = data.results;
  currentPage.value = page;
};

onMounted(() => {
  fetchUsers(currentPage.value);
});
</script>
