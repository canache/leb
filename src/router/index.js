import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Planning from '@/components/Planning'
import Partenaires from '@/components/Partenaires'

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
      path: '/team/:id/:name',
      name: 'Team',
      component: Team,
      props: {default: true}	
    },
    {
      path: '/planning',
      name: 'Planning',
      component: Planning
    },
    {
      path: '/partenaires',
      name: 'Partenaires',
      component: Partenaires
    }
  ]
})
