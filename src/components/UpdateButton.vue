<template>
  <div class="tabs">
    <div
      class="tab"
      v-for="tab in tabs"
      :key="tab.value"
      :class="{ active: tab.value === filter }"
      @click="changeTab(tab.value)"
    >
      {{ tab.label }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  filter: {
    type: String,
    required: true,
  },
  tabs: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["updateFilter"]);

const changeTab = (type) => {
  emit("updateFilter", type);
};
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}
.tab {
  padding: 10px 20px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
}
.tab.active {
  border-bottom: 2px solid #42b983;
  font-weight: bold;
}
</style>
