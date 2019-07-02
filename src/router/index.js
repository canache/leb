import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Team from '@/components/Team'
import Planning from '@/components/Planning'
import Partenaires from '@/components/Partenaires'
import Boutique from '@/components/Boutique'
import Contact from '@/components/Contact'
import Inscription from '@/components/Inscription'

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
    },
    {
      path: '/boutique',
      name: 'Boutique',
      component: Boutique
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    }
  ]
})
