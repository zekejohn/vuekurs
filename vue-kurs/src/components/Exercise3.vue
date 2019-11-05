<template>
  <div>
    <h1>Exercise 3</h1>
    <p>Lag en kalkulator som tar inn en verdi og utfører valgt handling på resultatet.</p>
    <p>{{result}}</p>
    <br/>
    <input v-model.number="input" type="number">
    <br/>
    <select v-model="selected">
        <option>Add</option>
        <option>Sub</option>
        <option>Mul</option>
        <option>Div</option>
    </select>
    <br/>
    <button @click="doAction">Action</button>
  </div>
</template>

<script>
export default {
  name: 'Exercise3',
  data: function () {
      return {
        header: "",
        result: 0,
        input: 0,
        selected: "Add"
      }
  },
  methods: {
      doAction(){
      }
  }
}
</script>
