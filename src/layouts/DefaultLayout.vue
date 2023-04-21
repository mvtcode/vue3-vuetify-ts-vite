<template>
  <v-layout>
    <SideBar ref="sideBarRef" />
    <TopBar @toggle-menu="toggleMenu" />
    <v-main>
      <slot name="header"/>
      <v-container fluid>
        <slot/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { ref, withDefaults, defineProps } from "vue";

import TopBar from "./componets/TopBar.vue";
import SideBar from "./componets/SideBar.vue";
import PageTitle from "./componets/PageTitle.vue";
import { Breadcrumb } from "@/interfaces/breadcrumb";

interface Props {
  title: string;
  isShowBackButton: boolean;
  // icon: any;
  // breadcrumbs: Breadcrumb[];
}

withDefaults(defineProps<Props>(), {
  isShowBackButton: false,
});

const sideBarRef = ref<InstanceType<typeof SideBar>>();
const toggleMenu = () => {
  sideBarRef.value?.toggleMenu();
};
</script>

<style lang="scss" scoped>
.header {
  border-left: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
}
.aside-custom {
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  height: calc(100vh);
}
</style>
