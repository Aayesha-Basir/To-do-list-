<template>
  <q-item clickable :to="path" @click="handleClick">
    <div>
      {{ title }}
      <q-icon> <span v-html="icon" /> </q-icon>
    </div>
  </q-item>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  title: {
    type: String,
    default: "",
  },
  icon: {},
  path: {
    type: String,
  },
});

const handleClick = () => {
  router.push(props.path);
  console.log("clicked");
};
</script>

<style lang="scss" scoped></style>
<!-- if (storedUser) {
  if (
    (username.value === storedUser.name || username.value === storedUser.email) &&
    password.value === storedUser.password
  ) {
    router.push("/");
  } else {
    alert("Invalid username/email or password");
  }
} else {
  alert("No user found. Please register first.");
} -->
