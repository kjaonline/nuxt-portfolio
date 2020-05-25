<template>
  <div class="header">
      <div class="nav-container">
			<div class="nav" v-bind:class="{active: isActive}" v-on:click="activeNav">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="nav-links" v-bind:class="{active: isActive}">
				<div v-on:click="activeNav" class="nav-links-closer">

				</div>
				<ul>
					<li>
						<nuxt-link @click.native="hideNav" to="/">Home</nuxt-link>
					</li>
					<!-- <li>
						<nuxt-link @click.native="hideNav" to="/about">About</nuxt-link>
					</li> -->
					<li>
						<nuxt-link @click.native="hideNav" to="/portfolio">Portfolio</nuxt-link>
					</li>
					<li>
						<nuxt-link @click.native="hideNav" to="/blog">Blog</nuxt-link>
					</li>
					<li>
						<nuxt-link @click.native="hideNav" to="resume">Resume</nuxt-link>
					</li>
				</ul>
			</div>
      </div>
      <div class="header-text">
		<nuxt-link to="/"><h1>Kris Alcordo</h1></nuxt-link>
	  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'
export default {
    data: function () {
        return {
            isActive: false
        }
    },
    methods: {
        activeNav: function(){
            this.isActive = !this.isActive;
		},
		hideNav: function(){
			this.isActive = false;
		},
		...mapActions([
			'getBlogPostsAction', 'getPortfolioAction', 'getTagsAction','populateResumeAction', 'populatePortfolioTagsAction'
		])
	},
	created() {
		this.getBlogPostsAction()
		this.getPortfolioAction()
		this.getTagsAction()
		this.populateResumeAction()
		this.populatePortfolioTagsAction()
	}
}
</script>

<style>

</style>