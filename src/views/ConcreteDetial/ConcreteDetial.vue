<template>
  <div>
    ConcreteDetial
    {{ this.concrete.id }}
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="Booking" name="1">
        <div>
          {{ this.concrete.concreteBookings }}
          {{ ConcreteDisplay.Test }}
        </div>
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item
            v-for="item in ConcreteDisplay"
            :key="item.key"
            :label="item.label"
          >
            <span>{{ this.concrete.concreteBookings[item.key] }}</span>
          </el-form-item>
        </el-form>
      </el-collapse-item>
      <el-collapse-item title="Pour" name="2">
        <div>
          {{ this.concrete.concretePours }}
        </div>
      </el-collapse-item>
      <el-collapse-item title="Attachments" name="3">
        <div>
          Files
        </div>
        <div>
          Pics
        </div>
      </el-collapse-item>
    </el-collapse>
    <el-row>
      <el-button plain>Add a Pour</el-button>
      <el-button type="primary" plain>Add a Remedial</el-button>
      <el-button type="success">Create a Pour Report</el-button>
      <el-button type="info">Create a Pour Report for layer</el-button>
      <el-button type="warning">Create a Pour Report for pump</el-button>
      <el-button type="danger">Add a Booking</el-button>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ConcreteDataService from "@/service/ConcreteData.service";
import ResponseData from "@/types/ResponseData.interface";
import { Concrete } from "@/types/Concrete.interface";
import ConcreteDisplay from "../../types/ConcreteDisplay.json";
export default defineComponent({
  data() {
    return {
      concrete: {} as Concrete,
    };
  },
  methods: {
    getConcrete() {
      let concreteId = this.$route.params.id as string;
      ConcreteDataService.get(concreteId)
        .then((response: ResponseData) => {
          this.concrete = response.data;
        })
        .catch((e: Error) => {});
    },
  },
  mounted() {
    this.getConcrete();
  },
});
</script>
