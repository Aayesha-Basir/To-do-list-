<template>
  <q-img v-if="src" :fit="fit" :ratio="ratio" :src="src" />
  <q-img
    v-else
    :fit="fit"
    :ratio="ratio"
    :src="`https://placehold.co/${placeholder}?text=${label}`"
  />
</template>

<script setup>
defineProps({
  src: {
    type: String,
    default: null,
  },
  fit: {
    type: String,
    default: "cover",
  },
  ratio: {
    type: Number,
    default: 16 / 9,
  },
  placeholder: {
    type: String,
    default: "600x400",
  },
  label: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped></style>
