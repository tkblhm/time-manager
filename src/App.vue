<template>
  <SwitchButtons @timer-page="toTimerPage" @stats-page="toStatsPage"/>
  <component :is="page"/>
</template>

<script>
import TimerPage from './components/timer/TimerPage.vue';
import SwitchButtons from './components/SwitchButtons.vue';
import StatsPage from './components/stats/StatsPage.vue';

export default {
  data() {
    return {
      page: StatsPage
    }
  },
  name: 'App',
  components: {
    TimerPage,
    SwitchButtons,
    StatsPage
  },

  methods: {
    toTimerPage() {
      this.page = "TimerPage"
    },
    toStatsPage() {
      this.page = "StatsPage"
    }
  }
}
</script>
