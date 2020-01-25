<template>
  <ul class="bread-crumb">
      <li>
          <nuxt-link to="/"><i class="fas fa-home"></i></nuxt-link>
      </li>
      <li>
          /
      </li>
      <li>
         <span v-on:click=changePage()>{{ type }}</span>
      </li>
      <li>
          /
      </li>
      <li>
          {{ currentpage }}
      </li>
  </ul>
</template>

<script>
export default {
    data: function(){
        return {
            link: ''
        }
    },
    props: [
        'type',
        'currentpage'
    ],
    methods: {
        changePage() {
            this.$router.push({name: this.type.toLowerCase()})
            console.log(this.type.toLowerCase())
        }
    }
}
</script>

<style>

</style>