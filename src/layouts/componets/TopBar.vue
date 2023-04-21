<template>
  <v-app-bar
    :elevation="1"
  >
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="toggleMenu"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>Trang chủ</v-app-bar-title>

    <template v-slot:append>
      <v-btn class="text-none" stacked>
        <v-badge :content="badgeNumber" color="error">
          <v-icon>mdi-bell-outline</v-icon>
        </v-badge>
      </v-btn>
      <v-avatar>
        <v-icon icon="mdi-account-circle" size="x-large"></v-icon>
      </v-avatar>
      <!-- <v-btn icon="mdi-dots-vertical"></v-btn> -->
      <v-menu
        transition="scale-transition"
      >
        <template #activator="{ props }">
          <v-btn v-bind="props" size="large" append-icon="mdi-chevron-down">
            <!-- <v-avatar>
              <v-icon icon="mdi-account-circle" size="x-large" />
            </v-avatar> -->
            {{ user.fullname }}
          </v-btn>
        </template>

        <v-list>
          <v-list-item link to="/profile">
            <!-- <v-list-item-icon>
              <v-icon>mdi-account-star</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Thông tin tài khoản</v-list-item-title>
            </v-list-item-content> -->
            <v-list-item-title>Thông tin tài khoản</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <!-- <v-list-item-icon>
              <v-icon>mdi-export</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Đăng xuất</v-list-item-title>
            </v-list-item-content> -->
            <v-list-item-title>Đăng xuất</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
import { ref, defineEmits, reactive } from "vue";

// icon
import MenuIcon from "@/assets/images/icons/menu-icon.svg";
import ArrowDownIcon from "@/assets/images/icons/arrow-down-icon.svg";
// end icon

const emit = defineEmits<{
  (e: "toggleMenu"): void;
}>();

const textSearch = ref("");
const badgeNumber = ref(4);
const user = reactive({
  fullname: "Vũ Thị Phượng",
  avatar: "",
});

const toggleMenu = () => {
  emit("toggleMenu");
};
</script>

<style lang="scss" scoped>
.topbar {
  background: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 12px 12px;
  height: 32px;
  border-left: 1px solid #f5f5f5;
  border-bottom: 1px solid #f5f5f5;
  .left {
    .menu-more-icon {
      margin-right: 12px;
    }

    .search-text {
      min-width: 300px;
      background: #f7f9ff;
    }
  }

  .right {
    align-items: center;
    white-space: nowrap;
    .badge {
      position: relative;
      margin-right: 10px;
      .icon {
        line-height: 24px;
      }
      .number {
        position: absolute;
        top: 0;
        right: 0;
        width: fit-content;
        min-width: 14px;
        height: 12px;
        background: #f48232;
        border-radius: 10px;
        color: #fff;
        font-size: 10px;
        text-align: center;
        padding-top: 2px;
      }
    }

    .avatar {
      margin-right: 6px;
    }

    .el-dropdown-link {
      line-height: 24px;
    }

    .username {
      cursor: pointer;
    }
    .arrow-down {
      margin-left: 4px;
    }
  }
}

.user-dropdown {
  width: 100px;
}

.menu-more-icon {
  width: 16px;
  height: 12px;
}
</style>
