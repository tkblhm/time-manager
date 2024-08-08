<!-- 
 Component containing buttons that switch two pages
-->

<template>
  <button @click="toTimerPage">Timer</button>
  <button @click="toStatsPage">Stats</button>
</template>

<script>
export default {
  methods: {
    toTimerPage() {
      this.$emit("timer-page");
    },
    toStatsPage() {
      this.$emit("stats-page");
    }
  }
}
</script>