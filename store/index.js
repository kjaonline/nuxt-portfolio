import axios from 'axios'

export const state = () => ({
	posts: '',
	portfolio: '',
	tags: '',
	resume: '',
	loaded: true
})
export const mutations = {
    SETPOSTS(state, value){
        state.posts = value
	},
	SETPORTFOLIO(state, value) {
		state.portfolio = value	
	},
	SETTAGS(state, value) {
		state.tags = value
	},
	SETRESUME(state, value) {
		state.resume = value
	}
}
export const actions = {
   	async getBlogPostsAction(context) {
		// console.log(context)
		try {
			let result = await axios({
				method: "POST",
				url: "https://api.krisalcordo.com/graphql",
				data: {
					query: `query MyQuery {
						__typename
						posts(where: {categoryName: "featured"}) {
						  edges {
							node {
							  id
							  title
							  date
							  excerpt
							  slug
							  categories {
								edges {
								  node {
									id
									slug
								  }
								}
							  }
							  featuredImage {
								mediaItemUrl
							  }
							}
						  }
						}
					  }
												  
					`
				}	
			})
			let data = result.data.data.posts.edges;
			context.commit('SETPOSTS', data)
		} catch (error) {
			console.error(error)
		}
	},
	async getPortfolioAction(context) {
		try {
			let result = await axios({
				method: "POST",
				url: "https://api.krisalcordo.com/graphql",
				data: {
					query: `query MyQuery {
						__typename
						posts(where: {categoryName: "portfolio"}) {
						  edges {
							node {
							  id
							  title
							  date
							  excerpt
							  slug
							  categories {
								edges {
								  node {
									id
									slug
								  }
								}
							  }
							  featuredImage {
								mediaItemUrl
							  }
							}
						  }
						}
					  }
					   
					`
				}
			})
			let data = result.data.data.posts.edges;
			context.commit('SETPORTFOLIO', data)
		} catch (error) {
			console.error(error)
		}
	},
	async getTagsAction(context) {
		try {
			let result = await axios({
				method: "POST",
				url: "https://api.krisalcordo.com/graphql",
				data: {
					query: `query MyQuery {
						tags {
						  edges {
							node {
							  id
							  name
							}
						  }
						}
					  }
					`
				}
			})
			let data = result.data.data.tags.edges;
			// console.log(result.data.data.tags.edges)
			context.commit('SETTAGS', data)
		} catch(error) {
			console.error(error)
		}
	},
	async populateResumeAction(context) {
		try {
			let result = await axios({
				method: "POST",
				url: "https://api.krisalcordo.com/graphql",
				data: {
					query: `query MyQuery {
						pageBy(pageId: 35) {
							id
							resume {
							job {
								active
								company
								jobDescription
								jobEnd
								jobLocation
								jobStart
								jobTitle
								jobType
								fieldGroupName
							}
							fieldGroupName
							}
						}
						}
					`
				}
			})
			// console.log(result.data.data.pageBy.resume.job)
			let data = result.data.data.pageBy.resume.job
			context.commit('SETRESUME',data)
		} catch (error) {
			console.error(error)
		}
	}
}
  