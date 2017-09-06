<template>
  <ul id="demo">
    <item
      class="item"
      :model="manifestation">
    </item>
  </ul>
</template>

<script>
import Item from './Item.vue'
// import mixins from './manifesto-vue-mixins'
// import data from './sample.json'

export default {
  name: 'tree',
  components: { Item },
  props: ['manifestation']
  // props: ['manifestation'],
  // data () {
  //   return { treeData: data }
  // }
}
</script>

<style>
  body {
    font-family: Menlo, Consolas, monospace;
    color: #444;
  }
  .item {
    cursor: pointer;
  }
  .bold {
    font-weight: bold;
  }
  ul {
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
