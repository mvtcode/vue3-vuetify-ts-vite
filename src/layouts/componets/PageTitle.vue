<template>
  <div class="d-flex content">
    <div class="d-flex left">
      <el-icon v-if="isShowBackButton" class="icon"><Back /></el-icon>
      <div class="title">{{ title }}</div>
    </div>
    <div class="d-flex right">
      <img class="icon" :src="icon" />
      <el-breadcrumb class="breadcrumb" separator="/">
        <template v-for="(breadcrumb, index) in breadcrumbs" :key="index">
          <el-breadcrumb-item
            class="breadcrumb-item link"
            v-if="breadcrumb.url"
            :to="{ path: breadcrumb.url }"
          >
            {{ breadcrumb.title }}
          </el-breadcrumb-item>
          <el-breadcrumb-item class="breadcrumb">
            {{ breadcrumb.title }}
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { Breadcrumb } from "@/interfaces/breadcrumb";

interface Props {
  title: string;
  isShowBackButton: boolean;
  icon: any;
  breadcrumbs: Breadcrumb[];
}

defineProps<Props>();
</script>

<style lang="scss" scoped>
.content {
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-left: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  padding: 12px 14px;
  height: 32px;
  .left {
    white-space: nowrap;
    align-items: center;
    .icon {
      margin: 0 8px;
    }
    .title {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      color: #2b2f33;
    }
  }
  .right {
    align-items: center;
    white-space: nowrap;
    .icon {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }
    .breadcrumb {
      .breadcrumb-item {
        color: #2b2f33;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        &.link {
          color: rgba(43, 47, 51, 0.4);
        }
      }
    }
  }
}
</style>
