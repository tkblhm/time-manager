<!-- 
 Component Containing buttons for the timer
-->

<template>
  <button @click="startFunction()">start</button>
  <button @click="cancelFunction()">cancel</button>
  <button @click="endFunction()">end</button>
</template>


<script>

export default {
  data() {
    return {
      seconds: 0,
      timer: null,
      isTiming: false
    }
  },
  methods: {
    startFunction() {
      this.$emit('start-timer');
    },
    endFunction() {
      this.$emit('end-timer');
    },
    cancelFunction() {
      this.$emit('cancel-timer');
    }
  }
}

</script>