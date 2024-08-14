<!-- 
 Page containing the timer
-->

<template>

<TimeDisplay :totalTime="totalTime" :currentTime="currentTime"></TimeDisplay>
<TimerButtons @start-timer="startTimer" @end-timer="endTimer" @cancel-timer="cancelTimer"></TimerButtons>
<ManualButtons @set-time-period="setTimePeriod"/>
</template>

<script>
import TimeDisplay from './TimeDisplay.vue';
import TimerButtons from './TimerButtons.vue';
import ManualButtons from './ManualButtons.vue';
import api from '../../api/index';

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
        let end = new Date().toISOString().split('.')[0];
        api.addEntry(this.startTime.toISOString().split('.')[0], end);
        this.updateTotalTime();
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
      this.totalTime = api.getToday().then(res => {
        console.log(res.data);
        this.totalTime = res.data;
      });

      // this.totalTime = 1234;
    },
    setTimePeriod(date, beginTime, finishTime) {
      console.log("time period:");
      console.log(date);
      console.log(beginTime);
      console.log(finishTime);
      if (!(date == '' || beginTime == '' || finishTime == '')) {
        console.log("add entry")
        api.addEntry(date+"T"+beginTime, date+"T"+finishTime);
        this.updateTotalTime();
      }
    }
  }
}
</script>