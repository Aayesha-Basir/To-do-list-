<template>
  <q-input
    outlined
    v-model="formattedPublishingDate"
    class="tw-w-[324px] ag-mr-16"
  >
    <template v-slot:append>
      <q-icon name="event" class="cursor-pointer">
        <q-popup-proxy cover transition-show="scale" transition-hide="scale">
          <q-date
            v-model="publishingDate"
            mask="MMM D, YYYY"
            @update:model-value="updateFormattedDate"
          >
            <div class="items-center justify-end row">
              <q-btn v-close-popup label="Close" color="primary" flat />
            </div>
          </q-date>
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

const publishingDate = ref(props.modelValue);
const formattedPublishingDate = ref("");

const formatPublishingDate = (date) => {
  const options = { year: "numeric", month: "short", day: "numeric" };

  formattedPublishingDate.value = new Date(date).toLocaleDateString(
    "en-US",
    options
  );
};

const updateFormattedDate = (value) => {
  formatPublishingDate(value);
  emits("update:modelValue", value);
};

// watch(publishingDate, (newDate) => {
//   formatPublishingDate(newDate);
// });

formatPublishingDate(publishingDate.value);
</script>

<style scoped>
/* Add your styles here */
</style>
