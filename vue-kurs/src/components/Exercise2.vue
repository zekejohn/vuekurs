<template>
  <div>
    <h1> Exercise 2</h1>
    <p class="text"> {{text}} </p>
  </div>
</template>

<script>
export default {
  name: 'Exercise2',
  data: function () {
      return {
          text: "Lag tre knapper.\n" +
            "Én som toggler upper-/lowercase på denne teksten.\n" + 
            "Én som resetter teksten tilbake til orginal verdi.\n" + 
            "Én som legger utropstegn på slutten av teksten."
      }
  },
  methods: {

  },
  computed: {
  }
}
</script>
<style scoped>
.text {
    white-space: pre-line;
}
</style>
