<template>
  <DefaultLayout title="Trang chủ">
    <!-- <template #header>
      <v-container>
        <v-row no-gutters>
          <v-col cols="4">
            <v-select v-model="shopIds" multiple label="Chọn cửa hàng" :items="shops"></v-select>
          </v-col>
          <v-col cols="4">
            <v-select v-model="shopIds" multiple label="Chọn cửa hàng" :items="shops"></v-select>
          </v-col>
          <v-col cols="4">
            <v-select v-model="shopIds" multiple label="Chọn cửa hàng" :items="shops"></v-select>
          </v-col>
        </v-row>
      </v-container>
    </template> -->
    <v-row>
      <v-col cols="12">
        <v-card>
          content
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          content
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          content
        </v-card>
      </v-col>
    </v-row>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import HelloWorld from '@/components/HelloWorld.vue';

//icon
// import HomeIcon from "@/assets/images/icons/home-icon.svg";
// import type { Breadcrumb } from "@/interfaces/breadcrumb";
// end icon

interface Shop {
  title: string;
  value: string;
}

interface Device {
  title: string;
  value: string;
}

// const breadcrumbs: Breadcrumb[] = [
//   {
//     title: "Trang chủ",
//   },
// ];

const shops: Shop[] = [
  {
    title: "Cửa hàng Láng Hạ",
    value: "lang-ha",
  },
  {
    title: "Cửa hàng Đà Nẵng",
    value: "da-nang",
  },
];

const shopIds = ref<string[]>([]);

const devices: Device[] = [
  {
    title: "Máy tính",
    value: "printer",
  },
  {
    title: "Điện thoại",
    value: "mobile",
  },
];

const deviceId = ref("");
</script>
