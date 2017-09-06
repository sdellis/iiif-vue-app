import Vue from 'vue'
import Router from 'vue-router'
import Tree from '@/components/Tree'
import manifestation from '../data/sample'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Tree',
      component: Tree,
      props: { manifestation: manifestation }
    }
  ]
})
