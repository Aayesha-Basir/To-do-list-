<template>
  <q-input
    outlined
    v-model="formattedPublishingTime"
    class="tw-w-[324px] tw-mt-6 md:tw-mt-0"
  >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time
            v-model="publishingTime"
            @update:model-value="updateFormattedTime"
            format24h
          >
            <div class="items-center justify-end row">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-time>
        </q-popup-proxy>
      </q-icon>
    </template>
  </q-input>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: String,
});

const emits = defineEmits(["update:modelValue"]);

const publishingTime = ref(props.modelValue);
const formattedPublishingTime = ref("");

const formatPublishingTime = (time) => {
  console.log("current Time", time);
  if (time) {
    const date = new Date(time);
    console.log("type of date", typeof date);
    console.log("date:", date);
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    formattedPublishingTime.value = date.toLocaleTimeString("en-US", options);
  } else {
    console.log("time", time);
    formatPublishingTime.value = new Date();
  }
};

// Initialization logic (if needed)

const updateFormattedTime = (value) => {
  formatPublishingTime(value);
  emits("update:modelValue", value);
};

// watch(publishingTime, (newTime) => {
//   formatPublishingTime(newTime);
// });

formatPublishingTime(publishingTime.value);
</script>

<style scoped>
/* Add your styles here */
</style>
