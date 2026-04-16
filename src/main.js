import { createApp, reactive } from "vue";
import App from "./App.vue";
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

const socket = io("http://127.0.0.1:9001");
socket.on("message", function (data) {
  Object.assign(energy, data);
  console.log(data);
});
