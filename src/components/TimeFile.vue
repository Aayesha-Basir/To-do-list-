<template>
  <div class="border">Pick the time from the time picker below</div>
  <q-input
    outlined
    v-model="formattedTime"
    class="tw-w-[324px] tw-mt-6 md:tw-mt-0"
  >
    <template v-slot:append>
      <q-icon name="access_time" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-time
            v-model="publishingTime"
            mask="HH:mm:ss"
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
import { ref, watch, defineProps, defineEmits, onMounted } from "vue";

const props = defineProps({
  modelValue: String,
});

const emits = defineEmits(["update:modelValue"]);

const publishingTime = ref("");
const formattedTime = ref("");

// const formatPublishingTime = (time) => {
//   console.log("current Time", time);
//   if (time) {
//     const date = new Date(time);
//     console.log("type of date", typeof date);
//     console.log("date:", date);
//     const options = {
//       hour: "2-digit",
//       minute: "2-digit",
//       second: "2-digit",
//       hour12: true,
//     };
//     formattedPublishingTime.value = date.toLocaleTimeString("en-US", options);
//   } else {
//     console.log("time", time);
//     formatPublishingTime.value = new Date();
//   }
// };
const formatPublishingDate = (time) => {
  const waqt = format(parse(time, "HH:mm:ss", new Date()), "hh:mm a");
  console.log("waqt", waqt);
};

const updateFormattedTime = (value) => {
  formattedTime.value = formatTime(publishingTime.value);
};

const onTimeUpdate = (value) => {
  publishingTime.value = value;
  updateFormattedTime();
  emits("update:modelValue", value);
};

onMounted(() => {
  if (props.modelValue) {
    publishingTime.value = props.modelValue;
  } else {
    const currentTime = new Date();
    publishingTime.value = format(currentTime, "HH:mm:ss");
  }
  updatedFormattedTime();
});
// watch(publishingTime, (newTime) => {
//   formatPublishingTime(newTime);
// });

// formatPublishingTime(publishingTime.value);
</script>

<style scoped>
.border {
  border-radius: 8px;
  border: 1px solid rgb(160, 156, 156);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555555;
  text-decoration: dotted;
  width: fit-content;
}
</style>
