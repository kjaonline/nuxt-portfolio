<template>
 <div>
   <div class="home-hero">
      <div class="text">
        <h1>Web Developer</h1>
        <h2>Jacksonville, Florida</h2>
      </div>
      <div class="image">
        <img src="~/assets/static/homebg.jpg" alt="" srcset="">
      </div>
  </div>
  <div class="home-below-fold">
    <div class="left">
      <h2>Blog Posts</h2>
      <Posts />
    </div>
    <div class="right">
      <h2>Portfolio Items</h2>
      <Portfolio />
    </div>
  </div>
 </div>
</template>

<script>

import Posts from '@/components/Bloglist'
import Portfolio from '@/components/Portfoliolist'

export default {
  components: {
    Posts, Portfolio
  }  
}
</script>

<style>

</style>