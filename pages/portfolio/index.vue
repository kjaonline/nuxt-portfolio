<template>
  <div class="portfolio">
      <div class="header">
        <h1>Portfolio</h1>
      </div>
      <div class="content">
        <div class="tags">
          <ul>
            <li v-for="tag in portfoliotags" v-bind:key="tag.id" v-on:click="modifyTagsArray($event, tag.slug), modifyClasses($event), getPosts();">
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
import axios from 'axios'


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

    },
    getPosts: async function() {
      let data = this.activeTags
      let requestobject = data
      try {
        	let result = await axios({
            method: 'post',
            url: "https://api.krisalcordo.com/wp-json/kris_portfolio/v1/portfolio",
            data: {'tags': requestobject }
          })
          let posts = result.data;
          // console.log(requestobject)
          // console.log('====')
          console.log(posts)

      } catch(error) {
        console.log(error)
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    .tags {
      width: 20%;
    }
    .content {
      width: 100%;
    }
  }
  .tags ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
     li {
       cursor: pointer;
       margin: 5px;
       padding: 5px;
       user-select: none;
     }
  }
  .active{
    background: #132a13;
    color: #ffffff;
    font-weight: bold;
    border-radius: 5px;
  }
</style>