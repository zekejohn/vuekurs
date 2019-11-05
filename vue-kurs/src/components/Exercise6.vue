<template>
  <div>
    <h1>{{header}}</h1>
    <div class="wrapper">
      <div style="padding:40px;">
        <input type="text" v-model="color">
      </div>
      <div class="circle" :style="'background:' + invertColor(color)">
        <div align="center">
          <div class="yin" :style="'background:' + color"></div>
        </div>
        <div align="right">
          <div class="feher" :style="'background:' + color"></div>
        </div>
        <div align="center">
          <div class="yang" :style="'background:' + invertColor(color)"></div>
        </div>

        <div align="center">
          <div class="p-black" :style="'background:' + invertColor(color)"></div>
          <div class="p-white" :style="'background:' + color"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Exercise6',
  data: function () {
      return {
        header: "Exercise 6",
        count: 0,
        color: '#FFFFFF'
      }
  },
  methods: {
      invertColor(hex) {
          if (hex.indexOf('#') === 0) {
          hex = hex.slice(1);
          }
          // convert 3-digit hex to 6-digits.
          if (hex.length === 3) {
              hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
          }
          if (hex.length !== 6) {
              throw new Error('Invalid HEX color.');
          }
          // invert color components
          var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
              g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
              b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
          // pad each with zeros and return
          return '#' + this.padZero(r) + this.padZero(g) + this.padZero(b);
      },

      padZero(str, len) {
          len = len || 2;
          var zeros = new Array(len).join('0');
          return (zeros + str).slice(-len);
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

  .box {
    max-width: 50%;
    width: 200px;
    height: 200px;
    border: 1px solid black;
  }

  .circle {
    width:300px;
    height:300px;
    background:black;
    border-radius:100%;
    text-align:center;
    animation:rotate 40000s infinite;
  }
  .circle .yin {
    width:150px;
    height:150px;
    background:white;
    border-radius:100%;
  }

  .circle .yang {
    width:150px;
    height:150px;
    background:black;
    border-radius:100%;
    margin-top:-154px;
    z-index:auto;
    position: absolute;
    margin-left:75px;

  }

  .feher {
    width:150px;
    height:300px;
    background:white;
    display:inline-block;
    margin-top:-150px;
    border-top-right-radius:150px;
    border-bottom-right-radius:150px;
  }

  .p-black {
    width:50px;
    height:50px;
    background:black;
    border-radius:100%;
    position:absolute;
    margin-top:-260px;
    margin-left:120px;
  }

  .p-white {
    width:50px;
    height:50px;
    background:white;
    border-radius:100%;
    position:absolute;
    margin-top:-110px;
    margin-left:120px;
  }
</style>