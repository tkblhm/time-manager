<!-- 
 Component showing times in large font
-->

<template>
<p>{{ formatTime(totalTime) }}</p>
<p>{{ formatTime(currentTime) }}</p>
</template>

<script>

export default {
  props: {
    totalTime: {
      type: Number
    },
    currentTime: {
      type: Number
    }
  },
  methods: {
    formatTime(seconds) {
      const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
      const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
      const secs = (seconds % 60).toString().padStart(2, '0');
      return `${hours}:${minutes}:${secs}`;
    }
  }
}

</script>