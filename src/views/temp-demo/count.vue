<template>
  <div  style="width: calc(100vw - 210px); height: 100vh; display: flex; justify-content: center; align-items: center;" @click="increment()">{{ count }}</div>
</template>

<script>
export default {
  // state
  data() {
    return {
      count: 0
    }
  },
  // actions
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>
