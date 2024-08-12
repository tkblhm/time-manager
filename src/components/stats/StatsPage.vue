<!-- 
 Page containing charts
-->

<template>
  <ChartDisplay/>
  <DateSelector @update-date="updateDate"/>
</template>


<script>

import ChartDisplay from './ChartDisplay.vue'
import DateSelector from './DateSelector.vue'
import api from '../../api/index'

export default {
  data() {
    return {

    }
  },
  components: {
    ChartDisplay,
    DateSelector
  },
  methods: {
    updateDate(date) {
      api.getWeekPeriods(date)
    }
  }

}

</script>
