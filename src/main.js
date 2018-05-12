import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import io from 'socket.io-client';

Vue.use(Buefy.default)

var energy = {}


var app = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data: {
    energy
  }
    //  render: h => h(App)
})

function fetchEnergyStatus() {

  axios.get('http://192.168.0.7:8081')
  .then(function (res) {
    console.log('again')
    app.energy = res.data
  })
  .catch(function(err) {
    console.log(err)
  })
}
//fetchEnergyStatus()

var socket = io('http://192.168.0.7:9000');
socket.on('message', function (data) {
  app.energy = data
  console.log(data);
});