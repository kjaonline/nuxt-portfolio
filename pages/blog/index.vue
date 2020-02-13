<template>
  <div class="content-container">
	<div class="no-hero home-hero">
		<h1>Blog Posts</h1>
	</div>
	<div class="posts">
		<div class="post" v-for="post in posts" v-bind:key="post.id" @click="yolo(post.slug)">
			<div v-if="post.featuredImage != null" class="img-container">
				<img v-bind:src="post.featuredImage.mediaItemUrl">
			</div>
			<div v-else class="img-container">
				<img src="https://api.krisalcordo.com/wp-content/uploads/2019/11/Screenshot.png" alt="">
			</div>
			
			<div class="text">
				<h2>{{post.title}}</h2>
				<div class="date">{{$moment(post.date).format('MM/DD/YYYY')}}</div>
				<div class="categories">
					<span v-for="category in post.categories.edges"  v-bind:key="category.node.id">
						{{category.node.name}}
					</span>
				</div>
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
								slug
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
		},
		yolo(slug) {
			console.log(slug)
			console.log(this.$route.fullPath)
			this.$router.push({path:'blog/' + slug})
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
		flex-wrap: wrap
	}
	.post {
		width: calc(100% / 3 - 30px);
		margin: 15px;
		min-width: 300px;
		cursor: pointer;
		.text {
			padding: 0 10px;
			.categories {
				display: flex;
				span {
					margin: 3px 3px 0 0;
				}
			}
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