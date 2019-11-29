<template>
  <div  style="width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;" @click="increment()">{{ count }}</div>
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
