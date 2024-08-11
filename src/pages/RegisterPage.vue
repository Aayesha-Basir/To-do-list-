<template>
  <q-page class="q-pa-md">
    <q-card>
      <q-card-section>
        <div class="text-h6">Register</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" @reset="onReset">
          <q-input
            v-model="username"
            label="Username"
            lazy-rules
            outlined
            class="q-mb-md"
            :rules="[(val) => !!val || 'name is required']"
          />

          <q-input
            v-model="email"
            label="Email"
            type="email"
            lazy-rules
            :rules="[
              (val) => (val && val.length > 0) || 'Please type something',
              (val) =>
                /^\S+@\S+\.\S+$/.test(val) || 'Please type a valid email',
            ]"
            outlined
            class="q-mb-md"
          />

          <q-input
            v-model="password"
            label="Password"
            type="password"
            lazy-rules
            :rules="[
              (val) =>
                (val && val.length >= 6) ||
                'Password must be at least 6 characters',
            ]"
            outlined
            class="q-mb-md"
          />

          <q-input
            v-model="confirmPassword"
            label="Confirm Password"
            type="password"
            lazy-rules
            :rules="[(val) => val === password || 'Passwords must match']"
            outlined
            class="q-mb-md"
          />

          <div class="q-gutter-sm">
            <q-btn type="submit" label="Register" color="primary" />
            <q-btn type="reset" label="Reset" color="secondary" flat />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const onSubmit = () => {
  const userData = {
    name: username.value,
    email: email.value,
    password: password.value,
  };

  localStorage.setItem("user", JSON.stringify(userData));
  alert("Thankyou for registration");
  router.push("/login");
};

const onReset = () => {
  username.value = "";
  email.value = "";
  password.value = "";
  confirmPassword.value = "";
};
</script>

<style scoped>
.q-pa-md {
  max-width: 400px;
  margin: auto;
}
</style>
