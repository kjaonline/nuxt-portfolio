<template>
  <div class="portfolio">
      <div class="header">
        <h1>Portfolio</h1>
      </div>
      <div class="content">
        <div class="tags">
          <ul>
            <li v-for="tag in portfoliotags" v-bind:key="tag.id" v-on:click="modifyTagsArray($event, tag.slug), modifyClasses($event);">
              {{ tag.name }}
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
    },
    modifyClasses:function(event){
      event.target.classList.toggle('active')
      console.log(this.activeTags)
    }
  }
}

</script>

<style>
  .tags ul li {
    cursor: pointer;
  }
  .active{
    background: red;
  }
</style>