<template>
  <div class="postList">
      <ul>
         <li v-for="post in posts" v-bind:key="post.node.id">
              <nuxt-link :to="/blog/ + post.node.slug"> {{ post.node.title }}</nuxt-link>
         </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState([
            'posts'
        ])
    },
    mounted(){
        this.posts
    }
}
</script>

<style lang="scss" scoped>
    
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            margin-bottom: 10px;
        }
    }
</style>