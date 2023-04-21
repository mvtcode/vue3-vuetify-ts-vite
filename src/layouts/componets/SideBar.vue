<template>
  <v-navigation-drawer
    expand-on-hover
    :rail="isCollapse"
    :permanent="!isCollapse"
  >
    <v-list>
      <v-list-item>
        <v-list-img class="logo">
          <v-img :src="!isCollapse ? LogoImage : LogoMinImage"/>
        </v-list-img>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item v-for="(menu, index) in menus" :key="index" link :to="menu.path" :prepend-avatar="menu.icon" :title="menu.title" :value="menu.path" />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, defineExpose, defineEmits, onMounted } from "vue";

// image + icon
import LogoImage from "@/assets/images/logo.svg";
import LogoMinImage from "@/assets/images/logo-min.svg";
import DeviceIcon from "@/assets/images/icons/device-icon.svg";
import DocIcon from "@/assets/images/icons/doc-icon.svg";
import DocUsdIcon from "@/assets/images/icons/doc-usd-icon.svg";
import HeadphoneIcon from "@/assets/images/icons/headphone-icon.svg";
import HomeIcon from "@/assets/images/icons/home-icon.svg";
import MinIcon from "@/assets/images/icons/min-icon.svg";
import SettingIcon from "@/assets/images/icons/setting-icon.svg";
import UsdIcon from "@/assets/images/icons/usd-icon.svg";
// end image + icon

// interface Props {
//   isExpand: boolean;
// }

interface Menu {
  title: string;
  icon: any;
  path: string;
  disabled?: boolean;
  permission?: string[];
  children?: Menu[];
}

const isCollapse = ref(false);
const isCollapseLogo = ref(false);

const emit = defineEmits<{
  (e: "isCollapse", value: boolean): void;
}>();

const menus: Menu[] = [
  {
    title: "Trang chủ",
    icon: HomeIcon,
    path: "/",
  },
  {
    title: "Lịch sử giao dịch",
    icon: UsdIcon,
    path: "/transaction",
  },
  {
    title: "Lịch sử hoàn ứng",
    icon: MinIcon,
    path: "/transaction-advance",
  },
  {
    title: "Biểu phí giao dịch",
    icon: DocUsdIcon,
    path: "/transaction-chart",
  },
  {
    title: "Hợp đồng giao dịch",
    icon: DocIcon,
    path: "/contract",
  },
  {
    title: "Quản lý thiết bị",
    icon: DeviceIcon,
    path: "/devices",
  },
  {
    title: "Hỗ trợ",
    icon: HeadphoneIcon,
    path: "/support",
  },
  {
    title: "Cài đặt",
    icon: SettingIcon,
    path: "/setting",
  },
];

onMounted(() => {
  emit("isCollapse", isCollapse.value);
  isCollapseLogo.value = isCollapse.value;
});

const toggleMenu = () => {
  isCollapse.value = !isCollapse.value;
  setTimeout(
    () => {
      isCollapseLogo.value = isCollapse.value;
    },
    isCollapse.value ? 500 : 100
  );
  emit("isCollapse", isCollapse.value);
};

defineExpose({
  toggleMenu,
});
</script>

<style lang="scss" scoped>
.navigation {
  // min-height: calc(100vh);
}
.logo {
  padding: 6px;
}

.logo-collapse {
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  justify-content: center;
  background: #fff;
  height: 24px;
}

.menu-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.item-menu {
  display: flex;
  justify-content: start;
  align-items: center;
  // .icon-custom {
  //   width: 20px;
  // }
  .title {
    font-family: "Be Vietnam Pro";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #525b73;
  }
}

.more-image {
  margin-top: 50px;
  .item {
    //
  }
}
</style>

<style lang="scss">
.el-menu {
  border-right: none;
  .el-menu-item {
    &.is-active {
      background: #fcf4f4;
      border-radius: 4px;
      span {
        color: #cf232a !important;
      }
    }
  }
}
</style>
