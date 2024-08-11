<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="tw-bg-orange-600">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Todo List- App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header class="tw-flex tw-items-center tw-gap-5">
          Updates
          <span v-html="icons.emoji" class="ag-svg-color" />
        </q-item-label>

        <link-button v-for="link in data" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

import LinkButton from "src/components/LinkButton.vue";

import icons from "src/composables/svgIcons";

const leftDrawerOpen = ref(false);

const data = [
  {
    title: "Home",
    icon: icons.note,
    path: "/",
  },
  {
    title: "Index",
    icon: icons.graph,
    path: "/index",
  },
  {
    title: "Api",
    icon: icons.api,
    path: "/api",
  },
  {
    title: "login",
    icon: icons.api,
    path: "/login",
  },
];

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
