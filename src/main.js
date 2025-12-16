import { createApp, reactive } from "vue";
import App from "./App.vue";
import axios from "axios";
import io from "socket.io-client";

// Create reactive energy data
const energy = reactive({});

// Create Vue 3 app
const app = createApp(App);

// Provide energy data globally
app.provide("energy", energy);

// Mount the app
const vueApp = app.mount("#app");

// Export energy for external access
window.energy = energy;

function fetchEnergyStatus() {
  axios
    .get("http://192.168.0.7:8081")
    .then(function (res) {
      console.log("again");
      Object.assign(energy, res.data);
    })
    .catch(function (err) {
      console.log(err);
    });
}
//fetchEnergyStatus()

const socket = io("http://192.168.0.7:9000");
socket.on("message", function (data) {
  Object.assign(energy, data);
  console.log(data);
});
