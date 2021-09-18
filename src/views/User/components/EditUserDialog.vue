<template>
  <el-dialog
    title="Edit User"
    v-model="localeVisible"
    @close="editUserDialogClosed"
    width="50%"
  >
    <el-form :model="editUser" ref="editUserform" :rules="editUserFormRules">
      <el-form-item
        label="LF ID"
        prop="user_lfid"
        :label-width="formLabelWidth"
      >
        <el-input v-model="editUser.user_lfid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="Password"
        prop="user_password"
        :label-width="formLabelWidth"
      >
        <el-input
          v-model="editUser.user_password"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="Given Name"
        prop="given_name"
        :label-width="formLabelWidth"
      >
        <el-input v-model="editUser.given_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item
        label="Family Name"
        prop="family_name"
        :label-width="formLabelWidth"
      >
        <el-input v-model="editUser.family_name" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Phone" prop="phone" :label-width="formLabelWidth">
        <el-input
          v-model="editUser.phone"
          autocomplete="off"
        ></el-input> </el-form-item
      ><el-form-item label="Email" prop="email" :label-width="formLabelWidth">
        <el-input v-model="editUser.email" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="Role" prop="role" :label-width="formLabelWidth">
        <el-select v-model="editUser.role" placeholder="please select role">
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
        <el-button type="primary" @click="submitEditUser()">Edit </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { User, UserProperties } from "@/types/User";
import UserDataService from "@/service/UserData.service";
import ResponseData from "@/types/ResponseData";
import { ElForm } from "element-plus";
import { ElMessage } from "element-plus";
import axios, { AxiosError } from "axios";

export default defineComponent({
  name: "EditUserDialog",
  props: {
    visible: Boolean,
    editUserData: {
      type: Object as () => User,
    },
  },
  emits: ["update:visible", "editUser"],
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
      formLabelWidth: "120px",
      editUserFormRules: {
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
    editUser() {
      return this.editUserData as User;
    },
  },
  methods: {
    submitEditUser() {
      (this.$refs["editUserform"] as typeof ElForm).validate(
        (valid: boolean) => {
          if (!valid) return;
          UserDataService.editUser(this.editUser)
            .then((submiteditUser: ResponseData) => {
              ElMessage.success({
                message: "user edit success",
                type: "success",
              });
              this.$emit("editUser");
            })
            .catch((error: AxiosError) => {
              console.log(error.response);
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
    editUserDialogClosed() {
      this.$emit("update:visible", false);
      (this.$refs["editUserform"] as typeof ElForm).resetFields();
    },
  },
});
</script>
