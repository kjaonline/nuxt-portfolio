<template>
  <div class="postList">
      <ul>
         <li v-for="portfolioItem in portfolio" v-bind:key="portfolioItem.id">
              <nuxt-link :to="/portfolio/ + portfolioItem.slug"> {{ portfolioItem.title.rendered }}</nuxt-link>
         </li>
      </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState([
            'portfolio'
        ])
    },
    mounted(){
        // this.portfolio
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