<template>

<TimeDisplay :totalTime="totalTime" :currentTime="currentTime"></TimeDisplay>
<TimerButtons @start-timer="startTimer" @end-timer="endTimer" @cancel-timer="cancelTimer"></TimerButtons>
<ManualButtons @set-time-period="setTimePeriod"/>
</template>

<script>
import TimeDisplay from './TimeDisplay.vue';
import TimerButtons from './TimerButtons.vue';
import ManualButtons from './ManualButtons.vue';

export default {
  data() {
    return {
      totalTime: 10887,
      currentTime: 0,
      startTime: null,
      isTiming: false,
      timer: null
    }
  },
  created() {
    this.updateTotalTime();
  },
  components: {
    TimerButtons,
    TimeDisplay,
    ManualButtons,
  },

  methods: {
    startTimer() {
      if (!this.isTiming) {      
        this.startTime = new Date();
        this.isTiming = true;
        this.currentTime = 0;
        this.timer = setInterval(() => {
          this.currentTime += 1;
        }, 1000);
      }
    },
    endTimer() {
      if (this.isTiming) {
        // todo: send time to backend
        clearInterval(this.timer);
        this.isTiming = false;
        this.currentTime = 0;
      }
    },
    cancelTimer() {
      if (this.isTiming) {
        clearInterval(this.timer);
        this.isTiming = false;
        this.currentTime = 0;
      }
    },
    updateTotalTime() {
      //todo:get from backend
      this.totalTime = 10875;
    },
    setTimePeriod(date, beginTime, finishTime) {
      console.log(date);
      console.log(beginTime);
      console.log(finishTime);
      //todo: send to backend
      this.updateTotalTime();
    }
  }
}
</script>