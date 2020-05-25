<template>
  <div class="portfolio">
      <div class="header">
        <h1>Portfolio</h1>
      </div>
      <div class="content">
        <div class="tags">
          <ul>
            <li v-for="tags in portfoliotags" v-bind:key="tags.id" v-on:click="modifyTagsArray($event, tags.slug);">
              {{ tags.name }}
            </li>
          </ul>
        </div>
        <div class="posts">

        </div>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data: function() {
    return{
      activeTags: []
    }
  },
  computed: {
    ...mapState([
      'portfoliotags'
    ])
  },
  methods: {
    modifyTagsArray: function(event, tag){
      if(!this.activeTags.includes(tag)) {
        this.activeTags.push(tag)
      } else {
        this.activeTags.splice(this.activeTags.indexOf(tag), 1)
      }
      console.log(this.activeTags)
    }
  }
}

</script>

<style>
  .tags ul li {
    cursor: pointer;
  }
</style>