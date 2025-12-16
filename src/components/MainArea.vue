<template>
  <div id="MainArea">
    <section>
      <div class="container">
        <div class="tags has-addons">
          <span class="tag is-large">Battery Volts</span>
          <span
            class="tag is-large"
            v-bind:class="levelClass(energy.batteryVoltage, 27.45, 26, 25.99)"
          >
            {{ energy.batteryVoltage }}&nbsp;
            <i class="fas fa-battery-full" v-bind:class="batteryIcon()"></i>
          </span>
        </div>
        <div class="box">
          <h1>
            <span class="tag is-large">Charging Watts:</span
            ><span
              class="tag is-large"
              v-bind:class="levelClass(chargeWatts(), 350, 200, 199)"
            >
              {{ chargeWatts() }}</span
            >
            <span class="tag is-large">Array Watts:</span
            ><span
              class="tag is-large"
              v-bind:class="levelClass(arrayWatts(), 350, 200, 199)"
            >
              {{ arrayWatts() }}</span
            >
          </h1>
        </div>
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="box">
              <ul>
                <li v-for="(value, name) in energy" :key="name">
                  <span class="tag">{{ name }}</span
                  ><span class="tag is-primary">{{ value }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  name: "MainArea",
  setup() {
    const energy = inject("energy");
    return { energy };
  },
  methods: {
    levelClass(source, success, warning, danger) {
      if (source > success) {
        return "is-success";
      } else if (source > warning) {
        return "is-warning";
      } else if (source < danger) {
        return "is-danger";
      }
    },
    chargeWatts() {
      return (this.energy.chargeCurrent * this.energy.batteryVoltage).toFixed(
        0
      );
    },
    arrayWatts() {
      return (this.energy.arrayCurrent * this.energy.arrayVoltage).toFixed(0);
    },
    batteryIcon() {
      // Add battery icon logic here
    },
  },
};
</script>

<style>
#MainArea {
  min-height: calc(100vh - 220px);
}
</style>
