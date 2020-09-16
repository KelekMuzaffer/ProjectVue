import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

// Instancie une new vue avec le router, le store et #app

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
