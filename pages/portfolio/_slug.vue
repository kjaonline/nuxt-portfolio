<template>
	<div v-bind:class="{ loaded: loaded }" class="single-post">
		<Loader />
		<breadcrumb 
		type="Portfolio"
		v-bind:currentpage=title
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
import Loader from '@/components/Loader'
	export default {
		data: function() {
			return {
				loaded: false,
				title: '',
				content: '',
				slug: ''
			}
		},
		components: {
			breadcrumb, Loader
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

<style lang="scss" scoped>
	.single-post {
		min-height: 300px;
	}
</style>
