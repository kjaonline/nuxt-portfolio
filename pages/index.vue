<template>
 <div>
   <div class="home-hero">
      <div class="text">
        <h1>Web Developer in Jacksonville Florida</h1>
        <p>I am a web developer with {{ years }} years of experience. In 2016, I decided to pursue a career in Web Development after a very succesful decade in Internet Marketing. After months of self-teaching, I finally landed my first web developer job in 2018.</p>
        <div class="links">
          
        </div>
      </div>
      <div class="image">
        <img src="~/assets/static/homebg.jpg" alt="" srcset="">
      </div>
  </div>
  <!-- <div class="skills">
    <h2>Skills</h2>
    <div class="info">
      <div class="left">

      </div>
      <div class="right">
        
      </div>
    </div>
  </div> -->
  <div class="home-below-fold">
    <div class="left">
      <h2>Blog Posts</h2>
      <Posts />
    </div>
    <div class="right">
      <h2>Portfolio</h2>
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
  },
  data: function(){
    return {
      years: ''
    }
  },
  methods: {
    date(){
      const date = new Date();
      let yearDiff = date.getFullYear() - 2018;
      this.years = yearDiff.toString();
    }
  },
  mounted(){
    this.date();
  }
}
</script>

<style>

</style>