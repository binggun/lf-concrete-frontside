<template>
  <div>
    <el-button @click="newUserDialogFormVisible = true">New User</el-button>
    <el-table :data="userData" style="width: 100%">
      <el-table-column prop="user_lfid" label="LF ID" width="80">
      </el-table-column>
      <el-table-column prop="user_password" label="User Password" width="140">
      </el-table-column>
      <el-table-column prop="given_name" label="Given Name" width="140">
      </el-table-column>
      <el-table-column prop="family_name" label="Family Name" width="140">
      </el-table-column>
      <el-table-column prop="phone" label="Phone" width="140">
      </el-table-column>
      <el-table-column prop="email" label="email" width="140">
      </el-table-column>
      <el-table-column prop="role" label="Role" width="140"> </el-table-column>
      <el-table-column label="Edit" width="“150">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >remove</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <new-user
      v-model:visible="this.newUserDialogFormVisible"
      @new-User="refreshUserList()"
    ></new-user>
    <edit-user
      v-model:visible="this.editUserDialogFormVisible"
      @edit-User="refreshUserList()"
      :edit-user-data="editUserData"
    ></edit-user>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserDataService from "@/service/UserData.service";
import { User } from "@/types/User.interface";
import ResponseData from "@/types/ResponseData.interface";
import NewUser from "@/views/User/components/NewUserDialog.vue";
import EditUser from "@/views/User/components/EditUserDialog.vue";
import { AxiosError } from "axios";
import { ElMessage, ElMessageBox } from "element-plus";

export default defineComponent({
  name: "user",
  data() {
    return {
      userData: [
        {
          rowid: 0,
          user_lfid: "",
          user_password: "",
          given_name: "",
          family_name: "",
          phone: "",
          email: "",
          role: " ",
        },
      ] as User[],
      editUserData: {
        rowid: 0,
        user_lfid: "",
        user_password: "",
        given_name: "",
        family_name: "",
        phone: "",
        email: "",
        role: " ",
      } as User,
      newUserDialogFormVisible: false,
      editUserDialogFormVisible: false,
    };
  },
  components: { NewUser, EditUser },
  methods: {
    getUserList() {
      UserDataService.getAll()
        .then((response: ResponseData) => {
          this.userData = response.data;
        })
        .catch((error: Error | AxiosError) => {
          console.log(error);
        });
    },
    handleEdit(index: number, row: User) {
      this.editUserDialogFormVisible = true;
      this.editUserData = row as User;
    },
    handleDelete(index: number, row: User) {
      ElMessageBox.confirm(
        `Do you want to remove user : ${row.email} ?`,
        "Confirmation",
        {
          confirmButtonText: "Remove",
          cancelButtonText: "Cancel",
          type: "warning",
        }
      ).then(() => {
        UserDataService.removeUser(row.rowid)
          .then((response: ResponseData) => {
            this.getUserList();
            ElMessage.success("User removed");
          })
          .catch((error: Error | AxiosError) => {
            ElMessage.error("User remove fail");
          });
      });
    },
    refreshUserList() {
      this.getUserList();
    },
  },
  mounted() {
    this.getUserList();
  },
});
</script>
