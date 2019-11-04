<template>
  <div>
    <h1>{{header}}</h1>
    <p>{{count}}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'Exercise4',
  data: function () {
      return {
        header: "Exercise 4",
        count: 0
      }
  },
  methods: {
      increment(){
          this.count += 1;
      }
  }
}
</script>
