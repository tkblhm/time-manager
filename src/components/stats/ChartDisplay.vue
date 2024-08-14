<!-- 
 Component for displaying the chart showing time periods in a week.
-->

<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      week: [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    }
  },
  computed: {
    chartData() {
      return {
        labels: this.week,
        datasets: this.toDatasets()
      }
    },
    
  },
  props: ["periods"],
  methods: {
    toDatasets() {

      if (this.periods == null) {
        console.log("null value for this.periods")
        return []
      }
      console.log("periods at toDatasets: ")
      console.log(this.periods.days)
      console.log(this.periods.records)
      let dataset = {data: []}
      let dateToWeek = {}
      for (let i=0; i<7; i++) {
        dateToWeek[this.periods.days[i]] = this.week[i]
      }
      for (let period of this.periods.records) {
        dataset.data.push({x: dateToWeek[period.recordDate], y: [this.timeToHours(period.startTime), this.timeToHours(period.endTime)]})
      }
      console.log("dataset:")
      console.log(dataset)
      return [dataset]

    },
    timeToHours(timeString) {
      const [hours, minutes, seconds] = timeString.split(':').map(Number)
      return hours + minutes / 60 + seconds / 3600
    }
  },
  mounted() {
    this.chartData.labels = this.week
    this.chartData.datasets = this.toDatasets()
  },
  watch: {
    periods(newValue, oldValue) {
      console.log("periods changed")
      console.log(newValue)
      console.log(oldValue)
      this.chartData.datasets = this.toDatasets()
    }
  }
}
</script>