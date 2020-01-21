<template>
	<div v-bind:class="{ loaded: loaded }" class="single-post">
		<breadcrumb 
		type="Portfolio"
		v-bind:slug=slug
		/>
		<div class="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div class="post-content">
			<h1>{{ title }}</h1>
			<div v-html="content"></div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import breadcrumb from '@/components/Breadcrumb'
	export default {
		data: function() {
			return {
				loaded: false,
				title: String,
				content: String,
				slug: String
			}
		},
		components: {
			breadcrumb
		},
		methods: {
			async getPortfolioData() {
				try {
					let result = await axios({
						method: "POST",
						url: "https://api.krisalcordo.com/graphql",
						data: {
							query: `query MyQuery($slug: String!) {
								postBy(slug: $slug) {
									id
									title
									content(format: RENDERED)
									date
									slug
									tags {
										edges {
											node {
												id
												slug
												name
											}
										}
									}
									featuredImage {
										sourceUrl(size: MEDIUM)
									}
								}
							}
							`,
							variables: {slug: this.$route.params.slug }
						}
					})		
					console.log(result.data.data.postBy)
					this.title = await result.data.data.postBy.title
					this.content = await result.data.data.postBy.content
					this.slug = await result.data.data.postBy.slug
					this.loaded = true
				} catch(error) {
					console.error(error)
				}
			}
		},
		mounted() {
			this.getPortfolioData()
		}
	}
</script>

<style>

</style>