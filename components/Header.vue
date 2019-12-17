<template>
  <div class="header">
      <div class="nav-container">
          <div class="nav" v-bind:class="{active: isActive}" v-on:click="activeNav">
            <span></span>
            <span></span>
            <span></span>
        </div>
      </div>
      <h1>Kris Alcordo</h1>
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
        }
    }
}
</script>

<style>

</style>