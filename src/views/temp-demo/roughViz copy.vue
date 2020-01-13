<template>
  <div class="app-container">
    <el-row :gutter="10">
      <el-col :sm="24" :md="12" :lg="6">
        <div class="grid-content bg-purple-light mb8">
          <div id="bar"></div>
        </div>
      </el-col>
      <el-col :sm="24" :md="12" :lg="6">
        <div class="grid-content bg-purple-light mb8">
          <div id="donut"></div>
        </div>
      </el-col>
      <el-col :sm="24" :md="12" :lg="6">
        <div class="grid-content bg-purple-light mb8">

        </div>
      </el-col>
      <el-col :sm="24" :md="12" :lg="6">
        <div class="grid-content bg-purple-light mb8">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { Donut } from "rough-viz";
import { putAttrsToObj } from "../../mixins/putAttrsToObj";
export default {
  name: "RoughDonut",
  mixins: [putAttrsToObj],
  mounted() {
    let donutAttr = this.putAttrsToObj;
    donutAttr.element = "#donut";
    const donut = new Donut(donutAttr);
    return donut;
  }
};
</script>

<style>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
