<template>
  <el-dialog
    title="New User"
    v-model="localeVisible"
    @close="newUserDialogClosed"
    width="50%"
  >
    <el-form :model="newUser" ref="newUserform" :rules="newUserFormRules">
      <el-form-item
        label="LF ID"
        prop="user_lfid"
        :label-width="formLabelWidth"
      >
        <el-input v-model="newUser.user_lfid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="Password"
        prop="user_password"
        :label-width="formLabelWidth"
      >
        <el-input v-model="newUser.user_password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="Given Name"
        prop="given_name"
        :label-width="formLabelWidth"
      >
        <el-input v-model="newUser.given_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="Family Name"
        prop="family_name"
        :label-width="formLabelWidth"
      >
        <el-input v-model="newUser.family_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone" :label-width="formLabelWidth">
        <el-input
          v-model="newUser.phone"
          autocomplete="off"
        ></el-input> </el-form-item
      ><el-form-item label="Email" prop="email" :label-width="formLabelWidth">
        <el-input v-model="newUser.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Role" prop="role" :label-width="formLabelWidth">
        <el-select v-model="newUser.role" placeholder="please select role">
          <el-option label="Admin" value="Admin"></el-option>
          <el-option label="LF Quantity Surveyor" value="LFQS"></el-option>
          <el-option label="LF Site Manager" value="LFSM"></el-option>
          <el-option label="Sub Contractor" value="LFSC"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="$emit('update:visible', false)">Cancel</el-button>
        <el-button type="primary" @click="submitNewUser()">Submit </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { User, UserProperties } from "@/types/User";
import UserDataService from "@/service/UserData.service";
import ResponseData from "@/types/ResponseData";
import { ElForm } from "element-plus";
import { ElMessage } from "element-plus";
import axios, { AxiosError } from "axios";

export default defineComponent({
  name: "NewUserDialog",
  props: {
    visible: Boolean,
  },
  emits: ["update:visible", "newUser"],
  data() {
    var checkEmail = (
      rule: any,
      value: string,
      callback: (E?: Error) => void
    ) => {
      //Reg check email
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (regEmail.test(value)) {
        //valid
        return callback();
      }
      //unvalid
      callback(new Error("please input correct email"));
    };
    return {
      newUser: {
        user_lfid: "",
        user_password: "",
        given_name: "",
        family_name: "",
        phone: "",
        email: "",
        role: "",
      } as UserProperties,
      formLabelWidth: "120px",
      newUserFormRules: {
        user_password: [
          { required: true, message: "please input password", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "length is within 3 to 10 characters",
            trigger: "blur",
          },
        ],
        email: [
          { requried: true, message: "please input email", trigger: "blur" },
          { validator: checkEmail, trigger: "blur" },
        ],
      },
    };
  },
  mounted() {},
  computed: {
    localeVisible() {
      return this.visible;
    },
  },
  methods: {
    submitNewUser() {
      (this.$refs["newUserform"] as typeof ElForm).validate(
        (valid: boolean) => {
          if (!valid) return;
          UserDataService.newUser(this.newUser)
            .then((submitNewUser: ResponseData) => {
              ElMessage.success({
                message: "New user add success",
                type: "success",
              });
              this.$emit("newUser");
            })
            .catch((error: Error | AxiosError) => {
              if (axios.isAxiosError(error)) {
                if (
                  error.response?.data ===
                  "SQLITE_CONSTRAINT: UNIQUE constraint failed: user.email"
                ) {
                  ElMessage.error(
                    "Email has been registed, please try a new email"
                  );
                } else {
                  ElMessage.error("Please retry the new user");
                }
              } else {
                ElMessage.error("Please retry the new user");
              }
            });
        }
      );
    },
    newUserDialogClosed() {
      this.$emit("update:visible", false);
      (this.$refs["newUserform"] as typeof ElForm).resetFields();
    },
  },
});
</script>
