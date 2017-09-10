import Vue from 'vue'
import Router from 'vue-router'
import Tree from '@/components/Tree'
import Hello from '@/components/Hello'
import manifests from '../data/manifests'
import manifesto from '../../node_modules/manifesto.js/dist/server/manifesto.js'
import mixins from '../mixins/manifesto-vue-mixins'
const manifestation = Object.assign(manifesto.create(JSON.stringify(manifests[0])), mixins)

window.manifestation = manifestation
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      // component: Tree,
      components: {
        tree: Tree,
        photos: Hello
      },
      props: {
        tree: { toc: manifestation.getVueTree() }
      }
    }
  ]
})
