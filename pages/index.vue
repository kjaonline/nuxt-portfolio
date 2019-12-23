<template>
 <div class="home-hero">
	 <div class="text">
		 <h1>Client Info</h1>
		 <h2>Client Tag</h2>
	 </div>
	 <div class="image">
		 <img src="~/assets/static/homebg.jpg" alt="" srcset="">
	 </div>
 </div>
</template>

<script>
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
  methods: {
    ...mapActions([
      'getBlogPostsAction'
    ])
  },
  mounted() {
    this.getBlogPostsAction();
  }
}
</script>

<style>

</style>