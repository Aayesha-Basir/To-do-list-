<template>
  <div class="tw-flex tw-justify-center tw-items-center tw-mt-40">
    <q-card class="tw-w-[50%] tw-h-1/2">
      <q-section>
        <q-form @submit="onSubmit" class="">
          <q-input
            filled
            v-model="username"
            label="Enter username *"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
            ]"
          />

          <q-input
            filled
            type="password"
            v-model="password"
            label="Enter password *"
            lazy-rules
            :rules="[
              (val) => (val !== null && val !== '') || 'Please type your age',
              (val) => (val > 0 && val < 100) || 'Please type a real age',
            ]"
          />

          <q-toggle v-model="accept" label="I accept the license and terms" />

          <div class="tw-flex tw-items-center tw-justify-center">
            <q-btn
              label="Submit"
              type="submit"
              color="primary"
              :disabled="!accept"
            />
          </div>
        </q-form>
      </q-section>
      <div class="tw-flex tw-gap-5 tw-items-center tw-justify-center tw-mt-6">
        <p>Not signed yet?</p>
        <p
          @click="goToRegister"
          class="tw-text-blue-600 tw-cursor-pointer tw-underline"
        >
          Register Now
        </p>
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const username = ref(null);
const password = ref(null);
const accept = ref(false);

const onSubmit = () => {
  const userdata = JSON.parse(localStorage.getItem("user"));
  router.push("/");
};

const goToRegister = () => {
  router.push("/register");
};
</script>

<style lang="scss" scoped></style>
