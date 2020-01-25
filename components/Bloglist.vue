<template>
  <div class="postList">
      <ul>
         <li v-for="post in posts" v-bind:key="post.node.id">
          <span class="date" v-text="$moment(post.node.date).format('MM/DD/YY') "></span> <nuxt-link :to="/blog/ + post.node.slug"> {{ post.node.title }}</nuxt-link> 
         </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data: function(){
        return {
            // date: state.post.node.date
        }
    },
    computed: {
        ...mapState([
            'posts'
        ])
    },
    methods: {
       
    },
    
    mounted(){
        this.posts
    }
}
</script>

<style lang="scss" scoped>
    
   .postList {
       .date {
           color: lighten(#0a0a0a, 50%);
           font-style: italic;
       }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            li {
                margin-bottom: 10px;
            }
        }
   }
</style>