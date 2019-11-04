<template>
  <div>
    <h1>{{header}}</h1>
    <p>{{count}}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: 'Exercise6',
  data: function () {
      return {
        header: "Exercise 6",
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
