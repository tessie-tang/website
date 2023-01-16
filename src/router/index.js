import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import PKChem from '@/views/PKChem'
import ShangHai from '@/views/ShangHai'
import Museum from '@/views/Museum'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/project/pkchem',
      name: 'PKChem Factory Safety Management System (SMS)',
      component: PKChem
    },
    {
      path: '/project/shanghai',
      name: 'SeeDAO Metaverse ShangHai City',
      component: ShangHai
    },
    {
      path: '/project/museum',
      name: 'Palace Museum Educational AR Game',
      component: Museum
    }
  ]
})

export default router
