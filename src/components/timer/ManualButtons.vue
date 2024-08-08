<!-- 
 Component containing buttons that manually add a time period
-->

<template>
  <button @click="setFunction">set</button>
  <div>
    <label for="date">Date:</label>
    <input type="date" v-model="date" id="date">

    <label for="start-time">Start Time:</label>
    <input type="time" v-model="startTime" id="start-time">

    <label for="end-time">End Time:</label>
    <input type="time" v-model="endTime" id="end-time">

  </div>

</template>

<script>

export default {
  data() {
    return {
      date: '',
      startTime: '',
      endTime: '',
    }
  },
  methods: {
    setFunction() {
      this.$emit('set-time-period', this.date, this.startTime, this.endTime);
      this.date = '';
      this.startTime = '';
      this.endTime = '';
    }
  }
}

</script>