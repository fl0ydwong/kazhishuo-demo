import Vue      from 'vue'
import Router   from 'vue-router'


import Write  from '../component//write.vue'
import Home  from '../component//home.vue'
import People  from '../component//people.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/write', name: 'write', component: Write},
    {path: '/home', name: 'home', component: Home},
    {path: '/people', name: 'people', component: People}
  ]
})
