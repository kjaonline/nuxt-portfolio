<template>
  <div>
	<div class="home-hero">
	  <div class="text">
		<h1><span>Kris Alcordo </span> <br> Web Developer Jacksonville, Florida</h1>
		<p>I am a web developer with {{ years }} years of experience. After a very succesful decade in Internet
		  Marketing, I decided to pursue a career in Web Development in 2016. Months of self-teaching, self-loathing and
		  eventually, proficiency, lead to my first Web developer Job in 2018. <nuxt-link to="/about">Find Out More</nuxt-link></p>
		  
		<div class="links">

		</div>
	  </div>
	  <div class="image">
		<img src="~/assets/static/homebg.jpg" alt="" srcset="">
	  </div>
	</div>
	<div class="below-content">
		<Resume />
		<div v-bind:class="{ loaded: loaded }" class="blocks">
			
			<div class="left">
				<h2>Blog Posts</h2>
				<Loader />
				<Posts />
			</div>
			<div class="right">
				<h2>Portfolio</h2>
				<Loader />
				<Portfolio />
			</div>
		</div>
	</div>
  </div>
</template>

<script>
	import { mapState } from 'vuex'
  	import Posts from '@/components/Bloglist'
  	import Portfolio from '@/components/Portfoliolist'
	import Resume from '@/components/Resume'
	import Loader from '@/components/Loader'
  	export default {
	components: {
	  Posts,
	  Portfolio,
	  Resume,
	  Loader
	},
	computed: {
        ...mapState([
            'loaded'
        ])
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

<style lang="scss" scoped>
	.blocks {
		> div {
			position: relative;
			min-height: 200px;
		}
		.lds-ring {
			visibility: visible;
			opacity: 1;
		}
	}
</style>
