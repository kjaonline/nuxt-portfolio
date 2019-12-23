<template>
  <div class="home-hero">
	<h1>About</h1>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import '../components/Header'

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