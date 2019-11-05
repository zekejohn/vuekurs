<template>
  <div>
    <h1>{{header}}</h1>
    <div class="wrapper">
      <div class="container">
        <select v-model="selected" @change="adjustWaterLevel">
          <option value="">--Please choose a water level--</option>
          <option v-for="(option, index) in options" v-bind:value="option.value" :key="index">
            {{ option.text }}
          </option>
        </select>

        <div class="buttons">
          <button @click.prevent="addWater">Add 200 ml of water</button>
          <button @click.prevent="startDrain">Drain the water</button>
        </div>

        <div class="warning" v-if="this.warning">
          {{this.warningMessage}}
        </div>
        <div v-if="!this.warning && this.level === 800">
          Congratulations! You filled the tank with water.
        </div>
      </div>
      <div class="container">
        Water level: {{this.level}} mL
        <div class="water-container">
          <div :style="getStyle()" class="water">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise5',
  data: function () {
      return {
        header: "Exercise 5",
        count: 0,
        level: 0,
        warning: false,
        warningMessage: '',
        selected: '',
        options: [
            { text: 'Zero', value: 0 },
            { text: '100mL', value: 100 },
            { text: '200mL', value: 200 },
            { text: '300mL', value: 300 },
            { text: '400mL', value: 400 },
            { text: '500mL', value: 500 },
            { text: '600mL', value: 600 },
            { text: '700mL', value: 700 },
            { text: '800mL', value: 800 }
        ]
      }
  },
  watch: {
    level(val) {
        if(val < 0) {
            val = 0;
        }
    }
  },
  methods: {
      increment(){
          this.count += 1;
      },
      addWater() {
          this.warning = false;
          if(this.level >= 800) {
              this.warningMessage = 'The tank is full! Please remove some water';
              this.warning = true;
          } else if(this.level > 600) {
              this.warningMessage = 'The tank will overflow if that amount is added! Please find another method';
              this.warning = true;
          } else
          this.level += 200;
      },
      adjustWaterLevel(event) {
          if(event.target.value) {
              this.level = parseInt(event.target.value);
          }
      },
      startDrain() {
          if(this.level > 0) {
              setTimeout(this.drainWater, 50)
          } else {
              this.warningMessage = 'All of the water is already drained!';
              this.warning = true;
          }
      },
      drainWater() {
          if(this.level > 0) {
              this.level -= 10;
              if(this.level < 0) {
                  this.level = 0;
              }
              setTimeout(this.drainWater, 30)
          }
          return true;
      },
      getStyle () {
          return {
              "height": `${this.level}px`,
          };
      },
  }
}
</script>
<style scoped>
  .wrapper {
    display: flex;
  }

  .container {
    flex: 1;
  }

  .water-container {
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 800px; 
    border: 5px green; 
    border-style: none solid solid solid;
  }

  .water {
    height: 200px;
    background-color: lightsteelblue;
  }

  .warning {
    padding: 40px;
    color: red;
  }

  .buttons {
    padding: 20px;
  }

  .buttons > button {
    padding: 10px;
  }
</style>