<template>
  <Header></Header>
  <el-container>
    <el-header><Menu></Menu></el-header>
    <el-main><router-view></router-view></el-main>
    <el-footer>footer</el-footer>
  </el-container>
</template>

<script lang="ts">
import Menu from "./components/MainMenu.vue";
import Header from "./components/MainHeader.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
    Menu,
    Header,
  },
});
</script>
<style>
#app {
  font-family: Helvetica, Arial, Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: Left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
