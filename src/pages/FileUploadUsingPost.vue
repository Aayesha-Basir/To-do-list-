<template>
  <div>
    <q-form @submit.prevent="handleUpload">
      <input type="file" ref="inputField" />
      <q-btn type="submit" color="primary" label="Upload File" />
    </q-form>
    <div v-if="uploadStatus">{{ uploadStatus }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const inputField = ref(null);
const uploadStatus = ref("");

const handleUpload = async () => {
  const file = inputField.value.files[0];

  const formData = new FormData();
  formData.append("file", file);

  if (!file) {
    return alert(
      (uploadStatus.value = "please select the file before upload !!")
    );
  }
  try {
    const response = await axios.post("https://randomuser.me/api/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("response", response);
    uploadStatus.value = "your file has been uploaded successfully";
  } catch (error) {
    uploadStatus.value =
      "sorry the file hasn't been submitted due to server error";
    console.log("error", error);
  }
};
</script>
