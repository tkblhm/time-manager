<!-- 
 Page containing charts
-->

<template>
  <ChartDisplay :periods="periods"/>
  <DateSelector @update-date="updateDate"/>
</template>


<script>

import ChartDisplay from './ChartDisplay.vue'
import DateSelector from './DateSelector.vue'
import api from '../../api/index'

export default {
  data() {
    return {
      periods: null
    }
  },
  components: {
    ChartDisplay,
    DateSelector
  },
  methods: {
    updateDate(date) {
      api.getWeekPeriods(date).then(res => {
        console.log(res.data)
        this.periods = res.data
      })
    }
  }
}

</script>
