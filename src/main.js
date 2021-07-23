import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// const addDays = () => {
//   const date = new Date();
//   let datesCollection = []
//
//   for (var i = 1; i < 30; i++) {
//     const newDate = new Date(date.getTime() + i * 1000 * 60 * 60 * 24);
//     datesCollection.push(newDate);
//   }
//
//   return console.log(datesCollection)
// }
//
// addDays()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
