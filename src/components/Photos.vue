<template>
  <div class="photos">
      <div class="cell">
        <img src="http://placehold.it/800x800" class="responsive-image">
      </div>
      <div class="cell">
        <img src="http://placehold.it/800x800" class="responsive-image">
      </div>
      <div class="cell">
        <img src="http://placehold.it/800x800" class="responsive-image">
      </div>
      <div class="cell">
        <img src="http://placehold.it/800x800" class="responsive-image">
      </div>
  </div>
</template>

<script>
export default {
  name: 'photos',
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/*.photos {
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
}*/

.responsive-image {
  max-width: 100%;
}

.cell img {
  display: block;
}

.cell {
  margin: 1rem;
}

@media screen and (min-width: 600px) {
  .photos {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
  .cell {
    width: calc(50% - 2rem);
  }
}

@media screen and (min-width: 1000px) {
  .cell {
    width: calc(33.3333% - 2rem);
  }
}
</style>
