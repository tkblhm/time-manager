<!-- 
 Component for buttons that selects the week to show for the chart.
-->

<template>
  <p>{{ selectedDate }}</p>
  <p>last day: {{ lastDay }}</p>
  <button @click="toLastWeek">&lt;</button>
  <input type="date" v-model="selectedDateString">
  <button @click="toNextWeek">&gt;</button>
</template>

<script>

export default {
  data() {
    return {
      selectedDateString: new Date().toISOString().split('T')[0],
    
      // firstDay: getFirstDay()
    }
  },
  computed: {
    selectedDate() {
      return new Date(this.selectedDateString)
    },
    firstDay() {
      //
      return this.selectedDate
    },
    lastDay() {
      //
      return this.selectedDate
    }
  },
  mounted() {
    this.$emit("update-date", this.selectedDateString)
  },
  methods: {
    toLastWeek() {
      let curDate = new Date(this.selectedDateString)
      curDate.setDate(curDate.getDate()-7)
      this.selectedDateString = curDate.toISOString().split('T')[0]
      this.$emit("update-date", this.selectedDateString)
    },
    toNextWeek() {
      let curDate = new Date(this.selectedDateString)
      curDate.setDate(curDate.getDate()+7)
      this.selectedDateString = curDate.toISOString().split('T')[0]
      this.$emit("update-date", this.selectedDateString)
    }
  }
}
</script>