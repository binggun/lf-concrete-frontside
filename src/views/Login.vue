<template>
  <el-form
    :label-position="labelPosition"
    label-width="80px"
    :model="formLabelAlign"
  >
    <el-form-item label="Email">
      <el-input v-model="loginData.email"></el-input>
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="loginData.password" type="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Sign In</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/service/UserData.service";
import ResponseData from "@/types/ResponseData";
import { useStore } from "@/store/auth";

export default defineComponent({
  name: "Login",
  components: {},
  data() {
    return {
      loginData: {
        email: "" as string,
        password: "" as string,
      },
    };
  },
  methods: {
    onSubmit() {
      const store = useStore();
      UserDataService.login(this.loginData.email, this.loginData.password)
        .then((response: ResponseData) => {
          store.setAuth(
            response.data.token,
            +response.data.issued,
            +response.data.expires,
            response.data.role,
            response.data.email
          );
          this.$router.push({ name: "Home" });
        })
        .catch((error: OnErrorEventHandler) => {
          console.log(error);
        });
    },
  },
});
</script>
