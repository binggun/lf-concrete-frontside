<template>
  <div padding="20px">
    <el-row justify="space-between" gutter="20px">
      <el-col :span="12"><h1>Concrete Record</h1></el-col>
      <el-col
        class="hidden-sm-and-down"
        :xs="24"
        :sm="12"
        :md="12"
        :lg="8"
        :xl="12"
      >
        <el-image :src="lfLogoPic" :fit="fit"></el-image>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import lfLogoPic from "@/assets/LFlogo.png";
export default {
  data() {
    return {
      lfLogoPic: lfLogoPic,
    };
  },
};
</script>
