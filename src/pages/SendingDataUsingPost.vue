<template>
  <div>
    <q-form @submit.prevent="sendData">
      <q-input v-model="textData" filled label="Enter some text" type="text" />
      <q-btn type="submit" label="Send Data" color="primary" class="q-mt-md" />
    </q-form>
    <p v-if="responseMessage">{{ responseMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const textData = ref("");
const responseMessage = ref("");

const sendData = async () => {
  if (!textData.value) {
    return (responseMessage.value = "Please enter the text before upload !!");
  }

  try {
    const response = await axios.post(
      "https://randomuser.me/api/",
      {
        text: textData.value,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    responseMessage.value = "text uploaded successfully";
    console.log("response", response);
  } catch (error) {
    responseMessage.value = "Error!!, text upload denied";
    console.log("error", error);
  }
};
</script>
