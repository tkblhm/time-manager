<template>
  <SwitchButtons @timer-page="toTimerPage" @stats-page="toStatsPage"/>
  <component :is="page"/>
</template>

<script>
import TimerPage from './components/TimerPage.vue';
import SwitchButtons from './components/SwitchButtongs.vue';
import StatsPage from './components/StatsPage.vue';

export default {
  data() {
    return {
      page: TimerPage
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
