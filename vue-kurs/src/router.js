import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Exercise1 from './components/Exercise1.vue';
import Exercise2 from './components/Exercise2.vue';
import Exercise3 from './components/Exercise3.vue';
import Exercise4 from './components/Exercise4.vue';
import Exercise5 from './components/Exercise5.vue';
import Exercise6 from './components/Exercise6.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/exercise1', component: Exercise1 },
  { path: '/exercise2', component: Exercise2 },
  { path: '/exercise3', component: Exercise3 },
  { path: '/exercise4', component: Exercise4 },
  { path: '/exercise5', component: Exercise5 },
  { path: '/exercise6', component: Exercise6 }
]

const router = new VueRouter({
  routes
})

export { router }