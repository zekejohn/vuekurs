<template>
  <div>
    <h1> {{ header }}</h1>
    <p> {{ text }} </p>
    <p> {{ textUpperCase }} </p>
  </div>
</template>

<script>
export default {
  name: 'Exercise1',
  data: function () {
      return {
        header: "Exercise 1",
        text: "Her er poenget å gjøre noe kult!"
      }
  },
  methods: {

  },
  computed: {
      textUpperCase(){
          return this.text.toUpperCase();
      }
  }
}
</script>
