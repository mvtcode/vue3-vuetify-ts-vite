<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
body {
  margin: 0;
  background: #f5f5f5;
}

.v-layout {
  height: 100%;
}

.v-btn {
  text-transform: none !important;
}
</style>