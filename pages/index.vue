<template>
  <div class="posts">
    <ul>
     
    </ul>
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