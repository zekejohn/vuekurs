<template>
  <div>
    <h1>{{header}}</h1>

    <select v-model="selected">
      <option value="">--Velg favorittlag i eliteserien--</option>
      <option v-for="(option, index) in options" v-bind:value="option.value" :key="index">
        {{ option.text }}
      </option>
    </select>
    <div class="wrapper" style="padding: 40px;">
      <keep-alive>
        <component v-bind:is="componentName"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Rosenborg from "./dynamic/Rosenborg";
import Molde from "./dynamic/Molde";
import Enga from "./dynamic/Enga";
import Brann from "./dynamic/Brann";
import Odd from "./dynamic/Odd";
import Glimt from "./dynamic/Glimt";
import Other from "./dynamic/Other";
import Nobody from "./dynamic/Nobody";
export default {
  name: 'Exercise4',
    components: {Nobody, Other, Glimt, Odd, Brann, Enga, Molde, Rosenborg},
    data: function () {
      return {
        header: "Exercise 4",
        count: 0,
        selected: '',
        options: [
            { text: 'Ingen', value: 'nobody' },
            { text: 'Rbk', value: 'rbk' },
            { text: 'Molde', value: 'mfk' },
            { text: 'Glimt', value: 'glimt' },
            { text: 'Odd', value: 'odd' },
            { text: 'Brann', value: 'brann'},
            { text: 'Vålerenga', value: 'enga' },
            { text: 'Andre', value: 'other'},
        ]
      }
  },
  computed: {
      componentName() {
          let componentName = null;
          switch (this.selected) {
              case 'rbk':
                  componentName = Rosenborg.name;
                  break;
              case 'mfk':
                  componentName = Molde.name;
                  break;
              case 'enga':
                  componentName = Enga.name;
                  break;
              case 'brann':
                  componentName = Brann.name;
                  break;
              case 'odd':
                  componentName = Odd.name;
                  break;
              case 'glimt':
                  componentName = Glimt.name;
                  break;
              case 'other':
                  componentName = Other.name;
                  break;
              case 'nobody':
                  componentName = Nobody.name;
                  break;
              default:
          }
          return componentName;
      }
  },
  methods: {
      increment(){
          this.count += 1;
      }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>