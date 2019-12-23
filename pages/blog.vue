<template>
  <div class="content-container">
	  <div class="home-hero">
		<h1>Blog</h1>
	</div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'getPostsAction'
    ])
  },
  mounted() {
    this.getPostsAction();
  }
}
</script>

<style>

</style>