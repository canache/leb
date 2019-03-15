import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Planning from '@/components/Planning'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/team/:id',
      name: 'Team',
      component: Team,
      props: {default: true}	
    },
    {
      path: '/planning',
      name: 'Planning',
      component: Planning
    }
  ]
})
