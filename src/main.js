import App from './App.vue'
import Vue from 'vue'
// new Vue({
//   el:'#app',
//   components: { App },
//   template:'<App/>'
// })
new Vue({
  el:'#app',
  render:h=>h(App)
})