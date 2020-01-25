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
    props: [
        'type',
        'currentpage'
    ],
    methods: {
        changePage() {
            this.$router.push({name: this.type.toLowerCase()})
        }
    }
}
</script>

<style lang="scss" scoped>
    .bread-crumb {
		list-style-type: none;
		display: flex;
		margin: 0;
		padding: 0;
		li {
			margin: 0 5px;
			color: hsla(148%, 6%, 52%, 1);;
			span {
				cursor: pointer;
			}
			a {
				color: hsla(148%, 6%, 52%, 1);;
				font-style: none;
			}
		}
	}
</style>