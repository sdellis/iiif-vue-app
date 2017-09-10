<template>
  <div class="photos">
    <div class="cell" v-for="photo in photos" :key="photo.id">
      <figure className="grid-figure">
        <img :src="photo.display_src" class="responsive-image">
        <figcaption>
          <p>{{photo.caption[0].value}}</p>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'photos',
  props: ['photos']
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
