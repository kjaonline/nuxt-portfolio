<template>
  <div class="content-container">
	<div class="no-hero home-hero">
		<h1>Blog Posts</h1>
	</div>
	<div class="posts">
		<div class="post" v-for="post in posts" v-bind:key="post.id">
			<div class="img-container">
				<img v-bind:src="post.featuredImage.mediaItemUrl">
			</div>
			
			<div class="text">
				<h2>{{post.title}}</h2>
				<div class="excerpt" v-html="post.excerpt"></div>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
	data: function() {
		return{
			posts: {}
		}
	},
	methods: {
		async getPosts() {
			try {
				let result = await axios({
					method: "POST",
					url: 'https://api.krisalcordo.com/graphql',
					data: {
						query: `query MyQuery {
							posts(where: {categoryNotIn: "5"}) {
								nodes {
								categories {
									edges {
									node {
										id
										name
									}
									}
								}
								tags {
									edges {
									node {
										id
										name
									}
									}
								}
								title(format: RENDERED)
								date
								featuredImage {
									mediaItemUrl
								}
								excerpt(format: RENDERED)
								id
								}
								edges {
								node {
									id
								}
								}
							}
						}

						`
					}
				})
				console.log(result.data.data.posts.nodes)
				this.posts = result.data.data.posts.nodes
				
			} catch(error) {
				console.error(error)
			}
		}
	},
	mounted() {
		this.getPosts()
	}
	
}
</script>
<style lang="scss" scoped>
	.posts{
		display: flex;
		justify-content: center;
	}
	.post {
		width: calc(100% / 3 - 30px);
		margin: 15px;
		.text {
			padding: 0 10px;
		}
		.img-container {
			overflow: hidden;
			img {
				width: 100%;
				display: block;
				height: 250px;
				object-fit: cover;
			}
		}
	}
</style>