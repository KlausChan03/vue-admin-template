<template>
  <div id="bar"></div>
</template>

<script>
import { Bar } from "rough-viz";
import { putAttrsToObj } from "../../../mixins/putAttrsToObj";

export default {
  name: "RoughBar",
  mixins: [putAttrsToObj],
  mounted() {
    let barAttr = this.putAttrsToObj;
    barAttr.element = "#bar";
    const bar = new Bar(barAttr);
    return bar;
  }
};
</script>
