<template>
  <div>
    Booking
    <el-row>
      <el-button plain>默认按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
          <template #default="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item
                v-for="item in this.concreteBookingDetails"
                :key="item.key"
                :label="item.label"
              >
                <span>{{ props.row[item.key] }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="concreteIndex" label="Index"> </el-table-column
        ><el-table-column prop="site" label="Site"> </el-table-column>
        <el-table-column prop="bookingDate" label="Booking Date">
        </el-table-column>
        <el-table-column prop="time" label="Time"> </el-table-column>
        <el-table-column prop="concreteType" label="Concrete Type">
        </el-table-column>
        <el-table-column prop="location" label="Location"> </el-table-column>
        <el-table-column prop="orderedQuantity" label="Ordered Qty m3">
        </el-table-column>
        <el-table-column prop="curing" label="Curing"> </el-table-column>
        <el-table-column prop="additives" label="Additives"> </el-table-column
        ><el-table-column prop="interval" label="Interval"> </el-table-column
        ><el-table-column prop="test" label="Test"> </el-table-column
        ><el-table-column prop="area" label="Area m2(for placer)">
        </el-table-column>
        <el-table-column prop="placer" label="Placer"> </el-table-column
        ><el-table-column prop="pumpSupplier" label="Pump Supplier">
        </el-table-column>
        <el-table-column prop="orderNumber" label="Order Number">
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {},
  data() {
    return {
      concreteBookingDetails: [
        { label: "Index", key: "bookingID" },
        { label: "Site", key: "site" },
        { label: "Booking Date", key: "bookingDate" },
        { label: "Require Date", key: "requireDate" },
        { label: "Time", key: "time" },
        { label: "Concrete Type", key: "concreteType" },
        { label: "Location", key: "location" },
        { label: "Supplier", key: "supplier" },
        { label: "Order Quantity", key: "orderedQuantity" },
        { label: "Curing", key: "curing" },
        { label: "Slump", key: "slump" },
        { label: "Additives", key: "additives" },
        { label: "Interval", key: "interval" },
        { label: "Test", key: "test" },
        { label: "Placer", key: "placer" },
        { label: "Pump Supplier", key: "pumpSupplier" },
        { label: "Hose Length", key: "hoseLength" },
        { label: "Order Number", key: "orderNumber" },
        { label: "Note", key: "note" },
      ],
      tableData: [
        {
          bookingID: "1",
          site: "Seascape",
          bookingDate: "2021-05-02",
          requireDate: "王小虎",
          time: "8：00AM",
          concreteType: "AP4019WH",
          location: "Lv8",
          supplier: "Firth",
          orderedQuantity: "80m3",
          curing: "SIKA antisol E",
          slump: "170+/-30",
          additives: "1 hour Retarder",
          interval: "15mins",
          test: "1x3 days, 1x7days 3x28 days",
          area: "180",
          placer: "SOL",
          pumpSupplier: "Pioneer",
          hoseLength: "80m+line dragon",
          orderNumber: "LFNI099/114",
          note:
            "1. No Block fill 2. On site slump test for all trucks (technician required). Standby equipment for on-site cylinder test if required by Engineer.3. Locate at pump gate (Gate E)",
        },
      ],
    };
  },
});
</script>
<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 25%;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 48%;
}
</style>
