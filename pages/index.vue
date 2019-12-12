<template>
  <div class="posts">
    <ul>
      <li v-for="post in posts" v-bind:key="post.id">
        
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getPosts } from '../api/posts'
export default {
  data: function(){
    return {
      posts: Object
    }
  },
  mounted(){
    this.updatePosts()
  },
  methods: {
    updatePosts: async function(){
      const updatePosts = await getPosts();
      this.posts = updatePosts
    }
  }
}
</script>

<style>

</style>