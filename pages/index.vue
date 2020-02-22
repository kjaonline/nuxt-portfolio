<template>
  <div>
	<div class="home-hero">
	  <div class="text">
		<h1><span>Kris Alcordo </span> <br> Web Developer Jacksonville, Florida</h1>
		<p>I am a web developer with {{ years }} years of experience. After a very succesful decade in Internet
		  Marketing, I decided to pursue a career in Web Development in 2016. Months of self-teaching, self-loathing and
		  eventually, proficiency, lead to my first Web developer Job in 2018. <nuxt-link to="/about">Found Out More</nuxt-link></p>
		  
		<div class="links">

		</div>
	  </div>
	  <div class="image">
		<img src="~/assets/static/homebg.jpg" alt="" srcset="">
	  </div>
	</div>
	<div class="below-content">
		<Resume />
		<div class="blocks">
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
  </div>
</template>

<script>
  import Posts from '@/components/Bloglist'
  import Portfolio from '@/components/Portfoliolist'
  import Resume from '@/components/Resume'
  export default {
	components: {
	  Posts,
	  Portfolio,
	  Resume
	},
	data: function () {
	  return {
		years: ''
	  }
	},
	methods: {
	  date() {
		const date = new Date();
		let yearDiff = date.getFullYear() - 2018;
		this.years = yearDiff.toString();
	  }
	},
	mounted() {
	  this.date();
	}
  }

</script>

<style>

</style>
