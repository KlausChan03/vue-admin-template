<template>
  <div class="app-container">
    <h1>Rough-Viz Vue Wrapper</h1>
    <el-row :gutter="10">
      <el-col :xs="24" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple-light mb8">
          <h3>Bar</h3>
          <rough-bar
            data="https://raw.githubusercontent.com/jwilber/random_data/master/flavors.csv"
            labels="flavor"
            values="price"
          ></rough-bar>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple-light mb8">
          <h3>Donut</h3>
          <rough-donut
            :data="{
            labels: ['North', 'South', 'East', 'West'],
            values: [10, 5, 8, 3]
          }"
            title="Regions"
            roughness="8"
            :colors="['red', 'orange', 'blue', 'skyblue']"
            stroke="black"
            stroke-width="3"
            fill-style="cross-hatch"
            fill-weight="3.5"
          ></rough-donut>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple-light mb8">
          <h3>Pie</h3>
          <rough-pie
            :data="{
            labels: ['North', 'South', 'East', 'West'],
            values: [10, 5, 8, 3]
          }"
            title="Regions"
            :colors="['red', 'orange', 'blue', 'skyblue']"
            roughness="8"
          ></rough-pie>
        </div>
      </el-col>

      <el-col :xs="24" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple-light mb8">
          <h3>Line</h3>
          <rough-line
            data="https://raw.githubusercontent.com/jwilber/random_data/master/profits.csv"
            y1="revenue"
            y2="cost"
            y3="profit"
          ></rough-line>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple-light mb8">
          <h3>Scatter</h3>
          <rough-scatter
            data="https://raw.githubusercontent.com/uiuc-cse/data-fa14/gh-pages/data/iris.csv"
            title="Iris Scatter Plot"
            x="sepal_width"
            y="petal_length"
            color-var="species"
            highlight-label="species"
            fill-weight="4"
            radius="12"
            :colors="['pink', 'coral', 'skyblue']"
            stroke="black"
            stroke-width="0.4"
            roughness="1"
            width="400"
            height="450"
            font="0"
            x-label="sepal width"
            y-label="petal length"
            curb-zero="false"
          ></rough-scatter>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple-light mb8">
          <h3>Stacked Bar</h3>
          <rough-stacked-bar
            :data="[
            { month: 'Jan', A: 20, B: 5, C: 10 },
            { month: 'Feb', A: 25, B: 10, C: 20 },
            { month: 'March', A: 30, B: 50, C: 10 }
          ]"
            labels="month"
            title="Monthly Revenue"
            roughness="2"
            :colors="['blue', '#f996ae', 'skyblue', '#9ff4df']"
            fill-weight="0.35"
            stroke-width="0.5"
            fill-style="cross-hatch"
            stroke="black"
          ></rough-stacked-bar>
        </div>
      </el-col>

      <el-col :xs="24" :md="12" :lg="8" :xl="6">
        <div class="grid-content bg-purple-light mb8">
          <h3>Horizontal Bar</h3>
          <rough-bar-h
            title="Vehicles I've Had"
            title-font-size="1.5rem"
            legend="false"
            :margin="{ top: 50, bottom: 100, left: 160, right: 0 }"
            :data="{
            labels: [
              '1992 Ford Aerostar Van',
              '2013 Kia Rio',
              '1980 Honda CB 125s',
              '1992 Toyota Tercel'
            ],
            values: [8, 4, 6, 2]
          }"
            x-label="Time Owned (Years)"
            stroke-width="2"
            fill-style="zigzag-line"
            highlight="gold"
          ></rough-bar-h>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RoughBar from "./roughViz/RoughBar.vue";
import RoughDonut from "./roughViz/RoughDonut.vue";
import RoughPie from "./roughViz/RoughPie.vue";
import RoughLine from "./roughViz/RoughLine.vue";
import RoughScatter from "./roughViz/RoughScatter.vue";
import RoughStackedBar from "./roughViz/RoughStackedBar.vue";
import RoughBarH from "./roughViz/RoughBarH.vue";
export default {
  name: "App",
  components: {
    RoughBar,
    RoughDonut,
    RoughPie,
    RoughLine,
    RoughScatter,
    RoughStackedBar,
    RoughBarH
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
  min-height: 580px;
  padding: 2px 12px;
}
</style>
