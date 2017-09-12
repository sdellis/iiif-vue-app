import Vue from 'vue'
import Router from 'vue-router'
import {mixins, Tree, Thumbnails} from 'manifestation-vue'
import manifests from '../data/manifests'
import manifesto from '../../node_modules/manifesto.js/dist/server/manifesto.js'
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
        thumbnails: Thumbnails
      },
      props: {
        tree: { toc: manifestation.getVueTree() },
        thumbnails: { thumbnails: manifestation.photos() }
      }
    }
  ]
})
