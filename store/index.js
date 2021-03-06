import axios from 'axios'

export const state = () => ({
	posts: '',
	portfolio: '',
	tags: '',
	resume: '',
	portfoliotags: '',
	loaded: false
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
		state.loaded = true
	},
	SETTPORTFOLIOAGS(state, value) {
		state.portfoliotags = value
	}
}
export const actions = {
   	async getBlogPostsAction(context) {
		// console.log(context)
		try {
			let result = await axios({
				method: "GET",
				url: "https://api.krisalcordo.com/wp-json/wp/v2/posts"

			})
			let data = result.data;
			context.commit('SETPOSTS', data)
		} catch (error) {
			console.error(error)
		}
	},
	async getPortfolioAction(context) {
		try {
			let result = await axios({
				method: "GET",
				url: "https://api.krisalcordo.com/wp-json/wp/v2/portfolio"
			})
			let data = result.data;
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
	},
	async populatePortfolioTagsAction(context) {
		try {
			let result = await axios({
				method: "GET",
				url: "https://api.krisalcordo.com/wp-json/wp/v2/portfolio_categories"
			})
			let data = result.data
			context.commit('SETTPORTFOLIOAGS',data)
		} catch(error) {
			console.error(error)
		}
	}
}
  