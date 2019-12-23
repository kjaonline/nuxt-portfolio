<template>
  <div class="header">
      <div class="nav-container">
			<div class="nav" v-bind:class="{active: isActive}" v-on:click="activeNav">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="nav-links" v-bind:class="{active: isActive}">
				<ul>
					<li>
						<nuxt-link @click.native="hideNav" to="/">Home</nuxt-link>
					</li>
					<li>
						<nuxt-link @click.native="hideNav" to="about">About</nuxt-link>
					</li>
					<li>
						<nuxt-link @click.native="hideNav" to="portfolio">Portfolio</nuxt-link>
					</li>
					<li>
						<nuxt-link @click.native="hideNav" to="resume">Resume</nuxt-link>
					</li>
				</ul>
			</div>
      </div>
      <div class="header-text">
		  <h1>Kris Alcordo</h1>
	  </div>
  </div>
</template>

<script>
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
			console.log('clicked')
		}
    }
}
</script>

<style>

</style>