<template>
  <div style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
    <countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  components: { countTo },
  data () {
    return {
      startVal: 0,
      endVal: 2019
    }
  }
}
</script>
