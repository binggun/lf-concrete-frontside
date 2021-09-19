<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1"
        ><router-link to="/booking">Booking</router-link></el-menu-item
      >
      <el-menu-item index="2"
        ><router-link to="/concrete">Concrete</router-link></el-menu-item
      ><el-menu-item index="3"
        ><router-link to="/postpour">Post Pour</router-link></el-menu-item
      >
      <el-submenu index="4">
        <template #title>我的工作台</template>
        <el-menu-item index="4-1">选项1</el-menu-item>
        <el-menu-item index="4-2">选项2</el-menu-item>
        <el-menu-item index="4-3">选项3</el-menu-item>
        <el-submenu index="4-4">
          <template #title>选项5</template>
          <el-menu-item index="2-5-1">选项1</el-menu-item>
          <el-menu-item index="2-5-2">选项2</el-menu-item>
          <el-menu-item index="2-5-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="6" disabled>消息中心</el-menu-item>
      <el-menu-item index="7"
        ><router-link to="/user">user</router-link></el-menu-item
      ><el-menu-item index="7" v-if="store.isLogin"
        ><el-button type="info" @click="signOut()"
          >Sign Out</el-button
        ></el-menu-item
      >
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/auth";

export default defineComponent({
  name: "mainMenu",
  data() {
    return {
      activeIndex: "1",
    };
  },

  components: {},
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods: {
    signOut() {
      const store = useStore();
      store.signOut();
      this.$router.push({ name: "Login" });
    },
  },
});
</script>
